import type { LessonProgram, ExecutionStep } from '../../types';

export const create_dict: LessonProgram = {
  id: 'create_dict', language: 'python', topic: 'dictionaries', lessonNumber: 1,
  friendlyName: 'Create and Access Dictionary',
  learningObjective: 'Learn how to create a key-value dictionary and access values using their keys.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'user' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'string', value: '"Name": "Rahul", "Age": 20' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'user' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'user' }, { type: 'punctuation', value: '[' }, { type: 'string', value: '"Name"' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    user: { default: '"Name": "Rahul", "Age": 20', type: 'text', label: 'Dictionary Pairs', noQuotes: true }
  },
  generateSteps: ({ user }): ExecutionStep[] => {
    let dictObj: Record<string, string | number> = { Name: 'Rahul', Age: 20 };
    const rawVal = String(user).trim();
    const cleaned = rawVal.replace(/[\{\}]/g, '').trim();
    if (cleaned) {
      const parsed: Record<string, string | number> = {};
      const pairs = cleaned.split(',');
      pairs.forEach(p => {
        const parts = p.split(':');
        if (parts.length === 2) {
          const k = parts[0].trim().replace(/['"]/g, '');
          const v = parts[1].trim();
          parsed[k] = isNaN(Number(v)) ? v.replace(/['"]/g, '') : Number(v);
        }
      });
      if (Object.keys(parsed).length > 0) {
        dictObj = parsed;
      }
    }

    const formatDictStr = (obj: Record<string, string | number>) => {
      const entries = Object.entries(obj).map(([k, v]) => `'${k}': ${typeof v === 'string' ? `'${v}'` : v}`);
      return "{" + entries.join(', ') + "}";
    };

    const dictStr = formatDictStr(dictObj);
    const firstKey = Object.keys(dictObj)[0] || 'Name';
    const firstVal = dictObj[firstKey] !== undefined ? dictObj[firstKey] : 'Rahul';
    const firstValOutput = typeof firstVal === 'string' ? firstVal : String(firstVal);

    let stepNum = 1;
    const steps: ExecutionStep[] = [];

    // Step 1: Create dictionary
    steps.push({
      step: stepNum++, lineNum: 1,
      explanationEnglish: `Create dictionary user with keys: ${Object.keys(dictObj).join(', ')}.`,
      explanationHinglish: `user naam ki dictionary banayi jisme keys hain: ${Object.keys(dictObj).join(', ')}.`,
      memorySnapshot: { user: dictStr },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'user', value: dictStr },
    });

    // Step 2: Print whole dictionary
    steps.push({
      step: stepNum++, lineNum: 2,
      explanationEnglish: `Print the entire dictionary user: ${dictStr}.`,
      explanationHinglish: `Poori dictionary user print ki: ${dictStr}.`,
      memorySnapshot: { user: dictStr },
      consoleOutput: dictStr,
      animationEvent: { type: 'PRINT_VALUE', variableName: 'user', outputValue: dictStr },
    });

    // Step 3: Access and print key
    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: `Access the value associated with key "${firstKey}" ("${firstValOutput}").`,
      explanationHinglish: `"${firstKey}" key ki value ("${firstValOutput}") access karke print kiya.`,
      memorySnapshot: { user: dictStr },
      consoleOutput: `${dictStr}\n${firstValOutput}`,
      animationEvent: { type: 'PRINT_VALUE', variableName: `user["${firstKey}"]`, outputValue: typeof firstVal === 'string' ? `"${firstVal}"` : firstVal },
    });

    return steps;
  },
  executionSteps: [],
};