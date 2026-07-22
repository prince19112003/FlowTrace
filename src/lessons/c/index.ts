import type { LessonProgram, ExecutionStep } from '../types';

// ─── TOPIC 01: VARIABLES (4 Programs) ──────────────────────────────────────────

export const cIntVariable: LessonProgram = {
  id: 'c_int',
  language: 'c',
  topic: 'variables',
  lessonNumber: 1,
  friendlyName: 'Integer Data Type (int)',
  learningObjective: 'Understand how C allocates 4 bytes of memory for storing integers with int.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'age' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '25', paramId: 'age' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Age = %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'age' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    age: { default: 25, min: 1, max: 120, label: 'Age (int)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const age = Number(vars.age ?? 25);
    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Declare integer variable 'age' [4 Bytes] = ${age}.`,
        explanationHinglish: `Integer variable 'age' [4 Bytes] declare hua aur ${age} store hua.`,
        memorySnapshot: { age: `${age} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'age', value: age }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints Age = ${age}.`,
        explanationHinglish: `printf se Age = ${age} console pe display hua.`,
        memorySnapshot: { age: `${age} [4B]` },
        consoleOutput: `Age = ${age}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'age', outputValue: age }
      }
    ];
  },
  executionSteps: []
};

export const cFloatVariable: LessonProgram = {
  id: 'c_float',
  language: 'c',
  topic: 'variables',
  lessonNumber: 2,
  friendlyName: 'Float & Double Data Types',
  learningObjective: 'Learn decimal storage with float and double precision in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'float' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'pi' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3.14', paramId: 'pi' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'price' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '99.99', paramId: 'price' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"pi=%.2f, price=%.2f\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'pi' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'price' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    pi: { default: 3.14, label: 'pi (float)' },
    price: { default: 99.99, label: 'price (double)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const pi = Number(vars.pi ?? 3.14);
    const price = Number(vars.price ?? 99.99);
    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Declare float pi = ${pi} [4 Bytes].`,
        explanationHinglish: `Float variable pi [4 Bytes] memory me store hua.`,
        memorySnapshot: { pi: `${pi} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'pi', value: pi }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Declare double price = ${price} [8 Bytes].`,
        explanationHinglish: `Double variable price [8 Bytes] memory me store hua.`,
        memorySnapshot: { pi: `${pi} [4B]`, price: `${price} [8B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'price', value: price }
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `printf outputs float and double decimal numbers.`,
        explanationHinglish: `printf se pi aur price print hue.`,
        memorySnapshot: { pi: `${pi} [4B]`, price: `${price} [8B]` },
        consoleOutput: `pi=${pi.toFixed(2)}, price=${price.toFixed(2)}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'price', outputValue: price }
      }
    ];
  },
  executionSteps: []
};

export const cCharVariable: LessonProgram = {
  id: 'c_char',
  language: 'c',
  topic: 'variables',
  lessonNumber: 3,
  friendlyName: 'Char & ASCII Storage',
  learningObjective: 'Learn how C stores single characters using 1-byte ASCII codes.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'char' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'grade' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: "'A'" }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Grade: %c (ASCII: %d)\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'grade' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'grade' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: "Declare char grade = 'A' [1 Byte] (ASCII value 65).",
      explanationHinglish: "Character 'A' ASCII code 65 ke roop me 1 byte memory leta hai.",
      memorySnapshot: { grade: "'A' [1B / ASCII 65]" },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'grade', value: "'A'" }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: "printf displays 'A' with %c and 65 with %d.",
      explanationHinglish: "printf %c se 'A' aur %d se ASCII 65 display karta hai.",
      memorySnapshot: { grade: "'A' [1B / ASCII 65]" },
      consoleOutput: 'Grade: A (ASCII: 65)',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'grade', outputValue: "'A'" }
    }
  ],
  executionSteps: []
};



export const c_swap_temp: LessonProgram = {
  id: 'c_swap_temp',
  language: 'c',
  topic: 'variables',
  lessonNumber: 1,
  friendlyName: 'Swap Temp in C',
  learningObjective: 'Learn Swap Temp execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Swap Temp: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Swap Temp.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Swap Temp: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_swap_no_temp: LessonProgram = {
  id: 'c_swap_no_temp',
  language: 'c',
  topic: 'variables',
  lessonNumber: 1,
  friendlyName: 'Swap No Temp in C',
  learningObjective: 'Learn Swap No Temp execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Swap No Temp: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Swap No Temp.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Swap No Temp: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_constants: LessonProgram = {
  id: 'c_constants',
  language: 'c',
  topic: 'variables',
  lessonNumber: 1,
  friendlyName: 'Constants in C',
  learningObjective: 'Learn Constants execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Constants: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Constants.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Constants: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_arithmetic: LessonProgram = {
  id: 'c_arithmetic',
  language: 'c',
  topic: 'operators',
  lessonNumber: 1,
  friendlyName: 'Arithmetic in C',
  learningObjective: 'Learn Arithmetic execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Arithmetic: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Arithmetic.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Arithmetic: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_relational_logical: LessonProgram = {
  id: 'c_relational_logical',
  language: 'c',
  topic: 'operators',
  lessonNumber: 1,
  friendlyName: 'Relational Logical in C',
  learningObjective: 'Learn Relational Logical execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Relational Logical: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Relational Logical.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Relational Logical: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_inc_dec: LessonProgram = {
  id: 'c_inc_dec',
  language: 'c',
  topic: 'variables',
  lessonNumber: 1,
  friendlyName: 'Indec in C',
  learningObjective: 'Learn Indec execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Indec: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Indec.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Indec: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_circle_geometry: LessonProgram = {
  id: 'c_circle_geometry',
  language: 'c',
  topic: 'operators',
  lessonNumber: 1,
  friendlyName: 'Circle Geometry in C',
  learningObjective: 'Learn Circle Geometry execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Circle Geometry: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Circle Geometry.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Circle Geometry: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_scanf_integer: LessonProgram = {
  id: 'c_scanf_integer',
  language: 'c',
  topic: 'user_input',
  lessonNumber: 1,
  friendlyName: 'Scanf Integer in C',
  learningObjective: 'Learn Scanf Integer execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Scanf Integer: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Scanf Integer.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Scanf Integer: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_scanf_float: LessonProgram = {
  id: 'c_scanf_float',
  language: 'c',
  topic: 'user_input',
  lessonNumber: 1,
  friendlyName: 'Scanf Float in C',
  learningObjective: 'Learn Scanf Float execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Scanf Float: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Scanf Float.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Scanf Float: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_scanf_string: LessonProgram = {
  id: 'c_scanf_string',
  language: 'c',
  topic: 'user_input',
  lessonNumber: 1,
  friendlyName: 'Scanf String in C',
  learningObjective: 'Learn Scanf String execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Scanf String: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Scanf String.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Scanf String: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_implicit_casting: LessonProgram = {
  id: 'c_implicit_casting',
  language: 'c',
  topic: 'type_casting',
  lessonNumber: 1,
  friendlyName: 'Implicit Casting in C',
  learningObjective: 'Learn Implicit Casting execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Implicit Casting: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Implicit Casting.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Implicit Casting: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_explicit_casting: LessonProgram = {
  id: 'c_explicit_casting',
  language: 'c',
  topic: 'type_casting',
  lessonNumber: 1,
  friendlyName: 'Explicit Casting in C',
  learningObjective: 'Learn Explicit Casting execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Explicit Casting: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Explicit Casting.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Explicit Casting: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_char_ascii: LessonProgram = {
  id: 'c_char_ascii',
  language: 'c',
  topic: 'type_casting',
  lessonNumber: 1,
  friendlyName: 'Char Ascii in C',
  learningObjective: 'Learn Char Ascii execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Char Ascii: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Char Ascii.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Char Ascii: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_even_odd: LessonProgram = {
  id: 'c_even_odd',
  language: 'c',
  topic: 'if_else',
  lessonNumber: 1,
  friendlyName: 'Even Odd in C',
  learningObjective: 'Learn Even Odd execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Even Odd: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Even Odd.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Even Odd: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_largest_three: LessonProgram = {
  id: 'c_largest_three',
  language: 'c',
  topic: 'if_else',
  lessonNumber: 1,
  friendlyName: 'Largest Three in C',
  learningObjective: 'Learn Largest Three execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Largest Three: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Largest Three.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Largest Three: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_leap_year: LessonProgram = {
  id: 'c_leap_year',
  language: 'c',
  topic: 'if_else',
  lessonNumber: 1,
  friendlyName: 'Leap Year in C',
  learningObjective: 'Learn Leap Year execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Leap Year: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Leap Year.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Leap Year: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_vowel_consonant: LessonProgram = {
  id: 'c_vowel_consonant',
  language: 'c',
  topic: 'if_else',
  lessonNumber: 1,
  friendlyName: 'Vowel Consonant in C',
  learningObjective: 'Learn Vowel Consonant execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Vowel Consonant: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Vowel Consonant.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Vowel Consonant: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_marks_grade: LessonProgram = {
  id: 'c_marks_grade',
  language: 'c',
  topic: 'if_elif_else',
  lessonNumber: 1,
  friendlyName: 'Marks Grade in C',
  learningObjective: 'Learn Marks Grade execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Marks Grade: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Marks Grade.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Marks Grade: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_tax_calc: LessonProgram = {
  id: 'c_tax_calc',
  language: 'c',
  topic: 'if_elif_else',
  lessonNumber: 1,
  friendlyName: 'Tax Calc in C',
  learningObjective: 'Learn Tax Calc execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Tax Calc: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Tax Calc.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Tax Calc: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_pos_neg_zero: LessonProgram = {
  id: 'c_pos_neg_zero',
  language: 'c',
  topic: 'if_elif_else',
  lessonNumber: 1,
  friendlyName: 'Pos Neg Zero in C',
  learningObjective: 'Learn Pos Neg Zero execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Pos Neg Zero: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Pos Neg Zero.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Pos Neg Zero: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_electricity_bill: LessonProgram = {
  id: 'c_electricity_bill',
  language: 'c',
  topic: 'if_elif_else',
  lessonNumber: 1,
  friendlyName: 'Electricity Bill in C',
  learningObjective: 'Learn Electricity Bill execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Electricity Bill: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Electricity Bill.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Electricity Bill: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_switch_day: LessonProgram = {
  id: 'c_switch_day',
  language: 'c',
  topic: 'switch_case',
  lessonNumber: 1,
  friendlyName: 'Switch Day in C',
  learningObjective: 'Learn Switch Day execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Switch Day: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Switch Day.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Switch Day: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_switch_calc: LessonProgram = {
  id: 'c_switch_calc',
  language: 'c',
  topic: 'switch_case',
  lessonNumber: 1,
  friendlyName: 'Switch Calc in C',
  learningObjective: 'Learn Switch Calc execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Switch Calc: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Switch Calc.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Switch Calc: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_switch_vowel: LessonProgram = {
  id: 'c_switch_vowel',
  language: 'c',
  topic: 'switch_case',
  lessonNumber: 1,
  friendlyName: 'Switch Vowel in C',
  learningObjective: 'Learn Switch Vowel execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Switch Vowel: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Switch Vowel.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Switch Vowel: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_switch_month: LessonProgram = {
  id: 'c_switch_month',
  language: 'c',
  topic: 'switch_case',
  lessonNumber: 1,
  friendlyName: 'Switch Month in C',
  learningObjective: 'Learn Switch Month execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Switch Month: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Switch Month.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Switch Month: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_for_sum: LessonProgram = {
  id: 'c_for_sum',
  language: 'c',
  topic: 'for_loop',
  lessonNumber: 1,
  friendlyName: 'For Sum in C',
  learningObjective: 'Learn For Sum execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"For Sum: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for For Sum.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `For Sum: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_multiplication_table: LessonProgram = {
  id: 'c_multiplication_table',
  language: 'c',
  topic: 'for_loop',
  lessonNumber: 1,
  friendlyName: 'Multiplication Table in C',
  learningObjective: 'Learn Multiplication Table execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Multiplication Table: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Multiplication Table.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Multiplication Table: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_even_numbers: LessonProgram = {
  id: 'c_even_numbers',
  language: 'c',
  topic: 'for_loop',
  lessonNumber: 1,
  friendlyName: 'Even Numbers in C',
  learningObjective: 'Learn Even Numbers execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Even Numbers: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Even Numbers.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Even Numbers: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_fibonacci: LessonProgram = {
  id: 'c_fibonacci',
  language: 'c',
  topic: 'for_loop',
  lessonNumber: 1,
  friendlyName: 'Fibonacci in C',
  learningObjective: 'Learn Fibonacci execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Fibonacci: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Fibonacci.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Fibonacci: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_while_basic: LessonProgram = {
  id: 'c_while_basic',
  language: 'c',
  topic: 'while_loop',
  lessonNumber: 1,
  friendlyName: 'While Basic in C',
  learningObjective: 'Learn While Basic execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"While Basic: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for While Basic.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `While Basic: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_digit_sum: LessonProgram = {
  id: 'c_digit_sum',
  language: 'c',
  topic: 'while_loop',
  lessonNumber: 1,
  friendlyName: 'Digit Sum in C',
  learningObjective: 'Learn Digit Sum execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Digit Sum: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Digit Sum.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Digit Sum: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_factorial: LessonProgram = {
  id: 'c_factorial',
  language: 'c',
  topic: 'while_loop',
  lessonNumber: 1,
  friendlyName: 'Factorial in C',
  learningObjective: 'Learn Factorial execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Factorial: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Factorial.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Factorial: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_reverse_num: LessonProgram = {
  id: 'c_reverse_num',
  language: 'c',
  topic: 'while_loop',
  lessonNumber: 1,
  friendlyName: 'Reverse Num in C',
  learningObjective: 'Learn Reverse Num execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Reverse Num: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Reverse Num.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Reverse Num: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_do_while_basic: LessonProgram = {
  id: 'c_do_while_basic',
  language: 'c',
  topic: 'do_while_loop',
  lessonNumber: 1,
  friendlyName: 'Do While Basic in C',
  learningObjective: 'Learn Do While Basic execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Do While Basic: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Do While Basic.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Do While Basic: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_do_while_sum: LessonProgram = {
  id: 'c_do_while_sum',
  language: 'c',
  topic: 'do_while_loop',
  lessonNumber: 1,
  friendlyName: 'Do While Sum in C',
  learningObjective: 'Learn Do While Sum execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Do While Sum: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Do While Sum.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Do While Sum: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_string_length: LessonProgram = {
  id: 'c_string_length',
  language: 'c',
  topic: 'strings',
  lessonNumber: 1,
  friendlyName: 'String Length in C',
  learningObjective: 'Learn String Length execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"String Length: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for String Length.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `String Length: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_string_copy: LessonProgram = {
  id: 'c_string_copy',
  language: 'c',
  topic: 'strings',
  lessonNumber: 1,
  friendlyName: 'String Copy in C',
  learningObjective: 'Learn String Copy execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"String Copy: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for String Copy.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `String Copy: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_string_reverse: LessonProgram = {
  id: 'c_string_reverse',
  language: 'c',
  topic: 'strings',
  lessonNumber: 1,
  friendlyName: 'String Reverse in C',
  learningObjective: 'Learn String Reverse execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"String Reverse: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for String Reverse.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `String Reverse: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_functions: LessonProgram = {
  id: 'c_functions',
  language: 'c',
  topic: 'functions',
  lessonNumber: 1,
  friendlyName: 'Functions in C',
  learningObjective: 'Learn Functions execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Functions: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Functions.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Functions: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_func_addition: LessonProgram = {
  id: 'c_func_addition',
  language: 'c',
  topic: 'variables',
  lessonNumber: 1,
  friendlyName: 'Funaddition in C',
  learningObjective: 'Learn Funaddition execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Funaddition: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Funaddition.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Funaddition: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_func_call_by_val: LessonProgram = {
  id: 'c_func_call_by_val',
  language: 'c',
  topic: 'variables',
  lessonNumber: 1,
  friendlyName: 'Funcall By Val in C',
  learningObjective: 'Learn Funcall By Val execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Funcall By Val: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Funcall By Val.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Funcall By Val: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_array_sum: LessonProgram = {
  id: 'c_array_sum',
  language: 'c',
  topic: 'arrays_1d',
  lessonNumber: 1,
  friendlyName: 'Array Sum in C',
  learningObjective: 'Learn Array Sum execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Array Sum: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Array Sum.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Array Sum: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_array_max: LessonProgram = {
  id: 'c_array_max',
  language: 'c',
  topic: 'arrays_1d',
  lessonNumber: 1,
  friendlyName: 'Array Max in C',
  learningObjective: 'Learn Array Max execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Array Max: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Array Max.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Array Max: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const c_linear_search: LessonProgram = {
  id: 'c_linear_search',
  language: 'c',
  topic: 'arrays_1d',
  lessonNumber: 1,
  friendlyName: 'Linear Search in C',
  learningObjective: 'Learn Linear Search execution logic and memory tracking in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Linear Search: %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'punctuation', value: '}' }] }
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Initialize C variable val = 10 [4 Bytes].`,
        explanationHinglish: `val = 10 memory me store hua.`,
        memorySnapshot: { val: '10 [4B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'val', value: '10' }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `printf prints output for Linear Search.`,
        explanationHinglish: `printf output display hua.`,
        memorySnapshot: { val: '10 [4B]' },
        consoleOutput: `Linear Search: 10`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'val', outputValue: '10' }
      }
  ],
  executionSteps: []
};


export const cLessons: Record<string, LessonProgram> = {
  c_int: cIntVariable,
  c_float: cFloatVariable,
  c_char: cCharVariable,
  c_swap_temp: c_swap_temp,
  c_swap_no_temp: c_swap_no_temp,
  c_constants: c_constants,
  c_arithmetic: c_arithmetic,
  c_relational_logical: c_relational_logical,
  c_inc_dec: c_inc_dec,
  c_circle_geometry: c_circle_geometry,
  c_scanf_integer: c_scanf_integer,
  c_scanf_float: c_scanf_float,
  c_scanf_string: c_scanf_string,
  c_implicit_casting: c_implicit_casting,
  c_explicit_casting: c_explicit_casting,
  c_char_ascii: c_char_ascii,
  c_even_odd: c_even_odd,
  c_largest_three: c_largest_three,
  c_leap_year: c_leap_year,
  c_vowel_consonant: c_vowel_consonant,
  c_marks_grade: c_marks_grade,
  c_tax_calc: c_tax_calc,
  c_pos_neg_zero: c_pos_neg_zero,
  c_electricity_bill: c_electricity_bill,
  c_switch_day: c_switch_day,
  c_switch_calc: c_switch_calc,
  c_switch_vowel: c_switch_vowel,
  c_switch_month: c_switch_month,
  c_for_sum: c_for_sum,
  c_multiplication_table: c_multiplication_table,
  c_even_numbers: c_even_numbers,
  c_fibonacci: c_fibonacci,
  c_while_basic: c_while_basic,
  c_digit_sum: c_digit_sum,
  c_factorial: c_factorial,
  c_reverse_num: c_reverse_num,
  c_do_while_basic: c_do_while_basic,
  c_do_while_sum: c_do_while_sum,
  c_string_length: c_string_length,
  c_string_copy: c_string_copy,
  c_string_reverse: c_string_reverse,
  c_functions: c_functions,
  c_func_addition: c_func_addition,
  c_func_call_by_val: c_func_call_by_val,
  c_array_sum: c_array_sum,
  c_array_max: c_array_max,
  c_linear_search: c_linear_search,
};
