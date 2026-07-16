import type { LessonProgram, ExecutionStep } from '../../types';

export const string_concat: LessonProgram = {
  id: 'string_concat', language: 'python', topic: 'strings', lessonNumber: 9,
  friendlyName: 'Concatenate Two Strings',
  learningObjective: 'Learn how to join multiple strings together using the + operator.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'word1' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Hello"' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'word2' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: '"World"' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'result' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'word1' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'string', value: '" "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'word2' }] },
    { lineNum: 4, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'result' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {
    word1: { default: '"Hello"', type: 'text', label: 'Word 1' },
    word2: { default: '"World"', type: 'text', label: 'Word 2' },
  },
  generateSteps: ({ word1, word2 }): ExecutionStep[] => {
    const w1 = String(word1).replace(/['"]/g, '');
    const w2 = String(word2).replace(/['"]/g, '');
    const f1 = `"${w1}"`;
    const f2 = `"${w2}"`;
    const joined = `${w1} ${w2}`;
    const fJoined = `"${joined}"`;
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: `Store "${w1}" in variable word1.`,
        explanationHinglish: `Variable word1 mein "${w1}" store kiya.`,
        memorySnapshot: { word1: f1 },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'word1', value: f1 },
      },
      {
        step: 2, lineNum: 2,
        explanationEnglish: `Store "${w2}" in variable word2.`,
        explanationHinglish: `Variable word2 mein "${w2}" store kiya.`,
        memorySnapshot: { word1: f1, word2: f2 },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'word2', value: f2 },
      },
      {
        step: 3, lineNum: 3,
        explanationEnglish: `Concatenate word1, a space, and word2 into result: "${joined}".`,
        explanationHinglish: `word1, space, aur word2 ko ek sath jodkar result mein store kiya: "${joined}".`,
        memorySnapshot: { word1: f1, word2: f2, result: fJoined },
        animationEvent: { type: 'COMPUTE', inputs: ['word1', '" "', 'word2'], operator: '+ +', result: fJoined, storeIn: 'result' },
      },
      {
        step: 4, lineNum: 4,
        explanationEnglish: `Print the joined string.`,
        explanationHinglish: `Juda hua string print kiya.`,
        memorySnapshot: { word1: f1, word2: f2, result: fJoined },
        consoleOutput: joined,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'result', outputValue: fJoined },
      }
    ];
  },
  executionSteps: [],
};