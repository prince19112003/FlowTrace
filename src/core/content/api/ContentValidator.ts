import { LessonPackageSchema, type LessonPackage } from '../schemas/LessonSchema';

export class ContentValidator {
  /**
   * Validates a raw JSON object against the master Zod schema.
   * Gracefully logs and returns null if corrupt, preventing engine crashes.
   */
  public static validateLesson(rawJson: unknown): LessonPackage | null {
    try {
      const parsed = LessonPackageSchema.parse(rawJson);
      return parsed;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('[ContentValidator] Lesson Rejected: Invalid Schema Structure.', (error as Error).message || error);
      }
      return null;
    }
  }
}
