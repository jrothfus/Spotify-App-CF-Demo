import { z } from 'zod';

/**
 * Zod schema for the Meta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const meta = z.lazy(() => {
  return z.object({
    analyzerVersion: z.string().optional(),
    platform: z.string().optional(),
    detailedStatus: z.string().optional(),
    statusCode: z.number().optional(),
    timestamp: z.number().optional(),
    analysisTime: z.number().optional(),
    inputProcess: z.string().optional(),
  });
});

/**
 *
 * @typedef  {Meta} meta
 * @property {string} - The version of the Analyzer used to analyze this track.
 * @property {string} - The platform used to read the track's audio data.
 * @property {string} - A detailed status code for this track. If analysis data is missing, this code may explain why.
 * @property {number} - The return code of the analyzer process. 0 if successful, 1 if any errors occurred.
 * @property {number} - The Unix timestamp (in seconds) at which this track was analyzed.
 * @property {number} - The amount of time taken to analyze this track.
 * @property {string} - The method used to read the track's audio data.
 */
export type Meta = z.infer<typeof meta>;

/**
 * Zod schema for mapping API responses to the Meta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaResponse = z.lazy(() => {
  return z
    .object({
      analyzer_version: z.string().optional(),
      platform: z.string().optional(),
      detailed_status: z.string().optional(),
      status_code: z.number().optional(),
      timestamp: z.number().optional(),
      analysis_time: z.number().optional(),
      input_process: z.string().optional(),
    })
    .transform((data) => ({
      analyzerVersion: data['analyzer_version'],
      platform: data['platform'],
      detailedStatus: data['detailed_status'],
      statusCode: data['status_code'],
      timestamp: data['timestamp'],
      analysisTime: data['analysis_time'],
      inputProcess: data['input_process'],
    }));
});

/**
 * Zod schema for mapping the Meta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaRequest = z.lazy(() => {
  return z
    .object({
      analyzerVersion: z.string().optional(),
      platform: z.string().optional(),
      detailedStatus: z.string().optional(),
      statusCode: z.number().optional(),
      timestamp: z.number().optional(),
      analysisTime: z.number().optional(),
      inputProcess: z.string().optional(),
    })
    .transform((data) => ({
      analyzer_version: data['analyzerVersion'],
      platform: data['platform'],
      detailed_status: data['detailedStatus'],
      status_code: data['statusCode'],
      timestamp: data['timestamp'],
      analysis_time: data['analysisTime'],
      input_process: data['inputProcess'],
    }));
});
