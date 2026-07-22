import type { LessonProgram, ExecutionStep } from '../../types';

export const create_tuple: LessonProgram = {
  id: 'create_tuple', language: 'python', topic: 'tuples', lessonNumber: 1,
  friendlyName: 'Create and Display Tuple',
  learningObjective: 'Learn how to create a tuple, print it, and access its elements.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'colors' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Red", "Green", "Blue"' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'colors' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'colors' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'length' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'len' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'colors' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'length' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    colors: { default: '"Red", "Green", "Blue"', type: 'text', label: 'Tuple Items', noQuotes: true }
  },
  generateSteps: ({ colors }): ExecutionStep[] => {
    let items: Array<string | number> = ['Red', 'Green', 'Blue'];
    const rawVal = String(colors).trim();
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
    const firstItem = items[0] !== undefined ? items[0] : 'Red';
    const firstItemOutput = typeof firstItem === 'string' ? firstItem : String(firstItem);
    const size = items.length;

    let stepNum = 1;
    const steps: ExecutionStep[] = [];

    // Step 1: Create tuple
    steps.push({
      step: stepNum++, lineNum: 1,
      explanationEnglish: `Create immutable tuple colors containing: ${tupleStr}.`,
      explanationHinglish: `colors naam ka tuple banaya jisme elements hain: ${tupleStr}.`,
      memorySnapshot: { colors: tupleStr },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'colors', value: tupleStr },
    });

    // Step 2: Print colors
    steps.push({
      step: stepNum++, lineNum: 2,
      explanationEnglish: `Print the entire tuple: ${tupleStr}.`,
      explanationHinglish: `Poora tuple print kiya: ${tupleStr}.`,
      memorySnapshot: { colors: tupleStr },
      consoleOutput: tupleStr,
      animationEvent: { type: 'PRINT_VALUE', variableName: 'colors', outputValue: tupleStr },
    });

    // Step 3: Print colors[0]
    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: `Access first element at index 0 (${firstItemOutput}) and print it.`,
      explanationHinglish: `Index 0 ke element (${firstItemOutput}) ko access karke print kiya.`,
      memorySnapshot: { colors: tupleStr },
      consoleOutput: `${tupleStr}\n${firstItemOutput}`,
      animationEvent: { type: 'PRINT_VALUE', variableName: 'colors[0]', outputValue: typeof firstItem === 'string' ? `"${firstItem}"` : firstItem },
    });

    // Step 4: length = len(colors)
    steps.push({
      step: stepNum++, lineNum: 4,
      explanationEnglish: `Calculate total elements in tuple using len(): length = ${size}.`,
      explanationHinglish: `len() function se tuple ki length nikali: length = ${size}.`,
      memorySnapshot: { colors: tupleStr, length: size },
      animationEvent: { type: 'COMPUTE', inputs: ['colors'], operator: 'len()', result: size, storeIn: 'length' },
    });

    // Step 5: Print length
    steps.push({
      step: stepNum++, lineNum: 5,
      explanationEnglish: `Print the tuple length: ${size}.`,
      explanationHinglish: `Tuple ki length print ki: ${size}.`,
      memorySnapshot: { colors: tupleStr, length: size },
      consoleOutput: `${tupleStr}\n${firstItemOutput}\n${size}`,
      animationEvent: { type: 'PRINT_VALUE', variableName: 'length', outputValue: size },
    });

    return steps;
  },
  executionSteps: [],
};