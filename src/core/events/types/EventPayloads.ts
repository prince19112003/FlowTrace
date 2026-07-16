/**
 * Defines the strongly typed payload structures for specific events.
 */

export interface LineChangedPayload {
  previousLine: number | null;
  newLine: number;
}

export interface VariableUpdatedPayload {
  variableId: string;
  variableName: string;
  oldValue: unknown;
  newValue: unknown;
  type: string;
}

export interface ArrayUpdatedPayload {
  arrayId: string;
  index: number;
  oldValue: unknown;
  newValue: unknown;
}

export interface LoopIterationPayload {
  loopId: string;
  iterationNumber: number;
  totalIterations?: number;
}

export interface FunctionCalledPayload {
  functionName: string;
  arguments: Record<string, unknown>;
}

export interface OutputAppendedPayload {
  text: string;
}

export interface ParameterChangedPayload {
  parameterId: string;
  oldValue: unknown;
  newValue: unknown;
}

export interface ExplanationUpdatedPayload {
  textId: string;
  text: {
    en: string;
    hi: string;
  };
}

export interface ErrorThrownPayload {
  message: string;
  stackTrace?: string;
  fatal: boolean;
}
