import { z } from 'zod';
import { EventSequenceSchema } from './EventSequenceSchema';

export const LessonMetadataSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  language: z.string(),
  topic: z.string(),
  difficulty: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  version: z.string(),
  totalSteps: z.number().int().positive()
});

export const LessonCodeSchema = z.object({
  initialCode: z.string(),
  // Future: support multiple files
});

export const LessonParameterSchema = z.object({
  id: z.string(),
  label: z.string(),
  type: z.enum(['number', 'string', 'boolean']),
  defaultValue: z.union([z.number(), z.string(), z.boolean()]),
  min: z.number().optional(),
  max: z.number().optional()
});

/**
 * The master schema representing a fully parsed lesson.json package.
 */
export const LessonPackageSchema = z.object({
  metadata: LessonMetadataSchema,
  code: LessonCodeSchema,
  parameters: z.array(LessonParameterSchema).optional().default([]),
  events: EventSequenceSchema
});

export type LessonPackage = z.infer<typeof LessonPackageSchema>;
export type LessonMetadata = z.infer<typeof LessonMetadataSchema>;
