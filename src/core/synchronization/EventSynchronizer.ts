import { EventBus } from '../events/bus/EventBus';
import { EventType } from '../events/types/EventEnums';
import type { IExecutionEvent } from '../events/types/IExecutionEvent';
import type { LineChangedPayload, ExplanationUpdatedPayload, OutputAppendedPayload } from '../events/types/EventPayloads';
import { useRuntimeStore } from '../runtime/state/runtimeStore';
import { useExplanationStore } from '../../features/explanation/state/explanationStore';
import { OutputAnimator } from '../../features/output/services/OutputAnimator';

export class EventSynchronizer {
  private static isInitialized = false;

  public static initialize() {
    if (this.isInitialized) return;

    // Line Highlight Synchronization (Code Viewer)
    EventBus.subscribe(EventType.LINE_CHANGED, (e: IExecutionEvent) => {
      const payload = e.payload as LineChangedPayload;
      // Triggers CodePanel to highlight via Zustand reactive state
      useRuntimeStore.getState().setLines(payload.newLine, null);
    });

    // Explanation Panel Synchronization
    EventBus.subscribe(EventType.EXPLANATION_UPDATED, (e: IExecutionEvent) => {
      const payload = e.payload as ExplanationUpdatedPayload;
      useExplanationStore.getState().setExplanation(payload.textId, payload.text);
    });

    // Output Panel Synchronization
    EventBus.subscribe(EventType.OUTPUT_APPENDED, (e: IExecutionEvent) => {
      const payload = e.payload as OutputAppendedPayload;
      // Send the text into the Typewriter engine instead of instantly updating store
      OutputAnimator.queueText(payload.text);
    });

    // Step Sync (Timeline Engine)
    EventBus.subscribe(EventType.STEP_FINISHED, () => {
      useRuntimeStore.getState().stepForward();
    });

    this.isInitialized = true;
  }
}
