import { create } from 'zustand';
import { createExecutionSlice } from './executionSlice';
import type { ExecutionState } from './executionSlice';
import { createParameterSlice } from './parameterSlice';
import type { ParameterState } from './parameterSlice';
import { createMemorySlice } from './memorySlice';
import type { MemoryState } from './memorySlice';
import { createOutputSlice } from './outputSlice';
import type { OutputState } from './outputSlice';

export type RuntimeState = ExecutionState & ParameterState & MemoryState & OutputState;

export const useRuntimeStore = create<RuntimeState>()((...a) => ({
  ...createExecutionSlice(...a),
  ...createParameterSlice(...a),
  ...createMemorySlice(...a),
  ...createOutputSlice(...a)
}));
