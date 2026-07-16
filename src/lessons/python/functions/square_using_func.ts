import type { LessonProgram, ExecutionStep } from '../../types';

export const square_using_func: LessonProgram = {
  id: 'square_using_func', language: 'python', topic: 'functions', lessonNumber: 5,
  friendlyName: 'Square of a Number Using Function',
  learningObjective: 'Learn to encapsulate mathematical logic inside a reusable function.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'def' }, { type: 'text', value: ' ' }, { type: 'function', value: 'square' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'x' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'parameter', value: '5', paramId: 'val' }] },
    { lineNum: 5, tokens: [{ type: 'variable', value: 'sq' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'square' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 6, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'sq' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    val: { default: 5, type: 'number', label: 'Number to Square (val)' },
  },
  generateSteps: ({ val }): ExecutionStep[] => {
    const v = Number(val);
    const sq = v * v;
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: 'Define square(x) — a function that multiplies x by itself.',
        explanationHinglish: 'square(x) function banaya — jo x ko khud se multiply karta hai.',
        memorySnapshot: {},
        animationEvent: { type: 'NONE' },
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Set val = ${v}.`,
        explanationHinglish: `val mein ${v} dala.`,
        memorySnapshot: { val: v },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: v },
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `Call square(val) — sending ${v} into the function.`,
        explanationHinglish: `square(val) call kiya — ${v} function ko bheja.`,
        memorySnapshot: { val: v },
        animationEvent: { type: 'FUNCTION_CALL', functionName: 'square', args: { x: v } },
      },
      {
        step: 4, lineNum: 1,
        explanationEnglish: `Parameter x receives ${v}. Function is now running.`,
        explanationHinglish: `Parameter x mein ${v} store hua. Function chal raha hai.`,
        memorySnapshot: { val: v, x: v },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'x', value: v },
      },
      {
        step: 5, lineNum: 2,
        explanationEnglish: `Compute x * x = ${v} * ${v} = ${sq} and return.`,
        explanationHinglish: `x * x = ${v} * ${v} = ${sq} nikala aur return kiya.`,
        memorySnapshot: { val: v, x: v },
        animationEvent: { type: 'COMPUTE', inputs: ['x', 'x'], operator: '*', result: sq, storeIn: 'ReturnValue' },
      },
      {
        step: 6, lineNum: 5,
        explanationEnglish: `Function returned ${sq}. Store it in sq.`,
        explanationHinglish: `Function ne ${sq} return kiya. "sq" mein store kiya.`,
        memorySnapshot: { val: v, sq },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'sq', value: sq },
      },
      {
        step: 7, lineNum: 6,
        explanationEnglish: `Print the squared value: ${sq}.`,
        explanationHinglish: `Squared value print ki: ${sq}.`,
        memorySnapshot: { val: v, sq },
        consoleOutput: String(sq),
        animationEvent: { type: 'PRINT_VALUE', variableName: 'sq', outputValue: sq },
      },
    ];
  },
  executionSteps: [],
};