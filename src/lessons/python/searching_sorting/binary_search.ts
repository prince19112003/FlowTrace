import type { LessonProgram, ExecutionStep } from '../../types';

export const binary_search: LessonProgram = {
  id: 'binary_search', language: 'python', topic: 'searching_sorting', lessonNumber: 2,
  friendlyName: 'Binary Search',
  learningObjective: 'Learn how binary search repeatedly divides a sorted array in half to find a target.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'arr' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '10, 20, 30, 40, 50, 60' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'target' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '50' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'low' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'high' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'len' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'operator', value: '-' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }] },
    { lineNum: 5, tokens: [{ type: 'keyword', value: 'while' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'low' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'high' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'mid' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'low' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'high' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'operator', value: '//' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'mid' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '==' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'target' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'string', value: 'f"Found at index {mid}"' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'break' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'elif' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'mid' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'target' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 11, tokens: [{ type: 'text', value: '        ' }, { type: 'variable', value: 'low' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'mid' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }] },
    { lineNum: 12, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'else' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 13, tokens: [{ type: 'text', value: '        ' }, { type: 'variable', value: 'high' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'mid' }, { type: 'text', value: ' ' }, { type: 'operator', value: '-' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }] },
  ],
  editableVariables: {
    arr: { default: '10, 20, 30, 40, 50, 60', type: 'text', label: 'Sorted Array', noQuotes: true },
    target: { default: 50, label: 'Search Target' },
  },
  generateSteps: ({ arr, target }): ExecutionStep[] => {
    let items: Array<number> = [10, 20, 30, 40, 50, 60];
    const rawVal = String(arr).trim();
    const cleaned = rawVal.replace(/[\[\]]/g, '').trim();
    if (cleaned) {
      items = cleaned.split(',').map(s => {
        const n = Number(s.trim());
        return isNaN(n) ? 0 : n;
      }).sort((a, b) => a - b);
    }

    const formatListStr = (a: Array<number>) => {
      return "[" + a.join(', ') + "]";
    };

    const arrStr = formatListStr(items);
    const targetVal = Number(target) || 50;

    let stepNum = 1;
    const steps: ExecutionStep[] = [];
    let mem: Record<string, string | number> = { arr: arrStr };

    // Step 1: Create arr
    steps.push({
      step: stepNum++, lineNum: 1,
      explanationEnglish: `Initialize sorted array: ${arrStr}.`,
      explanationHinglish: `Sorted array banaya: ${arrStr}.`,
      memorySnapshot: { ...mem },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'arr', value: arrStr },
    });

    // Step 2: Create target
    mem.target = targetVal;
    steps.push({
      step: stepNum++, lineNum: 2,
      explanationEnglish: `Set search target: ${targetVal}.`,
      explanationHinglish: `Search target set kiya: ${targetVal}.`,
      memorySnapshot: { ...mem },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'target', value: targetVal },
    });

    // Step 3: low = 0
    let low = 0;
    mem.low = low;
    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: `Initialize low pointer to 0.`,
      explanationHinglish: `Low pointer ko 0 se set kiya.`,
      memorySnapshot: { ...mem },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'low', value: 0 },
    });

    // Step 4: high = len(arr) - 1
    let high = items.length - 1;
    mem.high = high;
    steps.push({
      step: stepNum++, lineNum: 4,
      explanationEnglish: `Initialize high pointer to len(arr) - 1 = ${high}.`,
      explanationHinglish: `High pointer ko len(arr) - 1 = ${high} se set kiya.`,
      memorySnapshot: { ...mem },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'high', value: high },
    });

    let iter = 0;
    while (low <= high && iter < 10) {
      iter++;

      // Step 5: Check low <= high
      steps.push({
        step: stepNum++, lineNum: 5,
        explanationEnglish: `Check while low (${low}) <= high (${high}).`,
        explanationHinglish: `Check kiya kya low (${low}) <= high (${high}) hai.`,
        memorySnapshot: { ...mem },
        animationEvent: { type: 'COMPUTE', inputs: ['low', 'high'], operator: '<=', result: 'True', storeIn: 'Condition' },
      });

      // Step 6: mid = (low + high) // 2
      const mid = Math.floor((low + high) / 2);
      const prevMid = mem.mid;
      mem.mid = mid;
      steps.push({
        step: stepNum++, lineNum: 6,
        explanationEnglish: `Calculate mid = (${low} + ${high}) // 2 = ${mid}.`,
        explanationHinglish: `Mid pointer calculate kiya: mid = (${low} + ${high}) // 2 = ${mid}.`,
        memorySnapshot: { ...mem },
        animationEvent: prevMid !== undefined 
          ? { type: 'UPDATE_VARIABLE', name: 'mid', oldValue: prevMid, newValue: mid }
          : { type: 'CREATE_VARIABLE', name: 'mid', value: mid },
      });

      const midVal = items[mid];

      // Step 7: Check arr[mid] == target
      const isMatch = midVal === targetVal;
      steps.push({
        step: stepNum++, lineNum: 7,
        explanationEnglish: `Check if arr[${mid}] (${midVal}) == target (${targetVal}).`,
        explanationHinglish: `Check kiya kya arr[${mid}] (${midVal}) == target (${targetVal}) hai.`,
        memorySnapshot: { ...mem },
        animationEvent: { type: 'COMPUTE', inputs: [`arr[${mid}]`, 'target'], operator: '==', result: isMatch ? 'True' : 'False', storeIn: 'Condition' },
      });

      if (isMatch) {
        // Step 8: Print success
        const msg = `Found at index ${mid}`;
        steps.push({
          step: stepNum++, lineNum: 8,
          explanationEnglish: `Match found! Print "${msg}".`,
          explanationHinglish: `Match mil gaya! Print kiya: "${msg}".`,
          memorySnapshot: { ...mem },
          consoleOutput: msg,
          animationEvent: { type: 'PRINT_VALUE', variableName: 'output', outputValue: `"${msg}"` },
        });

        // Step 9: Break
        steps.push({
          step: stepNum++, lineNum: 9,
          explanationEnglish: `Break out of while loop.`,
          explanationHinglish: `Loop break kar diya.`,
          memorySnapshot: { ...mem },
          animationEvent: { type: 'NONE' },
        });
        break;
      } else if (midVal < targetVal) {
        // Step 10: check arr[mid] < target
        steps.push({
          step: stepNum++, lineNum: 10,
          explanationEnglish: `arr[${mid}] (${midVal}) < target (${targetVal}). Search right half.`,
          explanationHinglish: `arr[${mid}] (${midVal}) target se chhota hai. Right half mein dhoondhenge.`,
          memorySnapshot: { ...mem },
          animationEvent: { type: 'NONE' },
        });

        // Step 11: low = mid + 1
        const prevLow = low;
        low = mid + 1;
        mem.low = low;
        steps.push({
          step: stepNum++, lineNum: 11,
          explanationEnglish: `Update low = mid + 1 = ${low}.`,
          explanationHinglish: `Low ko update karke ${low} kar diya.`,
          memorySnapshot: { ...mem },
          animationEvent: { type: 'UPDATE_VARIABLE', name: 'low', oldValue: prevLow, newValue: low },
        });
      } else {
        // Step 12: else
        steps.push({
          step: stepNum++, lineNum: 12,
          explanationEnglish: `arr[${mid}] (${midVal}) > target (${targetVal}). Search left half.`,
          explanationHinglish: `arr[${mid}] (${midVal}) target se bada hai. Left half mein dhoondhenge.`,
          memorySnapshot: { ...mem },
          animationEvent: { type: 'NONE' },
        });

        // Step 13: high = mid - 1
        const prevHigh = high;
        high = mid - 1;
        mem.high = high;
        steps.push({
          step: stepNum++, lineNum: 13,
          explanationEnglish: `Update high = mid - 1 = ${high}.`,
          explanationHinglish: `High ko update karke ${high} kar diya.`,
          memorySnapshot: { ...mem },
          animationEvent: { type: 'UPDATE_VARIABLE', name: 'high', oldValue: prevHigh, newValue: high },
        });
      }
    }

    return steps;
  },
  executionSteps: [],
};