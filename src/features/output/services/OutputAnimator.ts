import { useOutputStore } from '../state/outputStore';
import { useRuntimeStore } from '../../../core/runtime/state/runtimeStore';

export class OutputAnimator {
  private static queue: string = '';
  private static isTyping = false;
  
  // Base characters per second
  private static readonly BASE_CPS = 30;

  public static queueText(text: string) {
    this.queue += text;
    if (!this.isTyping) {
      this.typeNextCharacter();
    }
  }

  private static typeNextCharacter() {
    if (this.queue.length === 0) {
      this.isTyping = false;
      return;
    }

    this.isTyping = true;
    const char = this.queue[0];
    this.queue = this.queue.slice(1);

    useOutputStore.getState().appendCharacter(char);

    const speed = useRuntimeStore.getState().playbackSpeed || 1;
    const delayMs = (1000 / this.BASE_CPS) / speed;

    setTimeout(() => this.typeNextCharacter(), delayMs);
  }
}
