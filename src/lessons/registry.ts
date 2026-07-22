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

import { cLessons } from './c/index';
import { cppLessons } from './cpp/index';
import { javaLessons } from './java/index';

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
  c: {
    data_types: {
      c_int: cLessons.c_int,
      c_float: cLessons.c_float,
      c_char: cLessons.c_char,
    },
    if_else: {
      c_even_odd: cLessons.c_even_odd,
    },
    loops: {
      c_for_loop: cLessons.c_for_loop,
    },
    functions: {
      c_functions: cLessons.c_functions,
    },
    arrays: {
      c_array_sum: cLessons.c_array_sum,
    },
  },
  cpp: {
    data_types: {
      cpp_types: cppLessons.cpp_types,
    },
    if_else: {
      cpp_if_else: cppLessons.cpp_if_else,
    },
    loops: {
      cpp_while: cppLessons.cpp_while,
    },
    functions: {
      cpp_square_func: cppLessons.cpp_square_func,
    },
    arrays: {
      cpp_array_max: cppLessons.cpp_array_max,
    },
  },
  java: {
    data_types: {
      java_types: javaLessons.java_types,
    },
    if_else: {
      java_grade: javaLessons.java_grade,
    },
    loops: {
      java_for_loop: javaLessons.java_for_loop,
    },
    functions: {
      java_method_add: javaLessons.java_method_add,
    },
    arrays: {
      java_array_sum: javaLessons.java_array_sum,
    },
  },
};

export const getLesson = (languageId: string, topicId: string, programId: string): LessonProgram | undefined => {
  return lessonRegistry[languageId]?.[topicId]?.[programId];
};
