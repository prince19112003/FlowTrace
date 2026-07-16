import type { LessonProgram } from './types';
import { variablesLessons } from './python/variables/index';
import { ifStatementLessons } from './python/if_statement/index';
import { ifElseLessons } from './python/if_else/index';
import { ifElifElseLessons } from './python/if_elif_else/index';
import { matchCaseLessons } from './python/match_case/index';
import { forLoopLessons } from './python/for_loop/index';
import { whileLoopLessons } from './python/while_loop/index';
import { nestedLoopLessons } from './python/nested_loop/index';
import { loopControlLessons } from './python/loop_control/index';
import { functionsLessons } from './python/functions/index';
import { recursionLessons } from './python/recursion/index';
import { stringsLessons } from './python/strings/index';
import { listsLessons } from './python/lists/index';
import { tuplesLessons } from './python/tuples/index';
import { dictionariesLessons } from './python/dictionaries/index';
import { searchingSortingLessons } from './python/searching_sorting/index';

// In the future, this registry will grow to include other topics and languages.
export const lessonRegistry: Record<string, Record<string, Record<string, LessonProgram>>> = {
  python: {
    t1: variablesLessons,
    variables: variablesLessons, // supporting both ID formats just in case
    if_statement: ifStatementLessons,
    if_else: ifElseLessons,
    if_elif_else: ifElifElseLessons,
    match_case: matchCaseLessons,
    for_loop: forLoopLessons,
    while_loop: whileLoopLessons,
    nested_loop: nestedLoopLessons,
    loop_control: loopControlLessons,
    functions: functionsLessons,
    recursion: recursionLessons,
    strings: stringsLessons,
    lists: listsLessons,
    tuples: tuplesLessons,
    dictionaries: dictionariesLessons,
    searching_sorting: searchingSortingLessons,
  },
};

export const getLesson = (languageId: string, topicId: string, programId: string): LessonProgram | undefined => {
  return lessonRegistry[languageId]?.[topicId]?.[programId];
};
