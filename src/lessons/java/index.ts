import type { LessonProgram, ExecutionStep } from '../types';

// ─── Java Data Types ───────────────────────────────────────────────────────────

export const javaDataTypes: LessonProgram = {
  id: 'java_types',
  language: 'java',
  topic: 'data_types',
  lessonNumber: 1,
  friendlyName: 'Java Primitive Data Types (int, double, boolean, String)',
  learningObjective: 'Learn Java strongly-typed primitives and String object references in memory.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'score' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '95', paramId: 'score' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'percent' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '95.5', paramId: 'percent' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'boolean' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'isPassed' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'true' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Score: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'score' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 8, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    score: { default: 95, min: 0, max: 100, label: 'score (int)' },
    percent: { default: 95.5, label: 'percent (double)' }
  },
  generateSteps: (vars) => {
    const score = Number(vars.score ?? 95);
    const percent = Number(vars.percent ?? 95.5);
    return [
      {
        step: 1, lineNum: 2,
        explanationEnglish: 'Java main method entry point execution starts.',
        explanationHinglish: 'Java main method entry point se code execution start hua.',
        memorySnapshot: {}, animationEvent: { type: 'NONE' }
      },
      {
        step: 2, lineNum: 3,
        explanationEnglish: `Declare 32-bit primitive integer int score = ${score}.`,
        explanationHinglish: `Java stack memory me int variable 'score' (${score}) allocate hua.`,
        memorySnapshot: { score: `${score} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'score', value: score }
      },
      {
        step: 3, lineNum: 4,
        explanationEnglish: `Declare 64-bit double percent = ${percent}.`,
        explanationHinglish: `Double variable 'percent' (${percent}) floating point stack slot me store hua.`,
        memorySnapshot: { score: `${score} (int)`, percent: `${percent} (double)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'percent', value: percent }
      },
      {
        step: 4, lineNum: 5,
        explanationEnglish: 'Declare boolean variable isPassed = true.',
        explanationHinglish: "Boolean variable 'isPassed' = true stack slot me store hua.",
        memorySnapshot: { score: `${score} (int)`, percent: `${percent} (double)`, isPassed: 'true (boolean)' },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'isPassed', value: 'true' }
      },
      {
        step: 5, lineNum: 6,
        explanationEnglish: `System.out.println prints "Score: ${score}".`,
        explanationHinglish: `System.out.println se "Score: ${score}" standard console pe print hua.`,
        memorySnapshot: { score: `${score} (int)`, percent: `${percent} (double)`, isPassed: 'true (boolean)' },
        consoleOutput: `Score: ${score}`,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'score', outputValue: score }
      },
      {
        step: 6, lineNum: 7,
        explanationEnglish: 'Method main finished.',
        explanationHinglish: 'main method finish ho gaya.',
        memorySnapshot: { score: `${score} (int)`, percent: `${percent} (double)`, isPassed: 'true (boolean)' },
        animationEvent: { type: 'COMPLETE' }
      }
    ];
  },
  executionSteps: []
};

// ─── Java If-Else ─────────────────────────────────────────────────────────────

export const javaIfElse: LessonProgram = {
  id: 'java_grade',
  language: 'java',
  topic: 'if_else',
  lessonNumber: 1,
  friendlyName: 'Grade Calculator in Java (If-Else Ladder)',
  learningObjective: 'Learn multi-branch conditional execution using if-else if in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'marks' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '82', paramId: 'marks' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'marks' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>=' }, { type: 'text', value: ' ' }, { type: 'number', value: '90' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Grade A"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'else' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'marks' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>=' }, { type: 'text', value: ' ' }, { type: 'number', value: '75' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Grade B"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'else' }, { type: 'text', value: ' {' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Grade C"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 11, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 12, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    marks: { default: 82, min: 0, max: 100, label: 'marks (int)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const marks = Number(vars.marks ?? 82);
    let grade = 'Grade C';
    let lineToExec = 9;
    if (marks >= 90) { grade = 'Grade A'; lineToExec = 5; }
    else if (marks >= 75) { grade = 'Grade B'; lineToExec = 7; }

    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Declare marks = ${marks}.`,
        explanationHinglish: `Variable 'marks' = ${marks} set hua.`,
        memorySnapshot: { marks: `${marks} (int)` },
        animationEvent: { type: 'CREATE_VARIABLE', name: 'marks', value: marks }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Check first condition: ${marks} >= 90 is ${marks >= 90 ? 'TRUE' : 'FALSE'}.`,
        explanationHinglish: `Pehli condition: ${marks} >= 90 -> ${marks >= 90 ? 'TRUE' : 'FALSE'}.`,
        memorySnapshot: { marks: `${marks} (int)` },
        animationEvent: { type: 'NONE' as const }
      },
      ...(marks < 90 ? [{
        step: 3, lineNum: 6,
        explanationEnglish: `Check second condition: ${marks} >= 75 is ${marks >= 75 ? 'TRUE' : 'FALSE'}.`,
        explanationHinglish: `Dusri condition check: ${marks} >= 75 -> ${marks >= 75 ? 'TRUE' : 'FALSE'}.`,
        memorySnapshot: { marks: `${marks} (int)` },
        animationEvent: { type: 'NONE' as const }
      }] : []),
      {
        step: 4, lineNum: lineToExec,
        explanationEnglish: `Execute selected branch: System.out.println("${grade}").`,
        explanationHinglish: `Matching branch execute hoke "${grade}" print hua.`,
        memorySnapshot: { marks: `${marks} (int)` },
        consoleOutput: grade,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'marks', outputValue: grade }
      },
      {
        step: 5, lineNum: 11,
        explanationEnglish: 'Method completed.',
        explanationHinglish: 'Method execution finish hua.',
        memorySnapshot: { marks: `${marks} (int)` },
        animationEvent: { type: 'COMPLETE' as const }
      }
    ];
  },
  executionSteps: []
};

// ─── Java Loops ───────────────────────────────────────────────────────────────

export const javaForLoop: LessonProgram = {
  id: 'java_for_loop',
  language: 'java',
  topic: 'loops',
  lessonNumber: 1,
  friendlyName: 'For Loop Counter in Java',
  learningObjective: 'Learn Java for loop iteration and block execution.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Count: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: () => {
    const steps: any[] = [];
    let stepNum = 1;
    let out = '';

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: 'Initialize int i = 1.',
      explanationHinglish: 'Loop counter int i = 1 initialize hua.',
      memorySnapshot: { i: '1 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'i', value: 1 }
    });

    for (let i = 1; i <= 3; i++) {
      out += (out ? '\n' : '') + `Count: ${i}`;
      steps.push({
        step: stepNum++, lineNum: 4,
        explanationEnglish: `Iteration ${i}: System.out.println prints Count: ${i}.`,
        explanationHinglish: `Iteration ${i}: System.out.println se Count: ${i} print hua.`,
        memorySnapshot: { i: `${i} (int)` },
        consoleOutput: out,
        animationEvent: { type: 'PRINT_VALUE', variableName: 'i', outputValue: i }
      });
      if (i < 3) {
        steps.push({
          step: stepNum++, lineNum: 3,
          explanationEnglish: `Increment i++ to ${i + 1}. Condition ${i + 1} <= 3 is TRUE.`,
          explanationHinglish: `i++ increment hoke ${i + 1} hua, condition true.`,
          memorySnapshot: { i: `${i + 1} (int)` },
          animationEvent: { type: 'UPDATE_VARIABLE', name: 'i', oldValue: i, newValue: i + 1 }
        });
      }
    }

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: 'i++ to 4. Condition 4 <= 3 is FALSE. Loop ends.',
      explanationHinglish: 'i = 4 hone par condition false hui, loop exit.',
      memorySnapshot: { i: '4 (int)' },
      animationEvent: { type: 'NONE' }
    });

    steps.push({
      step: stepNum++, lineNum: 6,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { i: '4 (int)' },
      animationEvent: { type: 'COMPLETE' }
    });

    return steps;
  },
  executionSteps: []
};

// ─── Java Methods ─────────────────────────────────────────────────────────────

export const javaMethods: LessonProgram = {
  id: 'java_method_add',
  language: 'java',
  topic: 'functions',
  lessonNumber: 1,
  friendlyName: 'Static Method Call & Return in Java',
  learningObjective: 'Learn static method calls, argument passing, and stack frames in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'function', value: 'multiply' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'parameter', value: 'x' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'parameter', value: 'y' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'return' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'y' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'product' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'function', value: 'multiply' }, { type: 'punctuation', value: '(' }, { type: 'number', value: '4' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Product: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'product' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: () => [
    {
      step: 1, lineNum: 5,
      explanationEnglish: 'Main method starts.',
      explanationHinglish: 'main method start hua.',
      memorySnapshot: {}, animationEvent: { type: 'NONE' }
    },
    {
      step: 2, lineNum: 6,
      explanationEnglish: 'Call multiply(4, 5). Parameters x=4, y=5 placed on call stack.',
      explanationHinglish: 'multiply(4, 5) call hua. Memory stack pe x=4, y=5 pass hue.',
      memorySnapshot: { 'x (param)': '4 (int)', 'y (param)': '5 (int)' },
      animationEvent: { type: 'FUNCTION_CALL', functionName: 'multiply', args: { x: 4, y: 5 } }
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'Calculate 4 * 5 = 20 and return.',
      explanationHinglish: '4 * 5 = 20 calculate hoke return hua.',
      memorySnapshot: { 'x (param)': '4 (int)', 'y (param)': '5 (int)', returnVal: '20 (int)' },
      animationEvent: { type: 'FUNCTION_RETURN', functionName: 'multiply', returnValue: 20 }
    },
    {
      step: 4, lineNum: 6,
      explanationEnglish: 'Assign returned value 20 to product.',
      explanationHinglish: 'Result 20 variable product me assign ho gaya.',
      memorySnapshot: { product: '20 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'product', value: 20 }
    },
    {
      step: 5, lineNum: 7,
      explanationEnglish: 'System.out.println prints Product: 20.',
      explanationHinglish: 'System.out.println se Product: 20 print hua.',
      memorySnapshot: { product: '20 (int)' },
      consoleOutput: 'Product: 20',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'product', outputValue: 20 }
    },
    {
      step: 6, lineNum: 8,
      explanationEnglish: 'Program completed.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { product: '20 (int)' },
      animationEvent: { type: 'COMPLETE' }
    }
  ],
  executionSteps: []
};

// ─── Java Arrays ──────────────────────────────────────────────────────────────

export const javaArrays: LessonProgram = {
  id: 'java_array_sum',
  language: 'java',
  topic: 'arrays',
  lessonNumber: 1,
  friendlyName: 'Java Array Allocation & Traversal',
  learningObjective: 'Learn Java array heap allocation and array.length property.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'nums' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'new' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'punctuation', value: '[]' }, { type: 'punctuation', value: '{' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '15' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '25' }, { type: 'punctuation', value: '};' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'total' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: ':' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'nums' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'total' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Total = "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'total' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: () => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Allocate int[] nums array object on Heap memory.',
      explanationHinglish: 'Heap memory me int[] nums array object allocate hua.',
      memorySnapshot: { 'nums[0]': '5 (int)', 'nums[1]': '15 (int)', 'nums[2]': '25 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'nums', value: '[5, 15, 25]' }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: 'Initialize total = 0.',
      explanationHinglish: 'total = 0 initialize hua.',
      memorySnapshot: { 'nums[0]': '5 (int)', 'nums[1]': '15 (int)', 'nums[2]': '25 (int)', total: '0 (int)' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'total', value: 0 }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'Enhanced for loop element x=5: total += 5 -> total = 5.',
      explanationHinglish: 'Pehla element x=5 total me add hua -> total = 5.',
      memorySnapshot: { 'nums[0]': '5 (int)', 'nums[1]': '15 (int)', 'nums[2]': '25 (int)', total: '5 (int)' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'total', oldValue: 0, newValue: 5 }
    },
    {
      step: 4, lineNum: 6,
      explanationEnglish: 'Element x=15: total += 15 -> total = 20.',
      explanationHinglish: 'Dusra element x=15 total me add hua -> total = 20.',
      memorySnapshot: { 'nums[0]': '5 (int)', 'nums[1]': '15 (int)', 'nums[2]': '25 (int)', total: '20 (int)' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'total', oldValue: 5, newValue: 20 }
    },
    {
      step: 5, lineNum: 6,
      explanationEnglish: 'Element x=25: total += 25 -> total = 45.',
      explanationHinglish: 'Tisra element x=25 total me add hua -> total = 45.',
      memorySnapshot: { 'nums[0]': '5 (int)', 'nums[1]': '15 (int)', 'nums[2]': '25 (int)', total: '45 (int)' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'total', oldValue: 20, newValue: 45 }
    },
    {
      step: 6, lineNum: 8,
      explanationEnglish: 'System.out.println prints Total = 45.',
      explanationHinglish: 'System.out.println se Total = 45 print hua.',
      memorySnapshot: { 'nums[0]': '5 (int)', 'nums[1]': '15 (int)', 'nums[2]': '25 (int)', total: '45 (int)' },
      consoleOutput: 'Total = 45',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'total', outputValue: 45 }
    },
    {
      step: 7, lineNum: 9,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { 'nums[0]': '5 (int)', 'nums[1]': '15 (int)', 'nums[2]': '25 (int)', total: '45 (int)' },
      animationEvent: { type: 'COMPLETE' }
    }
  ],
  executionSteps: []
};

export const javaLessons = {
  java_types: javaDataTypes,
  java_grade: javaIfElse,
  java_for_loop: javaForLoop,
  java_method_add: javaMethods,
  java_array_sum: javaArrays,
};
