import type { EditableParameter, ProgramMetadata } from '../registry/types';
import type { RuntimeState } from '../state/runtimeStore';

/**
 * Interface that all future languages (Python, Java, etc.) must implement.
 * This completely decouples the Runtime Engine from specific language execution logic.
 */
export interface LanguageAdapter {
  /**
   * Initializes the language environment.
   */
  initialize(program: ProgramMetadata): Promise<void>;

  /**
   * Re-evaluates the program when editable parameters change.
   */
  evaluateParameters(parameters: Record<string, EditableParameter>): void;

  /**
   * Steps forward in the execution by one logical line/instruction.
   * Returns true if there are more steps, false if execution finished.
   */
  step(state: RuntimeState): boolean;

  /**
   * Jumps to a specific step (used for timeline scrubbing).
   */
  jumpToStep(step: number, state: RuntimeState): void;

  /**
   * Cleans up the environment (e.g., terminating WebWorkers if used).
   */
  terminate(): void;
}
