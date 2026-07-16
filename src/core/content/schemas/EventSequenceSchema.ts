import { z } from 'zod';
import { EventCategory, EventType, EventPriority } from '../../events/types/EventEnums';

/**
 * Validates the raw JSON event arrays from a lesson package.
 * This guarantees the Playback Engine will never crash from malformed authoring data.
 */

const EventMetadataSchema = z.object({
  programId: z.string(),
  lessonId: z.string(),
  language: z.string(),
  currentStep: z.number(),
  currentSubstep: z.number(),
  currentLine: z.number().nullable(),
  source: z.string(),
  target: z.string().optional()
});

export const ExecutionEventSchema = z.object({
  id: z.string().uuid(),
  type: z.nativeEnum(EventType),
  category: z.nativeEnum(EventCategory),
  timestamp: z.number(),
  priority: z.nativeEnum(EventPriority),
  metadata: EventMetadataSchema,
  payload: z.unknown() // We allow unknown here, but strictly type-cast it inside the EventSynchronizer
});

export const EventSequenceSchema = z.array(ExecutionEventSchema);

export type ParsedExecutionEvent = z.infer<typeof ExecutionEventSchema>;
