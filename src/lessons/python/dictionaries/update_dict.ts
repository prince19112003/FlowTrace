import type { LessonProgram } from '../../types';

export const update_dict: LessonProgram = {
  id: 'update_dict', language: 'python', topic: 'dictionaries', lessonNumber: 2,
  friendlyName: 'Update and Delete Dictionary',
  learningObjective: 'Learn how to modify dictionary values, add new keys, and remove keys using del.',
  lines: [
    { lineNum: 1, tokens: [{ type: 'variable', value: 'user' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'punctuation', value: '{' }, { type: 'string', value: '"Name"' }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Rahul"' }, { type: 'punctuation', value: ',' }, { type: 'text', value: ' ' }, { type: 'string', value: '"Age"' }, { type: 'punctuation', value: ':' }, { type: 'text', value: ' ' }, { type: 'number', value: '20' }, { type: 'punctuation', value: '}' }] },
    { lineNum: 2, tokens: [{ type: 'variable', value: 'user' }, { type: 'punctuation', value: '[' }, { type: 'string', value: '"Age"' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '21' }] },
    { lineNum: 3, tokens: [{ type: 'variable', value: 'user' }, { type: 'punctuation', value: '[' }, { type: 'string', value: '"Marks"' }, { type: 'punctuation', value: ']' }, { type: 'text', value: ' ' }, { type: 'operator', value: '=' }, { type: 'text', value: ' ' }, { type: 'number', value: '92' }] },
    { lineNum: 4, tokens: [{ type: 'keyword', value: 'del' }, { type: 'text', value: ' ' }, { type: 'variable', value: 'user' }, { type: 'punctuation', value: '[' }, { type: 'string', value: '"Age"' }, { type: 'punctuation', value: ']' }] },
    { lineNum: 5, tokens: [{ type: 'function', value: 'print' }, { type: 'punctuation', value: '(' }, { type: 'variable', value: 'user' }, { type: 'punctuation', value: ')' }] },
  ],
  executionSteps: [
    {
      step: 1, lineNum: 1,
      explanationEnglish: 'Create a dictionary with Name and Age keys.',
      explanationHinglish: 'Dictionary banayi jisme Name aur Age keys hain.',
      memorySnapshot: { user: '"{\"Name\": \"Rahul\", \"Age\": 20}"' },
      animationEvent: { type: 'CREATE_VARIABLE', name: 'user', value: '"{\"Name\": \"Rahul\", \"Age\": 20}"' },
    },
    {
      step: 2, lineNum: 2,
      explanationEnglish: 'Update the Age value to 21.',
      explanationHinglish: 'Age ki value ko update karke 21 kar diya.',
      memorySnapshot: { user: '"{\"Name\": \"Rahul\", \"Age\": 21}"' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'user', oldValue: '"{\"Name\": \"Rahul\", \"Age\": 20}"', newValue: '"{\"Name\": \"Rahul\", \"Age\": 21}"' },
    },
    {
      step: 3, lineNum: 3,
      explanationEnglish: 'Add a new key-value pair: Marks = 92.',
      explanationHinglish: 'Ek naya key-value joda: Marks = 92.',
      memorySnapshot: { user: '"{\"Name\": \"Rahul\", \"Age\": 21, \"Marks\": 92}"' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'user', oldValue: '"{\"Name\": \"Rahul\", \"Age\": 21}"', newValue: '"{\"Name\": \"Rahul\", \"Age\": 21, \"Marks\": 92}"' },
    },
    {
      step: 4, lineNum: 4,
      explanationEnglish: 'Delete the Age key and its value using del.',
      explanationHinglish: 'del keyword se Age key ko hata diya.',
      memorySnapshot: { user: '"{\"Name\": \"Rahul\", \"Marks\": 92}"' },
      animationEvent: { type: 'UPDATE_VARIABLE', name: 'user', oldValue: '"{\"Name\": \"Rahul\", \"Age\": 21, \"Marks\": 92}"', newValue: '"{\"Name\": \"Rahul\", \"Marks\": 92}"' },
    },
    {
      step: 5, lineNum: 5,
      explanationEnglish: 'Print the updated dictionary.',
      explanationHinglish: 'Update ki gayi dictionary print kiya.',
      memorySnapshot: { user: '"{\"Name\": \"Rahul\", \"Marks\": 92}"' },
      consoleOutput: '{\'Name\': \'Rahul\', \'Marks\': 92}',
      animationEvent: { type: 'PRINT_VALUE', variableName: 'user', outputValue: '"{\"Name\": \"Rahul\", \"Marks\": 92}"' },
    }
  ],
};