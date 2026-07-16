import type { IExecutionEvent, EventMetadata } from '../types/IExecutionEvent';
import { EventType, EventCategory, EventPriority } from '../types/EventEnums';

/**
 * Ensures all events are strongly typed, stamped with metadata, and properly constructed.
 * No engine should instantiate an IExecutionEvent manually.
 */
export class EventFactory {
  /**
   * Base template for generating events.
   */
  private static createBaseEvent<T>(
    type: EventType,
    category: EventCategory,
    priority: EventPriority,
    metadata: EventMetadata,
    payload: T
  ): IExecutionEvent<T> {
    return {
      id: crypto.randomUUID(),
      type,
      category,
      timestamp: Date.now(),
      priority,
      metadata,
      payload
    };
  }

  /**
   * Helper specifically for LINE_CHANGED events to enforce strict typings.
   */
  public static createLineChangedEvent(
    metadata: EventMetadata,
    previousLine: number | null,
    newLine: number
  ): IExecutionEvent<{ previousLine: number | null; newLine: number }> {
    return this.createBaseEvent(
      EventType.LINE_CHANGED,
      EventCategory.EXECUTION,
      EventPriority.NORMAL,
      metadata,
      { previousLine, newLine }
    );
  }

  /**
   * Helper for Variable Updates.
   */
  public static createVariableUpdatedEvent(
    metadata: EventMetadata,
    variableId: string,
    variableName: string,
    oldValue: unknown,
    newValue: unknown,
    varType: string
  ): IExecutionEvent<{ variableId: string; variableName: string; oldValue: unknown; newValue: unknown; type: string }> {
    return this.createBaseEvent(
      EventType.VARIABLE_UPDATED,
      EventCategory.MEMORY,
      EventPriority.HIGH,
      metadata,
      { variableId, variableName, oldValue, newValue, type: varType }
    );
  }

  /**
   * Helper for System Errors.
   */
  public static createErrorEvent(
    metadata: EventMetadata,
    message: string,
    stackTrace?: string,
    fatal: boolean = true
  ): IExecutionEvent<{ message: string; stackTrace?: string; fatal: boolean }> {
    return this.createBaseEvent(
      EventType.ERROR_THROWN,
      EventCategory.SYSTEM,
      EventPriority.CRITICAL, // Always critical
      metadata,
      { message, stackTrace, fatal }
    );
  }

  /**
   * Generic factory for any other defined event payload.
   */
  public static create<T>(
    type: EventType,
    category: EventCategory,
    metadata: EventMetadata,
    payload: T,
    priority: EventPriority = EventPriority.NORMAL
  ): IExecutionEvent<T> {
    return this.createBaseEvent(type, category, priority, metadata, payload);
  }
}
