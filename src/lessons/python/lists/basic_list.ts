import type { LessonProgram, ExecutionStep } from '../../types';

export const basic_list: LessonProgram = {
  id: 'basic_list', language: 'python', topic: 'lists', lessonNumber: 1,
  friendlyName: 'Basic List Operations',
  learningObjective: 'Learn how to create, access, update, and traverse a Python list.',
  lines: [
    { lineNum: 1, tokens: [
      { type: 'variable', value: 'numbers' }, 
      { type: 'text', value: ' ' }, 
      { type: 'operator', value: '=' }, 
      { type: 'text', value: ' ' }, 
      { type: 'punctuation', value: '[' }, 
      { type: 'number', value: '10, 20, 30' }, 
      { type: 'punctuation', value: ']' }
    ] },
    { lineNum: 2, tokens: [
      { type: 'function', value: 'print' }, 
      { type: 'punctuation', value: '(' }, 
      { type: 'variable', value: 'numbers' }, 
      { type: 'punctuation', value: '[' }, 
      { type: 'number', value: '0' }, 
      { type: 'punctuation', value: ']' }, 
      { type: 'punctuation', value: ')' }
    ] },
    { lineNum: 3, tokens: [
      { type: 'variable', value: 'numbers' }, 
      { type: 'punctuation', value: '[' }, 
      { type: 'number', value: '1' }, 
      { type: 'punctuation', value: ']' }, 
      { type: 'text', value: ' ' }, 
      { type: 'operator', value: '=' }, 
      { type: 'text', value: ' ' }, 
      { type: 'number', value: '25' }
    ] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'length' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'len' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'numbers' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 5, tokens: [{ type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'in' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'numbers' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'num' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    numbers: { default: '10, 20, 30', type: 'text', label: 'Numbers List' },
    index_access: { default: 0, min: 0, max: 20, type: 'number', label: 'Access Index' },
    index_update: { default: 1, min: 0, max: 20, type: 'number', label: 'Update Index' },
    val_update: { default: 25, min: -999, max: 999, type: 'number', label: 'Update Value' },
  },
  generateSteps: ({ numbers, index_access, index_update, val_update }): ExecutionStep[] => {
    let listItems: Array<number | string> = [10, 20, 30];
    const rawVal = String(numbers).trim();
    
    const cleaned = rawVal.replace(/[\[\]]/g, '').trim();
    if (cleaned) {
      listItems = cleaned.split(',').map(s => {
        const v = s.trim();
        return isNaN(Number(v)) ? v.replace(/['"]/g, '') : Number(v);
      });
    }

    // Dynamic bounds checking
    const idxAccess = Math.max(0, Math.min(listItems.length - 1, Number(index_access) ?? 0));
    const idxUpdate = Math.max(0, Math.min(listItems.length - 1, Number(index_update) ?? 0));
    const valUpdate = val_update !== undefined ? Number(val_update) : 25;

    const firstListStr = `"[${listItems.join(', ')}]"`;
    const firstElement = listItems[idxAccess];

    const oldIndexVal = listItems[idxUpdate];
    const updatedList = [...listItems];
    updatedList[idxUpdate] = valUpdate;
    const updatedListStr = `"[${updatedList.join(', ')}]"`;

    const size = updatedList.length;
    let stepNum = 1;
    const steps: ExecutionStep[] = [
      {
        step: stepNum++, lineNum: 1,
        explanationEnglish: `Create list numbers containing: [${listItems.join(', ')}].`,
        explanationHinglish: `numbers naam ka list banaya jisme elements hain: [${listItems.join(', ')}].`,
        memorySnapshot: { numbers: firstListStr },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'numbers', value: firstListStr },
      },
      {
        step: stepNum++, lineNum: 2,
        explanationEnglish: `Access element at index ${idxAccess} (which is ${firstElement}) and print it.`,
        explanationHinglish: `Index ${idxAccess} ka element (${firstElement}) access kiya aur console pe print kiya.`,
        memorySnapshot: { numbers: firstListStr },
        consoleOutput: String(firstElement),
        animationEvent: { type: 'PRINT_VALUE', variableName: `numbers[${idxAccess}]`, outputValue: firstElement },
      },
      {
        step: stepNum++, lineNum: 3,
        explanationEnglish: `Update element at index ${idxUpdate} from ${oldIndexVal} to ${valUpdate}.`,
        explanationHinglish: `Index ${idxUpdate} ke element ko ${oldIndexVal} se badal kar ${valUpdate} kar diya.`,
        memorySnapshot: { numbers: updatedListStr },
        animationEvent: { type: 'UPDATE_ARRAY_INDEX', arrayName: 'numbers', index: idxUpdate, oldValue: oldIndexVal, newValue: valUpdate },
      },
      {
        step: stepNum++, lineNum: 4,
        explanationEnglish: `Calculate total elements in list using len(): Size = ${size}.`,
        explanationHinglish: `len() function se list ki size calculate ki: Size = ${size}.`,
        memorySnapshot: { numbers: updatedListStr, length: size },
        animationEvent: { type: 'COMPUTE', inputs: ['numbers'], operator: 'len()', result: size, storeIn: 'length' },
      }
    ];

    let outputs = [String(firstElement)];
    for (let i = 0; i < updatedList.length; i++) {
      const currentVal = updatedList[i];
      const snapshot: Record<string, string | number> = { 
        numbers: updatedListStr, 
        length: size, 
        num: typeof currentVal === 'string' ? `"${currentVal}"` : currentVal 
      };

      steps.push({
        step: stepNum++, lineNum: 5,
        explanationEnglish: `Loop iteration: read element at index ${i} which is ${currentVal}.`,
        explanationHinglish: `Loop iteration: index ${i} ka element ${currentVal} padha.`,
        memorySnapshot: { ...snapshot },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'num', value: typeof currentVal === 'string' ? `"${currentVal}"` : currentVal },
      });

      outputs.push(String(currentVal));
      steps.push({
        step: stepNum++, lineNum: 6,
        explanationEnglish: `Print the current element value: ${currentVal}.`,
        explanationHinglish: `Current element value ${currentVal} print kiya.`,
        memorySnapshot: { ...snapshot },
        consoleOutput: outputs.join('\n'),
        animationEvent: { type: 'PRINT_VALUE', variableName: 'num', outputValue: typeof currentVal === 'string' ? `"${currentVal}"` : currentVal },
      });
    }

    return steps;
  },
  executionSteps: [],
};