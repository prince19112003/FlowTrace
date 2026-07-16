import { ContentValidator } from './ContentValidator';
import type { LessonPackage } from '../schemas/LessonSchema';

export class ContentLoader {
  /**
   * Fetches a lesson.json file asynchronously from the public/ folder.
   * This simulates loading from a static CDN or API.
   */
  public static async loadLesson(language: string, topic: string, lessonId: string): Promise<LessonPackage | null> {
    try {
      // Construct the expected file path.
      // e.g., /lessons/Python/Variables/01_CreateVariable/lesson.json
      const path = `/lessons/${language}/${topic}/${lessonId}/lesson.json`;
      
      const response = await fetch(path);
      if (!response.ok) {
        console.warn(`[ContentLoader] Failed to fetch lesson at ${path}: ${response.statusText}`);
        return null;
      }

      const rawJson = await response.json();
      
      // Validate the JSON before returning it to the application
      return ContentValidator.validateLesson(rawJson);
      
    } catch (error) {
      console.error(`[ContentLoader] Network error fetching lesson ${lessonId}:`, error);
      return null;
    }
  }
}
