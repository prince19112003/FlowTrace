import type { LessonProgram, ExecutionStep } from '../../types';

export const simple_interest_func: LessonProgram = {
  id: 'simple_interest_func', language: 'python', topic: 'functions', lessonNumber: 8,
  friendlyName: 'Simple Interest Using Function',
  learningObjective: 'Learn to pass multiple arguments to a function and perform mathematical operations.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'def' }, { type: 'text', value: ' ' }, { type: 'function', value: 'calculate_si' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'p' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'r' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 't' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'p' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'r' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 't' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'operator', value: '/' }, { type: 'text', value: ' ' }, { type: 'number', value: '100' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'p_val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'parameter', value: '1000', paramId: 'principal' }] },
    { lineNum: 5, tokens: [{ type: 'variable', value: 'r_val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'parameter', value: '5', paramId: 'rate' }] },
    { lineNum: 6, tokens: [{ type: 'variable', value: 't_val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'parameter', value: '2', paramId: 'time' }] },
    { lineNum: 7, tokens: [{ type: 'variable', value: 'interest' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'calculate_si' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'p_val' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'r_val' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 't_val' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 8, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'interest' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    principal: { default: 1000, type: 'number', label: 'Principal (p_val)' },
    rate: { default: 5, type: 'number', label: 'Rate % (r_val)' },
    time: { default: 2, type: 'number', label: 'Time in Years (t_val)' },
  },
  generateSteps: ({ principal, rate, time }): ExecutionStep[] => {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);
    const interest = Math.round((p * r * t) / 100 * 100) / 100;
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: 'Define calculate_si(p, r, t) — formula: (p × r × t) / 100.',
        explanationHinglish: 'calculate_si(p, r, t) banaya — formula: (p × r × t) / 100.',
        memorySnapshot: {},
        animationEvent: { type: 'NONE' },
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Set p_val = ${p} (Principal amount).`,
        explanationHinglish: `p_val = ${p} dala (mudhhan raashi).`,
        memorySnapshot: { p_val: p },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'p_val', value: p },
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `Set r_val = ${r} (Rate of interest %).`,
        explanationHinglish: `r_val = ${r} dala (byaj dar %).`,
        memorySnapshot: { p_val: p, r_val: r },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'r_val', value: r },
      },
      {
        step: 4, lineNum: 6,
        explanationEnglish: `Set t_val = ${t} (Time in years).`,
        explanationHinglish: `t_val = ${t} dala (samay saalo mein).`,
        memorySnapshot: { p_val: p, r_val: r, t_val: t },
        animationEvent: { type: 'CREATE_VARIABLE', name: 't_val', value: t },
      },
      {
        step: 5, lineNum: 7,
        explanationEnglish: `Call calculate_si(p_val, r_val, t_val) — sending ${p}, ${r}, ${t}.`,
        explanationHinglish: `calculate_si call kiya — ${p}, ${r}, ${t} bheje.`,
        memorySnapshot: { p_val: p, r_val: r, t_val: t },
        animationEvent: { type: 'FUNCTION_CALL', functionName: 'calculate_si', args: { p, r, t } },
      },
      {
        step: 6, lineNum: 1,
        explanationEnglish: `Parameters: p = ${p}, r = ${r}, t = ${t}. Function is running.`,
        explanationHinglish: `Parameters: p = ${p}, r = ${r}, t = ${t}. Function chal raha hai.`,
        memorySnapshot: { p_val: p, r_val: r, t_val: t, p, r, t },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'p', value: p },
      },
      {
        step: 7, lineNum: 2,
        explanationEnglish: `Compute (${p} × ${r} × ${t}) / 100 = ${interest} and return.`,
        explanationHinglish: `(${p} × ${r} × ${t}) / 100 = ${interest} nikala aur return kiya.`,
        memorySnapshot: { p_val: p, r_val: r, t_val: t, p, r, t },
        animationEvent: { type: 'COMPUTE', inputs: ['p', 'r', 't'], operator: '*', result: interest, storeIn: 'ReturnValue' },
      },
      {
        step: 8, lineNum: 7,
        explanationEnglish: `Function returned ${interest}. Store in interest.`,
        explanationHinglish: `Function ne ${interest} return kiya. "interest" mein store kiya.`,
        memorySnapshot: { p_val: p, r_val: r, t_val: t, interest },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'interest', value: interest },
      },
      {
        step: 9, lineNum: 8,
        explanationEnglish: `Print Simple Interest: ${interest}.`,
        explanationHinglish: `Simple Interest print kiya: ${interest}.`,
        memorySnapshot: { p_val: p, r_val: r, t_val: t, interest },
        consoleOutput: String(interest),
        animationEvent: { type: 'PRINT_VALUE', variableName: 'interest', outputValue: interest },
      },
    ];
  },
  executionSteps: [],
};