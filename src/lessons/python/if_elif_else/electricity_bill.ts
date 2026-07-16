import type { LessonProgram, ExecutionStep } from '../../types';

export const electricity_bill: LessonProgram = {
  id: 'electricity_bill', language: 'python', topic: 'if_elif_else', lessonNumber: 4,
  friendlyName: 'Electricity Bill Calculator',
  learningObjective: 'Calculate cumulative cost based on real-world electricity slab rates.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'units' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '150' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'bill' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'units' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'number', value: '100' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'bill' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'units' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }] },
    { lineNum: 5, tokens: [{ type: 'keyword', value: 'elif' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'units' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'number', value: '200' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'bill' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '500' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'units' }, { type: 'text', value: ' ' }, { type: 'operator', value: '-' }, { type: 'text', value: ' ' }, { type: 'number', value: '100' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'number', value: '7' }] },
    { lineNum: 7, tokens: [{ type: 'keyword', value: 'else' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'bill' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1200' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'units' }, { type: 'text', value: ' ' }, { type: 'operator', value: '-' }, { type: 'text', value: ' ' }, { type: 'number', value: '200' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }] },
    { lineNum: 9, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'bill' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    units: { default: 150, min: 0, max: 9999, label: 'Units Consumed' },
  },
  generateSteps: ({ units }): ExecutionStep[] => {
    const snap1: Record<string, string | number> = { units };
    const snap2: Record<string, string | number> = { units, bill: 0 };
    const steps: ExecutionStep[] = [
      {
        step: 1, lineNum: 1,
        explanationEnglish: `Store ${units} in "units".`,
        explanationHinglish: `"units" mein ${units} save kiya.`,
        memorySnapshot: snap1,
        animationEvent: { type: 'CREATE_VARIABLE', name: 'units', value: units },
      },
      {
        step: 2, lineNum: 2,
        explanationEnglish: 'Initialize "bill" variable with 0.',
        explanationHinglish: '"bill" variable ko 0 se initialize kiya.',
        memorySnapshot: snap2,
        animationEvent: { type: 'CREATE_VARIABLE', name: 'bill', value: 0 },
      },
      {
        step: 3, lineNum: 3,
        explanationEnglish: `Check if units <= 100. (${units} <= 100 is ${units <= 100 ? 'True' : 'False'}).`,
        explanationHinglish: `Kya units 100 se kam ya barabar hain? Yeh ${units <= 100 ? 'True' : 'False'} hai.`,
        memorySnapshot: snap2,
        animationEvent: { type: 'COMPUTE', inputs: ['units'], operator: '<= 100', result: units <= 100 ? 'True' : 'False', storeIn: 'Condition' },
      },
    ];

    let billVal = 0;
    if (units <= 100) {
      billVal = units * 5;
      const snapBill: Record<string, string | number> = { units, bill: billVal };
      steps.push(
        {
          step: 4, lineNum: 4,
          explanationEnglish: `Calculate cost: ${units} units * 5 = ${billVal}.`,
          explanationHinglish: `Bill calculate kiya: ${units} units * 5 = ${billVal}.`,
          memorySnapshot: snap2,
          animationEvent: { type: 'COMPUTE', inputs: [`${units} units`, '5'], operator: '*', result: billVal, storeIn: 'Calculation' },
        },
        {
          step: 5, lineNum: 4,
          explanationEnglish: `Update bill variable to ${billVal}.`,
          explanationHinglish: `Bill variable ko update karke ${billVal} kiya.`,
          memorySnapshot: snapBill,
          animationEvent: { type: 'UPDATE_VARIABLE', name: 'bill', oldValue: 0, newValue: billVal },
        },
        {
          step: 6, lineNum: 9,
          explanationEnglish: `Print the final cumulative bill amount (${billVal}).`,
          explanationHinglish: `Final bill amount (${billVal}) print kiya.`,
          memorySnapshot: snapBill,
          consoleOutput: String(billVal),
          animationEvent: { type: 'PRINT_VALUE', variableName: 'bill', outputValue: billVal },
        }
      );
    } else {
      steps.push({
        step: 4, lineNum: 5,
        explanationEnglish: `Check if units <= 200. (${units} <= 200 is ${units <= 200 ? 'True' : 'False'}).`,
        explanationHinglish: `Kya units 200 ya usse kam hain? Yeh ${units <= 200 ? 'True' : 'False'} hai.`,
        memorySnapshot: snap2,
        animationEvent: { type: 'COMPUTE', inputs: ['units'], operator: '<= 200', result: units <= 200 ? 'True' : 'False', storeIn: 'Condition' },
      });

      if (units <= 200) {
        const base = 500;
        const extraUnits = units - 100;
        const extraCost = extraUnits * 7;
        billVal = base + extraCost;
        const snapBill: Record<string, string | number> = { units, bill: billVal };
        steps.push(
          {
            step: 5, lineNum: 6,
            explanationEnglish: `Calculate cost: 500 + (${units} - 100) * 7 = 500 + ${extraUnits} * 7 = ${billVal}.`,
            explanationHinglish: `Bill nikala: 500 + (${units} - 100) * 7 = 500 + ${extraUnits} * 7 = ${billVal}.`,
            memorySnapshot: snap2,
            animationEvent: { type: 'COMPUTE', inputs: ['500', `${extraUnits}*7`], operator: '+', result: billVal, storeIn: 'Calculation' },
          },
          {
            step: 6, lineNum: 6,
            explanationEnglish: `Update bill variable to ${billVal}.`,
            explanationHinglish: `Bill variable ko update karke ${billVal} kiya.`,
            memorySnapshot: snapBill,
            animationEvent: { type: 'UPDATE_VARIABLE', name: 'bill', oldValue: 0, newValue: billVal },
          },
          {
            step: 7, lineNum: 9,
            explanationEnglish: `Print the final bill amount (${billVal}).`,
            explanationHinglish: `Final bill amount (${billVal}) print kiya.`,
            memorySnapshot: snapBill,
            consoleOutput: String(billVal),
            animationEvent: { type: 'PRINT_VALUE', variableName: 'bill', outputValue: billVal },
          }
        );
      } else {
        const base = 1200;
        const extraUnits = units - 200;
        const extraCost = extraUnits * 10;
        billVal = base + extraCost;
        const snapBill: Record<string, string | number> = { units, bill: billVal };
        steps.push(
          {
            step: 5, lineNum: 7,
            explanationEnglish: 'Skip elif block, jump to else because units is greater than 200.',
            explanationHinglish: 'Elif block skip kiya aur else block par jump kiya kyunki units 200 se bada hai.',
            memorySnapshot: snap2,
            animationEvent: { type: 'NONE' },
          },
          {
            step: 6, lineNum: 8,
            explanationEnglish: `Calculate cost: 1200 + (${units} - 200) * 10 = 1200 + ${extraUnits} * 10 = ${billVal}.`,
            explanationHinglish: `Bill nikala: 1200 + (${units} - 200) * 10 = 1200 + ${extraUnits} * 10 = ${billVal}.`,
            memorySnapshot: snap2,
            animationEvent: { type: 'COMPUTE', inputs: ['1200', `${extraUnits}*10`], operator: '+', result: billVal, storeIn: 'Calculation' },
          },
          {
            step: 7, lineNum: 8,
            explanationEnglish: `Update bill variable to ${billVal}.`,
            explanationHinglish: `Bill variable ko update karke ${billVal} kiya.`,
            memorySnapshot: snapBill,
            animationEvent: { type: 'UPDATE_VARIABLE', name: 'bill', oldValue: 0, newValue: billVal },
          },
          {
            step: 8, lineNum: 9,
            explanationEnglish: `Print the final bill amount (${billVal}).`,
            explanationHinglish: `Final bill amount (${billVal}) print kiya.`,
            memorySnapshot: snapBill,
            consoleOutput: String(billVal),
            animationEvent: { type: 'PRINT_VALUE', variableName: 'bill', outputValue: billVal },
          }
        );
      }
    }
    return steps;
  },
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'Store 150 in "units".',
      explanationHinglish: '"units" mein 150 save kiya.',
      memorySnapshot: { units: 150 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'units', value: 150 },
    },
  ],
};
