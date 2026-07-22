import type { LessonProgram, ExecutionStep } from '../types';

// ─── TOPIC 01: VARIABLES & MEMORY (4 Programs) ─────────────────────────────────

export const cppDataTypes: LessonProgram = {
  id: 'cpp_types',
  language: 'cpp',
  topic: 'variables',
  lessonNumber: 1,
  friendlyName: 'C++ Primitive Data Types (int, double, bool, char)',
  learningObjective: 'Learn C++ strongly-typed variable declarations and explicit memory storage.',
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
  generateSteps: (vars): ExecutionStep[] => {
    const count = Number(vars.count ?? 10);
    const gpa = Number(vars.gpa ?? 3.85);
    return [
      {
        step: 1, lineNum: 4,
        explanationEnglish: `Declare C++ integer variable count (int) = ${count} [4 Bytes].`,
        explanationHinglish: `Integer variable 'count' (${count}) [4 Bytes] memory me allocate hua.`,
        memorySnapshot: { count: `${count} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'count', value: count }
      },
      {
        step: 2, lineNum: 5,
        explanationEnglish: `Declare double precision variable gpa = ${gpa} [8 Bytes].`,
        explanationHinglish: `Double variable 'gpa' (${gpa}) [8 Bytes] precision memory me store hua.`,
        memorySnapshot: { count: `${count} [4B]`, gpa: `${gpa} [8B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'gpa', value: gpa }
      },
      {
        step: 3, lineNum: 6,
        explanationEnglish: `Declare boolean variable isPassed = true [1 Byte].`,
        explanationHinglish: `Boolean variable 'isPassed' = true [1 Byte] memory slot me store hua.`,
        memorySnapshot: { count: `${count} [4B]`, gpa: `${gpa} [8B]`, isPassed: 'true [1B]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'isPassed', value: 'true' }
      },
      {
        step: 4, lineNum: 7,
        explanationEnglish: `std::cout streams output to terminal.`,
        explanationHinglish: `std::cout se "Count: ${count} GPA: ${gpa}" terminal pe display hua.`,
        memorySnapshot: { count: `${count} [4B]`, gpa: `${gpa} [8B]`, isPassed: 'true [1B]' },
        consoleOutput: `Count: ${count} GPA: ${gpa}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'count', outputValue: count }
      }
    ];
  },
  executionSteps: []
};

export const cppSwapTemp: LessonProgram = {
  id: 'cpp_swap_temp',
  language: 'cpp',
  topic: 'variables',
  lessonNumber: 2,
  friendlyName: 'Swap Two Variables (Using Temp)',
  learningObjective: 'Understand variable value swapping using a third temporary memory slot in C++.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10', paramId: 'a' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '20', paramId: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'temp' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'temp' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"a: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '", b: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    a: { default: 10, min: 1, max: 100, label: 'a (int)' },
    b: { default: 20, min: 1, max: 100, label: 'b (int)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const aVal = Number(vars.a ?? 10);
    const bVal = Number(vars.b ?? 20);
    return [
      {
        step: 1, lineNum: 4,
        explanationEnglish: `Initialize a = ${aVal}, b = ${bVal}.`,
        explanationHinglish: `a = ${aVal} aur b = ${bVal} declare hua.`,
        memorySnapshot: { a: `${aVal} [4B]`, b: `${bVal} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'a', value: aVal }
      },
      {
        step: 2, lineNum: 5,
        explanationEnglish: `Backup a (${aVal}) into temp variable.`,
        explanationHinglish: `a ki value (${aVal}) temp variable me backup ki.`,
        memorySnapshot: { a: `${aVal} [4B]`, b: `${bVal} [4B]`, temp: `${aVal} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'temp', value: aVal }
      },
      {
        step: 3, lineNum: 6,
        explanationEnglish: `Copy b (${bVal}) to a.`,
        explanationHinglish: `b (${bVal}) ki value a me copy hui -> a = ${bVal}.`,
        memorySnapshot: { a: `${bVal} [4B]`, b: `${bVal} [4B]`, temp: `${aVal} [4B]` },
        animationEvent: { type: 'COPY_VALUE' as const, from: 'b', to: 'a', value: bVal }
      },
      {
        step: 4, lineNum: 7,
        explanationEnglish: `Copy temp (${aVal}) to b. Swap complete!`,
        explanationHinglish: `temp (${aVal}) ki value b me copy hui -> b = ${aVal}. Swapping complete!`,
        memorySnapshot: { a: `${bVal} [4B]`, b: `${aVal} [4B]`, temp: `${aVal} [4B]` },
        animationEvent: { type: 'COPY_VALUE' as const, from: 'temp', to: 'b', value: aVal }
      },
      {
        step: 5, lineNum: 8,
        explanationEnglish: `cout prints a: ${bVal}, b: ${aVal}.`,
        explanationHinglish: `Console pe "a: ${bVal}, b: ${aVal}" print hua.`,
        memorySnapshot: { a: `${bVal} [4B]`, b: `${aVal} [4B]` },
        consoleOutput: `a: ${bVal}, b: ${aVal}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'a', outputValue: `${bVal}, ${aVal}` }
      }
    ];
  },
  executionSteps: []
};

export const cppSwapNoTemp: LessonProgram = {
  id: 'cpp_swap_no_temp',
  language: 'cpp',
  topic: 'variables',
  lessonNumber: 3,
  friendlyName: 'Swap Two Variables (Without Temp)',
  learningObjective: 'Swap two variables using arithmetic addition and subtraction.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5', paramId: 'a' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '15', paramId: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '-' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '-' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"a: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '", b: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    a: { default: 5, min: 1, max: 100, label: 'a (int)' },
    b: { default: 15, min: 1, max: 100, label: 'b (int)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const aVal = Number(vars.a ?? 5);
    const bVal = Number(vars.b ?? 15);
    const sum = aVal + bVal;
    const newB = sum - bVal;
    const newA = sum - newB;

    return [
      {
        step: 1, lineNum: 4,
        explanationEnglish: `Initialize a = ${aVal}, b = ${bVal}.`,
        explanationHinglish: `a = ${aVal} aur b = ${bVal} initialize hue.`,
        memorySnapshot: { a: `${aVal} [4B]`, b: `${bVal} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'a', value: aVal }
      },
      {
        step: 2, lineNum: 5,
        explanationEnglish: `a = a + b -> ${aVal} + ${bVal} = ${sum}.`,
        explanationHinglish: `a me sum store hua -> ${sum}.`,
        memorySnapshot: { a: `${sum} [4B]`, b: `${bVal} [4B]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'a', oldValue: aVal, newValue: sum }
      },
      {
        step: 3, lineNum: 6,
        explanationEnglish: `b = a - b -> ${sum} - ${bVal} = ${newB}. Original a restored to b!`,
        explanationHinglish: `b = ${sum} - ${bVal} = ${newB}. Original a ki value b me aa gayi.`,
        memorySnapshot: { a: `${sum} [4B]`, b: `${newB} [4B]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'b', oldValue: bVal, newValue: newB }
      },
      {
        step: 4, lineNum: 7,
        explanationEnglish: `a = a - b -> ${sum} - ${newB} = ${newA}. Swap complete!`,
        explanationHinglish: `a = ${sum} - ${newB} = ${newA}. Swapping complete!`,
        memorySnapshot: { a: `${newA} [4B]`, b: `${newB} [4B]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'a', oldValue: sum, newValue: newA }
      },
      {
        step: 5, lineNum: 8,
        explanationEnglish: `cout prints a: ${newA}, b: ${newB}.`,
        explanationHinglish: `Console pe "a: ${newA}, b: ${newB}" print hua.`,
        memorySnapshot: { a: `${newA} [4B]`, b: `${newB} [4B]` },
        consoleOutput: `a: ${newA}, b: ${newB}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'a', outputValue: `${newA}, ${newB}` }
      }
    ];
  },
  executionSteps: []
};

export const cppConstants: LessonProgram = {
  id: 'cpp_constants',
  language: 'cpp',
  topic: 'variables',
  lessonNumber: 4,
  friendlyName: 'Constants & Read-only Variables (const)',
  learningObjective: 'Learn const qualifier usage for immutable, read-only memory variables in C++.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'const' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'PI' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3.14159' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'radius' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '7.0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'area' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'PI' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'radius' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'radius' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Area: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'area' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => {
    const pi = 3.14159;
    const r = 7.0;
    const areaVal = Number((pi * r * r).toFixed(2));
    return [
      {
        step: 1, lineNum: 4,
        explanationEnglish: 'Declare const double PI = 3.14159 (read-only constant).',
        explanationHinglish: 'const double PI = 3.14159 read-only constant memory me declare hua.',
        memorySnapshot: { PI: '3.14159 [const]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'PI', value: pi }
      },
      {
        step: 2, lineNum: 6,
        explanationEnglish: `Compute area = PI * r * r = ${areaVal}.`,
        explanationHinglish: `area calculate hua -> ${areaVal}.`,
        memorySnapshot: { PI: '3.14159 [const]', radius: `${r} [8B]`, area: `${areaVal} [8B]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'area', value: areaVal }
      },
      {
        step: 3, lineNum: 7,
        explanationEnglish: `cout prints Area: ${areaVal}.`,
        explanationHinglish: `Console pe "Area: ${areaVal}" print hua.`,
        memorySnapshot: { PI: '3.14159 [const]', radius: `${r} [8B]`, area: `${areaVal} [8B]` },
        consoleOutput: `Area: ${areaVal}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'area', outputValue: String(areaVal) }
      }
    ];
  },
  executionSteps: []
};

// ─── TOPIC 02: OPERATORS & EXPRESSIONS (4 Programs) ───────────────────────────

export const cppArithmetic: LessonProgram = {
  id: 'cpp_arithmetic',
  language: 'cpp',
  topic: 'operators',
  lessonNumber: 1,
  friendlyName: 'Arithmetic Operators (+, -, *, /, %)',
  learningObjective: 'Master C++ arithmetic operator evaluation rules and integer division vs modulo.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: '#include' }, { type: 'text', value: ' ' }, { type: 'string', value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword', value: 'using' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'namespace' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'std' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '()' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '17' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'div' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '/' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'rem' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '%' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'function', value: 'cout' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Div: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'div' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'string', value: '", Rem: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'rem' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {},
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 4,
      explanationEnglish: 'Initialize int a = 17, b = 5.',
      explanationHinglish: 'a = 17, b = 5 memory me declare hue.',
      memorySnapshot: { a: '17 [4B]', b: '5 [4B]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'a', value: 17 }
    },
    {
      step: 2, lineNum: 5,
      explanationEnglish: 'Integer division: 17 / 5 = 3 (truncates decimal part).',
      explanationHinglish: 'Integer division 17 / 5 = 3 (decimal remove ho gaya).',
      memorySnapshot: { a: '17 [4B]', b: '5 [4B]', div: '3 [4B]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'div', value: 3 }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'Modulo remainder: 17 % 5 = 2.',
      explanationHinglish: 'Remainder 17 % 5 = 2 rem variable me store hua.',
      memorySnapshot: { a: '17 [4B]', b: '5 [4B]', div: '3 [4B]', rem: '2 [4B]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'rem', value: 2 }
    },
    {
      step: 4, lineNum: 7,
      explanationEnglish: 'cout prints Div: 3, Rem: 2.',
      explanationHinglish: 'Console pe "Div: 3, Rem: 2" print hua.',
      memorySnapshot: { a: '17 [4B]', b: '5 [4B]', div: '3 [4B]', rem: '2 [4B]' },
      consoleOutput: 'Div: 3, Rem: 2',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'div', outputValue: '3, 2' }
    }
  ],
  executionSteps: []
};

// Export C++ lessons registry map
export const cppLessons: Record<string, LessonProgram> = {
  cpp_types: cppDataTypes,
  cpp_swap_temp: cppSwapTemp,
  cpp_swap_no_temp: cppSwapNoTemp,
  cpp_constants: cppConstants,
  cpp_arithmetic: cppArithmetic,
};
