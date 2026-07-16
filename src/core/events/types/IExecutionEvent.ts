import type { EventType, EventCategory, EventPriority } from './EventEnums';

export interface EventMetadata {
  programId: string;
  lessonId: string;
  language: string;
  currentStep: number;
  currentSubstep: number;
  currentLine: number | null;
  source: string;
  target?: string;
}

export interface IExecutionEvent<T = unknown> {
  id: string; // Unique UUID
  type: EventType;
  category: EventCategory;
  timestamp: number; // Date.now()
  priority: EventPriority;
  metadata: EventMetadata;
  payload: T;
}
