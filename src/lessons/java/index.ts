import type { LessonProgram, ExecutionStep } from '../types';

// ==============================================================================
// TOPIC 1: DATA TYPES & VARIABLES (4 Programs)
// ==============================================================================

export const javaTypes: LessonProgram = {
  id: 'java_types',
  language: 'java',
  topic: 'data_types',
  lessonNumber: 1,
  friendlyName: 'Java Primitive Data Types (int, double, boolean, char)',
  learningObjective: 'Understand Java strongly-typed primitives, explicit byte sizes, and memory allocation.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'score' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '95', paramId: 'score' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'gpa' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3.85', paramId: 'gpa' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'char' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'grade' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: "'A'" }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'boolean' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'isPassed' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'true' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Score: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'score' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'string', value: '", Grade: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'grade' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    score: { default: 95, min: 0, max: 100, label: 'score (int)' },
    gpa: { default: 3.85, label: 'gpa (double)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const score = Number(vars.score ?? 95);
    const gpa = Number(vars.gpa ?? 3.85);
    return [
      {
        step: 1, lineNum: 2,
        explanationEnglish: 'Java main method entry point execution starts.',
        explanationHinglish: 'Java main method entry point se code execution start hua.',
        memorySnapshot: {}, animationEvent: { type: 'NONE' as const }
      },
      {
        step: 2, lineNum: 3,
        explanationEnglish: `Declare 32-bit primitive integer int score = ${score} (4 bytes).`,
        explanationHinglish: `Java stack memory me 4-byte int variable 'score' (${score}) allocate hua.`,
        memorySnapshot: { score: `${score} [int]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'score', value: score }
      },
      {
        step: 3, lineNum: 4,
        explanationEnglish: `Declare 64-bit double precision gpa = ${gpa} (8 bytes).`,
        explanationHinglish: `Double variable 'gpa' (${gpa}) 8-byte floating point memory slot me store hua.`,
        memorySnapshot: { score: `${score} [int]`, gpa: `${gpa} [double]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'gpa', value: gpa }
      },
      {
        step: 4, lineNum: 5,
        explanationEnglish: "Declare 16-bit Unicode char grade = 'A' (2 bytes).",
        explanationHinglish: "Character variable 'grade' ('A') 2-byte Unicode slot me store hua.",
        memorySnapshot: { score: `${score} [int]`, gpa: `${gpa} [double]`, grade: "'A' [char]" },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'grade', value: "'A'" }
      },
      {
        step: 5, lineNum: 6,
        explanationEnglish: 'Declare boolean variable isPassed = true (1 bit/1 byte).',
        explanationHinglish: 'Boolean variable isPassed = true stack slot me store hua.',
        memorySnapshot: { score: `${score} [int]`, gpa: `${gpa} [double]`, grade: "'A' [char]", isPassed: 'true [boolean]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'isPassed', value: 'true' }
      },
      {
        step: 6, lineNum: 7,
        explanationEnglish: `System.out.println prints Score: ${score}, Grade: A.`,
        explanationHinglish: `System.out.println se "Score: ${score}, Grade: A" console pe display hua.`,
        memorySnapshot: { score: `${score} [int]`, gpa: `${gpa} [double]`, grade: "'A' [char]", isPassed: 'true [boolean]' },
        consoleOutput: `Score: ${score}, Grade: A`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'score', outputValue: score }
      },
      {
        step: 7, lineNum: 8,
        explanationEnglish: 'Method main finished.',
        explanationHinglish: 'main method finish ho gaya.',
        memorySnapshot: { score: `${score} [int]`, gpa: `${gpa} [double]`, grade: "'A' [char]", isPassed: 'true [boolean]' },
        animationEvent: { type: 'COMPLETE' as const }
      }
    ];
  },
  executionSteps: []
};

export const javaCasting: LessonProgram = {
  id: 'java_casting',
  language: 'java',
  topic: 'data_types',
  lessonNumber: 2,
  friendlyName: 'Implicit & Explicit Type Casting',
  learningObjective: 'Learn automatic widening and manual narrowing casting in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'rawVal' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '87.95', paramId: 'rawVal' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'truncated' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'rawVal' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Truncated: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'truncated' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    rawVal: { default: 87.95, label: 'rawVal (double)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const raw = Number(vars.rawVal ?? 87.95);
    const trunc = Math.floor(raw);
    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Declare double rawVal = ${raw}.`,
        explanationHinglish: `Double variable rawVal = ${raw} store hua.`,
        memorySnapshot: { rawVal: `${raw} [double]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'rawVal', value: raw }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Explicit Narrowing: (int) ${raw} truncates decimal digits to ${trunc}.`,
        explanationHinglish: `Explicit casting (int) se decimal ke baad waali value gayab ho ke integer ${trunc} banta hai.`,
        memorySnapshot: { rawVal: `${raw} [double]`, truncated: `${trunc} [int]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'truncated', value: trunc }
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `System.out.println prints Truncated: ${trunc}.`,
        explanationHinglish: `System.out.println se "Truncated: ${trunc}" print hua.`,
        memorySnapshot: { rawVal: `${raw} [double]`, truncated: `${trunc} [int]` },
        consoleOutput: `Truncated: ${trunc}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'truncated', outputValue: trunc }
      },
      {
        step: 4, lineNum: 6,
        explanationEnglish: 'Program finished.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { rawVal: `${raw} [double]`, truncated: `${trunc} [int]` },
        animationEvent: { type: 'COMPLETE' as const }
      }
    ];
  },
  executionSteps: []
};

export const javaAscii: LessonProgram = {
  id: 'java_ascii',
  language: 'java',
  topic: 'data_types',
  lessonNumber: 3,
  friendlyName: 'Char to ASCII Integer Conversion',
  learningObjective: 'Understand character encoding and numeric ASCII representation in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'char' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'ch' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: "'A'" }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'asciiCode' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'ch' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"ASCII: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'asciiCode' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: "Declare char ch = 'A'.",
      explanationHinglish: "Character variable ch = 'A' memory me store hua.",
      memorySnapshot: { ch: "'A' [char]" },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'ch', value: "'A'" }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: "Implicit Widening: 'A' automatically converts to integer ASCII code 65.",
      explanationHinglish: "Automatic type conversion se 'A' ka ASCII code 65 int variable asciiCode me store ho gaya.",
      memorySnapshot: { ch: "'A' [char]", asciiCode: '65 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'asciiCode', value: 65 }
    },
    {
      step: 3, lineNum: 5,
      explanationEnglish: 'System.out.println prints ASCII: 65.',
      explanationHinglish: 'System.out.println se ASCII: 65 print hua.',
      memorySnapshot: { ch: "'A' [char]", asciiCode: '65 [int]' },
      consoleOutput: 'ASCII: 65',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'asciiCode', outputValue: 65 }
    },
    {
      step: 4, lineNum: 6,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { ch: "'A' [char]", asciiCode: '65 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

export const javaTempConvert: LessonProgram = {
  id: 'java_temp_convert',
  language: 'java',
  topic: 'data_types',
  lessonNumber: 4,
  friendlyName: 'Temperature Converter (Celsius to Fahrenheit)',
  learningObjective: 'Learn mixed double expression evaluation and formula computation in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'celsius' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '25.0', paramId: 'celsius' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'fahrenheit' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'celsius' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'number', value: '9.0' }, { type: 'text', value: ' ' }, { type: 'operator', value: '/' }, { type: 'text', value: ' ' }, { type: 'number', value: '5.0' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'number', value: '32.0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Fahrenheit: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'fahrenheit' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 7, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    celsius: { default: 25.0, label: 'celsius (double)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const cel = Number(vars.celsius ?? 25.0);
    const fah = (cel * 9.0) / 5.0 + 32.0;
    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Declare celsius = ${cel}.`,
        explanationHinglish: `Variable celsius = ${cel} store hua.`,
        memorySnapshot: { celsius: `${cel} [double]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'celsius', value: cel }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Compute formula (${cel} * 9.0 / 5.0) + 32.0 = ${fah}.`,
        explanationHinglish: `Formula calculate hoke fahrenheit = ${fah} store hua.`,
        memorySnapshot: { celsius: `${cel} [double]`, fahrenheit: `${fah} [double]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'fahrenheit', value: fah }
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `System.out.println prints Fahrenheit: ${fah}.`,
        explanationHinglish: `System.out.println se "Fahrenheit: ${fah}" print hua.`,
        memorySnapshot: { celsius: `${cel} [double]`, fahrenheit: `${fah} [double]` },
        consoleOutput: `Fahrenheit: ${fah}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'fahrenheit', outputValue: fah }
      },
      {
        step: 4, lineNum: 6,
        explanationEnglish: 'Program finished.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { celsius: `${cel} [double]`, fahrenheit: `${fah} [double]` },
        animationEvent: { type: 'COMPLETE' as const }
      }
    ];
  },
  executionSteps: []
};

// ==============================================================================
// TOPIC 2: CONDITIONALS (IF-ELSE & LADDER) (4 Programs)
// ==============================================================================

export const javaEvenOdd: LessonProgram = {
  id: 'java_even_odd',
  language: 'java',
  topic: 'if_else',
  lessonNumber: 1,
  friendlyName: 'Even or Odd Check',
  learningObjective: 'Understand binary branch decision execution using if-else and modulo % in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '14', paramId: 'num' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'operator', value: '%' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }, { type: 'text', value: ' ' }, { type: 'operator', value: '==' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Even"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'else' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Odd"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    num: { default: 14, min: 1, max: 100, label: 'num (int)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const num = Number(vars.num ?? 14);
    const isEven = num % 2 === 0;
    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Declare int num = ${num}.`,
        explanationHinglish: `Variable num = ${num} set hua.`,
        memorySnapshot: { num: `${num} [int]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'num', value: num }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Evaluate condition ${num} % 2 == 0 -> ${isEven ? 'TRUE (Green)' : 'FALSE (Red)'}.`,
        explanationHinglish: `Condition check ${num} % 2 == 0 -> ${isEven ? 'TRUE' : 'FALSE'}.`,
        memorySnapshot: { num: `${num} [int]` },
        animationEvent: { type: 'NONE' as const }
      },
      isEven ? {
        step: 3, lineNum: 5,
        explanationEnglish: 'Condition true, execute if block: System.out.println("Even").',
        explanationHinglish: 'Condition true hui, "Even" print hua.',
        memorySnapshot: { num: `${num} [int]` },
        consoleOutput: 'Even',
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'num', outputValue: 'Even' }
      } : {
        step: 3, lineNum: 7,
        explanationEnglish: 'Condition false, execute else block: System.out.println("Odd").',
        explanationHinglish: 'Condition false hui, "Odd" print hua.',
        memorySnapshot: { num: `${num} [int]` },
        consoleOutput: 'Odd',
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'num', outputValue: 'Odd' }
      },
      {
        step: 4, lineNum: 9,
        explanationEnglish: 'Program completed.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { num: `${num} [int]` },
        animationEvent: { type: 'COMPLETE' as const }
      }
    ];
  },
  executionSteps: []
};

export const javaLargestThree: LessonProgram = {
  id: 'java_largest_three',
  language: 'java',
  topic: 'if_else',
  lessonNumber: 2,
  friendlyName: 'Largest of Three Numbers',
  learningObjective: 'Learn logical AND (&&) combination in Java if-else if decision trees.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '45' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '89' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'c' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '23' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '&&' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'c' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"a is largest"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'else' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'c' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"b is largest"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'else' }, { type: 'text', value: ' {' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"c is largest"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 11, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 12, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Initialize int a=45, b=89, c=23.',
      explanationHinglish: 'Variables a=45, b=89, c=23 initialize hue.',
      memorySnapshot: { a: '45 [int]', b: '89 [int]', c: '23 [int]' },
      animationEvent: { type: 'MULTI_CREATE_VARIABLES' as const, variables: [{ name: 'a', value: 45 }, { name: 'b', value: 89 }, { name: 'c', value: 23 }] }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: 'Check (a >= b && a >= c): 45 >= 89 is FALSE.',
      explanationHinglish: 'Condition 45 >= 89 && 45 >= 23 check hui -> FALSE.',
      memorySnapshot: { a: '45 [int]', b: '89 [int]', c: '23 [int]' },
      animationEvent: { type: 'NONE' as const }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'Check else if (b >= c): 89 >= 23 is TRUE.',
      explanationHinglish: 'Condition 89 >= 23 check hui -> TRUE.',
      memorySnapshot: { a: '45 [int]', b: '89 [int]', c: '23 [int]' },
      animationEvent: { type: 'NONE' as const }
    },
    {
      step: 4, lineNum: 7,
      explanationEnglish: 'Execute branch: System.out.println("b is largest").',
      explanationHinglish: 'b sabse bada hai, "b is largest" print hua.',
      memorySnapshot: { a: '45 [int]', b: '89 [int]', c: '23 [int]' },
      consoleOutput: 'b is largest',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'b', outputValue: 'b is largest' }
    },
    {
      step: 5, lineNum: 11,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { a: '45 [int]', b: '89 [int]', c: '23 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

export const javaGrade: LessonProgram = {
  id: 'java_grade',
  language: 'java',
  topic: 'if_else',
  lessonNumber: 3,
  friendlyName: 'Student Grade Calculator (If-Else Ladder)',
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
        memorySnapshot: { marks: `${marks} [int]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'marks', value: marks }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Check first condition: ${marks} >= 90 is ${marks >= 90 ? 'TRUE' : 'FALSE'}.`,
        explanationHinglish: `Pehli condition: ${marks} >= 90 -> ${marks >= 90 ? 'TRUE' : 'FALSE'}.`,
        memorySnapshot: { marks: `${marks} [int]` },
        animationEvent: { type: 'NONE' as const }
      },
      ...(marks < 90 ? [{
        step: 3, lineNum: 6,
        explanationEnglish: `Check second condition: ${marks} >= 75 is ${marks >= 75 ? 'TRUE' : 'FALSE'}.`,
        explanationHinglish: `Dusri condition check: ${marks} >= 75 -> ${marks >= 75 ? 'TRUE' : 'FALSE'}.`,
        memorySnapshot: { marks: `${marks} [int]` },
        animationEvent: { type: 'NONE' as const }
      }] : []),
      {
        step: 4, lineNum: lineToExec,
        explanationEnglish: `Execute selected branch: System.out.println("${grade}").`,
        explanationHinglish: `Matching branch execute hoke "${grade}" print hua.`,
        memorySnapshot: { marks: `${marks} [int]` },
        consoleOutput: grade,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'marks', outputValue: grade }
      },
      {
        step: 5, lineNum: 11,
        explanationEnglish: 'Method completed.',
        explanationHinglish: 'Method execution finish hua.',
        memorySnapshot: { marks: `${marks} [int]` },
        animationEvent: { type: 'COMPLETE' as const }
      }
    ];
  },
  executionSteps: []
};

export const javaTaxCalc: LessonProgram = {
  id: 'java_tax_calc',
  language: 'java',
  topic: 'if_else',
  lessonNumber: 4,
  friendlyName: 'Income Tax Slab Calculator',
  learningObjective: 'Calculate variable tax percentage slabs using Java conditionals.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'income' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '600000', paramId: 'income' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'tax' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'income' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>' }, { type: 'text', value: ' ' }, { type: 'number', value: '500000' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'tax' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'income' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'number', value: '0.20' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'else' }, { type: 'text', value: ' {' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'tax' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'income' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'number', value: '0.05' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Tax: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'tax' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 11, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 12, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    income: { default: 600000, min: 100000, max: 2000000, label: 'income (double)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const inc = Number(vars.income ?? 600000);
    const taxRate = inc > 500000 ? 0.20 : 0.05;
    const tax = inc * taxRate;

    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Set income = ${inc}.`,
        explanationHinglish: `Variable income = ${inc} set hua.`,
        memorySnapshot: { income: `${inc} [double]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'income', value: inc }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: 'Initialize tax = 0.0.',
        explanationHinglish: 'Variable tax = 0.0 initialize hua.',
        memorySnapshot: { income: `${inc} [double]`, tax: '0.0 [double]' },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'tax', value: 0 }
      },
      {
        step: 3, lineNum: 5,
        explanationEnglish: `Check condition income (${inc}) > 500000 is ${inc > 500000 ? 'TRUE (20% Slab)' : 'FALSE (5% Slab)'}.`,
        explanationHinglish: `Income > 500000 check -> ${inc > 500000 ? 'TRUE (20% Slab)' : 'FALSE (5% Slab)'}.`,
        memorySnapshot: { income: `${inc} [double]`, tax: '0.0 [double]' },
        animationEvent: { type: 'NONE' as const }
      },
      {
        step: 4, lineNum: inc > 500000 ? 6 : 8,
        explanationEnglish: `Calculate tax: ${inc} * ${taxRate} = ${tax}.`,
        explanationHinglish: `Tax calculate hoke tax = ${tax} update hua.`,
        memorySnapshot: { income: `${inc} [double]`, tax: `${tax} [double]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'tax', oldValue: 0, newValue: tax }
      },
      {
        step: 5, lineNum: 10,
        explanationEnglish: `System.out.println prints Tax: ${tax}.`,
        explanationHinglish: `System.out.println se Tax: ${tax} print hua.`,
        memorySnapshot: { income: `${inc} [double]`, tax: `${tax} [double]` },
        consoleOutput: `Tax: ${tax}`,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'tax', outputValue: tax }
      },
      {
        step: 6, lineNum: 11,
        explanationEnglish: 'Program finished.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { income: `${inc} [double]`, tax: `${tax} [double]` },
        animationEvent: { type: 'COMPLETE' as const }
      }
    ];
  },
  executionSteps: []
};

// ==============================================================================
// TOPIC 3: SWITCH CASE & SELECTION (3 Programs)
// ==============================================================================

export const javaSwitchDay: LessonProgram = {
  id: 'java_switch_day',
  language: 'java',
  topic: 'switch_case',
  lessonNumber: 1,
  friendlyName: 'Day of Week Switch Case',
  learningObjective: 'Understand Java switch-case jumping and break statements.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'day' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3', paramId: 'day' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'switch' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'day' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'case' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Monday"' }, { type: 'punctuation', value: ');' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'break' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'case' }, { type: 'text', value: ' ' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Wednesday"' }, { type: 'punctuation', value: ');' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'break' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'default' }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Other Day"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  editableVariables: {
    day: { default: 3, min: 1, max: 7, label: 'day (int)' }
  },
  generateSteps: (vars): ExecutionStep[] => {
    const day = Number(vars.day ?? 3);
    const dayName = day === 1 ? 'Monday' : day === 3 ? 'Wednesday' : 'Other Day';
    const lineToExec = day === 1 ? 5 : day === 3 ? 6 : 7;

    return [
      {
        step: 1, lineNum: 3,
        explanationEnglish: `Set day = ${day}.`,
        explanationHinglish: `Variable day = ${day} store hua.`,
        memorySnapshot: { day: `${day} [int]` },
        animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'day', value: day }
      },
      {
        step: 2, lineNum: 4,
        explanationEnglish: `Switch selector evaluates day = ${day} and jumps directly to matching case.`,
        explanationHinglish: `Switch selector day = ${day} ko evaluate karke exact matching case par jump karta hai.`,
        memorySnapshot: { day: `${day} [int]` },
        animationEvent: { type: 'MATCH_START' as const, variableName: 'day', value: day }
      },
      {
        step: 3, lineNum: lineToExec,
        explanationEnglish: `Execute case ${day}: System.out.println("${dayName}").`,
        explanationHinglish: `Case ${day} match hua, "${dayName}" print hua.`,
        memorySnapshot: { day: `${day} [int]` },
        consoleOutput: dayName,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'day', outputValue: dayName }
      },
      {
        step: 4, lineNum: 9,
        explanationEnglish: 'Program finished.',
        explanationHinglish: 'Program finish hua.',
        memorySnapshot: { day: `${day} [int]` },
        animationEvent: { type: 'COMPLETE' as const }
      }
    ];
  },
  executionSteps: []
};

export const javaSwitchVowel: LessonProgram = {
  id: 'java_switch_vowel',
  language: 'java',
  topic: 'switch_case',
  lessonNumber: 2,
  friendlyName: 'Vowel or Consonant Check',
  learningObjective: 'Learn switch case fallthrough grouping for multiple matching conditions.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'char' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'ch' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: "'e'" }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'switch' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'ch' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'case' }, { type: 'text', value: ' ' }, { type: 'string', value: "'a'" }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'case' }, { type: 'text', value: ' ' }, { type: 'string', value: "'e'" }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'case' }, { type: 'text', value: ' ' }, { type: 'string', value: "'i'" }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'case' }, { type: 'text', value: ' ' }, { type: 'string', value: "'o'" }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'case' }, { type: 'text', value: ' ' }, { type: 'string', value: "'u'" }, { type: 'punctuation', value: ':' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '                ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Vowel"' }, { type: 'punctuation', value: ');' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'break' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'default' }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Consonant"' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: "Declare char ch = 'e'.",
      explanationHinglish: "Character variable ch = 'e' store hua.",
      memorySnapshot: { ch: "'e' [char]" },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'ch', value: "'e'" }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: "Switch evaluates ch = 'e' and matches grouped vowel case.",
      explanationHinglish: "Switch 'e' ko grouped vowel case ke sath match karke execute karta hai.",
      memorySnapshot: { ch: "'e' [char]" },
      animationEvent: { type: 'MATCH_START' as const, variableName: 'ch', value: "'e'" }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'System.out.println prints Vowel.',
      explanationHinglish: 'Console pe "Vowel" print hua.',
      memorySnapshot: { ch: "'e' [char]" },
      consoleOutput: 'Vowel',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'ch', outputValue: 'Vowel' }
    },
    {
      step: 4, lineNum: 9,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { ch: "'e' [char]" },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

export const javaSwitchCalc: LessonProgram = {
  id: 'java_switch_calc',
  language: 'java',
  topic: 'switch_case',
  lessonNumber: 3,
  friendlyName: 'Menu Driven Calculator',
  learningObjective: 'Learn operation selection using char switch in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'char' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'op' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'string', value: "'*'" }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'res' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'switch' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'op' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'case' }, { type: 'text', value: ' ' }, { type: 'string', value: "'*'" }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'res' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'break' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Result: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'res' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 11, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Set int a = 20, b = 5.',
      explanationHinglish: 'a = 20 aur b = 5 initialize hue.',
      memorySnapshot: { a: '20 [int]', b: '5 [int]' },
      animationEvent: { type: 'MULTI_CREATE_VARIABLES' as const, variables: [{ name: 'a', value: 20 }, { name: 'b', value: 5 }] }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: "Set operator char op = '*'.",
      explanationHinglish: "Operator op = '*' set hua.",
      memorySnapshot: { a: '20 [int]', b: '5 [int]', op: "'*' [char]" },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'op', value: "'*'" }
    },
    {
      step: 3, lineNum: 7,
      explanationEnglish: "Switch matches '*' case: compute res = 20 * 5 = 100.",
      explanationHinglish: "Case '*' match hua, res = 20 * 5 = 100 calculate hoke res me store hua.",
      memorySnapshot: { a: '20 [int]', b: '5 [int]', op: "'*' [char]", res: '100 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'res', value: 100 }
    },
    {
      step: 4, lineNum: 9,
      explanationEnglish: 'System.out.println prints Result: 100.',
      explanationHinglish: 'Console pe "Result: 100" print hua.',
      memorySnapshot: { a: '20 [int]', b: '5 [int]', op: "'*' [char]", res: '100 [int]' },
      consoleOutput: 'Result: 100',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'res', outputValue: 100 }
    },
    {
      step: 5, lineNum: 10,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { a: '20 [int]', b: '5 [int]', op: "'*' [char]", res: '100 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

// ==============================================================================
// TOPIC 4: LOOPS (FOR, WHILE, DO-WHILE) (5 Programs)
// ==============================================================================

export const javaForSum: LessonProgram = {
  id: 'java_for_sum',
  language: 'java',
  topic: 'loops',
  lessonNumber: 1,
  friendlyName: 'Sum of First N Natural Numbers',
  learningObjective: 'Learn accumulator variable accumulation in Java for loop.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '4' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Sum: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => {
    const steps: ExecutionStep[] = [];
    let stepNum = 1;
    let currentSum = 0;

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: 'Set n = 4, initialize sum = 0.',
      explanationHinglish: 'n = 4 aur sum = 0 initialize hua.',
      memorySnapshot: { n: '4 [int]', sum: '0 [int]' },
      animationEvent: { type: 'MULTI_CREATE_VARIABLES' as const, variables: [{ name: 'n', value: 4 }, { name: 'sum', value: 0 }] }
    });

    for (let i = 1; i <= 4; i++) {
      const oldSum = currentSum;
      currentSum += i;
      steps.push({
        step: stepNum++, lineNum: 5,
        explanationEnglish: `Iteration ${i}: sum += ${i} -> sum = ${currentSum}.`,
        explanationHinglish: `Iteration ${i}: sum me ${i} add hua -> sum = ${currentSum}.`,
        memorySnapshot: { n: '4 [int]', i: `${i} [int]`, sum: `${currentSum} [int]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'sum', oldValue: oldSum, newValue: currentSum }
      });
    }

    steps.push({
      step: stepNum++, lineNum: 7,
      explanationEnglish: `System.out.println prints Sum: ${currentSum}.`,
      explanationHinglish: `System.out.println se "Sum: ${currentSum}" print hua.`,
      memorySnapshot: { n: '4 [int]', sum: `${currentSum} [int]` },
      consoleOutput: `Sum: ${currentSum}`,
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'sum', outputValue: currentSum }
    });

    steps.push({
      step: stepNum++, lineNum: 8,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { n: '4 [int]', sum: `${currentSum} [int]` },
      animationEvent: { type: 'COMPLETE' as const }
    });

    return steps;
  },
  executionSteps: []
};

export const javaWhileDigits: LessonProgram = {
  id: 'java_while_digits',
  language: 'java',
  topic: 'loops',
  lessonNumber: 2,
  friendlyName: 'Sum of Digits (While Loop)',
  learningObjective: 'Learn digit extraction using % 10 and / 10 inside a while loop.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '432' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'while' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'operator', value: '%' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'num' }, { type: 'text', value: ' ' }, { type: 'operator', value: '/=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Digit Sum: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => {
    let n = 432;
    let sum = 0;
    const steps: ExecutionStep[] = [];
    let stepNum = 1;

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: 'Set num = 432, sum = 0.',
      explanationHinglish: 'num = 432 aur sum = 0 initialize hua.',
      memorySnapshot: { num: '432 [int]', sum: '0 [int]' },
      animationEvent: { type: 'MULTI_CREATE_VARIABLES' as const, variables: [{ name: 'num', value: 432 }, { name: 'sum', value: 0 }] }
    });

    while (n > 0) {
      const digit = n % 10;
      const oldSum = sum;
      sum += digit;
      steps.push({
        step: stepNum++, lineNum: 5,
        explanationEnglish: `Extract last digit ${n} % 10 = ${digit}. sum += ${digit} -> sum = ${sum}.`,
        explanationHinglish: `Last digit ${digit} extract hua aur sum me add hoke ${sum} bana.`,
        memorySnapshot: { num: `${n} [int]`, sum: `${sum} [int]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'sum', oldValue: oldSum, newValue: sum }
      });
      const oldN = n;
      n = Math.floor(n / 10);
      steps.push({
        step: stepNum++, lineNum: 6,
        explanationEnglish: `Remove last digit: num /= 10 -> num = ${n}.`,
        explanationHinglish: `num /= 10 se last digit remove hua -> num = ${n}.`,
        memorySnapshot: { num: `${n} [int]`, sum: `${sum} [int]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'num', oldValue: oldN, newValue: n }
      });
    }

    steps.push({
      step: stepNum++, lineNum: 8,
      explanationEnglish: `System.out.println prints Digit Sum: ${sum}.`,
      explanationHinglish: `Console pe "Digit Sum: ${sum}" print hua.`,
      memorySnapshot: { num: '0 [int]', sum: `${sum} [int]` },
      consoleOutput: `Digit Sum: ${sum}`,
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'sum', outputValue: sum }
    });

    steps.push({
      step: stepNum++, lineNum: 9,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { num: '0 [int]', sum: `${sum} [int]` },
      animationEvent: { type: 'COMPLETE' as const }
    });

    return steps;
  },
  executionSteps: []
};

export const javaFactorial: LessonProgram = {
  id: 'java_factorial',
  language: 'java',
  topic: 'loops',
  lessonNumber: 3,
  friendlyName: 'Factorial Calculation',
  learningObjective: 'Learn multiplicative accumulation in loops.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'long' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'fact' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'fact' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Factorial: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'fact' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => {
    let fact = 1;
    const steps: ExecutionStep[] = [];
    let stepNum = 1;

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: 'Set n = 5, long fact = 1.',
      explanationHinglish: 'n = 5 aur 8-byte long fact = 1 set hua.',
      memorySnapshot: { n: '5 [int]', fact: '1 [long]' },
      animationEvent: { type: 'MULTI_CREATE_VARIABLES' as const, variables: [{ name: 'n', value: 5 }, { name: 'fact', value: 1 }] }
    });

    for (let i = 1; i <= 5; i++) {
      const oldFact = fact;
      fact *= i;
      steps.push({
        step: stepNum++, lineNum: 5,
        explanationEnglish: `Iteration ${i}: fact *= ${i} -> fact = ${fact}.`,
        explanationHinglish: `Iteration ${i}: fact me ${i} multiply hoke ${fact} hua.`,
        memorySnapshot: { n: '5 [int]', i: `${i} [int]`, fact: `${fact} [long]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'fact', oldValue: oldFact, newValue: fact }
      });
    }

    steps.push({
      step: stepNum++, lineNum: 7,
      explanationEnglish: `System.out.println prints Factorial: ${fact}.`,
      explanationHinglish: `Console pe "Factorial: ${fact}" print hua.`,
      memorySnapshot: { n: '5 [int]', fact: `${fact} [long]` },
      consoleOutput: `Factorial: ${fact}`,
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'fact', outputValue: fact }
    });

    steps.push({
      step: stepNum++, lineNum: 8,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { n: '5 [int]', fact: `${fact} [long]` },
      animationEvent: { type: 'COMPLETE' as const }
    });

    return steps;
  },
  executionSteps: []
};

export const javaDoWhile: LessonProgram = {
  id: 'java_do_while',
  language: 'java',
  topic: 'loops',
  lessonNumber: 4,
  friendlyName: 'Do-While Guaranteed Execution',
  learningObjective: 'Learn exit-controlled do-while loops in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'count' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'do' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Count: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'count' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'count' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'while' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'count' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Set count = 1.',
      explanationHinglish: 'count = 1 set hua.',
      memorySnapshot: { count: '1 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'count', value: 1 }
    },
    {
      step: 2, lineNum: 5,
      explanationEnglish: 'Execute body first without checking condition: System.out.println("Count: 1").',
      explanationHinglish: 'Pehle body execute hui (guaranteed 1st run): "Count: 1" print hua.',
      memorySnapshot: { count: '1 [int]' },
      consoleOutput: 'Count: 1',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'count', outputValue: 1 }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'Increment count++ -> count = 2.',
      explanationHinglish: 'count++ hoke 2 hua.',
      memorySnapshot: { count: '2 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'count', oldValue: 1, newValue: 2 }
    },
    {
      step: 4, lineNum: 7,
      explanationEnglish: 'Check while condition at bottom: count (2) <= 2 is TRUE. Loop continues.',
      explanationHinglish: 'Bottom me while condition check hui -> TRUE. Loop continue karega.',
      memorySnapshot: { count: '2 [int]' },
      animationEvent: { type: 'NONE' as const }
    },
    {
      step: 5, lineNum: 5,
      explanationEnglish: 'Iteration 2: System.out.println("Count: 2").',
      explanationHinglish: 'Iteration 2: "Count: 2" print hua.',
      memorySnapshot: { count: '2 [int]' },
      consoleOutput: 'Count: 1\nCount: 2',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'count', outputValue: 2 }
    },
    {
      step: 6, lineNum: 6,
      explanationEnglish: 'Increment count++ -> count = 3.',
      explanationHinglish: 'count++ hoke 3 hua.',
      memorySnapshot: { count: '3 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'count', oldValue: 2, newValue: 3 }
    },
    {
      step: 7, lineNum: 7,
      explanationEnglish: 'Check while condition: count (3) <= 2 is FALSE. Loop ends.',
      explanationHinglish: 'Condition 3 <= 2 is FALSE. Do-while loop exit hua.',
      memorySnapshot: { count: '3 [int]' },
      animationEvent: { type: 'NONE' as const }
    },
    {
      step: 8, lineNum: 8,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { count: '3 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

export const javaMultiplicationTable: LessonProgram = {
  id: 'java_multiplication_table',
  language: 'java',
  topic: 'loops',
  lessonNumber: 5,
  friendlyName: 'Multiplication Table Generator',
  learningObjective: 'Learn dynamic loop multiplier output formatting.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<=' }, { type: 'text', value: ' ' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '            ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'string', value: '" x "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'string', value: '" = "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'n' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: '));' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 8, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => {
    const steps: ExecutionStep[] = [];
    let stepNum = 1;
    let out = '';

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: 'Set n = 5.',
      explanationHinglish: 'n = 5 initialize hua.',
      memorySnapshot: { n: '5 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'n', value: 5 }
    });

    for (let i = 1; i <= 3; i++) {
      const prod = 5 * i;
      out += (out ? '\n' : '') + `5 x ${i} = ${prod}`;
      steps.push({
        step: stepNum++, lineNum: 5,
        explanationEnglish: `Print 5 x ${i} = ${prod}.`,
        explanationHinglish: `Console pe "5 x ${i} = ${prod}" print hua.`,
        memorySnapshot: { n: '5 [int]', i: `${i} [int]` },
        consoleOutput: out,
        animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'n', outputValue: `${5}x${i}=${prod}` }
      });
    }

    steps.push({
      step: stepNum++, lineNum: 7,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { n: '5 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    });

    return steps;
  },
  executionSteps: []
};

// ==============================================================================
// TOPIC 5: ARRAYS (1D & 2D ARRAYS) (5 Programs)
// ==============================================================================

export const javaArraySum1D: LessonProgram = {
  id: 'java_array_sum_1d',
  language: 'java',
  topic: 'arrays',
  lessonNumber: 1,
  friendlyName: '1D Array Sum & Average',
  learningObjective: 'Learn Java 1D array allocation, element indexing, and average computation.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'number', value: '12' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '25' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '37' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '48' }, { type: 'punctuation', value: '};' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'text', value: ' ' }, { type: 'operator', value: ':' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'val' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'double' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'avg' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'double' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '/' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '.' }, { type: 'variable', value: 'length' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Avg: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'avg' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 11, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => {
    const arr = [12, 25, 37, 48];
    const steps: ExecutionStep[] = [];
    let stepNum = 1;
    let sum = 0;

    steps.push({
      step: stepNum++, lineNum: 3,
      explanationEnglish: 'Heap Memory Allocation: Allocate 1D array int[] arr = {12, 25, 37, 48}.',
      explanationHinglish: 'Heap memory me 1D array object int[] arr allocate hua.',
      memorySnapshot: { 'arr[0]': '12 [int]', 'arr[1]': '25 [int]', 'arr[2]': '37 [int]', 'arr[3]': '48 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'arr', value: '[12, 25, 37, 48]' }
    });

    steps.push({
      step: stepNum++, lineNum: 4,
      explanationEnglish: 'Initialize sum = 0.',
      explanationHinglish: 'sum = 0 initialize hua.',
      memorySnapshot: { 'arr[0]': '12 [int]', 'arr[1]': '25 [int]', 'arr[2]': '37 [int]', 'arr[3]': '48 [int]', sum: '0 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'sum', value: 0 }
    });

    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      const oldSum = sum;
      sum += val;
      steps.push({
        step: stepNum++, lineNum: 6,
        explanationEnglish: `Index ${i} (val=${val}): sum += ${val} -> sum = ${sum}.`,
        explanationHinglish: `Index ${i} pe arr[${i}]=${val} sum me add hua -> sum = ${sum}.`,
        memorySnapshot: { 'arr[0]': '12 [int]', 'arr[1]': '25 [int]', 'arr[2]': '37 [int]', 'arr[3]': '48 [int]', sum: `${sum} [int]` },
        animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'sum', oldValue: oldSum, newValue: sum }
      });
    }

    const avg = sum / arr.length;
    steps.push({
      step: stepNum++, lineNum: 8,
      explanationEnglish: `Compute average = (double) ${sum} / 4 = ${avg}.`,
      explanationHinglish: `Average calculate hua: avg = ${avg}.`,
      memorySnapshot: { 'arr[0]': '12 [int]', 'arr[1]': '25 [int]', 'arr[2]': '37 [int]', 'arr[3]': '48 [int]', sum: `${sum} [int]`, avg: `${avg} [double]` },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'avg', value: avg }
    });

    steps.push({
      step: stepNum++, lineNum: 9,
      explanationEnglish: `System.out.println prints Avg: ${avg}.`,
      explanationHinglish: `Console pe "Avg: ${avg}" print hua.`,
      memorySnapshot: { 'arr[0]': '12 [int]', 'arr[1]': '25 [int]', 'arr[2]': '37 [int]', 'arr[3]': '48 [int]', avg: `${avg} [double]` },
      consoleOutput: `Avg: ${avg}`,
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'avg', outputValue: avg }
    });

    steps.push({
      step: stepNum++, lineNum: 10,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { 'arr[0]': '12 [int]', 'arr[1]': '25 [int]', 'arr[2]': '37 [int]', 'arr[3]': '48 [int]', avg: `${avg} [double]` },
      animationEvent: { type: 'COMPLETE' as const }
    });

    return steps;
  },
  executionSteps: []
};

export const javaArrayMax1D: LessonProgram = {
  id: 'java_array_max_1d',
  language: 'java',
  topic: 'arrays',
  lessonNumber: 2,
  friendlyName: 'Find Maximum & Minimum in 1D Array',
  learningObjective: 'Learn element comparisons and tracking extrema in Java arrays.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'number', value: '34' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '89' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '15' }, { type: 'punctuation', value: '};' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'max' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'number', value: '0' }, { type: 'punctuation', value: '];' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '.' }, { type: 'variable', value: 'length' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '>' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'max' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'max' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: '];' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Max: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'max' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Allocate arr = {34, 89, 15}.',
      explanationHinglish: 'Array arr = {34, 89, 15} memory me allocate hua.',
      memorySnapshot: { 'arr[0]': '34 [int]', 'arr[1]': '89 [int]', 'arr[2]': '15 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'arr', value: '[34, 89, 15]' }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: 'Set initial max = arr[0] (34).',
      explanationHinglish: 'max ko pehle element arr[0] (34) se initialize kiya.',
      memorySnapshot: { 'arr[0]': '34 [int]', 'arr[1]': '89 [int]', 'arr[2]': '15 [int]', max: '34 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'max', value: 34 }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'i=1: arr[1] (89) > max (34) is TRUE -> Update max = 89.',
      explanationHinglish: 'Index 1 pe arr[1]=89 > max (34) -> TRUE, max = 89 update hua.',
      memorySnapshot: { 'arr[0]': '34 [int]', 'arr[1]': '89 [int]', 'arr[2]': '15 [int]', max: '89 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'max', oldValue: 34, newValue: 89 }
    },
    {
      step: 4, lineNum: 6,
      explanationEnglish: 'i=2: arr[2] (15) > max (89) is FALSE -> Keep max = 89.',
      explanationHinglish: 'Index 2 pe arr[2]=15 > max (89) -> FALSE, max 89 hi raha.',
      memorySnapshot: { 'arr[0]': '34 [int]', 'arr[1]': '89 [int]', 'arr[2]': '15 [int]', max: '89 [int]' },
      animationEvent: { type: 'NONE' as const }
    },
    {
      step: 5, lineNum: 8,
      explanationEnglish: 'System.out.println prints Max: 89.',
      explanationHinglish: 'Console pe "Max: 89" print hua.',
      memorySnapshot: { 'arr[0]': '34 [int]', 'arr[1]': '89 [int]', 'arr[2]': '15 [int]', max: '89 [int]' },
      consoleOutput: 'Max: 89',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'max', outputValue: 89 }
    },
    {
      step: 6, lineNum: 9,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { 'arr[0]': '34 [int]', 'arr[1]': '89 [int]', 'arr[2]': '15 [int]', max: '89 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

export const javaLinearSearch: LessonProgram = {
  id: 'java_linear_search',
  language: 'java',
  topic: 'arrays',
  lessonNumber: 3,
  friendlyName: 'Linear Search in 1D Array',
  learningObjective: 'Learn target element search and early break execution in Java arrays.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'number', value: '10' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '30' }, { type: 'punctuation', value: '};' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'target' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'foundIdx' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '-1' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '.' }, { type: 'variable', value: 'length' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'if' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'arr' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '==' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'target' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '                ' }, { type: 'variable', value: 'foundIdx' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'break' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '            ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Found at index: "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'foundIdx' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 11, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 12, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Allocate arr = {10, 20, 30}.',
      explanationHinglish: 'Array arr = {10, 20, 30} memory me allocate hua.',
      memorySnapshot: { 'arr[0]': '10 [int]', 'arr[1]': '20 [int]', 'arr[2]': '30 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'arr', value: '[10, 20, 30]' }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: 'Set target = 20, foundIdx = -1.',
      explanationHinglish: 'target = 20 aur foundIdx = -1 initialize hue.',
      memorySnapshot: { 'arr[0]': '10 [int]', 'arr[1]': '20 [int]', 'arr[2]': '30 [int]', target: '20 [int]', foundIdx: '-1 [int]' },
      animationEvent: { type: 'MULTI_CREATE_VARIABLES' as const, variables: [{ name: 'target', value: 20 }, { name: 'foundIdx', value: -1 }] }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'i=0: arr[0] (10) == target (20) is FALSE.',
      explanationHinglish: 'Index 0 (arr[0]=10) target (20) ke sath match nahi hua.',
      memorySnapshot: { 'arr[0]': '10 [int]', 'arr[1]': '20 [int]', 'arr[2]': '30 [int]', target: '20 [int]', foundIdx: '-1 [int]' },
      animationEvent: { type: 'HIGHLIGHT_ARRAY_INDEX' as const, arrayName: 'arr', index: 0 }
    },
    {
      step: 4, lineNum: 6,
      explanationEnglish: 'i=1: arr[1] (20) == target (20) is TRUE! Match found!',
      explanationHinglish: 'Index 1 (arr[1]=20) target (20) ke sath match ho gaya!',
      memorySnapshot: { 'arr[0]': '10 [int]', 'arr[1]': '20 [int]', 'arr[2]': '30 [int]', target: '20 [int]', foundIdx: '-1 [int]' },
      animationEvent: { type: 'HIGHLIGHT_ARRAY_INDEX' as const, arrayName: 'arr', index: 1 }
    },
    {
      step: 5, lineNum: 7,
      explanationEnglish: 'Set foundIdx = 1 and execute break.',
      explanationHinglish: 'foundIdx = 1 update hoke loop break ho gaya.',
      memorySnapshot: { 'arr[0]': '10 [int]', 'arr[1]': '20 [int]', 'arr[2]': '30 [int]', target: '20 [int]', foundIdx: '1 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'foundIdx', oldValue: -1, newValue: 1 }
    },
    {
      step: 6, lineNum: 10,
      explanationEnglish: 'System.out.println prints Found at index: 1.',
      explanationHinglish: 'Console pe "Found at index: 1" print hua.',
      memorySnapshot: { 'arr[0]': '10 [int]', 'arr[1]': '20 [int]', 'arr[2]': '30 [int]', target: '20 [int]', foundIdx: '1 [int]' },
      consoleOutput: 'Found at index: 1',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'foundIdx', outputValue: 1 }
    },
    {
      step: 7, lineNum: 11,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { 'arr[0]': '10 [int]', 'arr[1]': '20 [int]', 'arr[2]': '30 [int]', target: '20 [int]', foundIdx: '1 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

export const javaMatrix2D: LessonProgram = {
  id: 'java_matrix_2d',
  language: 'java',
  topic: 'arrays',
  lessonNumber: 4,
  friendlyName: '2D Matrix Declaration & Traversal',
  learningObjective: 'Understand 2D array matrix row and column indexing in Java.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'punctuation', value: '[][]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'matrix' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{{' }, { type: 'number', value: '1' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }, { type: 'punctuation', value: '},' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '4' }, { type: 'punctuation', value: '}};' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'r' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'r' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'r' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'c' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'c' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'c' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '                ' }, { type: 'variable', value: 'sum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'matrix' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'r' }, { type: 'punctuation', value: '][' }, { type: 'variable', value: 'c' }, { type: 'punctuation', value: '];' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '            ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Matrix Sum = "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'sum' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 11, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 12, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Allocate 2D Matrix Grid int[][] matrix = {{1, 2}, {3, 4}} (2 rows, 2 cols).',
      explanationHinglish: 'Heap memory me 2x2 2D Matrix grid int[][] matrix allocate hua.',
      memorySnapshot: { 'matrix[0][0]': '1 [int]', 'matrix[0][1]': '2 [int]', 'matrix[1][0]': '3 [int]', 'matrix[1][1]': '4 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'matrix', value: '[[1, 2], [3, 4]]' }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: 'Initialize sum = 0.',
      explanationHinglish: 'sum = 0 initialize hua.',
      memorySnapshot: { 'matrix[0][0]': '1 [int]', 'matrix[0][1]': '2 [int]', 'matrix[1][0]': '3 [int]', 'matrix[1][1]': '4 [int]', sum: '0 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'sum', value: 0 }
    },
    {
      step: 3, lineNum: 7,
      explanationEnglish: 'Cell [0][0] = 1: sum += 1 -> sum = 1.',
      explanationHinglish: 'Row 0, Col 0 cell (val=1) sum me add hua -> sum = 1.',
      memorySnapshot: { 'matrix[0][0]': '1 [int]', 'matrix[0][1]': '2 [int]', 'matrix[1][0]': '3 [int]', 'matrix[1][1]': '4 [int]', sum: '1 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'sum', oldValue: 0, newValue: 1 }
    },
    {
      step: 4, lineNum: 7,
      explanationEnglish: 'Cell [0][1] = 2: sum += 2 -> sum = 3.',
      explanationHinglish: 'Row 0, Col 1 cell (val=2) sum me add hua -> sum = 3.',
      memorySnapshot: { 'matrix[0][0]': '1 [int]', 'matrix[0][1]': '2 [int]', 'matrix[1][0]': '3 [int]', 'matrix[1][1]': '4 [int]', sum: '3 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'sum', oldValue: 1, newValue: 3 }
    },
    {
      step: 5, lineNum: 7,
      explanationEnglish: 'Cell [1][0] = 3: sum += 3 -> sum = 6.',
      explanationHinglish: 'Row 1, Col 0 cell (val=3) sum me add hua -> sum = 6.',
      memorySnapshot: { 'matrix[0][0]': '1 [int]', 'matrix[0][1]': '2 [int]', 'matrix[1][0]': '3 [int]', 'matrix[1][1]': '4 [int]', sum: '6 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'sum', oldValue: 3, newValue: 6 }
    },
    {
      step: 6, lineNum: 7,
      explanationEnglish: 'Cell [1][1] = 4: sum += 4 -> sum = 10.',
      explanationHinglish: 'Row 1, Col 1 cell (val=4) sum me add hua -> sum = 10.',
      memorySnapshot: { 'matrix[0][0]': '1 [int]', 'matrix[0][1]': '2 [int]', 'matrix[1][0]': '3 [int]', 'matrix[1][1]': '4 [int]', sum: '10 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'sum', oldValue: 6, newValue: 10 }
    },
    {
      step: 7, lineNum: 10,
      explanationEnglish: 'System.out.println prints Matrix Sum = 10.',
      explanationHinglish: 'Console pe "Matrix Sum = 10" print hua.',
      memorySnapshot: { 'matrix[0][0]': '1 [int]', 'matrix[0][1]': '2 [int]', 'matrix[1][0]': '3 [int]', 'matrix[1][1]': '4 [int]', sum: '10 [int]' },
      consoleOutput: 'Matrix Sum = 10',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'sum', outputValue: 10 }
    },
    {
      step: 8, lineNum: 11,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { 'matrix[0][0]': '1 [int]', 'matrix[0][1]': '2 [int]', 'matrix[1][0]': '3 [int]', 'matrix[1][1]': '4 [int]', sum: '10 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

export const javaDiagonalSum2D: LessonProgram = {
  id: 'java_diagonal_sum_2d',
  language: 'java',
  topic: 'arrays',
  lessonNumber: 5,
  friendlyName: 'Primary Diagonal Sum of 2D Matrix',
  learningObjective: 'Learn matrix primary diagonal indexing (matrix[i][i]) in Java 2D arrays.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'class' }, { type: 'text', value: ' ' }, { type: 'function', value: 'Main' }, { type: 'text', value: ' {' }] },
    { lineNum: 2, tokens: [{ type: 'text', value: '    ' }, { type: 'keyword', value: 'public' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'static' }, { type: 'text', value: ' ' }, { type: 'keyword', value: 'void' }, { type: 'text', value: ' ' }, { type: 'function', value: 'main' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'String' }, { type: 'punctuation', value: '[]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'args' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 3, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'punctuation', value: '[][]' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'mat' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{{' }, { type: 'number', value: '5' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '8' }, { type: 'punctuation', value: '},' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'number', value: '3' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'number', value: '9' }, { type: 'punctuation', value: '}};' }] },
    { lineNum: 4, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'diagSum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }] },
    { lineNum: 5, tokens: [{ type: 'text', value: '        ' }, { type: 'keyword', value: 'for' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'keyword', value: 'int' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '0' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'text', value: ' ' }, { type: 'operator', value: '<' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }, { type: 'punctuation', value: ';' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'i' }, { type: 'operator', value: '++' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' {' }] },
    { lineNum: 6, tokens: [{ type: 'text', value: '            ' }, { type: 'variable', value: 'diagSum' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'mat' }, { type: 'punctuation', value: '[' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: '][' }, { type: 'variable', value: 'i' }, { type: 'punctuation', value: '];' }] },
    { lineNum: 7, tokens: [{ type: 'text', value: '        ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 8, tokens: [{ type: 'text', value: '        ' }, { type: 'function', value: 'System.out.println' }, { type: 'punctuation', value: '(' }, { type: 'string', value: '"Diagonal Sum = "' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'diagSum' }, { type: 'punctuation', value: ');' }] },
    { lineNum: 9, tokens: [{ type: 'text', value: '    ' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 10, tokens: [{ type: 'punctuation', value: '}' }] },
  ],
  generateSteps: (): ExecutionStep[] => [
    {
      step: 1, lineNum: 3,
      explanationEnglish: 'Allocate 2x2 Matrix mat = {{5, 8}, {3, 9}}.',
      explanationHinglish: '2x2 Matrix mat = {{5, 8}, {3, 9}} allocate hua.',
      memorySnapshot: { 'mat[0][0]': '5 [int]', 'mat[0][1]': '8 [int]', 'mat[1][0]': '3 [int]', 'mat[1][1]': '9 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'mat', value: '[[5, 8], [3, 9]]' }
    },
    {
      step: 2, lineNum: 4,
      explanationEnglish: 'Initialize diagSum = 0.',
      explanationHinglish: 'diagSum = 0 initialize hua.',
      memorySnapshot: { 'mat[0][0]': '5 [int]', 'mat[0][1]': '8 [int]', 'mat[1][0]': '3 [int]', 'mat[1][1]': '9 [int]', diagSum: '0 [int]' },
      animationEvent: { type: 'CREATE_VARIABLE' as const, name: 'diagSum', value: 0 }
    },
    {
      step: 3, lineNum: 6,
      explanationEnglish: 'Primary diagonal cell [0][0] = 5: diagSum += 5 -> diagSum = 5.',
      explanationHinglish: 'Diagonal element mat[0][0]=5 sum me add hua -> diagSum = 5.',
      memorySnapshot: { 'mat[0][0]': '5 [int]', 'mat[0][1]': '8 [int]', 'mat[1][0]': '3 [int]', 'mat[1][1]': '9 [int]', diagSum: '5 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'diagSum', oldValue: 0, newValue: 5 }
    },
    {
      step: 4, lineNum: 6,
      explanationEnglish: 'Primary diagonal cell [1][1] = 9: diagSum += 9 -> diagSum = 14.',
      explanationHinglish: 'Diagonal element mat[1][1]=9 sum me add hua -> diagSum = 14.',
      memorySnapshot: { 'mat[0][0]': '5 [int]', 'mat[0][1]': '8 [int]', 'mat[1][0]': '3 [int]', 'mat[1][1]': '9 [int]', diagSum: '14 [int]' },
      animationEvent: { type: 'UPDATE_VARIABLE' as const, name: 'diagSum', oldValue: 5, newValue: 14 }
    },
    {
      step: 5, lineNum: 8,
      explanationEnglish: 'System.out.println prints Diagonal Sum = 14.',
      explanationHinglish: 'Console pe "Diagonal Sum = 14" print hua.',
      memorySnapshot: { 'mat[0][0]': '5 [int]', 'mat[0][1]': '8 [int]', 'mat[1][0]': '3 [int]', 'mat[1][1]': '9 [int]', diagSum: '14 [int]' },
      consoleOutput: 'Diagonal Sum = 14',
      animationEvent: { type: 'PRINT_VALUE' as const, variableName: 'diagSum', outputValue: 14 }
    },
    {
      step: 6, lineNum: 9,
      explanationEnglish: 'Program finished.',
      explanationHinglish: 'Program finish hua.',
      memorySnapshot: { 'mat[0][0]': '5 [int]', 'mat[0][1]': '8 [int]', 'mat[1][0]': '3 [int]', 'mat[1][1]': '9 [int]', diagSum: '14 [int]' },
      animationEvent: { type: 'COMPLETE' as const }
    }
  ],
  executionSteps: []
};

// Export all Java lessons map
export const javaLessons = {
  java_types: javaTypes,
  java_casting: javaCasting,
  java_ascii: javaAscii,
  java_temp_convert: javaTempConvert,
  java_even_odd: javaEvenOdd,
  java_largest_three: javaLargestThree,
  java_grade: javaGrade,
  java_tax_calc: javaTaxCalc,
  java_switch_day: javaSwitchDay,
  java_switch_vowel: javaSwitchVowel,
  java_switch_calc: javaSwitchCalc,
  java_for_sum: javaForSum,
  java_while_digits: javaWhileDigits,
  java_factorial: javaFactorial,
  java_do_while: javaDoWhile,
  java_multiplication_table: javaMultiplicationTable,
  java_array_sum_1d: javaArraySum1D,
  java_array_max_1d: javaArrayMax1D,
  java_linear_search: javaLinearSearch,
  java_matrix_2d: javaMatrix2D,
  java_diagonal_sum_2d: javaDiagonalSum2D,
};
