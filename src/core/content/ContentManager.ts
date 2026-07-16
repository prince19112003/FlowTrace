import { ContentLoader } from './api/ContentLoader';
import type { LessonPackage } from './schemas/LessonSchema';

export class ContentManagerService {
  // In-memory cache to prevent re-fetching over the network
  private lessonCache: Map<string, LessonPackage> = new Map();
  private activeLesson: LessonPackage | null = null;

  /**
   * Loads a lesson by ID. Uses cache if available.
   */
  public async loadLesson(language: string, topic: string, lessonId: string): Promise<LessonPackage | null> {
    const cacheKey = `${language}_${topic}_${lessonId}`;
    
    if (this.lessonCache.has(cacheKey)) {
      this.activeLesson = this.lessonCache.get(cacheKey)!;
      return this.activeLesson;
    }

    const lesson = await ContentLoader.loadLesson(language, topic, lessonId);
    
    if (lesson) {
      this.lessonCache.set(cacheKey, lesson);
      this.activeLesson = lesson;
      return lesson;
    }

    return null; // Failed to load or validate
  }

  public getActiveLesson(): LessonPackage | null {
    return this.activeLesson;
  }

  public unloadActiveLesson() {
    this.activeLesson = null;
  }

  public clearCache() {
    this.lessonCache.clear();
  }
}

export const ContentManager = new ContentManagerService();
