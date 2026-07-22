import type { LessonProgram } from '../types';

// ─── C Data Types ─────────────────────────────────────────────────────────────

export const cIntVariable: LessonProgram = {
  id: 'c_int',
  language: 'c',
  topic: 'data_types',
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
  generateSteps: (vars) => {
    const age = Number(vars.age ?? 25);
    return [
      {
        step: 1, lineNum: 1,
        explanationEnglish: 'Include stdio.h header for printf standard library function.',
        explanationHinglish: 'Standard Input/Output library header load ho rahi hai printf ke liye.',
        memorySnapshot: {}, animationEvent: { type: 'NONE' }
      },
      {
        step: 2, lineNum: 2,
        explanationEnglish: 'Program execution begins at the main() entry function.',
        explanationHinglish: 'C program execution main() function se start hota hai.',
        memorySnapshot: {}, animationEvent: { type: 'NONE' }
      },
      {
        step: 3, lineNum: 3,
        explanationEnglish: `Declare integer variable 'age' (int) and assign value ${age}.`,
        explanationHinglish: `Integer variable 'age' declare hua aur value ${age} store hui.`,
        memorySnapshot: { age: `${age} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'age', value: age }
      },
      {
        step: 4, lineNum: 4,
        explanationEnglish: `printf outputs the format string replacing %d with age (${age}).`,
        explanationHinglish: `printf function %d ki jagah age (${age}) ko console pe print karega.`,
        memorySnapshot: { age: `${age} (int)` },
        consoleOutput: `Age = ${age}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'age', outputValue: age }
      },
      {
        step: 5, lineNum: 5,
        explanationEnglish: 'return 0 indicates successful execution to operating system.',
        explanationHinglish: 'return 0 se OS ko pata chalta hai ki program successfully khatam hua.',
        memorySnapshot: { age: `${age} (int)` },
        animationEvent: { type: 'COMPLETE' }
      }
    ];
  },
  executionSteps: []
};

export const cFloatVariable: LessonProgram = {
  id: 'c_float',
  language: 'c',
  topic: 'data_types',
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
  generateSteps: (vars) => {
    const pi = Number(vars.pi ?? 3.14);
    const price = Number(vars.price ?? 99.99);
    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Declare 32-bit float variable 'pi' = ${pi}.`,
        explanationHinglish: `Float variable 'pi' (${pi}) memory me single precision float ke roop me store hua.`,
        memorySnapshot: { pi: `${pi} (float)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'pi', value: pi }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Declare 64-bit double precision variable 'price' = ${price}.`,
        explanationHinglish: `Double variable 'price' (${price}) double precision 64-bit float format me store hua.`,
        memorySnapshot: { pi: `${pi} (float)`, price: `${price} (double)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'price', value: price }
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `Print float and double variables using %.2f specifier.`,
        explanationHinglish: `printf se dono decimal variables format hoke print hue.`,
        memorySnapshot: { pi: `${pi} (float)`, price: `${price} (double)` },
        consoleOutput: `pi=${pi.toFixed(2)}, price=${price.toFixed(2)}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'price', outputValue: price }
      },
      {
        step: 4, lineNum: 6,
        explanationEnglish: 'Program completed.',
        explanationHinglish: 'Program successfully complete hua.',
        memorySnapshot: { pi: `${pi} (float)`, price: `${price} (double)` },
        animationEvent: { type: 'COMPLETE' }
      }
    ];
  },
  executionSteps: []
};

export const cCharVariable: LessonProgram = {
  id: 'c_char',
  language: 'c',
  topic: 'data_types',
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
  generateSteps: () => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: "Declare char variable 'grade' with character 'A' (ASCII value 65).",
      explanationHinglish: "Character 'A' memory me ASCII code 65 ke roop me 1 byte space leta hai.",
      memorySnapshot: { grade: "'A' (char / ASCII 65)" },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'grade', value: "'A'" }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: "printf displays 'A' with %c and 65 with %d.",
      explanationHinglish: "%c character 'A' dikhata hai aur %d uska integer ASCII code 65.",
      memorySnapshot: { grade: "'A' (char / ASCII 65)" },
      consoleOutput: 'Grade: A (ASCII: 65)',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'grade', outputValue: "'A'" }
    },
    {
      step: 3, lineNum: 5,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish ho gaya.',
      memorySnapshot: { grade: "'A' (char / ASCII 65)" },
      animationEvent: { type: 'COMPLETE' }
    }
  ],
  executionSteps: []
};

// ─── C If-Else ────────────────────────────────────────────────────────────────

export const cIfElse: LessonProgram = {
  id: 'c_even_odd',
  language: 'c',
  topic: 'if_else',
  lessonNumber: 1,
  friendlyName: 'Even or Odd Check in C',
  learningObjective: 'Understand conditional branch execution using modulo % and if-else in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '7', paramId: 'num' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'operator', value: '%' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }, { type: 'text', value: ' ' }, { type: 'operator', value: '==' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Even\\n"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'else' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Odd\\n"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    num: { default: 7, min: 1, max: 100, label: 'num (int)' }
  },
  generateSteps: (vars) => {
    const num = Number(vars.num ?? 7);
    const isEven = num % 2 === 0;
    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Set num = ${num}.`,
        explanationHinglish: `Variable 'num' = ${num} set hua.`,
        memorySnapshot: { num: `${num} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'num', value: num }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Evaluate condition: ${num} % 2 == 0 is ${isEven ? 'TRUE' : 'FALSE'}.`,
        explanationHinglish: `Condition ${num} % 2 == 0 check hui -> Result is ${isEven ? 'TRUE' : 'FALSE'}.`,
        memorySnapshot: { num: `${num} (int)` },
        animationEvent: { type: 'NONE' }
      },
      isEven ? {
        step: 3, lineNum: 5,
        explanationEnglish: 'Condition was true, execute if block: printf("Even").',
        explanationHinglish: 'Condition true hui, Even print Hoga.',
        memorySnapshot: { num: `${num} (int)` },
        consoleOutput: 'Even',
        animationEvent: { type: 'PRINT_VALUE', variableName: 'num', outputValue: 'Even' }
      } : {
        step: 3, lineNum: 7,
        explanationEnglish: 'Condition was false, jump to else block: printf("Odd").',
        explanationHinglish: 'Condition false hui, else block execute hoke Odd print Hoga.',
        memorySnapshot: { num: `${num} (int)` },
        consoleOutput: 'Odd',
        animationEvent: { type: 'PRINT_VALUE', variableName: 'num', outputValue: 'Odd' }
      },
      {
        step: 4, lineNum: 9,
        explanationEnglish: 'Program completed.',
        explanationHinglish: 'Program execution complete.',
        memorySnapshot: { num: `${num} (int)` },
        animationEvent: { type: 'COMPLETE' }
      }
    ];
  },
  executionSteps: []
};

// ─── C For Loop ──────────────────────────────────────────────────────────────

export const cForLoop: LessonProgram = {
  id: 'c_for_loop',
  language: 'c',
  topic: 'loops',
  lessonNumber: 1,
  friendlyName: 'For Loop Counter in C',
  learningObjective: 'Understand initialization, condition check, and increment in C for loop.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3', paramId: 'limit' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"i = %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    limit: { default: 3, min: 1, max: 10, label: 'limit (int)' }
  },
  generateSteps: (vars) => {
    const limit = Number(vars.limit ?? 3);
    const steps: any[] = [];
    let stepNum = 1;
    let out = '';

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: `Initialize loop counter int i = 1, check condition i <= ${limit}.`,
      explanationHinglish: `For loop counter int i = 1 initialize hua aur condition i <= ${limit} check hui.`,
      memorySnapshot: { i: '1 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'i', value: 1 }
    });

    for (let i = 1; i <= limit; i++) {
      out += (out ? '\n' : '') + `i = ${i}`;
      steps.push({
        step: stepNum++, lineNum: 4,
        explanationEnglish: `Iteration ${i}: printf prints i = ${i}.`,
        explanationHinglish: `Iteration ${i}: printf se i = ${i} print hua.`,
        memorySnapshot: { i: `${i} (int)` },
        consoleOutput: out,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'i', outputValue: i }
      });
      if (i < limit) {
        steps.push({
          step: stepNum++, lineNum: 3,
          explanationEnglish: `Increment i++ to ${i + 1}, check condition ${i + 1} <= ${limit} (TRUE).`,
          explanationHinglish: `i++ se i value ${i + 1} hui aur condition true payi gayi.`,
          memorySnapshot: { i: `${i + 1} (int)` },
          animationEvent: { type: 'UPDATE_VARIABLE', name: 'i', oldValue: i, newValue: i + 1 }
        });
      }
    }

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: `Increment i++ to ${limit + 1}. Condition ${limit + 1} <= ${limit} is FALSE. Loop exits.`,
      explanationHinglish: `i = ${limit + 1} hone par condition false ho gayi. Loop terminate hua.`,
      memorySnapshot: { i: `${limit + 1} (int)` },
      animationEvent: { type: 'NONE' }
    });

    steps.push({
      step: stepNum++, lineNum: 6,
      explanationEnglish: 'Program completed successfully.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { i: `${limit + 1} (int)` },
      animationEvent: { type: 'COMPLETE' }
    });

    return steps;
  },
  executionSteps: []
};

// ─── C Functions ─────────────────────────────────────────────────────────────

export const cFunctions: LessonProgram = {
  id: 'c_functions',
  language: 'c',
  topic: 'functions',
  lessonNumber: 1,
  friendlyName: 'Function Declaration & Return in C',
  learningObjective: 'Learn function parameter passing and value returning in C.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'add' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'parameter', value: 'a' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'parameter', value: 'b' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'punctuation', value: '}' }] },
    { lineNum: 5, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'add' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '5', paramId: 'a' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '3', paramId: 'b' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Sum = %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    a: { default: 5, label: 'a (int)' },
    b: { default: 3, label: 'b (int)' }
  },
  generateSteps: (vars) => {
    const a = Number(vars.a ?? 5);
    const b = Number(vars.b ?? 3);
    const res = a + b;
    return [
      {
        step: 1, lineNum: 5,
        explanationEnglish: 'Execution starts in main().',
        explanationHinglish: 'main() function se start ho raha hai.',
        memorySnapshot: {}, animationEvent: { type: 'NONE' }
      },
      {
        step: 2, lineNum: 6,
        explanationEnglish: `Call function add(${a}, ${b}). Parameters a=${a}, b=${b} are passed by value onto stack.`,
        explanationHinglish: `Function add(${a}, ${b}) call hua. Memory stack pe a=${a} aur b=${b} pass hua.`,
        memorySnapshot: { 'a (param)': `${a} (int)`, 'b (param)': `${b} (int)` },
        animationEvent: { type: 'FUNCTION_CALL', functionName: 'add', args: { a, b } }
      },
      {
        step: 3, lineNum: 3,
        explanationEnglish: `Inside add(): compute ${a} + ${b} = ${res} and return it.`,
        explanationHinglish: `add() function ke andar: ${a} + ${b} = ${res} calculate hoke return hua.`,
        memorySnapshot: { 'a (param)': `${a} (int)`, 'b (param)': `${b} (int)`, returnVal: `${res} (int)` },
        animationEvent: { type: 'FUNCTION_RETURN', functionName: 'add', returnValue: res }
      },
      {
        step: 4, lineNum: 6,
        explanationEnglish: `Returned value ${res} is assigned to variable 'sum'.`,
        explanationHinglish: `Returned result ${res} variable 'sum' me store ho gaya.`,
        memorySnapshot: { sum: `${res} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'sum', value: res }
      },
      {
        step: 5, lineNum: 7,
        explanationEnglish: `printf prints Sum = ${res}.`,
        explanationHinglish: `printf se Sum = ${res} output me print hua.`,
        memorySnapshot: { sum: `${res} (int)` },
        consoleOutput: `Sum = ${res}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'sum', outputValue: res }
      },
      {
        step: 6, lineNum: 8,
        explanationEnglish: 'Program finished.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { sum: `${res} (int)` },
        animationEvent: { type: 'COMPLETE' }
      }
    ];
  },
  executionSteps: []
};

// ─── C Arrays ────────────────────────────────────────────────────────────────

export const cArrays: LessonProgram = {
  id: 'c_array_sum',
  language: 'c',
  topic: 'arrays',
  lessonNumber: 1,
  friendlyName: '1D Array Declaration & Element Sum',
  learningObjective: 'Understand contiguous memory allocation and zero-based indexing in C arrays.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<stdio.h>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '30' }, { type: 'punctuation', value: '};' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<' }, { type: 'text', value: ' ' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: '];' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'printf' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Array Sum = %d\\n"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: () => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Declare 1D array int arr[3] = {10, 20, 30} stored in contiguous memory.',
      explanationHinglish: 'Array arr[3] declare hua. Contiguous memory blocks [10, 20, 30] allocate hue.',
      memorySnapshot: { 'arr[0]': '10 (int)', 'arr[1]': '20 (int)', 'arr[2]': '30 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'arr', value: '[10, 20, 30]' }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: 'Initialize accumulator variable sum = 0.',
      explanationHinglish: 'Accumulator variable sum = 0 initialize hua.',
      memorySnapshot: { 'arr[0]': '10 (int)', 'arr[1]': '20 (int)', 'arr[2]': '30 (int)', sum: '0 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'sum', value: 0 }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'i=0: sum += arr[0] (10) -> sum = 10.',
      explanationHinglish: 'Index 0 (arr[0]=10) sum me add hua -> sum = 10.',
      memorySnapshot: { 'arr[0]': '10 (int)', 'arr[1]': '20 (int)', 'arr[2]': '30 (int)', sum: '10 (int)' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'sum', oldValue: 0, newValue: 10 }
    },
    {
      step: 4, lineNum: 6,
      explanationEnglish: 'i=1: sum += arr[1] (20) -> sum = 30.',
      explanationHinglish: 'Index 1 (arr[1]=20) sum me add hua -> sum = 30.',
      memorySnapshot: { 'arr[0]': '10 (int)', 'arr[1]': '20 (int)', 'arr[2]': '30 (int)', sum: '30 (int)' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'sum', oldValue: 10, newValue: 30 }
    },
    {
      step: 5, lineNum: 6,
      explanationEnglish: 'i=2: sum += arr[2] (30) -> sum = 60.',
      explanationHinglish: 'Index 2 (arr[2]=30) sum me add hua -> sum = 60.',
      memorySnapshot: { 'arr[0]': '10 (int)', 'arr[1]': '20 (int)', 'arr[2]': '30 (int)', sum: '60 (int)' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'sum', oldValue: 30, newValue: 60 }
    },
    {
      step: 6, lineNum: 8,
      explanationEnglish: 'printf outputs Array Sum = 60.',
      explanationHinglish: 'printf se Array Sum = 60 print hua.',
      memorySnapshot: { 'arr[0]': '10 (int)', 'arr[1]': '20 (int)', 'arr[2]': '30 (int)', sum: '60 (int)' },
      consoleOutput: 'Array Sum = 60',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'sum', outputValue: 60 }
    },
    {
      step: 7, lineNum: 9,
      explanationEnglish: 'Program completed.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { 'arr[0]': '10 (int)', 'arr[1]': '20 (int)', 'arr[2]': '30 (int)', sum: '60 (int)' },
      animationEvent: { type: 'COMPLETE' }
    }
  ],
  executionSteps: []
};

export const cLessons = {
  c_int: cIntVariable,
  c_float: cFloatVariable,
  c_char: cCharVariable,
  c_even_odd: cIfElse,
  c_for_loop: cForLoop,
  c_functions: cFunctions,
  c_array_sum: cArrays,
};
