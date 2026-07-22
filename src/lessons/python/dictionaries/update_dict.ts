import type { LessonProgram, ExecutionStep } from '../../types';

export const update_dict: LessonProgram = {
  id: 'update_dict', language: 'python', topic: 'dictionaries', lessonNumber: 2,
  friendlyName: 'Update and Delete Dictionary',
  learningObjective: 'Learn how to modify dictionary values, add new keys, and remove keys using del.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'user' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'string', value: '"Name": "Rahul", "Age": 20' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'user' }, { type: 'punctuation', value: '[' }, { type: 'string', value: '"Age"' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '21' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'user' }, { type: 'punctuation', value: '[' }, { type: 'string', value: '"Marks"' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '92' }] },
    { lineNum: 4, tokens: [{ type: 'keyword', value: 'del' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'user' }, { type: 'punctuation', value: '[' }, { type: 'string', value: '"Age"' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'user' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    user: { default: '"Name": "Rahul", "Age": 20', type: 'text', label: 'Initial Dictionary', noQuotes: true }
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

    const initialStr = formatDictStr(dictObj);
    
    // Step 1: Create dict
    let stepNum = 1;
    const steps: ExecutionStep[] = [];
    steps.push({
      step: stepNum++, lineNum: 1,
      explanationEnglish: `Create dictionary user: ${initialStr}.`,
      explanationHinglish: `Dictionary user banayi: ${initialStr}.`,
      memorySnapshot: { user: initialStr },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'user', value: initialStr },
    });

    // Step 2: Update Age to 21
    const updatedObj = { ...dictObj, Age: 21 };
    const step2Str = formatDictStr(updatedObj);
    steps.push({
      step: stepNum++, lineNum: 2,
      explanationEnglish: `Update the Age value to 21.`,
      explanationHinglish: `Age ki value ko update karke 21 kar diya.`,
      memorySnapshot: { user: step2Str },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'user', oldValue: initialStr, newValue: step2Str },
    });

    // Step 3: Add Marks = 92
    const step3Obj = { ...updatedObj, Marks: 92 };
    const step3Str = formatDictStr(step3Obj);
    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: `Add a new key-value pair: Marks = 92.`,
      explanationHinglish: `Ek naya key-value pair joda: Marks = 92.`,
      memorySnapshot: { user: step3Str },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'user', oldValue: step2Str, newValue: step3Str },
    });

    // Step 4: Delete Age
    const { Age, ...step4Obj } = step3Obj;
    const step4Str = formatDictStr(step4Obj);
    steps.push({
      step: stepNum++, lineNum: 4,
      explanationEnglish: `Delete key "Age" and its value using del.`,
      explanationHinglish: `del keyword se "Age" key ko hata diya.`,
      memorySnapshot: { user: step4Str },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'user', oldValue: step3Str, newValue: step4Str },
    });

    // Step 5: Print updated dict
    steps.push({
      step: stepNum++, lineNum: 5,
      explanationEnglish: `Print the final updated dictionary: ${step4Str}.`,
      explanationHinglish: `Update ki gayi dictionary print ki: ${step4Str}.`,
      memorySnapshot: { user: step4Str },
      consoleOutput: step4Str,
      animationEvent: { type: 'PRINT_VALUE', variableName: 'user', outputValue: step4Str },
    });

    return steps;
  },
  executionSteps: [],
};