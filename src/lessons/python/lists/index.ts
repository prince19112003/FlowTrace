import { basic_list } from './basic_list';
import { list_stats } from './list_stats';
import { list_search } from './list_search';
import { list_modify } from './list_modify';
import { list_sort_reverse } from './list_sort_reverse';
import { student_marks } from './student_marks';

export const listsLessons: Record<string, any> = {
  basic_list,
  list_stats,
  list_search,
  list_modify,
  list_sort_reverse,
  student_marks,
};