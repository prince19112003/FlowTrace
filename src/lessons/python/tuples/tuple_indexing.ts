import type { LessonProgram } from '../../types';

export const tuple_indexing: LessonProgram = {
  id: 'tuple_indexing', language: 'python', topic: 'tuples', lessonNumber: 2,
  friendlyName: 'Tuple Indexing and Slicing',
  learningObjective: 'Understand how to access tuple elements using positive indexes, negative indexes, and slicing.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'nums' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '30' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '40' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '50' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'nums' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'nums' }, { type: 'punctuation', value: '[' }, { type: 'operator', value: '-' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'sub' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'nums' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ':' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'sub' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'Create a tuple of numbers.',
      explanationHinglish: 'Numbers ka ek tuple banaya.',
      memorySnapshot: { nums: '"(10, 20, 30, 40, 50)"' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'nums', value: '"(10, 20, 30, 40, 50)"' },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'Access element at positive index 1 (which is 20).',
      explanationHinglish: 'Positive index 1 ka element (20) access kiya.',
      memorySnapshot: { nums: '"(10, 20, 30, 40, 50)"' },
      consoleOutput: '20',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'nums[1]', outputValue: 20 },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'Access element at negative index -1 (which is the last element, 50).',
      explanationHinglish: 'Negative index -1 (aakhri element 50) ko access kiya.',
      memorySnapshot: { nums: '"(10, 20, 30, 40, 50)"' },
      consoleOutput: '20\n50',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'nums[-1]', outputValue: 50 },
    },
    {
      step: 4, lineNum: 4,
      explanationEnglish: 'Slice the tuple from index 1 to 3 (gets 20, 30).',
      explanationHinglish: 'Tuple ko index 1 se 3 tak slice kiya (sirf 20, 30 milega).',
      memorySnapshot: { nums: '"(10, 20, 30, 40, 50)"', sub: '"(20, 30)"' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'sub', value: '"(20, 30)"' },
    },
    {
      step: 5, lineNum: 5,
      explanationEnglish: 'Print the sliced tuple.',
      explanationHinglish: 'Slice kiya hua tuple print kiya.',
      memorySnapshot: { nums: '"(10, 20, 30, 40, 50)"', sub: '"(20, 30)"' },
      consoleOutput: '20\n50\n(20, 30)',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'sub', outputValue: '"(20, 30)"' },
    }
  ],
};