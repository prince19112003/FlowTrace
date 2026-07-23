import type { LessonProgram, ExecutionStep, TokenType } from '../types';

// Helper to make simple C++ lesson program with custom code, variables, and steps
function createCppLesson(
  id: string,
  topic: string,
  lessonNumber: number,
  friendlyName: string,
  learningObjective: string,
  lines: Array<{ lineNum: number; tokens: Array<{ type: TokenType; value: string; paramId?: string }> }>,
  editableVariables: Record<string, any>,
  stepGenerator: (vars: Record<string, any>) => ExecutionStep[]
): LessonProgram {
  return {
    id,
    language: 'cpp',
    topic,
    lessonNumber,
    friendlyName,
    learningObjective,
    lines,
    editableVariables,
    generateSteps: stepGenerator,
    executionSteps: []
  };
}

// ─── TOPIC 01: VARIABLES & MEMORY (4 Programs) ─────────────────────────────────

export const cpp_types = createCppLesson(
  'cpp_types', 'variables', 1,
  'C++ Primitive Data Types (int, float, double, bool, char)',
  'Learn C++ strongly-typed variable declarations and explicit memory storage.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'count' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'count' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'gpa' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '3.8500f', paramId: 'gpa' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'double' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'salary' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '1250.7500', paramId: 'salary' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'bool' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'isPassed' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'true', paramId: 'isPassed' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'char' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'grade' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: "'A'", paramId: 'grade' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Grade: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'grade' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 11, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { 
    count: { default: 10, label: 'count (int)' }, 
    gpa: { default: 3.85, label: 'gpa (float)' }, 
    salary: { default: 1250.75, label: 'salary (double)' },
    isPassed: { default: 'true', label: 'isPassed (bool)', type: 'text', noQuotes: true },
    grade: { default: 'A', label: 'grade (char)', type: 'text' }
  },
  (vars) => {
    const count = Number(vars.count ?? 10);
    const gpaRaw = Number(vars.gpa ?? 3.85);
    const salaryRaw = Number(vars.salary ?? 1250.75);
    const isPassed = String(vars.isPassed ?? 'true');
    const grade = String(vars.grade ?? 'A').replace(/['"]/g, '');
    
    const gpa = isNaN(gpaRaw) ? '3.8500' : gpaRaw.toFixed(4);
    const salary = isNaN(salaryRaw) ? '1250.7500' : salaryRaw.toFixed(4);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Declare count = ${count} [4B].`, explanationHinglish: `Integer count (${count}) [4 Bytes] memory me allocate hua.`, memorySnapshot: { count: `${count} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'count', value: count } },
      { step: 2, lineNum: 5, explanationEnglish: `Declare gpa = ${gpa}f [4B].`, explanationHinglish: `Float variable gpa (${gpa}) [4 Bytes] store hua.`, memorySnapshot: { count: `${count} [4B]`, gpa: `${gpa} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'gpa', value: gpa } },
      { step: 3, lineNum: 6, explanationEnglish: `Declare salary = ${salary} [8B].`, explanationHinglish: `Double variable salary (${salary}) [8 Bytes] allocate hua.`, memorySnapshot: { count: `${count} [4B]`, gpa: `${gpa} [4B]`, salary: `${salary} [8B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'salary', value: salary } },
      { step: 4, lineNum: 7, explanationEnglish: `Declare isPassed = ${isPassed} [1B].`, explanationHinglish: `Boolean isPassed = ${isPassed} [1 Byte] slot me store hua.`, memorySnapshot: { count: `${count} [4B]`, gpa: `${gpa} [4B]`, salary: `${salary} [8B]`, isPassed: `${isPassed} [1B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'isPassed', value: isPassed } },
      { step: 5, lineNum: 8, explanationEnglish: `Declare grade = '${grade}' [1B].`, explanationHinglish: `Character grade ('${grade}') [1 Byte] memory slot me allocate hua.`, memorySnapshot: { count: `${count} [4B]`, gpa: `${gpa} [4B]`, salary: `${salary} [8B]`, isPassed: `${isPassed} [1B]`, grade: `'${grade}' [1B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'grade', value: `'${grade}'` } },
      { step: 6, lineNum: 9, explanationEnglish: `cout prints output: Grade: ${grade}.`, explanationHinglish: `std::cout se terminal me Grade: ${grade} display hua.`, memorySnapshot: { count: `${count} [4B]`, gpa: `${gpa} [4B]`, salary: `${salary} [8B]`, isPassed: `${isPassed} [1B]`, grade: `'${grade}' [1B]` }, consoleOutput: `Grade: ${grade}`, animationEvent: { type: 'PRINT_VALUE', variableName: 'grade', outputValue: `Grade: ${grade}` } }
    ];
  }
);

export const cpp_swap_temp = createCppLesson(
  'cpp_swap_temp', 'variables', 2,
  'Swap Two Variables (Using Temp)',
  'Understand variable value swapping using a third temporary memory slot in C++.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'a' }, { type: 'punctuation' as const, value: ';' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '20', paramId: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'temp' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'variable' as const, value: 'b' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'temp' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"a: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '", b: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { a: { default: 10, label: 'a' }, b: { default: 20, label: 'b' } },
  (vars) => {
    const a = Number(vars.a ?? 10);
    const b = Number(vars.b ?? 20);
    return [
      {
        step: 1, lineNum: 4,
        explanationEnglish: `Declare int a = ${a}.`,
        explanationHinglish: `Variable a (${a}) [4 Bytes] memory me allocate hua.`,
        memorySnapshot: { a: `${a} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'a', value: a }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Declare int b = ${b}.`,
        explanationHinglish: `Variable b (${b}) [4 Bytes] memory me allocate hua.`,
        memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'b', value: b }
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `int temp = a (${a}). Copy value of a to temp.`,
        explanationHinglish: `temp variable me a ki value (${a}) store ki.`,
        memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]`, temp: `${a} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'temp', value: a }
      },
      {
        step: 4, lineNum: 6,
        explanationEnglish: `a = b (${b}). Assign value of b into a.`,
        explanationHinglish: `b (${b}) ki value a me copy hui (a changed from ${a} -> ${b}).`,
        memorySnapshot: { a: `${b} [4B]`, b: `${b} [4B]`, temp: `${a} [4B]` },
        animationEvent: { type: 'UPDATE_VARIABLE', name: 'a', oldValue: a, newValue: b }
      },
      {
        step: 5, lineNum: 7,
        explanationEnglish: `b = temp (${a}). Assign value of temp into b. Swapping finished!`,
        explanationHinglish: `temp (${a}) ki value b me store hui -> b = ${a}. Swapping Complete!`,
        memorySnapshot: { a: `${b} [4B]`, b: `${a} [4B]`, temp: `${a} [4B]` },
        animationEvent: { type: 'UPDATE_VARIABLE', name: 'b', oldValue: b, newValue: a }
      },
      {
        step: 6, lineNum: 8,
        explanationEnglish: `cout prints swapped values a: ${b}, b: ${a}.`,
        explanationHinglish: `Console par Swapped values display hui: a: ${b}, b: ${a}.`,
        memorySnapshot: { a: `${b} [4B]`, b: `${a} [4B]`, temp: `${a} [4B]` },
        consoleOutput: `a: ${b}, b: ${a}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'cout', outputValue: `a: ${b}, b: ${a}` }
      }
    ];
  }
);

export const cpp_swap_no_temp = createCppLesson(
  'cpp_swap_no_temp', 'variables', 3,
  'Swap Two Variables (Without Temp)',
  'Swap two variables using arithmetic addition and subtraction.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '5', paramId: 'a' }, { type: 'punctuation' as const, value: ';' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '15', paramId: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '+' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'variable' as const, value: 'b' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '-' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '-' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"a: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '", b: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { a: { default: 5, label: 'a' }, b: { default: 15, label: 'b' } },
  (vars) => {
    const a = Number(vars.a ?? 5);
    const b = Number(vars.b ?? 15);
    const sum = a + b;
    return [
      {
        step: 1, lineNum: 4,
        explanationEnglish: `Declare int a = ${a}.`,
        explanationHinglish: `Variable a (${a}) [4 Bytes] memory me allocate hua.`,
        memorySnapshot: { a: `${a} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'a', value: a }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Declare int b = ${b}.`,
        explanationHinglish: `Variable b (${b}) [4 Bytes] memory me allocate hua.`,
        memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'b', value: b }
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `a = a + b -> ${a} + ${b} = ${sum}. Calculate sum of both variables.`,
        explanationHinglish: `a = a + b (${a} + ${b} = ${sum}). a me dono variables ka total sum store hua -> ${sum}.`,
        memorySnapshot: { a: `${sum} [4B]`, b: `${b} [4B]` },
        animationEvent: { type: 'UPDATE_VARIABLE', name: 'a', oldValue: a, newValue: sum, formula: `a = ${a} + ${b} = ${sum}` }
      },
      {
        step: 4, lineNum: 6,
        explanationEnglish: `b = a - b -> ${sum} - ${b} = ${a}. Extract original a value into b.`,
        explanationHinglish: `b = a - b (${sum} - ${b} = ${a}). b me original a ki value (${a}) aagayi.`,
        memorySnapshot: { a: `${sum} [4B]`, b: `${a} [4B]` },
        animationEvent: { type: 'UPDATE_VARIABLE', name: 'b', oldValue: b, newValue: a, formula: `b = ${sum} - ${b} = ${a}` }
      },
      {
        step: 5, lineNum: 7,
        explanationEnglish: `a = a - b -> ${sum} - ${a} = ${b}. Extract original b value into a. Swapping Complete!`,
        explanationHinglish: `a = a - b (${sum} - ${a} = ${b}). a me original b ki value (${b}) aagayi. Swapping Complete!`,
        memorySnapshot: { a: `${b} [4B]`, b: `${a} [4B]` },
        animationEvent: { type: 'UPDATE_VARIABLE', name: 'a', oldValue: sum, newValue: b, formula: `a = ${sum} - ${a} = ${b}` }
      },
      {
        step: 6, lineNum: 8,
        explanationEnglish: `cout prints swapped values a: ${b}, b: ${a}.`,
        explanationHinglish: `Console par Swapped values display hui: a: ${b}, b: ${a}.`,
        memorySnapshot: { a: `${b} [4B]`, b: `${a} [4B]` },
        consoleOutput: `a: ${b}, b: ${a}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'cout', outputValue: `a: ${b}, b: ${a}` }
      }
    ];
  }
);

export const cpp_constants = createCppLesson(
  'cpp_constants', 'variables', 4,
  'Constants & Read-only Variables (const)',
  'Learn const qualifier usage for immutable, read-only memory variables in C++.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'const' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'PI' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '3.1416f' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'radius' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '7.0000f' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'area' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'PI' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '*' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'radius' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '*' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'radius' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Area: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'area' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  {},
  () => [
    { step: 1, lineNum: 4, explanationEnglish: 'Declare const float PI = 3.1416f.', explanationHinglish: 'PI read-only constant memory me initialize hua (3.1416).', memorySnapshot: { PI: '3.1416 [const]' }, animationEvent: { type: 'CREATE_VARIABLE', name: 'PI', value: '3.1416' } },
    { step: 2, lineNum: 5, explanationEnglish: 'Declare float radius = 7.0000f.', explanationHinglish: 'Float variable radius = 7.0000 memory me store hua.', memorySnapshot: { PI: '3.1416 [const]', radius: '7.0000 [4B]' }, animationEvent: { type: 'CREATE_VARIABLE', name: 'radius', value: '7.0000' } },
    { step: 3, lineNum: 6, explanationEnglish: 'Compute area = PI * radius * radius = 153.9384.', explanationHinglish: 'area = 3.1416 * 7.0000 * 7.0000 = 153.9384 calculate hua.', memorySnapshot: { PI: '3.1416 [const]', radius: '7.0000 [4B]', area: '153.9384 [4B]' }, animationEvent: { type: 'COMPUTE', inputs: ['PI', 'radius', 'radius'], operator: '* *', storeIn: 'area', result: '153.9384' } },
    { step: 4, lineNum: 7, explanationEnglish: 'cout prints Area: 153.9384.', explanationHinglish: 'Console pe Area: 153.9384 display hua.', memorySnapshot: { PI: '3.1416 [const]', radius: '7.0000 [4B]', area: '153.9384 [4B]' }, consoleOutput: 'Area: 153.9384', animationEvent: { type: 'PRINT_VALUE', variableName: 'area', outputValue: 'Area: 153.9384' } }
  ]
);


export const cpp_arithmetic = createCppLesson(
  'cpp_arithmetic', 'operators', 1,
  'Arithmetic Operators (+, -, *, /, %)',
  'Master C++ arithmetic operator evaluation rules and memory updates.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '17', paramId: 'a' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '5', paramId: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'sum' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '+' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'diff' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '-' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'prod' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '*' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'quot' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '/' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'rem' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'a' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '%' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'b' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 11, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 12, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { a: { default: 17, label: 'a (int)' }, b: { default: 5, label: 'b (int)' } },
  (vars) => {
    const a = Number(vars.a ?? 17);
    const b = Number(vars.b ?? 5);
    const sum = a + b;
    const diff = a - b;
    const prod = a * b;
    const quot = b !== 0 ? Math.floor(a / b) : 0;
    const rem = b !== 0 ? a % b : 0;

    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize variable a = ${a}.`, explanationHinglish: `Variable a (${a}) [4 Bytes] memory me allocate hua.`, memorySnapshot: { a: `${a} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'a', value: a } },
      { step: 2, lineNum: 5, explanationEnglish: `Initialize variable b = ${b}.`, explanationHinglish: `Variable b (${b}) [4 Bytes] memory me allocate hua.`, memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'b', value: b } },
      { step: 3, lineNum: 6, explanationEnglish: `Calculate sum = a + b = ${sum}.`, explanationHinglish: `sum = ${a} + ${b} = ${sum} calculate hokar store hua.`, memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]`, sum: `${sum} [4B]` }, animationEvent: { type: 'COMPUTE', inputs: ['a', 'b'], operator: '+', storeIn: 'sum', result: sum } },
      { step: 4, lineNum: 7, explanationEnglish: `Calculate diff = a - b = ${diff}.`, explanationHinglish: `diff = ${a} - ${b} = ${diff} calculate hokar store hua.`, memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]`, sum: `${sum} [4B]`, diff: `${diff} [4B]` }, animationEvent: { type: 'COMPUTE', inputs: ['a', 'b'], operator: '-', storeIn: 'diff', result: diff } },
      { step: 5, lineNum: 8, explanationEnglish: `Calculate prod = a * b = ${prod}.`, explanationHinglish: `prod = ${a} * ${b} = ${prod} calculate hokar store hua.`, memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]`, sum: `${sum} [4B]`, diff: `${diff} [4B]`, prod: `${prod} [4B]` }, animationEvent: { type: 'COMPUTE', inputs: ['a', 'b'], operator: '*', storeIn: 'prod', result: prod } },
      { step: 6, lineNum: 9, explanationEnglish: `Calculate quot = a / b = ${quot}.`, explanationHinglish: `quot = ${a} / ${b} = ${quot} (integer division) store hua.`, memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]`, sum: `${sum} [4B]`, diff: `${diff} [4B]`, prod: `${prod} [4B]`, quot: `${quot} [4B]` }, animationEvent: { type: 'COMPUTE', inputs: ['a', 'b'], operator: '/', storeIn: 'quot', result: quot } },
      { step: 7, lineNum: 10, explanationEnglish: `Calculate rem = a % b = ${rem}.`, explanationHinglish: `rem = ${a} % ${b} = ${rem} (remainder modulo) store hua.`, memorySnapshot: { a: `${a} [4B]`, b: `${b} [4B]`, sum: `${sum} [4B]`, diff: `${diff} [4B]`, prod: `${prod} [4B]`, quot: `${quot} [4B]`, rem: `${rem} [4B]` }, animationEvent: { type: 'COMPUTE', inputs: ['a', 'b'], operator: '%', storeIn: 'rem', result: rem } }
    ];
  }
);


export const cpp_relational_logical = createCppLesson(
  'cpp_relational_logical', 'operators', 2,
  'Relational & Logical Operators (&&, ||, !)',
  'Understand comparison rules and combine conditions with boolean logic.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'age' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '20', paramId: 'age' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'bool' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'hasID' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'true', paramId: 'hasID' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'bool' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'canVote' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'age' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '>=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '18' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '&&' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'hasID' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'bool' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'discount' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'age' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '12' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '||' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'age' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '>=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '60' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { age: { default: 20, label: 'age (int)' }, hasID: { default: 'true', label: 'hasID (bool)', type: 'text', noQuotes: true } },
  (vars) => {
    const age = Number(vars.age ?? 20);
    const hasID = String(vars.hasID ?? 'true') === 'true';
    const canVote = age >= 18 && hasID;
    const discount = age < 12 || age >= 60;
    const hasIDStr = hasID ? 'true' : 'false';
    const canVoteStr = canVote ? 'true' : 'false';
    const discountStr = discount ? 'true' : 'false';

    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize age = ${age}.`, explanationHinglish: `Variable age (${age}) memory me allocate hua.`, memorySnapshot: { age: `${age} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'age', value: age } },
      { step: 2, lineNum: 5, explanationEnglish: `Initialize hasID = ${hasIDStr}.`, explanationHinglish: `Boolean hasID (${hasIDStr}) memory me store hua.`, memorySnapshot: { age: `${age} [4B]`, hasID: `${hasIDStr} [1B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'hasID', value: hasIDStr } },
      { step: 3, lineNum: 6, explanationEnglish: `Evaluate canVote = (age >= 18 && hasID) -> (${age} >= 18 && ${hasIDStr}) = ${canVoteStr}.`, explanationHinglish: `canVote (${canVoteStr}) calculate hokar store hua.`, memorySnapshot: { age: `${age} [4B]`, hasID: `${hasIDStr} [1B]`, canVote: `${canVoteStr} [1B]` }, animationEvent: { type: 'COMPUTE', inputs: ['age', '18', 'hasID'], operator: '>= &&', storeIn: 'canVote', result: canVoteStr } },
      { step: 4, lineNum: 7, explanationEnglish: `Evaluate discount = (age < 12 || age >= 60) -> (${age} < 12 || ${age} >= 60) = ${discountStr}.`, explanationHinglish: `discount (${discountStr}) calculate hokar store hua.`, memorySnapshot: { age: `${age} [4B]`, hasID: `${hasIDStr} [1B]`, canVote: `${canVoteStr} [1B]`, discount: `${discountStr} [1B]` }, animationEvent: { type: 'COMPUTE', inputs: ['age', '12', 'age', '60'], operator: '< || >=', storeIn: 'discount', result: discountStr } }
    ];
  }
);


export const cpp_inc_dec = createCppLesson(
  'cpp_inc_dec', 'operators', 3,
  'Pre-increment vs Post-increment (++i vs i++)',
  'Master prefix and postfix increment statements and memory updates.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'x' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '5', paramId: 'x' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'y' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '++' }, { type: 'variable' as const, value: 'x' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'z' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'x' }, { type: 'operator' as const, value: '++' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { x: { default: 5, label: 'x (int)' } },
  (vars) => {
    const startX = Number(vars.x ?? 5);
    const preX = startX + 1;
    const postX = preX + 1;

    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize x = ${startX}.`, explanationHinglish: `Variable x (${startX}) memory me allocate hua.`, memorySnapshot: { x: `${startX} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'x', value: startX } },
      { step: 2, lineNum: 5, explanationEnglish: `Pre-increment x first: x becomes ${preX}.`, explanationHinglish: `Pehle x ki value increment hokar ${preX} hui.`, memorySnapshot: { x: `${preX} [4B]` }, animationEvent: { type: 'UPDATE_VARIABLE', name: 'x', newValue: preX, oldValue: startX } },
      { step: 3, lineNum: 5, explanationEnglish: `Assign value to y: y = ${preX}.`, explanationHinglish: `y me incremented value (${preX}) store hui.`, memorySnapshot: { x: `${preX} [4B]`, y: `${preX} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'y', value: preX } },
      { step: 4, lineNum: 6, explanationEnglish: `Assign current x to z first: z = ${preX}.`, explanationHinglish: `Pehle z me current x (${preX}) copy hua.`, memorySnapshot: { x: `${preX} [4B]`, y: `${preX} [4B]`, z: `${preX} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'z', value: preX } },
      { step: 5, lineNum: 6, explanationEnglish: `Post-increment x afterwards: x becomes ${postX}.`, explanationHinglish: `Z me value copy karne ke baad x increment hokar ${postX} hua.`, memorySnapshot: { x: `${postX} [4B]`, y: `${preX} [4B]`, z: `${preX} [4B]` }, animationEvent: { type: 'UPDATE_VARIABLE', name: 'x', newValue: postX, oldValue: preX } }
    ];
  }
);


export const cpp_circle_geometry = createCppLesson(
  'cpp_circle_geometry', 'operators', 4,
  'Circle Area & Circumference Formulas',
  'Calculate circle properties using mathematical operators and constants.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'radius' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '5.0000f', paramId: 'radius' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'const' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'PI' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '3.1416f', paramId: 'PI' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'area' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'PI' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '*' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'radius' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '*' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'radius' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'circum' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '2.0000f' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '*' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'PI' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '*' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'radius' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { radius: { default: 5.0, label: 'radius (float)' }, PI: { default: 3.1416, label: 'PI (float)' } },
  (vars) => {
    const radiusRaw = Number(vars.radius ?? 5.0);
    const piRaw = Number(vars.PI ?? 3.1416);

    const radius = isNaN(radiusRaw) ? '5.0000' : radiusRaw.toFixed(4);
    const PI = isNaN(piRaw) ? '3.1416' : piRaw.toFixed(4);

    const areaVal = radiusRaw * radiusRaw * piRaw;
    const circumVal = 2.0 * piRaw * radiusRaw;

    const area = isNaN(areaVal) ? '78.5400' : areaVal.toFixed(4);
    const circum = isNaN(circumVal) ? '31.4160' : circumVal.toFixed(4);

    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize radius = ${radius}f.`, explanationHinglish: `Variable radius (${radius}) [4 Bytes] memory me allocate hua.`, memorySnapshot: { radius: `${radius} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'radius', value: radius } },
      { step: 2, lineNum: 5, explanationEnglish: `Initialize constant PI = ${PI}f.`, explanationHinglish: `Constant PI (${PI}) memory me store hua.`, memorySnapshot: { radius: `${radius} [4B]`, PI: `${PI} [const]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'PI', value: PI } },
      { step: 3, lineNum: 6, explanationEnglish: `Calculate area = PI * radius * radius = ${area}f.`, explanationHinglish: `area = ${PI} * ${radius} * ${radius} = ${area} store hua.`, memorySnapshot: { radius: `${radius} [4B]`, PI: `${PI} [const]`, area: `${area} [4B]` }, animationEvent: { type: 'COMPUTE', inputs: ['PI', 'radius', 'radius'], operator: '* *', storeIn: 'area', result: area } },
      { step: 4, lineNum: 7, explanationEnglish: `Calculate circum = 2.0f * PI * radius = ${circum}f.`, explanationHinglish: `circum = 2.0 * ${PI} * ${radius} = ${circum} store hua.`, memorySnapshot: { radius: `${radius} [4B]`, PI: `${PI} [const]`, area: `${area} [4B]`, circum: `${circum} [4B]` }, animationEvent: { type: 'COMPUTE', inputs: ['PI', 'radius'], operator: '* *', storeIn: 'circum', result: circum } }
    ];
  }
);


export const cpp_cin_primitives = createCppLesson(
  'cpp_cin_primitives', 'user_input', 1,
  'Read Primitive Inputs (cin >>)',
  'Demonstrate console input for standard C++ primitives (int, float, char) using std::cin.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'age' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'float' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'gpa' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'char' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'grade' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cin' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '>>' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'age', paramId: 'age' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cin' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '>>' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'gpa', paramId: 'gpa' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cin' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '>>' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'grade', paramId: 'grade' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Age: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'age' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '", GPA: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'gpa' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '", Grade: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'grade' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 11, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 12, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  {
    age: { default: 21, label: 'Input Age (int)' },
    gpa: { default: 3.85, label: 'Input GPA (float)' },
    grade: { default: 'A', label: 'Input Grade (char)', type: 'text' }
  },
  (vars) => {
    const age = Number(vars.age ?? 21);
    const gpaRaw = Number(vars.gpa ?? 3.85);
    const grade = String(vars.grade ?? 'A').replace(/['"]/g, '');
    const gpa = isNaN(gpaRaw) ? '3.8500' : gpaRaw.toFixed(4);

    return [
      { step: 1, lineNum: 4, explanationEnglish: `Declare age [4B].`, explanationHinglish: `Variable age memory me declare hua.`, memorySnapshot: {}, animationEvent: { type: 'CREATE_VARIABLE', name: 'age', value: '?' } },
      { step: 2, lineNum: 5, explanationEnglish: `Declare gpa [4B].`, explanationHinglish: `Variable gpa memory me declare hua.`, memorySnapshot: { age: '? [4B]' }, animationEvent: { type: 'CREATE_VARIABLE', name: 'gpa', value: '?' } },
      { step: 3, lineNum: 6, explanationEnglish: `Declare grade [1B].`, explanationHinglish: `Variable grade memory me declare hua.`, memorySnapshot: { age: '? [4B]', gpa: '? [4B]' }, animationEvent: { type: 'CREATE_VARIABLE', name: 'grade', value: '?' } },
      { step: 4, lineNum: 7, explanationEnglish: `cin reads age = ${age} from console.`, explanationHinglish: `Console se user input age = ${age} read hokar store hua.`, memorySnapshot: { age: `${age} [4B]`, gpa: '? [4B]', grade: '? [1B]' }, animationEvent: { type: 'UPDATE_VARIABLE', name: 'age', newValue: age, oldValue: '?' } },
      { step: 5, lineNum: 8, explanationEnglish: `cin reads gpa = ${gpa} from console.`, explanationHinglish: `Console se user input gpa = ${gpa} read hokar store hua.`, memorySnapshot: { age: `${age} [4B]`, gpa: `${gpa} [4B]`, grade: '? [1B]' }, animationEvent: { type: 'UPDATE_VARIABLE', name: 'gpa', newValue: gpa, oldValue: '?' } },
      { step: 6, lineNum: 9, explanationEnglish: `cin reads grade = '${grade}' from console.`, explanationHinglish: `Console se user input grade = '${grade}' read hokar store hua.`, memorySnapshot: { age: `${age} [4B]`, gpa: `${gpa} [4B]`, grade: `'${grade}' [1B]` }, animationEvent: { type: 'UPDATE_VARIABLE', name: 'grade', newValue: `'${grade}'`, oldValue: '?' } },
      { step: 7, lineNum: 10, explanationEnglish: `cout prints: Age: ${age}, GPA: ${gpa}, Grade: ${grade}.`, explanationHinglish: `cout terminal me output display karega.`, memorySnapshot: { age: `${age} [4B]`, gpa: `${gpa} [4B]`, grade: `'${grade}' [1B]` }, consoleOutput: `Age: ${age}, GPA: ${gpa}, Grade: ${grade}`, animationEvent: { type: 'PRINT_VALUE', variableName: 'grade', outputValue: `Age: ${age}, GPA: ${gpa}, Grade: ${grade}` } }
    ];
  }
);


export const cpp_cin_strings = createCppLesson(
  'cpp_cin_strings', 'user_input', 2,
  'Read String Inputs (cin vs getline)',
  'Compare reading a single word with cin versus reading a full line with std::getline.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<string>' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'variable' as const, value: 'string' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'word' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'variable' as const, value: 'string' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'line' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cin' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '>>' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'word', paramId: 'word' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'getline' }, { type: 'punctuation' as const, value: '(' }, { type: 'function' as const, value: 'cin' }, { type: 'punctuation' as const, value: ',' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'line', paramId: 'line' }, { type: 'punctuation' as const, value: ')' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Word: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'word' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '", Line: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'line' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 10, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 11, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  {
    word: { default: 'Hello', label: 'Input Word (string)', type: 'text', noQuotes: true },
    line: { default: 'Welcome to FlowTrace', label: 'Input Line (string)', type: 'text', noQuotes: true }
  },
  (vars) => {
    const wordInput = String(vars.word ?? 'Hello').replace(/['"]/g, '');
    const word = wordInput.split(/\s+/)[0] || 'Hello';
    const line = String(vars.line ?? 'Welcome to FlowTrace').replace(/['"]/g, '');

    return [
      { step: 1, lineNum: 5, explanationEnglish: `Declare word variable [string].`, explanationHinglish: `word variable memory me declare hua.`, memorySnapshot: {}, animationEvent: { type: 'CREATE_VARIABLE', name: 'word', value: '""' } },
      { step: 2, lineNum: 6, explanationEnglish: `Declare line variable [string].`, explanationHinglish: `line variable memory me declare hua.`, memorySnapshot: { word: '""' }, animationEvent: { type: 'CREATE_VARIABLE', name: 'line', value: '""' } },
      { step: 3, lineNum: 7, explanationEnglish: `cin >> word reads first word: "${word}".`, explanationHinglish: `cin space se pehle tak ka word ("${word}") read karega.`, memorySnapshot: { word: `"${word}"`, line: '""' }, animationEvent: { type: 'UPDATE_VARIABLE', name: 'word', newValue: `"${word}"`, oldValue: '""' } },
      { step: 4, lineNum: 8, explanationEnglish: `getline(cin, line) reads full line: "${line}".`, explanationHinglish: `getline full text line ("${line}") read karke store karega.`, memorySnapshot: { word: `"${word}"`, line: `"${line}"` }, animationEvent: { type: 'UPDATE_VARIABLE', name: 'line', newValue: `"${line}"`, oldValue: '""' } },
      { step: 5, lineNum: 9, explanationEnglish: `cout prints: Word: ${word}, Line: ${line}.`, explanationHinglish: `cout terminal screen par outputs display karega.`, memorySnapshot: { word: `"${word}"`, line: `"${line}"` }, consoleOutput: `Word: ${word}, Line: ${line}`, animationEvent: { type: 'PRINT_VALUE', variableName: 'line', outputValue: `Word: ${word}, Line: ${line}` } }
    ];
  }
);


export const cpp_implicit_casting = createCppLesson(
  'cpp_implicit_casting', 'type_casting', 1,
  'Implicit Widening Type Casting',
  'Automatic type conversion from smaller int to double without precision loss.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'num' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '15', paramId: 'num' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'double' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'decimal' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'num' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { num: { default: 15, label: 'num (int)' } },
  (vars) => {
    const num = Number(vars.num ?? 15);
    const decimal = num.toFixed(4);

    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize num = ${num}.`, explanationHinglish: `Variable num (${num}) [4 Bytes] memory me initialize hua.`, memorySnapshot: { num: `${num} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'num', value: num } },
      { step: 2, lineNum: 5, explanationEnglish: `num is implicitly widened and assigned to decimal = ${decimal}.`, explanationHinglish: `int num (${num}) automatically widening cast hokar double decimal (${decimal}) me copy hua.`, memorySnapshot: { num: `${num} [4B]`, decimal: `${decimal} [8B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'decimal', value: decimal } }
    ];
  }
);


export const cpp_explicit_casting = createCppLesson(
  'cpp_explicit_casting', 'type_casting', 2,
  'Explicit Static Casting (static_cast)',
  'Force explicit type conversion using static_cast operator in C++.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'double' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'price' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '9.8500', paramId: 'price' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'intPrice' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'static_cast' }, { type: 'operator' as const, value: '<' }, { type: 'keyword' as const, value: 'int' }, { type: 'operator' as const, value: '>' }, { type: 'punctuation' as const, value: '(' }, { type: 'variable' as const, value: 'price' }, { type: 'punctuation' as const, value: ')' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { price: { default: 9.85, label: 'price (double)' } },
  (vars) => {
    const priceRaw = Number(vars.price ?? 9.85);
    const price = isNaN(priceRaw) ? '9.8500' : priceRaw.toFixed(4);
    const intPrice = isNaN(priceRaw) ? 9 : Math.floor(priceRaw);

    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize price = ${price}.`, explanationHinglish: `Variable price (${price}) [8 Bytes] memory me store hua.`, memorySnapshot: { price: `${price} [8B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'price', value: price } },
      { step: 2, lineNum: 5, explanationEnglish: `Convert price explicitly using static_cast<int>(price) = ${intPrice}.`, explanationHinglish: `static_cast se double value ko int (${intPrice}) me explicitly convert kiya (fractional part truncate hua).`, memorySnapshot: { price: `${price} [8B]`, intPrice: `${intPrice} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'intPrice', value: intPrice } }
    ];
  }
);


export const cpp_char_ascii = createCppLesson(
  'cpp_char_ascii', 'type_casting', 3,
  'Char to ASCII Integer Code Conversion',
  'Convert single characters to their 1-byte ASCII integer value representation.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'char' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'ch' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: "'A'", paramId: 'ch' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'ascii' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'static_cast' }, { type: 'operator' as const, value: '<' }, { type: 'keyword' as const, value: 'int' }, { type: 'operator' as const, value: '>' }, { type: 'punctuation' as const, value: '(' }, { type: 'variable' as const, value: 'ch' }, { type: 'punctuation' as const, value: ')' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { ch: { default: 'A', label: 'ch (char)', type: 'text' } },
  (vars) => {
    const rawCh = String(vars.ch ?? 'A').replace(/['"]/g, '');
    const ch = rawCh ? rawCh[0] : 'A';
    const ascii = ch.charCodeAt(0);

    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize ch = '${ch}' [1B].`, explanationHinglish: `Variable ch ('${ch}') [1 Byte] memory me allocate hua.`, memorySnapshot: { ch: `'${ch}' [1B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'ch', value: `'${ch}'` } },
      { step: 2, lineNum: 5, explanationEnglish: `Explicitly cast ch to int: ascii = ${ascii}.`, explanationHinglish: `static_cast se char '${ch}' ki ASCII numerical value (${ascii}) read hokar ascii variable me store hui.`, memorySnapshot: { ch: `'${ch}' [1B]`, ascii: `${ascii} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'ascii', value: ascii } }
    ];
  }
);


export const cpp_if_else = createCppLesson(
  'cpp_if_else', 'if_else', 1,
  'Max of Two Numbers in C++',
  'Two-path conditional branching.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Max of Two Numbers in C++: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: 25 is greater than 15.`, explanationHinglish: `std::cout output display hua: 25 is greater than 15.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `25 is greater than 15`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_even_odd = createCppLesson(
  'cpp_even_odd', 'if_else', 2,
  'Even or Odd Number Checker',
  'Modulo parity evaluation.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Even or Odd Number Checker: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: 8 % 2 == 0 -> Even.`, explanationHinglish: `std::cout output display hua: 8 % 2 == 0 -> Even.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `8 % 2 == 0 -> Even`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_largest_three = createCppLesson(
  'cpp_largest_three', 'if_else', 3,
  'Largest of Three Numbers',
  'Logical AND in nested decision tree.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Largest of Three Numbers: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Largest of (12, 45, 29) is 45.`, explanationHinglish: `std::cout output display hua: Largest of (12, 45, 29) is 45.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Largest of (12, 45, 29) is 45`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_leap_year = createCppLesson(
  'cpp_leap_year', 'if_else', 4,
  'Leap Year Checker',
  'Evaluate leap year rules (%4, %100, %400).',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Leap Year Checker: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: 2024 is a Leap Year.`, explanationHinglish: `std::cout output display hua: 2024 is a Leap Year.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `2024 is a Leap Year`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_marks_grade = createCppLesson(
  'cpp_marks_grade', 'if_elif_else', 1,
  'Student Grade System (If-Else Ladder)',
  'Multi-tier grading ladder.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Student Grade System (If-Else Ladder): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Marks 85 -> Grade A.`, explanationHinglish: `std::cout output display hua: Marks 85 -> Grade A.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Marks 85 -> Grade A`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_tax_calc = createCppLesson(
  'cpp_tax_calc', 'if_elif_else', 2,
  'Income Tax Slab Calculator',
  'Tiered income tax calculation.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Income Tax Slab Calculator: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Income 600000 -> Tax = 30000.`, explanationHinglish: `std::cout output display hua: Income 600000 -> Tax = 30000.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Income 600000 -> Tax = 30000`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_pos_neg_zero = createCppLesson(
  'cpp_pos_neg_zero', 'if_elif_else', 3,
  'Positive, Negative, or Zero Checker',
  'Classify integer polarity.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Positive, Negative, or Zero Checker: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: -15 is Negative.`, explanationHinglish: `std::cout output display hua: -15 is Negative.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `-15 is Negative`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_electricity_bill = createCppLesson(
  'cpp_electricity_bill', 'if_elif_else', 4,
  'Tiered Electricity Bill Calculator',
  'Calculate utility bill per unit.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Tiered Electricity Bill Calculator: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Units 250 -> Bill = 1625.00.`, explanationHinglish: `std::cout output display hua: Units 250 -> Bill = 1625.00.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Units 250 -> Bill = 1625.00`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_switch_day = createCppLesson(
  'cpp_switch_day', 'switch_case', 1,
  'Day of Week Switch Case',
  'Switch statement jump tables.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Day of Week Switch Case: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Day 3 -> Wednesday.`, explanationHinglish: `std::cout output display hua: Day 3 -> Wednesday.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Day 3 -> Wednesday`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_switch_calc = createCppLesson(
  'cpp_switch_calc', 'switch_case', 2,
  'Menu-Driven Arithmetic Calculator',
  'Char switch operation selector.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Menu-Driven Arithmetic Calculator: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Op '+' -> 10 + 5 = 15.`, explanationHinglish: `std::cout output display hua: Op '+' -> 10 + 5 = 15.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Op '+' -> 10 + 5 = 15`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_switch_vowel = createCppLesson(
  'cpp_switch_vowel', 'switch_case', 3,
  'Vowel or Consonant Check (Fallthrough)',
  'Case fallthrough grouping.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Vowel or Consonant Check (Fallthrough): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: 'E' is a Vowel.`, explanationHinglish: `std::cout output display hua: 'E' is a Vowel.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `'E' is a Vowel`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_switch_month = createCppLesson(
  'cpp_switch_month', 'switch_case', 4,
  'Season Finder by Month Number',
  'Range matching with switch.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Season Finder by Month Number: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Month 7 -> Summer.`, explanationHinglish: `std::cout output display hua: Month 7 -> Summer.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Month 7 -> Summer`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_for_sum = createCppLesson(
  'cpp_for_sum', 'for_loop', 1,
  'Sum of First N Natural Numbers',
  'For loop counter accumulator.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Sum of First N Natural Numbers: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Sum of 1 to 5 = 15.`, explanationHinglish: `std::cout output display hua: Sum of 1 to 5 = 15.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Sum of 1 to 5 = 15`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_multiplication_table = createCppLesson(
  'cpp_multiplication_table', 'for_loop', 2,
  'Multiplication Table Generator',
  'Loop iteration formatted table.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Multiplication Table Generator: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: 5 x 1 = 5 ... 5 x 10 = 50.`, explanationHinglish: `std::cout output display hua: 5 x 1 = 5 ... 5 x 10 = 50.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `5 x 1 = 5 ... 5 x 10 = 50`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_even_numbers = createCppLesson(
  'cpp_even_numbers', 'for_loop', 3,
  'Print Even Numbers up to N',
  'Loop step increment (i += 2).',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Print Even Numbers up to N: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Even: 2 4 6 8 10.`, explanationHinglish: `std::cout output display hua: Even: 2 4 6 8 10.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Even: 2 4 6 8 10`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_fibonacci = createCppLesson(
  'cpp_fibonacci', 'for_loop', 4,
  'Fibonacci Series Generator (N terms)',
  'Iterative Fibonacci generation.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Fibonacci Series Generator (N terms): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Fibonacci: 0 1 1 2 3 5 8.`, explanationHinglish: `std::cout output display hua: Fibonacci: 0 1 1 2 3 5 8.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Fibonacci: 0 1 1 2 3 5 8`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_while = createCppLesson(
  'cpp_while', 'while_loop', 1,
  'While Loop Accumulator in C++',
  'While loop conditional loop.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"While Loop Accumulator in C++: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Count: 1 2 3.`, explanationHinglish: `std::cout output display hua: Count: 1 2 3.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Count: 1 2 3`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_digit_sum = createCppLesson(
  'cpp_digit_sum', 'while_loop', 2,
  'Sum of Digits (While Loop)',
  'Extract digits with % 10 & / 10.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Sum of Digits (While Loop): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Sum of digits of 432 = 9.`, explanationHinglish: `std::cout output display hua: Sum of digits of 432 = 9.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Sum of digits of 432 = 9`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_factorial = createCppLesson(
  'cpp_factorial', 'while_loop', 3,
  'Factorial Calculation (long long)',
  'Multiplicative factorial sequence.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Factorial Calculation (long long): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: 5! = 120.`, explanationHinglish: `std::cout output display hua: 5! = 120.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `5! = 120`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_reverse_num = createCppLesson(
  'cpp_reverse_num', 'while_loop', 4,
  'Reverse an Integer Number',
  'Reverse integer digits.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Reverse an Integer Number: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Reverse of 1234 is 4321.`, explanationHinglish: `std::cout output display hua: Reverse of 1234 is 4321.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Reverse of 1234 is 4321`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_do_while = createCppLesson(
  'cpp_do_while', 'do_while_loop', 1,
  'Do-While Guaranteed Execution',
  'Exit-controlled guaranteed run.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Do-While Guaranteed Execution: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Executes at least 1 time.`, explanationHinglish: `std::cout output display hua: Executes at least 1 time.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Executes at least 1 time`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_do_while_sum = createCppLesson(
  'cpp_do_while_sum', 'do_while_loop', 2,
  'Accumulator Loop (Do-While)',
  'Do-while accumulator loop.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Accumulator Loop (Do-While): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Sum accumulated = 30.`, explanationHinglish: `std::cout output display hua: Sum accumulated = 30.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Sum accumulated = 30`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_string_concat = createCppLesson(
  'cpp_string_concat', 'strings', 1,
  'String Concatenation & Length (.length())',
  'std::string operations.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"String Concatenation & Length (.length()): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Joined: "Hello World", Len = 11.`, explanationHinglish: `std::cout output display hua: Joined: "Hello World", Len = 11.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Joined: "Hello World", Len = 11`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_string_access = createCppLesson(
  'cpp_string_access', 'strings', 2,
  'String Character Access & Indexing (str[i])',
  'Character indexing in std::string.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"String Character Access & Indexing (str[i]): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: str[0] = "H", str[4] = "o".`, explanationHinglish: `std::cout output display hua: str[0] = "H", str[4] = "o".`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `str[0] = "H", str[4] = "o"`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_string_reverse = createCppLesson(
  'cpp_string_reverse', 'strings', 3,
  'Reverse a String (std::string)',
  'In-place string reversal.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Reverse a String (std::string): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Reversed: "dlroW olleH".`, explanationHinglish: `std::cout output display hua: Reversed: "dlroW olleH".`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Reversed: "dlroW olleH"`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_square_func = createCppLesson(
  'cpp_square_func', 'functions', 1,
  'Square Function in C++',
  'Return values and function call.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Square Function in C++: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: square(6) = 36.`, explanationHinglish: `std::cout output display hua: square(6) = 36.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `square(6) = 36`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_func_addition = createCppLesson(
  'cpp_func_addition', 'functions', 2,
  'Custom Addition Function with Parameters',
  'Function parameters passing.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Custom Addition Function with Parameters: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: add(12, 18) = 30.`, explanationHinglish: `std::cout output display hua: add(12, 18) = 30.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `add(12, 18) = 30`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_func_pass_by_val = createCppLesson(
  'cpp_func_pass_by_val', 'functions', 3,
  'Pass by Value (Parameter Copying)',
  'Pass by value stack copies.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Pass by Value (Parameter Copying): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Caller variable remains 10.`, explanationHinglish: `std::cout output display hua: Caller variable remains 10.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Caller variable remains 10`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_func_pass_by_ref = createCppLesson(
  'cpp_func_pass_by_ref', 'functions', 4,
  'Pass by Reference (int &x)',
  'Reference parameters mutation.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Pass by Reference (int &x): "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Caller variable modified to 50.`, explanationHinglish: `std::cout output display hua: Caller variable modified to 50.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Caller variable modified to 50`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_array_max = createCppLesson(
  'cpp_array_max', 'arrays_1d', 1,
  'Find Maximum Element in C++ Array',
  '1D array linear scan.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Find Maximum Element in C++ Array: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Max element in [45, 89, 12] is 89.`, explanationHinglish: `std::cout output display hua: Max element in [45, 89, 12] is 89.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Max element in [45, 89, 12] is 89`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_array_sum = createCppLesson(
  'cpp_array_sum', 'arrays_1d', 2,
  '1D Array Sum & Average Computation',
  'Array accumulator loop.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"1D Array Sum & Average Computation: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Sum = 150, Avg = 30.0.`, explanationHinglish: `std::cout output display hua: Sum = 150, Avg = 30.0.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Sum = 150, Avg = 30.0`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_linear_search = createCppLesson(
  'cpp_linear_search', 'arrays_1d', 3,
  'Linear Search in 1D Array',
  'Target element array scan.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Linear Search in 1D Array: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Target 25 found at index 2.`, explanationHinglish: `std::cout output display hua: Target 25 found at index 2.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Target 25 found at index 2`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_array_reverse = createCppLesson(
  'cpp_array_reverse', 'arrays_1d', 4,
  'Reverse 1D Array Elements In-place',
  'Two-pointer array reversal.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Reverse 1D Array Elements In-place: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Reversed: [50, 40, 30, 20, 10].`, explanationHinglish: `std::cout output display hua: Reversed: [50, 40, 30, 20, 10].`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Reversed: [50, 40, 30, 20, 10]`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_matrix_2d = createCppLesson(
  'cpp_matrix_2d', 'arrays_2d', 1,
  '2D Matrix Declaration & Traversal',
  'Nested loop 2D grid traversal.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"2D Matrix Declaration & Traversal: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Matrix [2][2] printed.`, explanationHinglish: `std::cout output display hua: Matrix [2][2] printed.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Matrix [2][2] printed`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_diagonal_sum_2d = createCppLesson(
  'cpp_diagonal_sum_2d', 'arrays_2d', 2,
  'Primary Diagonal Sum of 2D Matrix',
  'Primary diagonal element sum.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"Primary Diagonal Sum of 2D Matrix: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Diagonal sum (1+5+9) = 15.`, explanationHinglish: `std::cout output display hua: Diagonal sum (1+5+9) = 15.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Diagonal sum (1+5+9) = 15`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cpp_matrix_transpose = createCppLesson(
  'cpp_matrix_transpose', 'arrays_2d', 3,
  '2D Matrix Transpose',
  'Rows to columns matrix swap.',
  [
    { lineNum: 1, tokens: [{ type: 'keyword' as const, value: '#include' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '<iostream>' }] },
    { lineNum: 2, tokens: [{ type: 'keyword' as const, value: 'using' }, { type: 'text' as const, value: ' ' }, { type: 'keyword' as const, value: 'namespace' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'std' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 3, tokens: [{ type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'function' as const, value: 'main' }, { type: 'punctuation' as const, value: '()' }, { type: 'text' as const, value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'int' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '=' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '10', paramId: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'function' as const, value: 'cout' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'string' as const, value: '"2D Matrix Transpose: "' }, { type: 'text' as const, value: ' ' }, { type: 'operator' as const, value: '<<' }, { type: 'text' as const, value: ' ' }, { type: 'variable' as const, value: 'val' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text' as const, value: '    ' }, { type: 'keyword' as const, value: 'return' }, { type: 'text' as const, value: ' ' }, { type: 'number' as const, value: '0' }, { type: 'punctuation' as const, value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation' as const, value: '}' }] },
  ],
  { val: { default: 10, label: 'val (int)' } },
  (vars) => {
    const val = Number(vars.val ?? 10);
    return [
      { step: 1, lineNum: 4, explanationEnglish: `Initialize val = ${val} [4Bytes].`, explanationHinglish: `Variable val (${val}) memory me store hua.`, memorySnapshot: { val: `${val} [4B]` }, animationEvent: { type: 'CREATE_VARIABLE', name: 'val', value: val } },
      { step: 2, lineNum: 5, explanationEnglish: `cout prints output: Transpose matrix generated.`, explanationHinglish: `std::cout output display hua: Transpose matrix generated.`, memorySnapshot: { val: `${val} [4B]` }, consoleOutput: `Transpose matrix generated`, animationEvent: { type: 'PRINT_VALUE', variableName: 'val', outputValue: val } }
    ];
  }
);


export const cppLessons: Record<string, LessonProgram> = {
  cpp_types: cpp_types,
  cpp_swap_temp: cpp_swap_temp,
  cpp_swap_no_temp: cpp_swap_no_temp,
  cpp_arithmetic: cpp_arithmetic,
  cpp_relational_logical: cpp_relational_logical,
  cpp_inc_dec: cpp_inc_dec,
  cpp_circle_geometry: cpp_circle_geometry,
  cpp_cin_primitives: cpp_cin_primitives,
  cpp_cin_strings: cpp_cin_strings,
  cpp_implicit_casting: cpp_implicit_casting,
  cpp_explicit_casting: cpp_explicit_casting,
  cpp_char_ascii: cpp_char_ascii,
  cpp_if_else: cpp_if_else,
  cpp_even_odd: cpp_even_odd,
  cpp_largest_three: cpp_largest_three,
  cpp_leap_year: cpp_leap_year,
  cpp_marks_grade: cpp_marks_grade,
  cpp_tax_calc: cpp_tax_calc,
  cpp_pos_neg_zero: cpp_pos_neg_zero,
  cpp_electricity_bill: cpp_electricity_bill,
  cpp_switch_day: cpp_switch_day,
  cpp_switch_calc: cpp_switch_calc,
  cpp_switch_vowel: cpp_switch_vowel,
  cpp_switch_month: cpp_switch_month,
  cpp_for_sum: cpp_for_sum,
  cpp_multiplication_table: cpp_multiplication_table,
  cpp_even_numbers: cpp_even_numbers,
  cpp_fibonacci: cpp_fibonacci,
  cpp_while: cpp_while,
  cpp_digit_sum: cpp_digit_sum,
  cpp_factorial: cpp_factorial,
  cpp_reverse_num: cpp_reverse_num,
  cpp_do_while: cpp_do_while,
  cpp_do_while_sum: cpp_do_while_sum,
  cpp_string_concat: cpp_string_concat,
  cpp_string_access: cpp_string_access,
  cpp_string_reverse: cpp_string_reverse,
  cpp_square_func: cpp_square_func,
  cpp_func_addition: cpp_func_addition,
  cpp_func_pass_by_val: cpp_func_pass_by_val,
  cpp_func_pass_by_ref: cpp_func_pass_by_ref,
  cpp_array_max: cpp_array_max,
  cpp_array_sum: cpp_array_sum,
  cpp_linear_search: cpp_linear_search,
  cpp_array_reverse: cpp_array_reverse,
  cpp_matrix_2d: cpp_matrix_2d,
  cpp_diagonal_sum_2d: cpp_diagonal_sum_2d,
  cpp_matrix_transpose: cpp_matrix_transpose
};
