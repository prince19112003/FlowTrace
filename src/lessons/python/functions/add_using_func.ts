import type { LessonProgram, ExecutionStep } from '../../types';

export const add_using_func: LessonProgram = {
  id: 'add_using_func', language: 'python', topic: 'functions', lessonNumber: 4,
  friendlyName: 'Addition Using Function',
  learningObjective: 'Learn how to pass variables as arguments and retrieve the computed sum.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'def' }, { type: 'text', value: ' ' }, { type: 'function', value: 'add' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'a' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'num1' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '15', paramId: 'num1' }] },
    { lineNum: 5, tokens: [{ type: 'variable', value: 'num2' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '20', paramId: 'num2' }] },
    { lineNum: 6, tokens: [{ type: 'variable', value: 'ans' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'add' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'num1' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'num2' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 7, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'ans' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    num1: { default: 15, type: 'number', label: 'First Number (num1)' },
    num2: { default: 20, type: 'number', label: 'Second Number (num2)' },
  },
  generateSteps: ({ num1, num2 }): ExecutionStep[] => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    const result = n1 + n2;
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: 'Define add(a, b) — a reusable function that calculates the sum of two parameters.',
        explanationHinglish: 'add(a, b) function banaya — jo do numbers ka sum nikalta hai.',
        memorySnapshot: {},
        animationEvent: { type: 'NONE' },
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Store ${n1} in variable num1.`,
        explanationHinglish: `num1 mein ${n1} store kiya.`,
        memorySnapshot: { num1: n1 },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'num1', value: n1 },
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `Store ${n2} in variable num2.`,
        explanationHinglish: `num2 mein ${n2} store kiya.`,
        memorySnapshot: { num1: n1, num2: n2 },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'num2', value: n2 },
      },
      {
        step: 4, lineNum: 6,
        explanationEnglish: `Call add(num1, num2) passing ${n1} and ${n2}. Control jumps to function definition.`,
        explanationHinglish: `add(num1, num2) call kiya — ${n1} aur ${n2} bhej ke function par jump kiya.`,
        memorySnapshot: { num1: n1, num2: n2 },
        animationEvent: { type: 'FUNCTION_CALL', functionName: 'add', args: { a: n1, b: n2 } },
      },
      {
        step: 5, lineNum: 1,
        explanationEnglish: `Parameters receive arguments: a = ${n1}, b = ${n2}. Function is now executing.`,
        explanationHinglish: `Function parameters mein values aayi: a = ${n1}, b = ${n2}. Function chal raha hai.`,
        memorySnapshot: { num1: n1, num2: n2, a: n1, b: n2 },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'a', value: n1 },
      },
      {
        step: 6, lineNum: 2,
        explanationEnglish: `Compute a + b = ${n1} + ${n2} = ${result}, and return ${result}.`,
        explanationHinglish: `a + b = ${n1} + ${n2} = ${result} calculate karke return kiya.`,
        memorySnapshot: { num1: n1, num2: n2, a: n1, b: n2 },
        animationEvent: { type: 'COMPUTE', inputs: ['a', 'b'], operator: '+', result, storeIn: 'ReturnValue' },
      },
      {
        step: 7, lineNum: 6,
        explanationEnglish: `Function returned ${result}. Control is back at line 6. Store ${result} in ans.`,
        explanationHinglish: `Function ne ${result} return kiya. Control wapas line 6 par. ${result} ko ans mein store kiya.`,
        memorySnapshot: { num1: n1, num2: n2, ans: result },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'ans', value: result },
      },
      {
        step: 8, lineNum: 7,
        explanationEnglish: `Print the final sum ans: ${result}.`,
        explanationHinglish: `Final sum ans print kiya: ${result}.`,
        memorySnapshot: { num1: n1, num2: n2, ans: result },
        consoleOutput: String(result),
        animationEvent: { type: 'PRINT_VALUE', variableName: 'ans', outputValue: result },
      },
    ];
  },
  executionSteps: [],
};