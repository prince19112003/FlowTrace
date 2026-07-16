import { useRuntimeStore } from '../../../core/runtime/state/runtimeStore';

export class PlaybackController {
  private static animationFrameId: number | null = null;
  private static lastTickTime = 0;
  
  // Base duration for a single step at 1x speed (e.g. 1000ms)
  private static readonly BASE_TICK_RATE_MS = 1000;

  public static start() {
    if (this.animationFrameId !== null) return;
    
    useRuntimeStore.getState().togglePlayback(); // Sets isPlaying to true
    
    this.lastTickTime = performance.now();
    this.tick(performance.now());
  }

  public static stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    
    const state = useRuntimeStore.getState();
    if (state.isPlaying) {
      state.togglePlayback();
    }
  }

  private static tick(currentTime: number) {
    const state = useRuntimeStore.getState();
    
    if (!state.isPlaying || state.status === 'FINISHED' || state.status === 'ERROR') {
      this.stop();
      return;
    }

    const currentTickRate = this.BASE_TICK_RATE_MS / state.playbackSpeed;
    
    if (currentTime - this.lastTickTime >= currentTickRate) {
      // Time to step forward
      state.stepForward();
      this.lastTickTime = currentTime;
      
      // In reality, stepForward would trigger the runtime engine to evaluate the next AST node.
      // The runtime engine would then publish the IExecutionEvent to the EventBus.
    }

    this.animationFrameId = requestAnimationFrame((time) => this.tick(time));
  }
}
