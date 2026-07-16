import type { LessonProgram } from '../../types';

export const create_tuple: LessonProgram = {
  id: 'create_tuple', language: 'python', topic: 'tuples', lessonNumber: 1,
  friendlyName: 'Create and Display Tuple',
  learningObjective: 'Learn how to create a tuple, print it, and access its elements.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'colors' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Red"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Green"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Blue"' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'colors' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'colors' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'length' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'len' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'colors' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'length' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'Create a tuple of colors using parentheses ( ).',
      explanationHinglish: 'Parentheses ( ) ka use karke colors ka tuple banaya.',
      memorySnapshot: { colors: '"(\"Red\", \"Green\", \"Blue\")"' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'colors', value: '"(\"Red\", \"Green\", \"Blue\")"' },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'Print the entire tuple.',
      explanationHinglish: 'Poora tuple print kiya.',
      memorySnapshot: { colors: '"(\"Red\", \"Green\", \"Blue\")"' },
      consoleOutput: '(\'Red\', \'Green\', \'Blue\')',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'colors', outputValue: '"(\"Red\", \"Green\", \"Blue\")"' },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'Access the first element at index 0 ("Red").',
      explanationHinglish: 'Index 0 ke element ("Red") ko access karke print kiya.',
      memorySnapshot: { colors: '"(\"Red\", \"Green\", \"Blue\")"' },
      consoleOutput: '(\'Red\', \'Green\', \'Blue\')\nRed',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'colors[0]', outputValue: '"Red"' },
    },
    {
      step: 4, lineNum: 4,
      explanationEnglish: 'Find how many elements are in the tuple using len().',
      explanationHinglish: 'len() se pata lagaya ki tuple mein kitne elements hain.',
      memorySnapshot: { colors: '"(\"Red\", \"Green\", \"Blue\")"', length: 3 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'length', value: 3 },
    },
    {
      step: 5, lineNum: 5,
      explanationEnglish: 'Print the length of the tuple.',
      explanationHinglish: 'Tuple ki length print ki.',
      memorySnapshot: { colors: '"(\"Red\", \"Green\", \"Blue\")"', length: 3 },
      consoleOutput: '(\'Red\', \'Green\', \'Blue\')\nRed\n3',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'length', outputValue: 3 },
    }
  ],
};