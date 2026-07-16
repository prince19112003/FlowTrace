import type { LessonProgram, ExecutionStep } from '../../types';

export const print_1_to_n: LessonProgram = {
  id: 'print_1_to_n', language: 'python', topic: 'while_loop', lessonNumber: 1,
  friendlyName: 'Print Numbers (1 to N)',
  learningObjective: 'Understand how a while loop repeats as long as a condition is true.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'while' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }] },
  ],
  editableVariables: {
    n: { default: 5, min: 1, max: 10, label: 'Limit n' },
  },
  generateSteps: ({ n }): ExecutionStep[] => {
    const steps: ExecutionStep[] = [];
    const limit = Number(n);
    let i = 1;
    let consoleOutput = '';

    steps.push({
      step: steps.length + 1, lineNum: 1,
      explanationEnglish: 'Create a variable "i" and start at 1.',
      explanationHinglish: '"i" ki value 1 set ki.',
      memorySnapshot: { i: 1 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'i', value: 1 },
    });

    steps.push({
      step: steps.length + 1, lineNum: 2,
      explanationEnglish: `Set the limit "n" to ${limit}.`,
      explanationHinglish: `"n" ki limit ${limit} set ki.`,
      memorySnapshot: { i: 1, n: limit },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'n', value: limit },
    });

    while (i <= limit) {
      steps.push({
        step: steps.length + 1, lineNum: 3,
        explanationEnglish: `Check condition: is i <= n? (${i} <= ${limit}) is True.`,
        explanationHinglish: `Condition check kiya: kya ${i} <= ${limit} hai? Yeh True hai.`,
        memorySnapshot: { i, n: limit },
        animationEvent: { type: 'COMPUTE', inputs: ['i', 'n'], operator: '<=', result: 'True', storeIn: 'Condition' },
      });

      consoleOutput += (consoleOutput ? '\n' : '') + i;
      steps.push({
        step: steps.length + 1, lineNum: 4,
        explanationEnglish: `Print the current value of "i" (${i}).`,
        explanationHinglish: `"i" ki current value (${i}) print kiya.`,
        memorySnapshot: { i, n: limit },
        consoleOutput,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'i', outputValue: i },
      });

      const oldI = i;
      i += 1;
      steps.push({
        step: steps.length + 1, lineNum: 5,
        explanationEnglish: `Increase i by 1. ${oldI} + 1 = ${i}.`,
        explanationHinglish: `i ko 1 se badhaya. Naya i ${i} hai.`,
        memorySnapshot: { i, n: limit },
        animationEvent: { type: 'COMPUTE', inputs: ['i'], operator: '+ 1', result: i, storeIn: 'i' },
      });
    }

    steps.push({
      step: steps.length + 1, lineNum: 3,
      explanationEnglish: `Check condition: is ${i} <= ${limit}? This is False. The loop exits.`,
      explanationHinglish: `Kya ${i} <= ${limit} hai? False. Loop yahin band ho gaya.`,
      memorySnapshot: { i, n: limit },
      animationEvent: { type: 'COMPUTE', inputs: ['i', 'n'], operator: '<=', result: 'False', storeIn: 'Condition' },
    });

    return steps;
  },
  executionSteps: []
};