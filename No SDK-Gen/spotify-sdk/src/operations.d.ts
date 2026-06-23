export { OperationDefinition, OperationName, ResourceDefinition } from "./index.js";
export declare const operations: readonly OperationDefinition[];
export declare const operationByName: Readonly<Record<OperationName, OperationDefinition>>;
export declare const resources: readonly ResourceDefinition[];
