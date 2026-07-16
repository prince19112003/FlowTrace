import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.resolve(__dirname, '../public/lessons/Python');

// Utility to generate a standard event sequence for simple top-to-bottom programs
function generateLinearEvents(lineCount, programId, lessonId) {
  const events = [];
  let timestamp = 1700000000;
  
  for (let i = 1; i <= lineCount; i++) {
    events.push({
      id: `evt_${lessonId}_${i}`,
      type: 'LINE_CHANGED',
      category: 'EXECUTION',
      timestamp: timestamp++,
      priority: 1, // NORMAL
      metadata: {
        programId,
        lessonId,
        language: 'Python',
        currentStep: i,
        currentSubstep: 1,
        currentLine: i,
        source: 'Runtime'
      },
      payload: {
        previousLine: i === 1 ? null : i - 1,
        newLine: i
      }
    });

    events.push({
      id: `evt_exp_${lessonId}_${i}`,
      type: 'EXPLANATION_UPDATED',
      category: 'UI',
      timestamp: timestamp++,
      priority: 1,
      metadata: {
        programId,
        lessonId,
        language: 'Python',
        currentStep: i,
        currentSubstep: 2,
        currentLine: i,
        source: 'Runtime'
      },
      payload: {
        textId: `exp_${i}`,
        text: {
          en: `The computer executed line ${i}.`,
          hi: `Computer ne line ${i} execute ki.`
        }
      }
    });
  }

  // Final Step Finished event
  events.push({
    id: `evt_end_${lessonId}`,
    type: 'STEP_FINISHED',
    category: 'EXECUTION',
    timestamp: timestamp++,
    priority: 1,
    metadata: {
      programId,
      lessonId,
      language: 'Python',
      currentStep: lineCount,
      currentSubstep: 3,
      currentLine: lineCount,
      source: 'Runtime'
    },
    payload: {}
  });

  return events;
}

const curriculum = [
  {
    topic: 'Variables',
    programs: [
      { id: '01_CreateVariable', title: 'Creating Variables', code: 'age = 25\nprint(age)', lines: 2, params: [{ id: 'var_age', label: 'Age', type: 'number', defaultValue: 25, min: 1, max: 100 }] },
      { id: '02_MultipleVariables', title: 'Multiple Variables', code: 'x = 10\ny = 20\nprint(x + y)', lines: 3, params: [] },
      { id: '03_SwapVariables', title: 'Swap Variables', code: 'a = 5\nb = 10\ntemp = a\na = b\nb = temp\nprint(a, b)', lines: 6, params: [] }
    ]
  },
  {
    topic: 'InputOutput',
    programs: [
      { id: '01_PrintStatement', title: 'Print Statement', code: 'print("Hello World")\nprint("Welcome to Python")', lines: 2, params: [] },
      { id: '02_UserInput', title: 'User Input', code: 'name = "Student"\nprint("Hello", name)', lines: 2, params: [{ id: 'var_name', label: 'Name', type: 'string', defaultValue: 'Student' }] }
    ]
  },
  {
    topic: 'Operators',
    programs: [
      { id: '01_Arithmetic', title: 'Arithmetic Operators', code: 'a = 10\nb = 3\nprint(a + b)\nprint(a * b)', lines: 4, params: [] },
      { id: '02_Logical', title: 'Logical Operators', code: 'x = True\ny = False\nprint(x and y)\nprint(x or y)', lines: 4, params: [] }
    ]
  },
  {
    topic: 'IfElse',
    programs: [
      { id: '01_SimpleIf', title: 'Simple If', code: 'age = 18\nif age >= 18:\n    print("Adult")', lines: 3, params: [{ id: 'var_age', label: 'Age', type: 'number', defaultValue: 18 }] },
      { id: '02_IfElse', title: 'If Else', code: 'marks = 40\nif marks >= 50:\n    print("Pass")\nelse:\n    print("Fail")', lines: 5, params: [{ id: 'var_marks', label: 'Marks', type: 'number', defaultValue: 40 }] }
    ]
  },
  {
    topic: 'NestedIf',
    programs: [
      { id: '01_NestedIf', title: 'Nested If', code: 'num = 10\nif num > 0:\n    if num % 2 == 0:\n        print("Positive Even")', lines: 4, params: [] }
    ]
  },
  {
    topic: 'Loops',
    programs: [
      { id: '01_ForLoop', title: 'For Loop', code: 'for i in range(3):\n    print(i)', lines: 2, params: [] },
      { id: '02_WhileLoop', title: 'While Loop', code: 'count = 0\nwhile count < 3:\n    print(count)\n    count += 1', lines: 4, params: [] }
    ]
  },
  {
    topic: 'NestedLoops',
    programs: [
      { id: '01_NestedLoops', title: 'Nested Loops', code: 'for i in range(2):\n    for j in range(2):\n        print(i, j)', lines: 3, params: [] }
    ]
  },
  {
    topic: 'Functions',
    programs: [
      { id: '01_SimpleFunction', title: 'Simple Function', code: 'def greet():\n    print("Hello")\ngreet()', lines: 3, params: [] },
      { id: '02_FunctionWithArgs', title: 'Function with Args', code: 'def add(a, b):\n    return a + b\nres = add(5, 10)\nprint(res)', lines: 4, params: [] }
    ]
  },
  {
    topic: 'Recursion',
    programs: [
      { id: '01_FactorialRecursion', title: 'Factorial Recursion', code: 'def fact(n):\n    if n == 1: return 1\n    return n * fact(n-1)\nres = fact(3)\nprint(res)', lines: 5, params: [{ id: 'var_n', label: 'Number', type: 'number', defaultValue: 3, min: 1, max: 5 }] }
    ]
  },
  {
    topic: 'Strings',
    programs: [
      { id: '01_StringConcat', title: 'String Concat', code: 'first = "Hello"\nlast = "World"\nprint(first + " " + last)', lines: 3, params: [] }
    ]
  },
  {
    topic: 'Lists',
    programs: [
      { id: '01_CreateList', title: 'Create List', code: 'nums = [1, 2, 3]\nprint(nums[0])', lines: 2, params: [] },
      { id: '02_ListAppend', title: 'List Append', code: 'nums = []\nnums.append(10)\nprint(nums)', lines: 3, params: [] }
    ]
  },
  {
    topic: 'Tuples',
    programs: [
      { id: '01_CreateTuple', title: 'Create Tuple', code: 'tup = (10, 20)\nprint(tup[1])', lines: 2, params: [] }
    ]
  },
  {
    topic: 'Dictionary',
    programs: [
      { id: '01_CreateDict', title: 'Create Dict', code: 'data = {"name": "Alice", "age": 20}\nprint(data["name"])', lines: 2, params: [] }
    ]
  },
  {
    topic: 'Sets',
    programs: [
      { id: '01_CreateSet', title: 'Create Set', code: 's = {1, 2, 3}\ns.add(4)\nprint(s)', lines: 3, params: [] }
    ]
  },
  {
    topic: 'FileHandling',
    programs: [
      { id: '01_FileRead', title: 'File Read', code: 'f = open("data.txt", "r")\nprint(f.read())\nf.close()', lines: 3, params: [] }
    ]
  },
  {
    topic: 'ExceptionHandling',
    programs: [
      { id: '01_TryCatch', title: 'Try Except', code: 'try:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    print("Error!")', lines: 4, params: [] }
    ]
  }
];

function generateCurriculum() {
  if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR, { recursive: true });
  }

  let totalGenerated = 0;

  for (const topic of curriculum) {
    const topicPath = path.join(BASE_DIR, topic.topic);
    if (!fs.existsSync(topicPath)) {
      fs.mkdirSync(topicPath, { recursive: true });
    }

    for (const prog of topic.programs) {
      const progPath = path.join(topicPath, prog.id);
      if (!fs.existsSync(progPath)) {
        fs.mkdirSync(progPath, { recursive: true });
      }

      const lessonPackage = {
        metadata: {
          id: prog.id,
          title: prog.title,
          description: `Learn about ${prog.title} in Python.`,
          language: 'Python',
          topic: topic.topic,
          difficulty: 'BEGINNER',
          version: '1.0.0',
          totalSteps: prog.lines
        },
        code: {
          initialCode: prog.code
        },
        parameters: prog.params,
        events: generateLinearEvents(prog.lines, `prog_${prog.id}`, prog.id)
      };

      fs.writeFileSync(
        path.join(progPath, 'lesson.json'),
        JSON.stringify(lessonPackage, null, 2),
        'utf-8'
      );
      
      totalGenerated++;
    }
  }

  console.log(`Successfully generated ${totalGenerated} MVP Python lessons across ${curriculum.length} topics!`);
}

generateCurriculum();
