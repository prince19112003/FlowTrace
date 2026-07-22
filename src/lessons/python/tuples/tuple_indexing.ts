import type { LessonProgram, ExecutionStep } from '../../types';

export const tuple_indexing: LessonProgram = {
  id: 'tuple_indexing', language: 'python', topic: 'tuples', lessonNumber: 2,
  friendlyName: 'Tuple Indexing and Slicing',
  learningObjective: 'Understand how to access tuple elements using positive indexes, negative indexes, and slicing.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'nums' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '10, 20, 30, 40, 50' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'nums' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'nums' }, { type: 'punctuation', value: '[' }, { type: 'operator', value: '-' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'sub' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'nums' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ':' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'sub' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    nums: { default: '10, 20, 30, 40, 50', type: 'text', label: 'Tuple Elements', noQuotes: true }
  },
  generateSteps: ({ nums }): ExecutionStep[] => {
    let items: Array<number | string> = [10, 20, 30, 40, 50];
    const rawVal = String(nums).trim();
    const cleaned = rawVal.replace(/[\(\)]/g, '').trim();
    if (cleaned) {
      items = cleaned.split(',').map(s => {
        const v = s.trim();
        return isNaN(Number(v)) ? v.replace(/['"]/g, '') : Number(v);
      });
    }

    const formatTupleStr = (arr: Array<string | number>) => {
      return "(" + arr.map(x => typeof x === 'string' ? `'${x}'` : x).join(', ') + ")";
    };

    const tupleStr = formatTupleStr(items);
    const pos1Idx = items.length > 1 ? 1 : 0;
    const pos1Val = items[pos1Idx] !== undefined ? items[pos1Idx] : 10;
    const neg1Idx = items.length > 0 ? items.length - 1 : 0;
    const neg1Val = items[neg1Idx] !== undefined ? items[neg1Idx] : 50;

    const slicedItems = items.slice(1, 3);
    const slicedTupleStr = formatTupleStr(slicedItems);

    let stepNum = 1;
    const steps: ExecutionStep[] = [];

    // Step 1: Create tuple
    steps.push({
      step: stepNum++, lineNum: 1,
      explanationEnglish: `Create tuple nums containing: ${tupleStr}.`,
      explanationHinglish: `nums naam ka tuple banaya jisme elements hain: ${tupleStr}.`,
      memorySnapshot: { nums: tupleStr },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'nums', value: tupleStr },
    });

    // Step 2: Print nums[1]
    steps.push({
      step: stepNum++, lineNum: 2,
      explanationEnglish: `Access element at positive index 1 (${pos1Val}) and print it.`,
      explanationHinglish: `Positive index 1 ka element (${pos1Val}) access karke print kiya.`,
      memorySnapshot: { nums: tupleStr },
      consoleOutput: String(pos1Val),
      animationEvent: { type: 'PRINT_VALUE', variableName: `nums[${pos1Idx}]`, outputValue: typeof pos1Val === 'string' ? `"${pos1Val}"` : pos1Val },
    });

    // Step 3: Print nums[-1]
    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: `Access element at negative index -1 (last element: ${neg1Val}) and print it.`,
      explanationHinglish: `Negative index -1 (aakhri element ${neg1Val}) access karke print kiya.`,
      memorySnapshot: { nums: tupleStr },
      consoleOutput: `${pos1Val}\n${neg1Val}`,
      animationEvent: { type: 'PRINT_VALUE', variableName: `nums[-1]`, outputValue: typeof neg1Val === 'string' ? `"${neg1Val}"` : neg1Val },
    });

    // Step 4: sub = nums[1:3]
    steps.push({
      step: stepNum++, lineNum: 4,
      explanationEnglish: `Slice tuple nums[1:3] from index 1 up to (not including) 3: ${slicedTupleStr}.`,
      explanationHinglish: `Tuple ko index 1 se 3 tak slice kiya: ${slicedTupleStr}.`,
      memorySnapshot: { nums: tupleStr, sub: slicedTupleStr },
      animationEvent: { type: 'COMPUTE', inputs: ['nums'], operator: '[1:3]', result: slicedTupleStr, storeIn: 'sub' },
    });

    // Step 5: Print sub
    steps.push({
      step: stepNum++, lineNum: 5,
      explanationEnglish: `Print the sliced tuple sub: ${slicedTupleStr}.`,
      explanationHinglish: `Slice kiya hua tuple sub print kiya: ${slicedTupleStr}.`,
      memorySnapshot: { nums: tupleStr, sub: slicedTupleStr },
      consoleOutput: `${pos1Val}\n${neg1Val}\n${slicedTupleStr}`,
      animationEvent: { type: 'PRINT_VALUE', variableName: 'sub', outputValue: slicedTupleStr },
    });

    return steps;
  },
  executionSteps: [],
};