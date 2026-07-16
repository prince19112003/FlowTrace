import type { LessonProgram, ExecutionStep } from '../../types';

export const circle_area_func: LessonProgram = {
  id: 'circle_area_func', language: 'python', topic: 'functions', lessonNumber: 7,
  friendlyName: 'Circle Area Using Function',
  learningObjective: 'Use functions to perform geometric calculations dynamically based on arguments.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'def' }, { type: 'text', value: ' ' }, { type: 'function', value: 'circle_area' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'radius' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '3.14' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'radius' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'radius' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'r' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'parameter', value: '5', paramId: 'r' }] },
    { lineNum: 5, tokens: [{ type: 'variable', value: 'area' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'circle_area' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'r' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 6, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'area' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    r: { default: 5, type: 'number', label: 'Radius (r)' },
  },
  generateSteps: ({ r }): ExecutionStep[] => {
    const radius = Number(r);
    const area = Math.round(3.14 * radius * radius * 100) / 100;
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: 'Define circle_area(radius) — formula: π × r × r.',
        explanationHinglish: 'circle_area(radius) banaya — formula: π × r × r.',
        memorySnapshot: {},
        animationEvent: { type: 'NONE' },
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Set r = ${radius} (the radius of the circle).`,
        explanationHinglish: `r = ${radius} set kiya (circle ki radius).`,
        memorySnapshot: { r: radius },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'r', value: radius },
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `Call circle_area(r) — sending radius ${radius} into the function.`,
        explanationHinglish: `circle_area(r) call kiya — radius ${radius} function ko bheja.`,
        memorySnapshot: { r: radius },
        animationEvent: { type: 'FUNCTION_CALL', functionName: 'circle_area', args: { radius } },
      },
      {
        step: 4, lineNum: 1,
        explanationEnglish: `Parameter radius receives ${radius}.`,
        explanationHinglish: `Parameter radius mein ${radius} aaya.`,
        memorySnapshot: { r: radius, radius },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'radius', value: radius },
      },
      {
        step: 5, lineNum: 2,
        explanationEnglish: `Compute 3.14 × ${radius} × ${radius} = ${area} and return.`,
        explanationHinglish: `3.14 × ${radius} × ${radius} = ${area} nikala aur return kiya.`,
        memorySnapshot: { r: radius, radius },
        animationEvent: { type: 'COMPUTE', inputs: ['radius', 'radius'], operator: '*', result: area, storeIn: 'ReturnValue' },
      },
      {
        step: 6, lineNum: 5,
        explanationEnglish: `Function returned ${area}. Store it in area.`,
        explanationHinglish: `Function ne ${area} return kiya. "area" mein store kiya.`,
        memorySnapshot: { r: radius, area },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'area', value: area },
      },
      {
        step: 7, lineNum: 6,
        explanationEnglish: `Print the circle area: ${area}.`,
        explanationHinglish: `Circle ka area print kiya: ${area}.`,
        memorySnapshot: { r: radius, area },
        consoleOutput: String(area),
        animationEvent: { type: 'PRINT_VALUE', variableName: 'area', outputValue: area },
      },
    ];
  },
  executionSteps: [],
};