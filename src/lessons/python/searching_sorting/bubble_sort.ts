import type { LessonProgram, ExecutionStep } from '../../types';

export const bubble_sort: LessonProgram = {
  id: 'bubble_sort', language: 'python', topic: 'searching_sorting', lessonNumber: 3,
  friendlyName: 'Bubble Sort',
  learningObjective: 'Learn how bubble sort repeatedly steps through the list, compares adjacent elements and swaps them.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'arr' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '50, 20, 40, 10, 30' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'len' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'in' }, { type: 'text', value: ' ' }, { type: 'function', value: 'range' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'n' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'j' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'in' }, { type: 'text', value: ' ' }, { type: 'function', value: 'range' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'operator', value: '-' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '-' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'j' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'j' }, { type: 'operator', value: '+' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'temp' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'j' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'j' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'j' }, { type: 'operator', value: '+' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'j' }, { type: 'operator', value: '+' }, { type: 'number', value: '1' }, { type: 'punctuation', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'temp' }] },
    { lineNum: 9, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    arr: { default: '50, 20, 40, 10, 30', type: 'text', label: 'Array to Sort', noQuotes: true },
  },
  generateSteps: ({ arr }): ExecutionStep[] => {
    let items: Array<number> = [50, 20, 40, 10, 30];
    const rawVal = String(arr).trim();
    const cleaned = rawVal.replace(/[\[\]]/g, '').trim();
    if (cleaned) {
      items = cleaned.split(',').map(s => {
        const n = Number(s.trim());
        return isNaN(n) ? 0 : n;
      });
    }

    const formatListStr = (a: Array<number>) => {
      return "[" + a.join(', ') + "]";
    };

    let arrStr = formatListStr(items);
    const n = items.length;

    let stepNum = 1;
    const steps: ExecutionStep[] = [];
    const sortedIndices: number[] = [];
    const passSnapshots: Array<{ pass: number; lockedIndex: number; lockedValue: number; array: number[] }> = [];

    let mem: Record<string, any> = {
      arr: arrStr,
      n,
      sortedIndices: [...sortedIndices],
      passSnapshots: [...passSnapshots],
    };

    // Step 1: Create arr
    steps.push({
      step: stepNum++, lineNum: 1,
      explanationEnglish: `Initialize unsorted array: ${arrStr}.`,
      explanationHinglish: `Unsorted array banaya: ${arrStr}.`,
      memorySnapshot: { ...mem, sortedIndices: [...sortedIndices], passSnapshots: [...passSnapshots] },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'arr', value: arrStr },
    });

    // Step 2: Create n
    mem.n = n;
    steps.push({
      step: stepNum++, lineNum: 2,
      explanationEnglish: `Calculate array length n = ${n}.`,
      explanationHinglish: `Array ki length n = ${n} nikali.`,
      memorySnapshot: { ...mem, sortedIndices: [...sortedIndices], passSnapshots: [...passSnapshots] },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'n', value: n },
    });

    for (let i = 0; i < n - 1; i++) {
      mem.i = i;

      // Step 3: Outer loop pass i
      steps.push({
        step: stepNum++, lineNum: 3,
        explanationEnglish: `Pass ${i + 1} of ${n - 1}: Floating largest unsorted element to index ${n - 1 - i}.`,
        explanationHinglish: `Pass ${i + 1} of ${n - 1}: Sabse bada unsorted element index ${n - 1 - i} ki taraf float karega.`,
        memorySnapshot: { ...mem, sortedIndices: [...sortedIndices], passSnapshots: [...passSnapshots] },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'i', value: i },
      });

      for (let j = 0; j < n - 1 - i; j++) {
        mem.j = j;

        // Step 4: Inner loop j
        steps.push({
          step: stepNum++, lineNum: 4,
          explanationEnglish: `Comparing adjacent pair: arr[${j}] (${items[j]}) and arr[${j + 1}] (${items[j + 1]}).`,
          explanationHinglish: `Aas-paas ke pair ko compare kar rahe hain: arr[${j}] (${items[j]}) aur arr[${j + 1}] (${items[j + 1]}).`,
          memorySnapshot: {
            ...mem,
            comparingIndices: [j, j + 1],
            sortedIndices: [...sortedIndices],
            passSnapshots: [...passSnapshots],
          },
          animationEvent: { type: 'CREATE_VARIABLE', name: 'j', value: j },
        });

        // Step 5: Check arr[j] > arr[j+1]
        const isSwap = items[j] > items[j + 1];
        steps.push({
          step: stepNum++, lineNum: 5,
          explanationEnglish: `Check if arr[${j}] (${items[j]}) > arr[${j + 1}] (${items[j + 1]}): ${isSwap ? 'TRUE (Swap needed)' : 'FALSE (No swap)'}.`,
          explanationHinglish: `Check kiya kya arr[${j}] (${items[j]}) > arr[${j + 1}] (${items[j + 1]}): ${isSwap ? 'SAHI (Swap karenge)' : 'GALAT (Swap nahi hoga)'}.`,
          memorySnapshot: {
            ...mem,
            comparingIndices: [j, j + 1],
            sortedIndices: [...sortedIndices],
            passSnapshots: [...passSnapshots],
          },
          animationEvent: { type: 'COMPUTE', inputs: [`arr[${j}]`, `arr[${j + 1}]`], operator: '>', result: isSwap ? 'True' : 'False', storeIn: 'Condition' },
        });

        if (isSwap) {
          const valJ = items[j];
          const valJNext = items[j + 1];

          // Perform actual swap in array
          items[j] = valJNext;
          items[j + 1] = valJ;
          const prevArrStr = arrStr;
          arrStr = formatListStr(items);
          mem.arr = arrStr;

          // Single clean Swap step
          steps.push({
            step: stepNum++, lineNum: 8,
            explanationEnglish: `Swapped arr[${j}] (${valJ}) ⇄ arr[${j + 1}] (${valJNext}). New array: ${arrStr}.`,
            explanationHinglish: `Swap kiya: arr[${j}] (${valJ}) ⇄ arr[${j + 1}] (${valJNext}). Naya array: ${arrStr}.`,
            memorySnapshot: { ...mem, swappingIndices: [j, j + 1], sortedIndices: [...sortedIndices], passSnapshots: [...passSnapshots] },
            animationEvent: { type: 'UPDATE_VARIABLE', name: 'arr', oldValue: prevArrStr, newValue: arrStr },
          });
        }
      }

      // Lock element at end of pass i
      const lockedIdx = n - 1 - i;
      sortedIndices.push(lockedIdx);
      passSnapshots.push({
        pass: i + 1,
        lockedIndex: lockedIdx,
        lockedValue: items[lockedIdx],
        array: [...items],
      });

      mem.sortedIndices = [...sortedIndices];
      mem.passSnapshots = [...passSnapshots];
    }

    // Lock index 0 (final element)
    if (!sortedIndices.includes(0)) {
      sortedIndices.push(0);
    }

    // Step 9: Print sorted array
    steps.push({
      step: stepNum++, lineNum: 9,
      explanationEnglish: `🎉 Bubble sort complete! Array is 100% sorted: ${arrStr}.`,
      explanationHinglish: `🎉 Bubble sort poora hua! Array 100% sort ho gaya: ${arrStr}.`,
      memorySnapshot: { ...mem, sortedIndices: [...sortedIndices], passSnapshots: [...passSnapshots] },
      consoleOutput: arrStr,
      animationEvent: { type: 'PRINT_VALUE', variableName: 'arr', outputValue: arrStr },
    });

    return steps;
  },
  executionSteps: [],
};