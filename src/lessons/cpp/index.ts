import type { LessonProgram } from '../types';

// ─── C++ Data Types ────────────────────────────────────────────────────────────

export const cppDataTypes: LessonProgram = {
  id: 'cpp_types',
  language: 'cpp',
  topic: 'data_types',
  lessonNumber: 1,
  friendlyName: 'C++ Primitive Data Types (int, double, bool, char)',
  learningObjective: 'Learn C++ strongly-typed variable declarations and memory storage.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'count' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10', paramId: 'count' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'gpa' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3.85', paramId: 'gpa' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'bool' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'isPassed' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'true' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Count: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'count' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '" GPA: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'gpa' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    count: { default: 10, min: 1, max: 100, label: 'count (int)' },
    gpa: { default: 3.85, label: 'gpa (double)' }
  },
  generateSteps: (vars) => {
    const count = Number(vars.count ?? 10);
    const gpa = Number(vars.gpa ?? 3.85);
    return [
      {
        step: 1, lineNum: 4,
        explanationEnglish: `Declare C++ integer variable count (int) = ${count}.`,
        explanationHinglish: `Integer variable 'count' (${count}) memory me allocate hua.`,
        memorySnapshot: { count: `${count} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'count', value: count }
      },
      {
        step: 2, lineNum: 5,
        explanationEnglish: `Declare 64-bit double precision variable gpa = ${gpa}.`,
        explanationHinglish: `Double variable 'gpa' (${gpa}) double precision memory me store hua.`,
        memorySnapshot: { count: `${count} (int)`, gpa: `${gpa} (double)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'gpa', value: gpa }
      },
      {
        step: 3, lineNum: 6,
        explanationEnglish: `Declare boolean variable isPassed (bool) = true (1 in memory).`,
        explanationHinglish: `Boolean variable 'isPassed' (bool) = true 1 byte memory slot me store hua.`,
        memorySnapshot: { count: `${count} (int)`, gpa: `${gpa} (double)`, isPassed: 'true (bool)' },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'isPassed', value: 'true' }
      },
      {
        step: 4, lineNum: 7,
        explanationEnglish: `std::cout streams output to terminal.`,
        explanationHinglish: `std::cout se "Count: ${count} GPA: ${gpa}" terminal pe display hua.`,
        memorySnapshot: { count: `${count} (int)`, gpa: `${gpa} (double)`, isPassed: 'true (bool)' },
        consoleOutput: `Count: ${count} GPA: ${gpa}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'count', outputValue: count }
      },
      {
        step: 5, lineNum: 8,
        explanationEnglish: 'Program completed.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { count: `${count} (int)`, gpa: `${gpa} (double)`, isPassed: 'true (bool)' },
        animationEvent: { type: 'COMPLETE' }
      }
    ];
  },
  executionSteps: []
};

// ─── C++ If-Else ──────────────────────────────────────────────────────────────

export const cppIfElse: LessonProgram = {
  id: 'cpp_if_else',
  language: 'cpp',
  topic: 'if_else',
  lessonNumber: 1,
  friendlyName: 'Max of Two Numbers in C++',
  learningObjective: 'Learn conditional logic and std::cout output in C++.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '15', paramId: 'a' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '25', paramId: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"a is greater"' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'else' }, { type: 'text', value: ' {' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"b is greater"' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 11, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 12, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    a: { default: 15, label: 'a (int)' },
    b: { default: 25, label: 'b (int)' }
  },
  generateSteps: (vars) => {
    const a = Number(vars.a ?? 15);
    const b = Number(vars.b ?? 25);
    const aIsGreater = a > b;
    return [
      {
        step: 1, lineNum: 4,
        explanationEnglish: `Declare int a = ${a}.`,
        explanationHinglish: `Variable a = ${a} memory me store hua.`,
        memorySnapshot: { a: `${a} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'a', value: a }
      },
      {
        step: 2, lineNum: 5,
        explanationEnglish: `Declare int b = ${b}.`,
        explanationHinglish: `Variable b = ${b} memory me store hua.`,
        memorySnapshot: { a: `${a} (int)`, b: `${b} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'b', value: b }
      },
      {
        step: 3, lineNum: 6,
        explanationEnglish: `Check condition: ${a} > ${b} is ${aIsGreater ? 'TRUE' : 'FALSE'}.`,
        explanationHinglish: `Condition check: ${a} > ${b} -> ${aIsGreater ? 'TRUE' : 'FALSE'}.`,
        memorySnapshot: { a: `${a} (int)`, b: `${b} (int)` },
        animationEvent: { type: 'NONE' }
      },
      aIsGreater ? {
        step: 4, lineNum: 7,
        explanationEnglish: 'a is greater, cout prints "a is greater".',
        explanationHinglish: 'a bada hai, cout se "a is greater" print hua.',
        memorySnapshot: { a: `${a} (int)`, b: `${b} (int)` },
        consoleOutput: 'a is greater',
        animationEvent: { type: 'PRINT_VALUE', variableName: 'a', outputValue: 'a is greater' }
      } : {
        step: 4, lineNum: 9,
        explanationEnglish: 'b is greater, cout prints "b is greater".',
        explanationHinglish: 'b bada hai, cout se "b is greater" print hua.',
        memorySnapshot: { a: `${a} (int)`, b: `${b} (int)` },
        consoleOutput: 'b is greater',
        animationEvent: { type: 'PRINT_VALUE', variableName: 'b', outputValue: 'b is greater' }
      },
      {
        step: 5, lineNum: 11,
        explanationEnglish: 'Program complete.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { a: `${a} (int)`, b: `${b} (int)` },
        animationEvent: { type: 'COMPLETE' }
      }
    ];
  },
  executionSteps: []
};

// ─── C++ Loops ────────────────────────────────────────────────────────────────

export const cppWhileLoop: LessonProgram = {
  id: 'cpp_while',
  language: 'cpp',
  topic: 'loops',
  lessonNumber: 1,
  friendlyName: 'While Loop Accumulator in C++',
  learningObjective: 'Learn while loop conditional repetition and state updates in C++.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'while' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3', paramId: 'limit' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"n="' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '" "' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'variable', value: 'n' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    limit: { default: 3, min: 1, max: 8, label: 'limit (int)' }
  },
  generateSteps: (vars) => {
    const limit = Number(vars.limit ?? 3);
    const steps: any[] = [];
    let stepNum = 1;
    let out = '';

    steps.push({
      step: stepNum++, lineNum: 4,
      explanationEnglish: 'Initialize int n = 1.',
      explanationHinglish: 'Variable n = 1 set hua.',
      memorySnapshot: { n: '1 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'n', value: 1 }
    });

    for (let n = 1; n <= limit; n++) {
      steps.push({
        step: stepNum++, lineNum: 5,
        explanationEnglish: `Check while condition: n (${n}) <= ${limit} (TRUE).`,
        explanationHinglish: `While condition check: n (${n}) <= ${limit} (TRUE).`,
        memorySnapshot: { n: `${n} (int)` },
        animationEvent: { type: 'NONE' }
      });
      out += (out ? ' ' : '') + `n=${n}`;
      steps.push({
        step: stepNum++, lineNum: 6,
        explanationEnglish: `cout prints n=${n}.`,
        explanationHinglish: `cout se n=${n} terminal me print hua.`,
        memorySnapshot: { n: `${n} (int)` },
        consoleOutput: out,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'n', outputValue: n }
      });
      steps.push({
        step: stepNum++, lineNum: 7,
        explanationEnglish: `Increment n++ -> n = ${n + 1}.`,
        explanationHinglish: `n++ increment hoke ${n + 1} hua.`,
        memorySnapshot: { n: `${n + 1} (int)` },
        animationEvent: { type: 'UPDATE_VARIABLE', name: 'n', oldValue: n, newValue: n + 1 }
      });
    }

    steps.push({
      step: stepNum++, lineNum: 5,
      explanationEnglish: `Condition n (${limit + 1}) <= ${limit} is FALSE. Loop ends.`,
      explanationHinglish: `Condition false hone se while loop end ho gaya.`,
      memorySnapshot: { n: `${limit + 1} (int)` },
      animationEvent: { type: 'NONE' }
    });

    steps.push({
      step: stepNum++, lineNum: 9,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { n: `${limit + 1} (int)` },
      animationEvent: { type: 'COMPLETE' }
    });

    return steps;
  },
  executionSteps: []
};

// ─── C++ Functions ───────────────────────────────────────────────────────────

export const cppSquareFunction: LessonProgram = {
  id: 'cpp_square_func',
  language: 'cpp',
  topic: 'functions',
  lessonNumber: 1,
  friendlyName: 'Square Function in C++',
  learningObjective: 'Understand function parameters, local scope, and return values in C++.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'square' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'parameter', value: 'x' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'punctuation', value: '}' }] },
    { lineNum: 6, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '6', paramId: 'xVal' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'ans' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'square' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Square: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'ans' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 11, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    xVal: { default: 6, min: 1, max: 50, label: 'val (int)' }
  },
  generateSteps: (vars) => {
    const val = Number(vars.xVal ?? 6);
    const sq = val * val;
    return [
      {
        step: 1, lineNum: 7,
        explanationEnglish: `Declare val = ${val}.`,
        explanationHinglish: `val = ${val} memory me set hua.`,
        memorySnapshot: { val: `${val} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val }
      },
      {
        step: 2, lineNum: 8,
        explanationEnglish: `Call square(${val}).`,
        explanationHinglish: `square(${val}) function call hua.`,
        memorySnapshot: { val: `${val} (int)`, 'x (param)': `${val} (int)` },
        animationEvent: { type: 'FUNCTION_CALL', functionName: 'square', args: { x: val } }
      },
      {
        step: 3, lineNum: 4,
        explanationEnglish: `Compute ${val} * ${val} = ${sq} and return.`,
        explanationHinglish: `${val} * ${val} = ${sq} calculate hoke return hua.`,
        memorySnapshot: { val: `${val} (int)`, 'x (param)': `${val} (int)`, returnVal: `${sq} (int)` },
        animationEvent: { type: 'FUNCTION_RETURN', functionName: 'square', returnValue: sq }
      },
      {
        step: 4, lineNum: 8,
        explanationEnglish: `Assign returned result ${sq} to variable 'ans'.`,
        explanationHinglish: `Result ${sq} variable 'ans' me assign ho gaya.`,
        memorySnapshot: { val: `${val} (int)`, ans: `${sq} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'ans', value: sq }
      },
      {
        step: 5, lineNum: 9,
        explanationEnglish: `cout prints "Square: ${sq}".`,
        explanationHinglish: `cout se "Square: ${sq}" print hua.`,
        memorySnapshot: { val: `${val} (int)`, ans: `${sq} (int)` },
        consoleOutput: `Square: ${sq}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'ans', outputValue: sq }
      },
      {
        step: 6, lineNum: 10,
        explanationEnglish: 'Program finished.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { val: `${val} (int)`, ans: `${sq} (int)` },
        animationEvent: { type: 'COMPLETE' }
      }
    ];
  },
  executionSteps: []
};

// ─── C++ Arrays ──────────────────────────────────────────────────────────────

export const cppMaxArray: LessonProgram = {
  id: 'cpp_array_max',
  language: 'cpp',
  topic: 'arrays',
  lessonNumber: 1,
  friendlyName: 'Find Maximum Element in C++ Array',
  learningObjective: 'Learn 1D array iteration and comparison logic in C++.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'number', value: '45' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '89' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '12' }, { type: 'punctuation', value: '};' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'maxVal' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '0' }, { type: 'punctuation', value: '];' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<' }, { type: 'text', value: ' ' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'maxVal' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'maxVal' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: '];' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Max: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'maxVal' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 11, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: () => [
    {
      step: 1, lineNum: 4,
      explanationEnglish: 'Declare 1D int array arr[3] = {45, 89, 12}.',
      explanationHinglish: 'Array arr[3] = {45, 89, 12} memory me contiguous storage ke sath allocate hua.',
      memorySnapshot: { 'arr[0]': '45 (int)', 'arr[1]': '89 (int)', 'arr[2]': '12 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'arr', value: '[45, 89, 12]' }
    },
    {
      step: 2, lineNum: 5,
      explanationEnglish: 'Set initial maxVal = arr[0] (45).',
      explanationHinglish: 'maxVal ko pehle element arr[0] (45) se initialize kiya.',
      memorySnapshot: { 'arr[0]': '45 (int)', 'arr[1]': '89 (int)', 'arr[2]': '12 (int)', maxVal: '45 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'maxVal', value: 45 }
    },
    {
      step: 3, lineNum: 7,
      explanationEnglish: 'i=1: arr[1] (89) > maxVal (45) is TRUE -> Update maxVal = 89.',
      explanationHinglish: 'Index 1 pe arr[1]=89 maxVal (45) se bada hai, isliye maxVal = 89 update hua.',
      memorySnapshot: { 'arr[0]': '45 (int)', 'arr[1]': '89 (int)', 'arr[2]': '12 (int)', maxVal: '89 (int)' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'maxVal', oldValue: 45, newValue: 89 }
    },
    {
      step: 4, lineNum: 7,
      explanationEnglish: 'i=2: arr[2] (12) > maxVal (89) is FALSE -> Keep maxVal = 89.',
      explanationHinglish: 'Index 2 pe arr[2]=12 maxVal (89) se chota hai, maxVal 89 hi raha.',
      memorySnapshot: { 'arr[0]': '45 (int)', 'arr[1]': '89 (int)', 'arr[2]': '12 (int)', maxVal: '89 (int)' },
      animationEvent: { type: 'NONE' }
    },
    {
      step: 5, lineNum: 9,
      explanationEnglish: 'cout prints "Max: 89".',
      explanationHinglish: 'cout se "Max: 89" print hua.',
      memorySnapshot: { 'arr[0]': '45 (int)', 'arr[1]': '89 (int)', 'arr[2]': '12 (int)', maxVal: '89 (int)' },
      consoleOutput: 'Max: 89',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'maxVal', outputValue: 89 }
    },
    {
      step: 6, lineNum: 10,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { 'arr[0]': '45 (int)', 'arr[1]': '89 (int)', 'arr[2]': '12 (int)', maxVal: '89 (int)' },
      animationEvent: { type: 'COMPLETE' }
    }
  ],
  executionSteps: []
};

export const cppLessons = {
  cpp_types: cppDataTypes,
  cpp_if_else: cppIfElse,
  cpp_while: cppWhileLoop,
  cpp_square_func: cppSquareFunction,
  cpp_array_max: cppMaxArray,
};
