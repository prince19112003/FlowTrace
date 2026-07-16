import type { LessonProgram, ExecutionStep } from '../../types';

export const func_with_args: LessonProgram = {
  id: 'func_with_args', language: 'python', topic: 'functions', lessonNumber: 2,
  friendlyName: 'Function With Arguments',
  learningObjective: 'Learn how to pass data into a function using arguments and parameters.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'def' }, { type: 'text', value: ' ' }, { type: 'function', value: 'greet_user' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'name' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Hello,"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'name' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '' }] },
    { lineNum: 4, tokens: [{ type: 'function', value: 'greet_user' }, { type: 'punctuation', value: '(' }, { type: 'parameter', value: '"Alice"', paramId: 'userName' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    userName: { default: '"Alice"', type: 'text', label: 'Name' }
  },
  generateSteps: ({ userName }): ExecutionStep[] => {
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: 'Define a function greet_user that accepts one parameter: name.',
        explanationHinglish: 'greet_user function banaya jo ek parameter "name" leta hai.',
        memorySnapshot: {},
        animationEvent: { type: 'NONE' },
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Call the function and pass the argument ${userName}.`,
        explanationHinglish: `Function call kiya aur ${userName} bheja.`,
        memorySnapshot: {},
        animationEvent: { type: 'FUNCTION_CALL', functionName: 'greet_user', args: { name: userName } },
      },
      {
        step: 3, lineNum: 1,
        explanationEnglish: `The parameter "name" receives the value ${userName}.`,
        explanationHinglish: `Parameter "name" mein ${userName} store ho gaya.`,
        memorySnapshot: { name: userName },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'name', value: userName },
      },
      {
        step: 4, lineNum: 2,
        explanationEnglish: 'Print the greeting along with the provided name.',
        explanationHinglish: 'Name ke sath greeting print kiya.',
        memorySnapshot: { name: userName },
        consoleOutput: `Hello, ${String(userName).replace(/"/g, '')}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: `"Hello, " + name`, outputValue: `"Hello, " + ${userName}` },
      },
      {
        step: 5, lineNum: 3,
        explanationEnglish: 'Function execution is complete. Return to the caller.',
        explanationHinglish: 'Function khatam hua. Wapas return kiya.',
        memorySnapshot: {},
        animationEvent: { type: 'FUNCTION_RETURN', functionName: 'greet_user' },
      }
    ];
  },
  executionSteps: []
};