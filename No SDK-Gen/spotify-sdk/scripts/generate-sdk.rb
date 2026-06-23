#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"
require "yaml"
require "fileutils"

SPEC_PATH = ARGV.fetch(0)
ROOT = File.expand_path("..", __dir__)
SRC = File.join(ROOT, "src")
HTTP_METHODS = %w[get post put delete patch].freeze

spec = YAML.load_file(SPEC_PATH)
components = spec.fetch("components", {})

def clean_text(value)
  value.to_s
       .gsub(/<br\s*\/?>/i, " ")
       .gsub(%r{</?a[^>]*>}i, "")
       .gsub(%r{</?[^>]+>}, "")
       .gsub(/\s+/, " ")
       .strip
end

def resolve_ref(ref, spec)
  keys = ref.sub(%r{\A#/}, "").split("/").reject(&:empty?)
  keys.reduce(spec) { |node, key| node.fetch(key) }
end

def resolve_node(node, spec)
  if node.is_a?(Hash) && node["$ref"]
    resolve_node(resolve_ref(node["$ref"], spec), spec)
  else
    node
  end
end

def camelize(value)
  return value.to_s if value.to_s.match?(/\A[a-z][$A-Za-z0-9]*\z/)

  words = value.to_s.split(/[^a-zA-Z0-9]+/).reject(&:empty?)
  words.first.to_s.downcase + words.drop(1).map { |word| word[0].upcase + word[1..].to_s }.join
end

def pascalize(value)
  camel = camelize(value)
  camel[0].upcase + camel[1..].to_s
end

def ts_identifier(value)
  value.match?(/\A[$A-Z_a-z][$\w]*\z/) ? value : JSON.generate(value)
end

def literal_union(values)
  values.map { |value| JSON.generate(value) }.join(" | ")
end

def schema_type(schema, spec, inline_name = "InlineObject")
  schema = resolve_node(schema || {}, spec)
  return "JsonValue" unless schema.is_a?(Hash)

  type = schema["type"]
  result =
    if schema["$ref"]
      schema["$ref"].split("/").last
    elsif schema["allOf"]
      schema["allOf"].map { |part| schema_type(part, spec, inline_name) }.join(" & ")
    elsif schema["oneOf"]
      schema["oneOf"].map { |part| schema_type(part, spec, inline_name) }.join(" | ")
    elsif schema["anyOf"]
      schema["anyOf"].map { |part| schema_type(part, spec, inline_name) }.join(" | ")
    elsif schema["enum"]
      literal_union(schema["enum"])
    elsif type == "string"
      "string"
    elsif type == "integer" || type == "number"
      "number"
    elsif type == "boolean"
      "boolean"
    elsif type == "array"
      item_type = schema_type(schema["items"], spec, "#{inline_name}Item")
      item_type.include?(" | ") ? "Array<#{item_type}>" : "#{item_type}[]"
    elsif type == "object" || schema["properties"]
      object_type(schema, spec, inline_name)
    else
      "JsonValue"
    end

  schema["nullable"] ? "#{result} | null" : result
end

def object_type(schema, spec, inline_name)
  properties = schema["properties"] || {}
  required = schema["required"] || []
  return "JsonObject" if properties.empty?

  lines = properties.map do |name, child_schema|
    optional = required.include?(name) ? "" : "?"
    description = clean_text(child_schema["description"])
    field_type = schema_type(child_schema, spec, "#{inline_name}#{pascalize(name)}")
    doc = description.empty? ? "" : "  /** #{description} */\n"
    "#{doc}  #{ts_identifier(name)}#{optional}: #{field_type};"
  end

  "{\n#{lines.join("\n")}\n} & JsonObject"
end

def request_body_info(operation, spec)
  request_body = resolve_node(operation["requestBody"], spec)
  return nil unless request_body

  content = request_body["content"] || {}
  content_type = if content.key?("application/json")
                   "application/json"
                 elsif content.key?("image/jpeg")
                   "image/jpeg"
                 else
                   content.keys.first
                 end

  media = content.fetch(content_type, {})
  {
    "required" => request_body["required"] == true,
    "contentType" => content_type,
    "schema" => media["schema"]
  }
end

def success_response_info(operation, spec)
  responses = operation.fetch("responses", {})
  status = responses.keys.find { |key| key.to_s.start_with?("2") }
  return { "status" => nil, "type" => "void" } unless status

  response = resolve_node(responses.fetch(status), spec)
  content = response.fetch("content", {})
  json = content["application/json"]
  type = json ? schema_type(json["schema"], spec, "ResponseBody") : "void"
  { "status" => status, "type" => type }
end

def scopes_for(operation)
  Array(operation["security"]).flat_map do |entry|
    Array(entry["oauth_2_0"])
  end.uniq
end

operations = []

spec.fetch("paths").each do |path, path_item|
  HTTP_METHODS.each do |http_method|
    operation = path_item[http_method]
    next unless operation

    resolved_parameters = Array(operation["parameters"]).map { |param| resolve_node(param, spec) }
    operation_id = operation.fetch("operationId")
    tags = Array(operation["tags"])
    resource_name = camelize(tags.first || "spotify")
    method_name = camelize(operation_id)
    body_info = request_body_info(operation, spec)
    response_info = success_response_info(operation, spec)

    operations << {
      "name" => method_name,
      "operationId" => operation_id,
      "resourceName" => resource_name,
      "methodName" => method_name,
      "httpMethod" => http_method.upcase,
      "path" => path,
      "tags" => tags,
      "summary" => clean_text(operation["summary"]),
      "description" => clean_text(operation["description"]),
      "deprecated" => operation["deprecated"] == true,
      "parameters" => resolved_parameters.map do |param|
        schema = resolve_node(param["schema"], spec)
        {
          "name" => param.fetch("name"),
          "in" => param.fetch("in"),
          "required" => param["required"] == true,
          "type" => schema_type(schema, spec, pascalize(param.fetch("name"))),
          "description" => clean_text(schema["description"] || param["description"]),
          "example" => schema["example"] || param["example"]
        }
      end,
      "requestContentType" => body_info && body_info["contentType"],
      "requestBodyRequired" => body_info && body_info["required"],
      "requestBodyType" => if body_info&.dig("contentType") == "image/jpeg"
                              "Blob | ArrayBuffer | Uint8Array | string"
                            elsif body_info
                              schema_type(body_info["schema"], spec, "#{pascalize(method_name)}Body")
                            else
                              nil
                            end,
      "successStatus" => response_info.fetch("status"),
      "responseType" => response_info.fetch("type"),
      "scopes" => scopes_for(operation)
    }
  end
end

resources = operations.group_by { |operation| operation.fetch("resourceName") }.map do |name, ops|
  {
    "name" => name,
    "tags" => ops.flat_map { |operation| operation.fetch("tags") }.uniq,
    "operations" => ops.map { |operation| operation.fetch("name") }
  }
end

FileUtils.mkdir_p(SRC)

runtime_operations = operations.map do |operation|
  operation.slice(
    "name",
    "operationId",
    "resourceName",
    "methodName",
    "httpMethod",
    "path",
    "tags",
    "summary",
    "description",
    "deprecated",
    "parameters",
    "requestContentType",
    "successStatus",
    "scopes"
  )
end

File.write(
  File.join(SRC, "operations.js"),
  <<~JS
    // Generated from #{File.basename(SPEC_PATH)}. Do not edit by hand.
    export const operations = Object.freeze(#{JSON.pretty_generate(runtime_operations)});

    export const operationByName = Object.freeze(Object.fromEntries(
      operations.map((operation) => [operation.name, operation])
    ));

    export const resources = Object.freeze(#{JSON.pretty_generate(resources)});
  JS
)

component_types = components.fetch("schemas", {}).map do |name, schema|
  "/** #{clean_text(schema["description"])} */\nexport type #{name} = #{schema_type(schema, spec, name)};"
end

request_interfaces = operations.map do |operation|
  type_name = "#{pascalize(operation.fetch("name"))}Request"
  fields = operation.fetch("parameters").map do |param|
    optional = param.fetch("required") ? "" : "?"
    description = param.fetch("description")
    doc = description.empty? ? "" : "  /** #{description} */\n"
    "#{doc}  #{ts_identifier(param.fetch("name"))}#{optional}: #{param.fetch("type")};"
  end

  if operation["requestBodyType"]
    optional = operation["requestBodyRequired"] ? "" : "?"
    fields << "  /** Request body sent as #{operation["requestContentType"]}. */\n  body#{optional}: #{operation["requestBodyType"]};"
  end

  <<~TS
    export interface #{type_name} extends SpotifyRequestBase {
    #{fields.empty? ? "" : fields.join("\n")}
    }
  TS
end

operation_name_union = operations.map { |operation| JSON.generate(operation.fetch("name")) }.join(" | ")

request_map = operations.map do |operation|
  "  #{JSON.generate(operation.fetch("name"))}: #{pascalize(operation.fetch("name"))}Request;"
end.join("\n")

response_map = operations.map do |operation|
  "  #{JSON.generate(operation.fetch("name"))}: #{operation.fetch("responseType")};"
end.join("\n")

resource_interfaces = resources.map do |resource|
  methods = resource.fetch("operations").map do |operation_name|
    operation = operations.find { |item| item.fetch("name") == operation_name }
    request_type = "#{pascalize(operation.fetch("name"))}Request"
    response_type = operation.fetch("responseType")
    deprecated = operation["deprecated"] ? "   * @deprecated This endpoint is deprecated by Spotify.\n" : ""
    scopes = operation["scopes"].empty? ? "" : "\n   * OAuth scopes: #{operation["scopes"].join(", ")}"
    <<~TS
        /**
         * #{operation.fetch("summary")}
         *
         * #{operation.fetch("description")}#{scopes}
    #{deprecated}     */
        #{operation.fetch("methodName")}(request: #{request_type}, options?: SpotifyRequestOptions): Promise<#{response_type}>;
    TS
  end

  <<~TS
    export interface #{pascalize(resource.fetch("name"))}Resource {
    #{methods.join("\n")}
    }
  TS
end

resource_properties = resources.map do |resource|
  "  readonly #{resource.fetch("name")}: #{pascalize(resource.fetch("name"))}Resource;"
end.join("\n")

File.write(
  File.join(SRC, "index.d.ts"),
  <<~TS
    // Generated from #{File.basename(SPEC_PATH)} plus hand-written runtime declarations.

    export type JsonPrimitive = string | number | boolean | null;
    export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
    export interface JsonObject {
      [key: string]: JsonValue | undefined;
    }

    export type QueryValue = string | number | boolean | Array<string | number | boolean>;

    export interface SpotifyRequestBase {
      query?: Record<string, QueryValue | undefined>;
      headers?: Record<string, string | undefined>;
      signal?: AbortSignal;
    }

    export interface SpotifyRetryOptions {
      retries?: number;
      retryOnUnsafeMethods?: boolean;
      baseDelayMs?: number;
      maxDelayMs?: number;
    }

    export interface AccessTokenProviderObject {
      getAccessToken(): string | Promise<string>;
    }

    export type AccessTokenProvider = (() => string | Promise<string>) | AccessTokenProviderObject;

    export interface SpotifyClientOptions {
      accessToken?: string;
      accessTokenProvider?: AccessTokenProvider;
      baseUrl?: string;
      accountsUrl?: string;
      fetch?: typeof fetch;
      headers?: Record<string, string>;
      retry?: SpotifyRetryOptions;
      userAgent?: string;
    }

    export interface SpotifyRequestOptions {
      query?: Record<string, QueryValue | undefined>;
      headers?: Record<string, string | undefined>;
      signal?: AbortSignal;
      auth?: boolean;
      itemsKey?: string;
    }

    export declare class SpotifySdkError extends Error {
      readonly cause?: unknown;
    }

    export declare class SpotifyAuthError extends SpotifySdkError {}

    export declare class SpotifyApiError extends SpotifySdkError {
      readonly status?: number;
      readonly statusText?: string;
      readonly url?: string;
      readonly method?: string;
      readonly retryAfter?: number;
      readonly details?: unknown;
      readonly responseBody?: unknown;
      readonly headers?: Record<string, string>;
    }

    export interface RefreshingAccessTokenProviderInput {
      accessToken: string;
      refreshToken: string;
      expiresAt?: number;
      skewMs?: number;
      refresh(state: { accessToken: string; refreshToken: string; expiresAt?: number }): Promise<{
        accessToken: string;
        refreshToken?: string;
        expiresAt?: number;
      }>;
    }

    export function createStaticAccessTokenProvider(accessToken: string): AccessTokenProvider;
    export function createRefreshingAccessTokenProvider(input: RefreshingAccessTokenProviderInput): AccessTokenProvider;

    export interface AuthorizationUrlInput {
      clientId: string;
      redirectUri: string;
      scopes?: string[];
      state?: string;
      showDialog?: boolean;
      responseType?: string;
    }

    export interface TokenInput {
      fetch?: typeof fetch;
      accountsUrl?: string;
      clientId: string;
      clientSecret?: string;
    }

    export interface AuthorizationCodeInput extends TokenInput {
      code: string;
      redirectUri: string;
      codeVerifier?: string;
    }

    export interface RefreshTokenInput extends TokenInput {
      refreshToken: string;
    }

    export interface SpotifyTokenResponse extends JsonObject {
      access_token: string;
      token_type: string;
      scope?: string;
      expires_in?: number;
      refresh_token?: string;
      expiresAt?: number;
    }

    export function createAuthorizationUrl(input: AuthorizationUrlInput): string;
    export function exchangeAuthorizationCode(input: AuthorizationCodeInput): Promise<SpotifyTokenResponse>;
    export function refreshAccessToken(input: RefreshTokenInput): Promise<SpotifyTokenResponse>;
    export function clientCredentialsGrant(input: TokenInput): Promise<SpotifyTokenResponse>;

    #{component_types.join("\n\n")}

    #{request_interfaces.join("\n")}

    export type OperationName = #{operation_name_union};

    export interface OperationRequestMap {
    #{request_map}
    }

    export interface OperationResponseMap {
    #{response_map}
    }

    #{resource_interfaces.join("\n")}

    export declare class SpotifyHttpClient {
      constructor(options?: SpotifyClientOptions);
      request(input: {
        method: string;
        path?: string;
        url?: string;
        query?: Record<string, QueryValue | undefined>;
        headers?: Record<string, string | undefined>;
        body?: unknown;
        contentType?: string;
        signal?: AbortSignal;
        auth?: boolean;
      }): Promise<unknown>;
      requestRaw(input: string | URL, init?: RequestInit): Promise<Response>;
    }

    export declare class SpotifyWebApi extends SpotifyHttpClient {
    #{resource_properties}
      readonly operations: readonly OperationDefinition[];
      readonly resources: readonly ResourceDefinition[];

      operation<Name extends OperationName>(
        operationName: Name,
        request: OperationRequestMap[Name],
        options?: SpotifyRequestOptions
      ): Promise<OperationResponseMap[Name]>;

      requestNextPage<TPage = JsonObject>(nextUrl: string, options?: SpotifyRequestOptions): Promise<TPage>;
      paginate<Name extends OperationName, TItem = JsonValue>(
        operationName: Name,
        request: OperationRequestMap[Name],
        options?: SpotifyRequestOptions
      ): AsyncIterable<TItem>;
      describe(): readonly ResourceDefinition[];
      describe(operationName: OperationName): OperationDefinition;
      findOperations(searchText: string): OperationDefinition[];
    }

    export function createSpotifyClient(options?: SpotifyClientOptions): SpotifyWebApi;

    export interface OperationParameterDefinition {
      name: string;
      in: "path" | "query" | "header" | "cookie";
      required: boolean;
      type: string;
      description: string;
      example?: unknown;
    }

    export interface OperationDefinition {
      name: OperationName;
      operationId: string;
      resourceName: string;
      methodName: string;
      httpMethod: string;
      path: string;
      tags: string[];
      summary: string;
      description: string;
      deprecated: boolean;
      parameters: OperationParameterDefinition[];
      requestContentType?: string;
      successStatus?: string;
      scopes: string[];
    }

    export interface ResourceDefinition {
      name: string;
      tags: string[];
      operations: OperationName[];
    }
  TS
)

File.write(
  File.join(SRC, "operations.d.ts"),
  <<~TS
    export { OperationDefinition, OperationName, ResourceDefinition } from "./index.js";
    export declare const operations: readonly OperationDefinition[];
    export declare const operationByName: Readonly<Record<OperationName, OperationDefinition>>;
    export declare const resources: readonly ResourceDefinition[];
  TS
)

puts "Generated #{operations.length} operations across #{resources.length} resources."
