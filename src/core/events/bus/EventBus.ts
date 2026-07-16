import type { IExecutionEvent } from '../types/IExecutionEvent';
import type { EventType } from '../types/EventEnums';
import { EventQueue } from './EventQueue';
import { EventHistory } from './EventHistory';
import { EventValidator } from './EventValidator';

export type EventCallback = (event: IExecutionEvent) => void | Promise<void>;

interface Subscription {
  id: string;
  eventType: EventType | '*';
  callback: EventCallback;
}

export class EventBusService {
  private queue: EventQueue = new EventQueue();
  private history: EventHistory = new EventHistory();
  private subscriptions: Subscription[] = [];
  private isProcessing: boolean = false;

  /**
   * Subscribes a callback to a specific EventType, or '*' for all events.
   * Returns a unique unsubscription token.
   */
  public subscribe(eventType: EventType | '*', callback: EventCallback): string {
    const id = crypto.randomUUID();
    this.subscriptions.push({ id, eventType, callback });
    return id;
  }

  /**
   * Removes a subscription via its token.
   */
  public unsubscribe(subscriptionId: string) {
    this.subscriptions = this.subscriptions.filter(s => s.id !== subscriptionId);
  }

  /**
   * Enqueues an event for publishing. Does not instantly fire; waits for the processing loop.
   */
  public publish(event: IExecutionEvent) {
    if (!EventValidator.isValid(event)) {
      return; // Rejected gracefully
    }
    this.queue.enqueue(event);
    
    // Automatically trigger processing (async to unblock caller)
    if (!this.isProcessing) {
      this.isProcessing = true;
      setTimeout(() => this.processQueue(), 0);
    }
  }

  /**
   * Flushes the priority queue synchronously (or asynchronously if callbacks are async).
   */
  private async processQueue() {
    while (this.queue.getLength() > 0) {
      const event = this.queue.dequeue();
      if (!event) break;

      // Record to immutable history
      this.history.record(event);

      // Find matching subscribers
      const matchedSubs = this.subscriptions.filter(
        s => s.eventType === '*' || s.eventType === event.type
      );

      for (const sub of matchedSubs) {
        try {
          // Await in case the consumer needs to do async drawing (e.g. PixiJS async animation)
          await sub.callback(event);
        } catch (error) {
          // Isolate failures so one bad consumer doesn't crash the entire bus
          if (import.meta.env.DEV) {
            console.error(`[EventBus] Subscriber ${sub.id} crashed on event ${event.id}:`, error);
          }
        }
      }
    }
    this.isProcessing = false;
  }

  public getHistory(): IExecutionEvent[] {
    return this.history.getFullHistory();
  }

  public clearAll() {
    this.queue.clear();
    this.history.clear();
    this.subscriptions = [];
    this.isProcessing = false;
  }
}

export const EventBus = new EventBusService();
