/**
 * Represents the fundamental structure of a Lesson in the Programming Visualizer.
 * 
 * WHY:
 * - This interfaces dictates the data contract between the lessons JSON and the application state.
 * - Enforces strict typing early on so parsers and renderer components don't rely on `any`.
 */
export interface LessonStep {
  id: string;
  title: string;
  explanationText: string;
  codeSnippet?: string;
  activeLine?: number;
  // Parameters the user can tweak for this step
  parameters: Record<string, number | string | boolean>;
}

export interface LessonData {
  id: string;
  title: string;
  description: string;
  language: 'Python'; // Extensible in the future (e.g., 'JavaScript', 'C++')
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  steps: LessonStep[];
}
