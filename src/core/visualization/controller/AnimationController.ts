import { EventBus } from '../../events/bus/EventBus';
import { EventType } from '../../events/types/EventEnums';
import type { IExecutionEvent } from '../../events/types/IExecutionEvent';
import type { VariableUpdatedPayload } from '../../events/types/EventPayloads';
import type { LayerManager } from '../engine/LayerManager';
import { LayerType } from '../engine/LayerManager';
import { ObjectFactory } from '../objects/ObjectFactory';
import type { VariableBox } from '../objects/VariableBox';
import { AnimationLanguage } from '../design/AnimationLanguage';

/**
 * Bridges the Event Bus to the PixiJS Render Layers.
 * NEVER evaluates logic. ONLY reacts to 'What Happened'.
 */
export class AnimationController {
  private layerManager: LayerManager;
  private variableMap: Map<string, VariableBox> = new Map();

  constructor(layerManager: LayerManager) {
    this.layerManager = layerManager;
    this.subscribeToEvents();
  }

  private subscribeToEvents() {
    // Note: In production, we'd store subscription IDs to unsubscribe later
    EventBus.subscribe(EventType.VARIABLE_CREATED, this.onVariableCreated.bind(this));
    EventBus.subscribe(EventType.VARIABLE_UPDATED, this.onVariableUpdated.bind(this));
  }

  private async onVariableCreated(event: IExecutionEvent) {
    const payload = event.payload as VariableUpdatedPayload; // Simplified for example
    const vLayer = this.layerManager.getLayer(LayerType.VARIABLE_OBJECTS);
    
    const vBox = ObjectFactory.createVariableBox(payload.variableName, String(payload.newValue));
    // Simple layout strategy for demo purposes
    vBox.position.set(50 + (this.variableMap.size * 120), 50);
    
    vLayer.addChild(vBox);
    this.variableMap.set(payload.variableId, vBox);

    await AnimationLanguage.fadeIn(vBox);
  }

  private async onVariableUpdated(event: IExecutionEvent) {
    const payload = event.payload as VariableUpdatedPayload;
    const vBox = this.variableMap.get(payload.variableId);
    
    if (vBox) {
      await vBox.setValue(String(payload.newValue));
    }
  }
}
