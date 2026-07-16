import type { LessonProgram, ExecutionStep } from '../../types';

export const string_length: LessonProgram = {
  id: 'string_length', language: 'python', topic: 'strings', lessonNumber: 2,
  friendlyName: 'Find String Length',
  learningObjective: 'Learn how to use the len() function to count the number of characters in a string.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'name' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Python"' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'length' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'len' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'name' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'length' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    name: { default: '"Python"', type: 'text', label: 'Name' },
  },
  generateSteps: ({ name }): ExecutionStep[] => {
    const cleanName = String(name).replace(/['"]/g, '');
    const formattedName = `"${cleanName}"`;
    const lenVal = cleanName.length;
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: `Store the text "${cleanName}" in the variable name.`,
        explanationHinglish: `Variable name mein "${cleanName}" store kiya.`,
        memorySnapshot: { name: formattedName },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'name', value: formattedName },
      },
      {
        step: 2, lineNum: 2,
        explanationEnglish: `The len() function counts characters. "${cleanName}" has ${lenVal} letters.`,
        explanationHinglish: `len() function ne characters count kiye. "${cleanName}" mein ${lenVal} letters hain.`,
        memorySnapshot: { name: formattedName, length: lenVal },
        animationEvent: { type: 'COMPUTE', inputs: ['name'], operator: 'len()', result: lenVal, storeIn: 'length' },
      },
      {
        step: 3, lineNum: 3,
        explanationEnglish: `Print the computed length: ${lenVal}.`,
        explanationHinglish: `Jo length count hui (${lenVal}) use print kiya.`,
        memorySnapshot: { name: formattedName, length: lenVal },
        consoleOutput: String(lenVal),
        animationEvent: { type: 'PRINT_VALUE', variableName: 'length', outputValue: lenVal },
      }
    ];
  },
  executionSteps: [],
};