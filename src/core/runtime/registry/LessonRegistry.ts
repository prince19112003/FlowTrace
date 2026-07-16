import type { LanguageMetadata, ProgramMetadata, TopicMetadata } from './types';

/**
 * LessonRegistry acts as the central hub for discovering available languages, topics, and programs.
 * By abstracting this into a singleton registry, we avoid hardcoding lessons into the UI components.
 */
class RegistryService {
  private languages: Map<string, LanguageMetadata> = new Map();
  private topics: Map<string, TopicMetadata> = new Map();
  private programs: Map<string, ProgramMetadata> = new Map();

  // In a real production scenario, this might auto-discover files or load from an API.
  public registerLanguage(lang: LanguageMetadata) {
    this.languages.set(lang.id, lang);
  }

  public registerTopic(topic: TopicMetadata) {
    this.topics.set(topic.id, topic);
  }

  public registerProgram(program: ProgramMetadata) {
    this.programs.set(program.id, program);
  }

  public getAvailableLanguages(): LanguageMetadata[] {
    return Array.from(this.languages.values());
  }

  public getTopicsForLanguage(langId: string): TopicMetadata[] {
    const lang = this.languages.get(langId);
    if (!lang) return [];
    return lang.topics;
  }

  public getProgramMetadata(programId: string): ProgramMetadata | undefined {
    return this.programs.get(programId);
  }

  public clear() {
    this.languages.clear();
    this.topics.clear();
    this.programs.clear();
  }
}

export const LessonRegistry = new RegistryService();
