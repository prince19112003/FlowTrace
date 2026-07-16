import type { LessonProgram, ExecutionStep } from '../../types';

export const string_upper: LessonProgram = {
  id: 'string_upper', language: 'python', topic: 'strings', lessonNumber: 3,
  friendlyName: 'Convert String to Uppercase',
  learningObjective: 'Learn how to transform all letters in a string to uppercase.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'text' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: '"hello"' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'big_text' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'text' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'upper' }, { type: 'punctuation', value: '()' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'big_text' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    text: { default: '"hello"', type: 'text', label: 'Text' },
  },
  generateSteps: ({ text }): ExecutionStep[] => {
    const cleanText = String(text).replace(/['"]/g, '');
    const fText = `"${cleanText}"`;
    const upperVal = cleanText.toUpperCase();
    const fUpperVal = `"${upperVal}"`;
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
        explanationEnglish: `Use upper() to convert "${cleanText}" to uppercase: "${upperVal}".`,
        explanationHinglish: `upper() ka use karke "${cleanText}" ko uppercase mein convert kiya: "${upperVal}".`,
        memorySnapshot: { text: fText, big_text: fUpperVal },
        animationEvent: { type: 'COMPUTE', inputs: ['text'], operator: 'upper()', result: fUpperVal, storeIn: 'big_text' },
      },
      {
        step: 3, lineNum: 3,
        explanationEnglish: `Print the converted uppercase string: "${upperVal}".`,
        explanationHinglish: `Naya uppercase string ("${upperVal}") print kiya.`,
        memorySnapshot: { text: fText, big_text: fUpperVal },
        consoleOutput: upperVal,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'big_text', outputValue: fUpperVal },
      }
    ];
  },
  executionSteps: [],
};