import type { LessonProgram } from '../../types';

export const create_dict: LessonProgram = {
  id: 'create_dict', language: 'python', topic: 'dictionaries', lessonNumber: 1,
  friendlyName: 'Create and Access Dictionary',
  learningObjective: 'Learn how to create a key-value dictionary and access values using their keys.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'user' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'string', value: '"Name"' }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Rahul"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Age"' }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 2, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'user' }, { type: 'punctuation', value: ')' }] },
    { lineNum: 3, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'user' }, { type: 'punctuation', value: '[' }, { type: 'string', value: '"Name"' }, { type: 'punctuation', value: ']' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'Create a dictionary user with Name and Age keys.',
      explanationHinglish: 'user naam ki dictionary banayi jisme Name aur Age keys hain.',
      memorySnapshot: { user: '"{\"Name\": \"Rahul\", \"Age\": 20}"' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'user', value: '"{\"Name\": \"Rahul\", \"Age\": 20}"' },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'Print the whole dictionary.',
      explanationHinglish: 'Poori dictionary print kiya.',
      memorySnapshot: { user: '"{\"Name\": \"Rahul\", \"Age\": 20}"' },
      consoleOutput: '{\'Name\': \'Rahul\', \'Age\': 20}',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'user', outputValue: '"{\"Name\": \"Rahul\", \"Age\": 20}"' },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'Access the value associated with the "Name" key ("Rahul").',
      explanationHinglish: '"Name" key ki value ("Rahul") access karke print kiya.',
      memorySnapshot: { user: '"{\"Name\": \"Rahul\", \"Age\": 20}"' },
      consoleOutput: '{\'Name\': \'Rahul\', \'Age\': 20}\nRahul',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'user["Name"]', outputValue: '"Rahul"' },
    }
  ],
};