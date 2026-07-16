export interface CodeToken {
  type: 'keyword' | 'identifier' | 'string' | 'number' | 'operator' | 'punctuation' | 'comment' | 'parameter' | 'function' | 'variable' | 'text';
  value: string;
  paramId?: string; // If type is 'parameter', links to EditableParameter
}

export interface CodeLine {
  lineNum: number;
  tokens: CodeToken[];
}

export type ParameterType = 'number' | 'string' | 'boolean' | 'list';

export type ParameterValue = string | number | boolean | unknown[];

export interface EditableParameter {
  id: string;
  type: ParameterType;
  value: ParameterValue;
  defaultValue: ParameterValue;
  range?: { min: number; max: number }; // For numbers
  options?: string[]; // For enums
}

export interface ProgramMetadata {
  id: string;
  language: string;
  title: string;
  description: string;
  allowedBreakpoints: number[];
  parameters: Record<string, EditableParameter>;
  lines: CodeLine[];
}

export interface TopicMetadata {
  id: string;
  title: string;
  programs: string[]; // List of program IDs
}

export interface LanguageMetadata {
  id: string;
  name: string;
  topics: TopicMetadata[];
}
