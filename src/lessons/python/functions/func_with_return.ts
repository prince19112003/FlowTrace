import type { LessonProgram, ExecutionStep } from '../../types';

export const func_with_return: LessonProgram = {
  id: 'func_with_return', language: 'python', topic: 'functions', lessonNumber: 3,
  friendlyName: 'Function With Return Value',
  learningObjective: 'Understand how a function can send computed data back to the calling code.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'def' }, { type: 'text', value: ' ' }, { type: 'function', value: 'get_number' }, { type: 'punctuation', value: '(' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'parameter', value: '42', paramId: 'retVal' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'result' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'get_number' }, { type: 'punctuation', value: '(' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'result' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    retVal: { default: 42, type: 'number', label: 'Return Value' }
  },
  generateSteps: ({ retVal }): ExecutionStep[] => {
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: 'Define a function get_number that returns a static value.',
        explanationHinglish: 'get_number naam ka function banaya jo value return karta hai.',
        memorySnapshot: {},
        animationEvent: { type: 'NONE' },
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: 'Call get_number() to fetch a value.',
        explanationHinglish: 'Value lene ke liye get_number() call kiya.',
        memorySnapshot: {},
        animationEvent: { type: 'FUNCTION_CALL', functionName: 'get_number', args: {} },
      },
      {
        step: 3, lineNum: 2,
        explanationEnglish: `Return the number ${retVal} from the function back to the caller.`,
        explanationHinglish: `Function se ${retVal} wapas bheja.`,
        memorySnapshot: {},
        animationEvent: { type: 'FUNCTION_RETURN', functionName: 'get_number', returnValue: retVal },
      },
      {
        step: 4, lineNum: 4,
        explanationEnglish: `Store the returned value (${retVal}) into the variable "result".`,
        explanationHinglish: `Wapas aayi hui value (${retVal}) ko "result" mein store kiya.`,
        memorySnapshot: { result: retVal },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'result', value: retVal },
      },
      {
        step: 5, lineNum: 5,
        explanationEnglish: 'Print the returned value stored in result.',
        explanationHinglish: 'Result mein store ki gayi value print ki.',
        memorySnapshot: { result: retVal },
        consoleOutput: String(retVal),
        animationEvent: { type: 'PRINT_VALUE', variableName: 'result', outputValue: retVal },
      }
    ];
  },
  executionSteps: []
};