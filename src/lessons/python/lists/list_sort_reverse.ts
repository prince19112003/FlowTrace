import type { LessonProgram, ExecutionStep } from '../../types';

export const list_sort_reverse: LessonProgram = {
  id: 'list_sort_reverse', language: 'python', topic: 'lists', lessonNumber: 5,
  friendlyName: 'Sort and Reverse List',
  learningObjective: 'Learn how to rearrange list elements using the sort() and reverse() methods.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'arr' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '40, 10, 30, 20' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'arr' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'sort' }, { type: 'punctuation', value: '()' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'arr' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'reverse' }, { type: 'punctuation', value: '()' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    arr: { default: '40, 10, 30, 20', type: 'text', label: 'List Elements', noQuotes: true }
  },
  generateSteps: ({ arr }): ExecutionStep[] => {
    let listItems: Array<number | string> = [40, 10, 30, 20];
    const rawVal = String(arr).trim();
    const cleaned = rawVal.replace(/[\[\]]/g, '').trim();
    if (cleaned) {
      listItems = cleaned.split(',').map(s => {
        const v = s.trim();
        return isNaN(Number(v)) ? v.replace(/['"]/g, '') : Number(v);
      });
    }

    const formatPythonList = (items: Array<number | string>) => {
      return "[" + items.map(x => typeof x === 'string' ? `'${x}'` : x).join(', ') + "]";
    };

    const initialListStr = formatPythonList(listItems);

    const sortedList = [...listItems].sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') return a - b;
      return String(a).localeCompare(String(b));
    });
    const sortedListStr = formatPythonList(sortedList);

    const reversedList = [...sortedList].reverse();
    const reversedListStr = formatPythonList(reversedList);

    let stepNum = 1;
    return [
      {
        step: stepNum++, lineNum: 1,
        explanationEnglish: `Create list arr containing: ${initialListStr}.`,
        explanationHinglish: `arr naam ka list banaya jisme elements hain: ${initialListStr}.`,
        memorySnapshot: { arr: initialListStr },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'arr', value: initialListStr },
      },
      {
        step: stepNum++, lineNum: 2,
        explanationEnglish: `Sort the list in ascending order: ${sortedListStr}.`,
        explanationHinglish: `List ko ascending order mein sort kiya: ${sortedListStr}.`,
        memorySnapshot: { arr: sortedListStr },
        animationEvent: { type: 'COMPUTE', inputs: ['arr'], operator: 'sort()', result: sortedListStr, storeIn: 'arr' },
      },
      {
        step: stepNum++, lineNum: 3,
        explanationEnglish: `Print the sorted list.`,
        explanationHinglish: `Sorted list print kiya.`,
        memorySnapshot: { arr: sortedListStr },
        consoleOutput: sortedListStr,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'arr', outputValue: sortedListStr },
      },
      {
        step: stepNum++, lineNum: 4,
        explanationEnglish: `Reverse the sorted list: ${reversedListStr}.`,
        explanationHinglish: `List ko reverse order mein badla: ${reversedListStr}.`,
        memorySnapshot: { arr: reversedListStr },
        animationEvent: { type: 'COMPUTE', inputs: ['arr'], operator: 'reverse()', result: reversedListStr, storeIn: 'arr' },
      },
      {
        step: stepNum++, lineNum: 5,
        explanationEnglish: `Print the reversed list.`,
        explanationHinglish: `Reversed list print kiya.`,
        memorySnapshot: { arr: reversedListStr },
        consoleOutput: `${sortedListStr}\n${reversedListStr}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'arr', outputValue: reversedListStr },
      }
    ];
  },
  executionSteps: [],
};