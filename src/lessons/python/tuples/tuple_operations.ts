import type { LessonProgram } from '../../types';

export const tuple_operations: LessonProgram = {
  id: 'tuple_operations', language: 'python', topic: 'tuples', lessonNumber: 3,
  friendlyName: 'Tuple Operations',
  learningObjective: 'Learn how to use tuple methods like count() and index(), and check membership.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'data' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'c_five' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'data' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'count' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'c_five' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'idx_twenty' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'data' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'index' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'idx_twenty' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 6, tokens: [{ type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'in' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'data' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Found"' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'Create a tuple with duplicate elements.',
      explanationHinglish: 'Tuple banaya jisme kuch values repeat ho rahi hain.',
      memorySnapshot: { data: '"(5, 10, 5, 20, 5)"' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'data', value: '"(5, 10, 5, 20, 5)"' },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'Use count() to see how many times 5 appears.',
      explanationHinglish: 'count() function se check kiya ki 5 kitni baar aaya hai.',
      memorySnapshot: { data: '"(5, 10, 5, 20, 5)"', c_five: 3 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'c_five', value: 3 },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'Print the count result.',
      explanationHinglish: 'Count ka result print kiya.',
      memorySnapshot: { data: '"(5, 10, 5, 20, 5)"', c_five: 3 },
      consoleOutput: '3',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'c_five', outputValue: 3 },
    },
    {
      step: 4, lineNum: 4,
      explanationEnglish: 'Use index() to find the first position of 20.',
      explanationHinglish: 'index() se pata lagaya ki 20 pehli baar kis position par hai.',
      memorySnapshot: { data: '"(5, 10, 5, 20, 5)"', c_five: 3, idx_twenty: 3 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'idx_twenty', value: 3 },
    },
    {
      step: 5, lineNum: 5,
      explanationEnglish: 'Print the index of 20.',
      explanationHinglish: '20 ka index print kiya.',
      memorySnapshot: { data: '"(5, 10, 5, 20, 5)"', c_five: 3, idx_twenty: 3 },
      consoleOutput: '3\n3',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'idx_twenty', outputValue: 3 },
    },
    {
      step: 6, lineNum: 6,
      explanationEnglish: 'Check if 10 is inside the tuple using the "in" keyword.',
      explanationHinglish: '"in" keyword ka use karke check kiya kya 10 tuple mein hai.',
      memorySnapshot: { data: '"(5, 10, 5, 20, 5)"', c_five: 3, idx_twenty: 3 },
      animationEvent: { type: 'NONE' },
    },
    {
      step: 7, lineNum: 7,
      explanationEnglish: 'It is present, so print "Found".',
      explanationHinglish: '10 majood hai, isliye "Found" print kiya.',
      memorySnapshot: { data: '"(5, 10, 5, 20, 5)"', c_five: 3, idx_twenty: 3 },
      consoleOutput: '3\n3\nFound',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'data', outputValue: '"Found"' },
    }
  ],
};