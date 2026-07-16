import type { LessonProgram, ExecutionStep } from '../../types';

export const string_lower: LessonProgram = {
  id: 'string_lower', language: 'python', topic: 'strings', lessonNumber: 4,
  friendlyName: 'Convert String to Lowercase',
  learningObjective: 'Learn how to transform all letters in a string to lowercase.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'text' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: '"PYTHON"' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'small_text' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'text' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'lower' }, { type: 'punctuation', value: '()' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'small_text' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    text: { default: '"PYTHON"', type: 'text', label: 'Text' },
  },
  generateSteps: ({ text }): ExecutionStep[] => {
    const cleanText = String(text).replace(/['"]/g, '');
    const fText = `"${cleanText}"`;
    const lowerVal = cleanText.toLowerCase();
    const fLowerVal = `"${lowerVal}"`;
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: `Create a variable named text with value "${cleanText}".`,
        explanationHinglish: `Variable text banaya aur usme "${cleanText}" store kiya.`,
        memorySnapshot: { text: fText },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'text', value: fText },
      },
      {
        step: 2, lineNum: 2,
        explanationEnglish: `Use lower() to convert "${cleanText}" to lowercase: "${lowerVal}".`,
        explanationHinglish: `lower() ka use karke "${cleanText}" ko lowercase mein convert kiya: "${lowerVal}".`,
        memorySnapshot: { text: fText, small_text: fLowerVal },
        animationEvent: { type: 'COMPUTE', inputs: ['text'], operator: 'lower()', result: fLowerVal, storeIn: 'small_text' },
      },
      {
        step: 3, lineNum: 3,
        explanationEnglish: `Print the converted lowercase string: "${lowerVal}".`,
        explanationHinglish: `Naya lowercase string ("${lowerVal}") print kiya.`,
        memorySnapshot: { text: fText, small_text: fLowerVal },
        consoleOutput: lowerVal,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'small_text', outputValue: fLowerVal },
      }
    ];
  },
  executionSteps: [],
};