const fs = require('fs');
const path = require('path');

const content = `import type { LessonProgram } from '../../../types';

// ───────────────────────────────────────────────────────────── LESSON 01 ────
export const single_variable: LessonProgram = {
  id: 'single_variable', language: 'python', topic: 'variables', lessonNumber: 1,
  friendlyName: 'Create a Single Variable',
  learningObjective: 'Understand how a computer stores a number in memory using a named variable.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'age' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '15' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'age' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'The computer creates a memory box named "age" and stores the number 15 inside it.',
      explanationHinglish: 'Computer ne "age" naam ka ek dabba banaya aur usme 15 daal diya!',
      memorySnapshot: { age: 15 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'age', value: 15 },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'The computer opens the "age" box, reads 15 from it, and prints it on the screen.',
      explanationHinglish: '"age" ka dabba khula, andar se 15 nikla, aur screen pe aa gaya!',
      memorySnapshot: { age: 15 },
      consoleOutput: '15',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'age', outputValue: 15 },
    },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 02 ────
export const multiple_variables: LessonProgram = {
  id: 'multiple_variables', language: 'python', topic: 'variables', lessonNumber: 2,
  friendlyName: 'Create Multiple Variables',
  learningObjective: 'Understand that the computer stores multiple independent variables in separate memory boxes.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'length' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'width' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'length' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 4, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'width' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'A memory box called "length" is created and the number 10 is stored inside.',
      explanationHinglish: '"length" naam ka pehla dabba bana aur usme 10 gaya!',
      memorySnapshot: { length: 10 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'length', value: 10 },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'A second independent memory box called "width" is created and stores 5.',
      explanationHinglish: 'Ek aur alag dabba "width" bana, usme 5 store ho gaya. Dono alag-alag hain!',
      memorySnapshot: { length: 10, width: 5 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'width', value: 5 },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'The computer reads from the "length" box and prints 10 on the screen.',
      explanationHinglish: '"length" ka dabba khula, 10 screen pe print ho gaya!',
      memorySnapshot: { length: 10, width: 5 },
      consoleOutput: '10',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'length', outputValue: 10 },
    },
    {
      step: 4, lineNum: 4,
      explanationEnglish: 'The computer reads from the "width" box and prints 5 on the screen.',
      explanationHinglish: '"width" ka dabba khula, 5 screen pe print ho gaya!',
      memorySnapshot: { length: 10, width: 5 },
      consoleOutput: '10\\n5',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'width', outputValue: 5 },
    },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 03 ────
export const print_multiple: LessonProgram = {
  id: 'print_multiple', language: 'python', topic: 'variables', lessonNumber: 3,
  friendlyName: 'Print Multiple Variables',
  learningObjective: 'Learn how to print multiple variables together on the same line.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'score' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '50' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'level' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'score' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'level' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'A memory box "score" is created with value 50.',
      explanationHinglish: '"score" ka dabba bana, usme 50 daal diya!',
      memorySnapshot: { score: 50 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'score', value: 50 },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'A second box "level" is created with value 2.',
      explanationHinglish: '"level" ka alag dabba bana, usme 2 daal diya!',
      memorySnapshot: { score: 50, level: 2 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'level', value: 2 },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'Both boxes open at the same time — 50 and 2 print on the same line separated by a space.',
      explanationHinglish: 'Dono dabbe ek saath khule! 50 aur 2 ek hi line mein space ke saath print ho gaye!',
      memorySnapshot: { score: 50, level: 2 },
      consoleOutput: '50 2',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'score', outputValue: '50 2' },
    },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 04 ────
export const update_variable: LessonProgram = {
  id: 'update_variable', language: 'python', topic: 'variables', lessonNumber: 4,
  friendlyName: 'Update Variable Value',
  learningObjective: 'Understand that assigning a new value erases the old value from the memory box.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'points' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'points' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'points' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }] },
    { lineNum: 4, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'points' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: '"points" box is created and 10 is stored inside it.',
      explanationHinglish: '"points" ka dabba bana, usme 10 rakha!',
      memorySnapshot: { points: 10 },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'points', value: 10 },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'Computer reads 10 from "points" and prints it.',
      explanationHinglish: 'Dabba khula — 10 screen pe aa gaya!',
      memorySnapshot: { points: 10 },
      consoleOutput: '10',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'points', outputValue: 10 },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'The old value 10 is destroyed and replaced with 20. The box still has the same name.',
      explanationHinglish: '10 mit gaya! Usi dabbe mein ab 20 aa gaya. Naam wahi raha, value badal gayi!',
      memorySnapshot: { points: 20 },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'points', oldValue: 10, newValue: 20 },
    },
    {
      step: 4, lineNum: 4,
      explanationEnglish: 'Now the "points" box contains 20, so 20 is printed.',
      explanationHinglish: 'Ab dabba khula toh 20 nikla — 20 screen pe print ho gaya!',
      memorySnapshot: { points: 20 },
      consoleOutput: '10\\n20',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'points', outputValue: 20 },
    },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 05 ────
export const swap_temp: LessonProgram = {
  id: 'swap_temp', language: 'python', topic: 'variables', lessonNumber: 5,
  friendlyName: 'Swap Using Temp Variable',
  learningObjective: 'Learn how to swap two variable values safely using a temporary holder box.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'temp' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'a' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'a' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'b' }] },
    { lineNum: 5, tokens: [{ type: 'variable', value: 'b' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'temp' }] },
    { lineNum: 6, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'a' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 7, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'b' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    { step: 1, lineNum: 1, explanationEnglish: '"a" box created with value 5.', explanationHinglish: '"a" ka dabba bana, usme 5 gaya!', memorySnapshot: { a: 5 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'a', value: 5 } },
    { step: 2, lineNum: 2, explanationEnglish: '"b" box created with value 10.', explanationHinglish: '"b" ka dabba bana, usme 10 gaya!', memorySnapshot: { a: 5, b: 10 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'b', value: 10 } },
    { step: 3, lineNum: 3, explanationEnglish: 'A temporary "temp" box is created to safely hold a copy of "a" (value 5).', explanationHinglish: 'Safety ke liye "temp" ka holder dabba banaya, "a" ki value 5 copy ho gayi!', memorySnapshot: { a: 5, b: 10, temp: 5 }, animationEvent: { type: 'COPY_VALUE', from: 'a', to: 'temp', value: 5 } },
    { step: 4, lineNum: 4, explanationEnglish: '"b" value (10) is copied into "a". Now both a and b hold 10 — but temp still has 5.', explanationHinglish: '"b" ki value 10 ab "a" mein chali gayi! "a" mein 10 hai, temp mein 5 safe hai.', memorySnapshot: { a: 10, b: 10, temp: 5 }, animationEvent: { type: 'COPY_VALUE', from: 'b', to: 'a', value: 10 } },
    { step: 5, lineNum: 5, explanationEnglish: '"temp" (which has the original 5) is now copied into "b". Swap complete!', explanationHinglish: '"temp" mein rakhi 5 ab "b" mein gayi — SWAP COMPLETE! 🎉', memorySnapshot: { a: 10, b: 5, temp: 5 }, animationEvent: { type: 'SWAP', varA: 'a', varB: 'b' } },
    { step: 6, lineNum: 6, explanationEnglish: '"a" now contains 10 — printed!', explanationHinglish: '"a" mein ab 10 hai — print ho gaya!', memorySnapshot: { a: 10, b: 5, temp: 5 }, consoleOutput: '10', animationEvent: { type: 'PRINT_VALUE', variableName: 'a', outputValue: 10 } },
    { step: 7, lineNum: 7, explanationEnglish: '"b" now contains 5 — printed!', explanationHinglish: '"b" mein ab 5 hai — print ho gaya!', memorySnapshot: { a: 10, b: 5, temp: 5 }, consoleOutput: '10\\n5', animationEvent: { type: 'PRINT_VALUE', variableName: 'b', outputValue: 5 } },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 06 ────
export const swap_math: LessonProgram = {
  id: 'swap_math', language: 'python', topic: 'variables', lessonNumber: 6,
  friendlyName: 'Swap Without Temp Variable',
  learningObjective: 'Swap two variables using addition and subtraction — no temporary box needed.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'y' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'y' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'y' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '-' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'y' }] },
    { lineNum: 5, tokens: [{ type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'x' }, { type: 'text', value: ' ' }, { type: 'operator', value: '-' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'y' }] },
    { lineNum: 6, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'x' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 7, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'y' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    { step: 1, lineNum: 1, explanationEnglish: '"x" is created with value 10.', explanationHinglish: '"x" bana, usme 10!', memorySnapshot: { x: 10 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'x', value: 10 } },
    { step: 2, lineNum: 2, explanationEnglish: '"y" is created with value 20.', explanationHinglish: '"y" bana, usme 20!', memorySnapshot: { x: 10, y: 20 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'y', value: 20 } },
    { step: 3, lineNum: 3, explanationEnglish: 'x + y = 30. The total is stored in "x". x is now 30.', explanationHinglish: '10 + 20 = 30! Ab "x" mein 30 hai — total store ho gaya!', memorySnapshot: { x: 30, y: 20 }, animationEvent: { type: 'COMPUTE', inputs: ['x', 'y'], operator: '+', result: 30, storeIn: 'x' } },
    { step: 4, lineNum: 4, explanationEnglish: 'x - y = 30 - 20 = 10. This is stored in "y". y is now 10 (original value of x!).', explanationHinglish: '30 - 20 = 10! "y" mein ab 10 hai — yeh "x" ki purani value thi!', memorySnapshot: { x: 30, y: 10 }, animationEvent: { type: 'COMPUTE', inputs: ['x', 'y'], operator: '-', result: 10, storeIn: 'y' } },
    { step: 5, lineNum: 5, explanationEnglish: 'x - y = 30 - 10 = 20. Stored in "x". x is now 20 (original value of y!). Swap done!', explanationHinglish: '30 - 10 = 20! "x" mein ab 20 hai — yeh "y" ki purani value thi! SWAP DONE! 🎉', memorySnapshot: { x: 20, y: 10 }, animationEvent: { type: 'COMPUTE', inputs: ['x', 'y'], operator: '-', result: 20, storeIn: 'x' } },
    { step: 6, lineNum: 6, explanationEnglish: '"x" is now 20 — printed!', explanationHinglish: '"x" mein 20 hai — print!', memorySnapshot: { x: 20, y: 10 }, consoleOutput: '20', animationEvent: { type: 'PRINT_VALUE', variableName: 'x', outputValue: 20 } },
    { step: 7, lineNum: 7, explanationEnglish: '"y" is now 10 — printed!', explanationHinglish: '"y" mein 10 hai — print!', memorySnapshot: { x: 20, y: 10 }, consoleOutput: '20\\n10', animationEvent: { type: 'PRINT_VALUE', variableName: 'y', outputValue: 10 } },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 07 ────
export const addition: LessonProgram = {
  id: 'addition', language: 'python', topic: 'variables', lessonNumber: 7,
  friendlyName: 'Basic Addition',
  learningObjective: 'Add two variables and store the result in a third variable.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'num1' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '15' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'num2' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'total' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'num1' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'num2' }] },
    { lineNum: 4, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'total' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    { step: 1, lineNum: 1, explanationEnglish: '"num1" box created with 15.', explanationHinglish: '"num1" bana, andar 15!', memorySnapshot: { num1: 15 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'num1', value: 15 } },
    { step: 2, lineNum: 2, explanationEnglish: '"num2" box created with 20.', explanationHinglish: '"num2" bana, andar 20!', memorySnapshot: { num1: 15, num2: 20 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'num2', value: 20 } },
    { step: 3, lineNum: 3, explanationEnglish: '15 + 20 = 35. A new "total" box appears and catches the result!', explanationHinglish: '15 + 20 = 35! Naya dabba "total" aaya aur answer pakad liya!', memorySnapshot: { num1: 15, num2: 20, total: 35 }, animationEvent: { type: 'COMPUTE', inputs: ['num1', 'num2'], operator: '+', result: 35, storeIn: 'total' } },
    { step: 4, lineNum: 4, explanationEnglish: '"total" holds 35 — it prints on the screen.', explanationHinglish: '"total" mein 35 hai — screen pe print ho gaya!', memorySnapshot: { num1: 15, num2: 20, total: 35 }, consoleOutput: '35', animationEvent: { type: 'PRINT_VALUE', variableName: 'total', outputValue: 35 } },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 08 ────
export const rectangle_area: LessonProgram = {
  id: 'rectangle_area', language: 'python', topic: 'variables', lessonNumber: 8,
  friendlyName: 'Rectangle Area Calculation',
  learningObjective: 'Use variables and multiplication to calculate the area of a rectangle.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'length' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '10' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'width' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'area' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'length' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'width' }] },
    { lineNum: 4, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'area' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    { step: 1, lineNum: 1, explanationEnglish: '"length" box is created with value 10.', explanationHinglish: '"length" bana, andar 10!', memorySnapshot: { length: 10 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'length', value: 10 } },
    { step: 2, lineNum: 2, explanationEnglish: '"width" box is created with value 5.', explanationHinglish: '"width" bana, andar 5!', memorySnapshot: { length: 10, width: 5 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'width', value: 5 } },
    { step: 3, lineNum: 3, explanationEnglish: '10 × 5 = 50. A new "area" box appears and stores the result.', explanationHinglish: '10 × 5 = 50! "area" ka naya dabba aaya aur 50 pakad liya!', memorySnapshot: { length: 10, width: 5, area: 50 }, animationEvent: { type: 'COMPUTE', inputs: ['length', 'width'], operator: '*', result: 50, storeIn: 'area' } },
    { step: 4, lineNum: 4, explanationEnglish: '"area" holds 50 — printed!', explanationHinglish: '"area" mein 50 hai — print!', memorySnapshot: { length: 10, width: 5, area: 50 }, consoleOutput: '50', animationEvent: { type: 'PRINT_VALUE', variableName: 'area', outputValue: 50 } },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 09 ────
export const simple_interest: LessonProgram = {
  id: 'simple_interest', language: 'python', topic: 'variables', lessonNumber: 9,
  friendlyName: 'Simple Interest',
  learningObjective: 'Calculate simple interest using the formula: (P × R × T) / 100.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'principal' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '1000' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'rate' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '5' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'time' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '2' }] },
    { lineNum: 4, tokens: [{ type: 'variable', value: 'interest' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'principal' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'rate' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'time' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'operator', value: '/' }, { type: 'text', value: ' ' }, { type: 'number', value: '100' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'interest' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    { step: 1, lineNum: 1, explanationEnglish: '"principal" box created with 1000.', explanationHinglish: '"principal" bana, 1000 gaya andar!', memorySnapshot: { principal: 1000 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'principal', value: 1000 } },
    { step: 2, lineNum: 2, explanationEnglish: '"rate" box created with 5.', explanationHinglish: '"rate" bana, 5 gaya!', memorySnapshot: { principal: 1000, rate: 5 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'rate', value: 5 } },
    { step: 3, lineNum: 3, explanationEnglish: '"time" box created with 2.', explanationHinglish: '"time" bana, 2 gaya!', memorySnapshot: { principal: 1000, rate: 5, time: 2 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'time', value: 2 } },
    { step: 4, lineNum: 4, explanationEnglish: '(1000 × 5 × 2) ÷ 100 = 100.0. The formula computes and the result goes into "interest".', explanationHinglish: '(1000 × 5 × 2) ÷ 100 = 100! Formula solve hua aur "interest" mein 100 store ho gaya!', memorySnapshot: { principal: 1000, rate: 5, time: 2, interest: 100 }, animationEvent: { type: 'COMPUTE', inputs: ['principal', 'rate', 'time'], operator: '*÷', result: 100, storeIn: 'interest' } },
    { step: 5, lineNum: 5, explanationEnglish: 'Simple interest is 100.0 — printed!', explanationHinglish: 'Simple interest 100 hai — print ho gaya!', memorySnapshot: { principal: 1000, rate: 5, time: 2, interest: 100 }, consoleOutput: '100.0', animationEvent: { type: 'PRINT_VALUE', variableName: 'interest', outputValue: 100 } },
  ],
};

// ───────────────────────────────────────────────────────────── LESSON 10 ────
export const temp_conversion: LessonProgram = {
  id: 'temp_conversion', language: 'python', topic: 'variables', lessonNumber: 10,
  friendlyName: 'Temperature Conversion',
  learningObjective: 'Convert Celsius to Fahrenheit using the formula: (C × 9/5) + 32.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'celsius' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '30' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'fahrenheit' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'celsius' }, { type: 'text', value: ' ' }, { type: 'operator', value: '*' }, { type: 'text', value: ' 9 / 5' }, { type: 'punctuation', value: ')' }, { type: 'text', value: ' ' }, { type: 'operator', value: '+' }, { type: 'text', value: ' 32' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'fahrenheit' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    { step: 1, lineNum: 1, explanationEnglish: '"celsius" is created with value 30 — the temperature in Celsius.', explanationHinglish: '"celsius" bana, usme 30 — yeh Celsius temperature hai!', memorySnapshot: { celsius: 30 }, animationEvent: { type: 'CREATE_VARIABLE', name: 'celsius', value: 30 } },
    { step: 2, lineNum: 2, explanationEnglish: '(30 × 9 ÷ 5) + 32 = 86.0. The formula runs and "fahrenheit" catches the answer.', explanationHinglish: '(30 × 9 ÷ 5) + 32 = 86! Formula chal gaya, "fahrenheit" mein 86 aa gaya!', memorySnapshot: { celsius: 30, fahrenheit: 86 }, animationEvent: { type: 'COMPUTE', inputs: ['celsius'], operator: '×9÷5+32', result: 86, storeIn: 'fahrenheit' } },
    { step: 3, lineNum: 3, explanationEnglish: '30°C = 86°F — printed to the screen!', explanationHinglish: '30 Celsius = 86 Fahrenheit — screen pe print ho gaya! 🌡️', memorySnapshot: { celsius: 30, fahrenheit: 86 }, consoleOutput: '86.0', animationEvent: { type: 'PRINT_VALUE', variableName: 'fahrenheit', outputValue: 86 } },
  ],
};
`;

const parts = content.split(/\/\/ ─+ LESSON \d+ ─+/);
const outDir = path.join(__dirname, 'src/lessons/python/variables');
fs.mkdirSync(outDir, { recursive: true });
const imports = [];

parts.slice(1).forEach((part) => {
  const match = part.match(/export const ([a-zA-Z0-9_]+): LessonProgram = (\{[\s\S]*?\n\s*\});/);
  if (match) {
    let key = match[1];
    let obj = match[2];
    let filename = key + '.ts';
    let fileContent = "import type { LessonProgram } from '../../../types';\n\nexport const " + key + ": LessonProgram = " + obj + ";\n";
    fs.writeFileSync(path.join(outDir, filename), fileContent);
    imports.push(key);
  }
});

let indexContent = imports.map(i => "import { " + i + " } from './" + i + "';").join('\n') + "\n\nexport const variablesLessons: Record<string, any> = {\n" + imports.map(i => "  " + i + ",").join('\n') + "\n};\n";
fs.writeFileSync(path.join(outDir, 'index.ts'), indexContent);

// Modify original variables.ts to just re-export
fs.writeFileSync(path.join(__dirname, 'src/lessons/python/variables.ts'), "export { variablesLessons } from './variables/index';\n");
console.log('Done rewriting files properly.');
