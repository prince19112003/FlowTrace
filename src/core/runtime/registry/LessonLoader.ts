import { LessonRegistry } from './LessonRegistry';
import type { ProgramMetadata } from './types';

/**
 * Responsible for loading lesson metadata dynamically.
 * Simulates lazy fetching of program data so the main bundle stays lightweight.
 */
export class LessonLoader {
  static async loadProgram(programId: string): Promise<ProgramMetadata> {
    // In the future, this would `fetch('/api/lessons/...')` or dynamic `import()` JSON files.
    // For now, it queries the synchronous registry but returns a Promise to enforce async architecture.
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const metadata = LessonRegistry.getProgramMetadata(programId);
        if (metadata) {
          resolve(metadata);
        } else {
          reject(new Error(`Program ID ${programId} not found in registry.`));
        }
      }, 300); // Simulate network latency
    });
  }
}
