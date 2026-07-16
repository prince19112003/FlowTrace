import type { IExecutionEvent } from '../types/IExecutionEvent';

export class EventValidator {
  /**
   * Validates that an event object meets the minimum structural requirements
   * before it is allowed into the EventBus queue.
   */
  static isValid(event: IExecutionEvent): boolean {
    if (!event) return false;
    
    // Check required top-level fields
    if (!event.id || !event.type || !event.category || event.timestamp === undefined || event.priority === undefined) {
      this.logRejection(event, 'Missing required top-level fields (id, type, category, timestamp, priority).');
      return false;
    }

    // Check required metadata fields
    if (!event.metadata || !event.metadata.programId || !event.metadata.lessonId || !event.metadata.source) {
      this.logRejection(event, 'Missing required metadata fields (programId, lessonId, source).');
      return false;
    }

    // Payload validation could be extended here based on EventType if needed,
    // but TS handles most of that at compile time.
    return true;
  }

  private static logRejection(event: IExecutionEvent | unknown, reason: string) {
    if (import.meta.env.DEV) {
      console.warn(`[EventValidator] Rejected Event: ${reason}`, event);
    }
  }
}
