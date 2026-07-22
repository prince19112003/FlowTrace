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
      java_casting: javaLessons.java_casting,
      java_ascii: javaLessons.java_ascii,
      java_temp_convert: javaLessons.java_temp_convert,
      java_circle_area: javaLessons.java_circle_area,
      java_swap_temp: javaLessons.java_swap_temp,
    },
    if_else: {
      java_even_odd: javaLessons.java_even_odd,
      java_largest_three: javaLessons.java_largest_three,
      java_leap_year: javaLessons.java_leap_year,
      java_vowel_if: javaLessons.java_vowel_if,
    },
    if_elif_else: {
      java_grade: javaLessons.java_grade,
      java_tax_calc: javaLessons.java_tax_calc,
    },
    switch_case: {
      java_switch_day: javaLessons.java_switch_day,
      java_switch_vowel: javaLessons.java_switch_vowel,
      java_switch_calc: javaLessons.java_switch_calc,
      java_switch_month: javaLessons.java_switch_month,
      java_switch_grade: javaLessons.java_switch_grade,
    },
    for_loop: {
      java_for_sum: javaLessons.java_for_sum,
      java_multiplication_table: javaLessons.java_multiplication_table,
    },
    while_loop: {
      java_while_digits: javaLessons.java_while_digits,
      java_factorial: javaLessons.java_factorial,
      java_reverse_num: javaLessons.java_reverse_num,
      java_prime_check: javaLessons.java_prime_check,
    },
    do_while_loop: {
      java_do_while: javaLessons.java_do_while,
    },
    arrays: {
      java_array_sum_1d: javaLessons.java_array_sum_1d,
      java_array_max_1d: javaLessons.java_array_max_1d,
      java_linear_search: javaLessons.java_linear_search,
      java_array_reverse: javaLessons.java_array_reverse,
      java_matrix_2d: javaLessons.java_matrix_2d,
      java_diagonal_sum_2d: javaLessons.java_diagonal_sum_2d,
      java_matrix_transpose: javaLessons.java_matrix_transpose,
    },
  },
};

export const getLesson = (languageId: string, topicId: string, programId: string): LessonProgram | undefined => {
  return lessonRegistry[languageId]?.[topicId]?.[programId];
};
