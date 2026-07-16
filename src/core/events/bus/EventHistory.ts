import type { IExecutionEvent } from '../types/IExecutionEvent';

export class EventHistory {
  private history: IExecutionEvent[] = [];
  
  // Future: Cap the history length or stream to disk to prevent OOM
  private readonly MAX_HISTORY = 10000;

  public record(event: IExecutionEvent) {
    this.history.push(event);
    
    // Prune if exceeding memory constraints
    if (this.history.length > this.MAX_HISTORY) {
      this.history.shift(); // Remove oldest
    }
  }

  public getFullHistory(): IExecutionEvent[] {
    return [...this.history];
  }

  public clear() {
    this.history = [];
  }

  // Future feature: Replay events up to a specific timestamp
  public getHistoryUpTo(timestamp: number): IExecutionEvent[] {
    return this.history.filter(e => e.timestamp <= timestamp);
  }
}
