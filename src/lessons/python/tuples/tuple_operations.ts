import type { LessonProgram, ExecutionStep } from '../../types';

export const tuple_operations: LessonProgram = {
  id: 'tuple_operations', language: 'python', topic: 'tuples', lessonNumber: 3,
  friendlyName: 'Tuple Operations',
  learningObjective: 'Learn how to use tuple methods like count() and index(), and check membership.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'data' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '5, 10, 5, 20, 5' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'c_five' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'data' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'count' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'c_five' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'idx_twenty' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'data' }, { type: 'punctuation', value: '.' }, { type: 'function', value: 'index' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'idx_twenty' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 6, tokens: [{ type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'in' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'data' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Found"' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    data: { default: '5, 10, 5, 20, 5', type: 'text', label: 'Tuple Elements', noQuotes: true }
  },
  generateSteps: ({ data }): ExecutionStep[] => {
    let items: Array<number | string> = [5, 10, 5, 20, 5];
    const rawVal = String(data).trim();
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
    const count5 = items.filter(x => String(x) === '5').length;
    const foundIdx20 = items.findIndex(x => String(x) === '20');
    const idx20 = foundIdx20 !== -1 ? foundIdx20 : 'Not Found';
    const has10 = items.some(x => String(x) === '10');

    let stepNum = 1;
    const steps: ExecutionStep[] = [];

    // Step 1: Create tuple
    steps.push({
      step: stepNum++, lineNum: 1,
      explanationEnglish: `Create tuple data with elements: ${tupleStr}.`,
      explanationHinglish: `data naam ka tuple banaya jisme elements hain: ${tupleStr}.`,
      memorySnapshot: { data: tupleStr },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'data', value: tupleStr },
    });

    // Step 2: c_five = data.count(5)
    steps.push({
      step: stepNum++, lineNum: 2,
      explanationEnglish: `Use count(5) to count how many times 5 appears in tuple: ${count5}.`,
      explanationHinglish: `count(5) se check kiya ki 5 kitni baar aaya hai: ${count5}.`,
      memorySnapshot: { data: tupleStr, c_five: count5 },
      animationEvent: { type: 'COMPUTE', inputs: ['data', '5'], operator: 'count()', result: count5, storeIn: 'c_five' },
    });

    // Step 3: Print c_five
    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: `Print the count result c_five: ${count5}.`,
      explanationHinglish: `Count ka result print kiya: ${count5}.`,
      memorySnapshot: { data: tupleStr, c_five: count5 },
      consoleOutput: String(count5),
      animationEvent: { type: 'PRINT_VALUE', variableName: 'c_five', outputValue: count5 },
    });

    // Step 4: idx_twenty = data.index(20)
    steps.push({
      step: stepNum++, lineNum: 4,
      explanationEnglish: `Use index(20) to find index of 20: ${idx20}.`,
      explanationHinglish: `index(20) se pata lagaya ki 20 kis index par hai: ${idx20}.`,
      memorySnapshot: { data: tupleStr, c_five: count5, idx_twenty: idx20 },
      animationEvent: { type: 'COMPUTE', inputs: ['data', '20'], operator: 'index()', result: idx20, storeIn: 'idx_twenty' },
    });

    // Step 5: Print idx_twenty
    steps.push({
      step: stepNum++, lineNum: 5,
      explanationEnglish: `Print the index of 20: ${idx20}.`,
      explanationHinglish: `20 ka index print kiya: ${idx20}.`,
      memorySnapshot: { data: tupleStr, c_five: count5, idx_twenty: idx20 },
      consoleOutput: `${count5}\n${idx20}`,
      animationEvent: { type: 'PRINT_VALUE', variableName: 'idx_twenty', outputValue: idx20 },
    });

    // Step 6: check 10 in data
    steps.push({
      step: stepNum++, lineNum: 6,
      explanationEnglish: `Check if 10 is inside tuple using "in" keyword: ${has10 ? 'True' : 'False'}.`,
      explanationHinglish: `"in" keyword ka use karke check kiya kya 10 tuple mein hai: ${has10 ? 'True' : 'False'}.`,
      memorySnapshot: { data: tupleStr, c_five: count5, idx_twenty: idx20 },
      animationEvent: { type: 'COMPUTE', inputs: ['10', 'data'], operator: 'in', result: has10 ? 'True' : 'False', storeIn: 'Condition' },
    });

    if (has10) {
      // Step 7: Print "Found"
      steps.push({
        step: stepNum++, lineNum: 7,
        explanationEnglish: `Condition passed! Print "Found".`,
        explanationHinglish: `Condition sahi nikli! "Found" print kiya.`,
        memorySnapshot: { data: tupleStr, c_five: count5, idx_twenty: idx20 },
        consoleOutput: `${count5}\n${idx20}\nFound`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'output', outputValue: '"Found"' },
      });
    }

    return steps;
  },
  executionSteps: [],
};