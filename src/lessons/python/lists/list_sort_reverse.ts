import type { LessonProgram } from '../../types';

export const list_sort_reverse: LessonProgram = {
  id: 'list_sort_reverse', language: 'python', topic: 'lists', lessonNumber: 5,
  friendlyName: 'Sort and Reverse List',
  learningObjective: 'Learn how to rearrange list elements using the sort() and reverse() methods.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'arr' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '40' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '30' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'arr' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'sort' }, { type: 'punctuation', value: '()' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'arr' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'reverse' }, { type: 'punctuation', value: '()' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'Create an unsorted list of numbers named arr.',
      explanationHinglish: 'arr naam ka ek unsorted list banaya.',
      memorySnapshot: { arr: '"[40, 10, 30, 20]"' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'arr', value: '"[40, 10, 30, 20]"' },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'Sort the list in ascending order.',
      explanationHinglish: 'List ko ascending (chhote se bada) order mein sort kiya.',
      memorySnapshot: { arr: '"[10, 20, 30, 40]"' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'arr', oldValue: '"[40, 10, 30, 20]"', newValue: '"[10, 20, 30, 40]"' },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'Print the sorted list.',
      explanationHinglish: 'Sorted list print kiya.',
      memorySnapshot: { arr: '"[10, 20, 30, 40]"' },
      consoleOutput: '[10, 20, 30, 40]',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'arr', outputValue: '"[10, 20, 30, 40]"' },
    },
    {
      step: 4, lineNum: 4,
      explanationEnglish: 'Reverse the order of elements in the list.',
      explanationHinglish: 'List ke elements ko ulta (reverse) kar diya.',
      memorySnapshot: { arr: '"[40, 30, 20, 10]"' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'arr', oldValue: '"[10, 20, 30, 40]"', newValue: '"[40, 30, 20, 10]"' },
    },
    {
      step: 5, lineNum: 5,
      explanationEnglish: 'Print the reversed list.',
      explanationHinglish: 'Reverse hua list print kiya.',
      memorySnapshot: { arr: '"[40, 30, 20, 10]"' },
      consoleOutput: '[10, 20, 30, 40]\n[40, 30, 20, 10]',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'arr', outputValue: '"[40, 30, 20, 10]"' },
    }
  ],
};