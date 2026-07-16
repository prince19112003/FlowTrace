import type { LessonProgram } from '../../types';

export const print_string: LessonProgram = {
  id: 'print_string', language: 'python', topic: 'strings', lessonNumber: 1,
  friendlyName: 'Print a String',
  learningObjective: 'Learn how to create and display a basic text string.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'greeting' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Hello, World!"' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'greeting' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    greeting: { default: '"Hello, World!"', type: 'text', label: 'Greeting' },
  },
  generateSteps: ({ greeting }) => {
    const cleanGreeting = String(greeting).replace(/['"]/g, '');
    const formattedGreeting = `"${cleanGreeting}"`;
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: `Create a variable named greeting and assign it "${cleanGreeting}".`,
        explanationHinglish: `Ek variable greeting banaya aur usme "${cleanGreeting}" store kiya.`,
        memorySnapshot: { greeting: formattedGreeting },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'greeting', value: formattedGreeting },
      },
      {
        step: 2, lineNum: 2,
        explanationEnglish: `Print the value of greeting ("${cleanGreeting}") to the output.`,
        explanationHinglish: `greeting ki value ("${cleanGreeting}") ko output par print kiya.`,
        memorySnapshot: { greeting: formattedGreeting },
        consoleOutput: cleanGreeting,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'greeting', outputValue: formattedGreeting },
      }
    ];
  },
  executionSteps: [],
};