import type { LessonProgram, ExecutionStep } from '../../types';

export const func_no_args: LessonProgram = {
  id: 'func_no_args', language: 'python', topic: 'functions', lessonNumber: 1,
  friendlyName: 'Function Without Arguments',
  learningObjective: 'Learn how to define a basic function and execute it using a function call.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'def' }, { type: 'text', value: ' ' }, { type: 'function', value: 'greet' }, { type: 'punctuation', value: '(' }, { type: 'punctuation', value: ')' }, { type: 'punctuation', value: ':' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Hello, World!"' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '' }] },
    { lineNum: 4, tokens: [{ type: 'function', value: 'greet' }, { type: 'punctuation', value: '(' }, { type: 'punctuation', value: ')' }] },
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'Python reads the "def greet():" line and stores the function blueprint in memory. The function code does NOT run yet.',
      explanationHinglish: 'Python "def greet():" dekh ke function ka blueprint memory mein store kar leta hai. Abhi kuch execute nahi hota.',
      memorySnapshot: {},
      animationEvent: { type: 'NONE' },
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: 'greet() is called. Python jumps from here to the function definition and begins executing its body.',
      explanationHinglish: 'greet() call hua. Python idhar se jump karke function ke andar chala jaata hai.',
      memorySnapshot: {},
      animationEvent: { type: 'FUNCTION_CALL', functionName: 'greet', args: {} },
    },
    {
      step: 3, lineNum: 2,
      explanationEnglish: 'Inside the function body: print("Hello, World!") runs and outputs text.',
      explanationHinglish: 'Function ke andar: print("Hello, World!") chala aur output aaya.',
      memorySnapshot: {},
      consoleOutput: 'Hello, World!',
      animationEvent: { type: 'PRINT_VALUE', variableName: '"Hello, World!"', outputValue: '"Hello, World!"' },
    },
    {
      step: 4, lineNum: 4,
      explanationEnglish: 'Function is complete. Control returns back to line 4 where greet() was called.',
      explanationHinglish: 'Function khatam. Control wapas line 4 par aa jaata hai jahan se call kiya tha.',
      memorySnapshot: {},
      animationEvent: { type: 'FUNCTION_RETURN', functionName: 'greet' },
    },
  ],
  executionSteps: [],
};