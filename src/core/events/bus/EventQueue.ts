import type { IExecutionEvent } from '../types/IExecutionEvent';

export class EventQueue {
  // Using a simple array sorted by priority. Higher numbers = higher priority.
  // In a high-throughput scenario, a binary heap or ring buffer would be faster.
  private queue: IExecutionEvent[] = [];

  public enqueue(event: IExecutionEvent) {
    this.queue.push(event);
    // Sort descending by priority so the highest priority is at index 0
    this.queue.sort((a, b) => b.priority - a.priority);
  }

  public dequeue(): IExecutionEvent | undefined {
    return this.queue.shift();
  }

  public peek(): IExecutionEvent | undefined {
    return this.queue[0];
  }

  public getLength(): number {
    return this.queue.length;
  }

  public clear() {
    this.queue = [];
  }

  public removeEventsBySource(source: string) {
    this.queue = this.queue.filter(e => e.metadata.source !== source);
  }
}
