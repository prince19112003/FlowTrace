import type { StateCreator } from 'zustand';

export interface VariableState {
  id: string;
  name: string;
  type: string;
  value: unknown;
  previousValue?: unknown;
}

export interface CallStackFrame {
  functionName: string;
  variables: Record<string, VariableState>;
}

export interface LoopState {
  loopId: string;
  currentIteration: number;
  totalIterations?: number;
}

export interface MemoryState {
  globalVariables: Record<string, VariableState>;
  callStack: CallStackFrame[];
  activeLoops: Record<string, LoopState>;
  
  // Actions
  setGlobalVariable: (variable: VariableState) => void;
  pushCallFrame: (frame: CallStackFrame) => void;
  popCallFrame: () => void;
  updateLocalVariable: (functionName: string, variable: VariableState) => void;
  setLoopIteration: (loopId: string, iteration: number, total?: number) => void;
  exitLoop: (loopId: string) => void;
  resetMemory: () => void;
}

export const createMemorySlice: StateCreator<MemoryState> = (set) => ({
  globalVariables: {},
  callStack: [],
  activeLoops: {},

  setGlobalVariable: (variable) => 
    set((state) => ({
      globalVariables: {
        ...state.globalVariables,
        [variable.id]: variable
      }
    })),

  pushCallFrame: (frame) => 
    set((state) => ({
      callStack: [...state.callStack, frame]
    })),

  popCallFrame: () => 
    set((state) => {
      const newStack = [...state.callStack];
      newStack.pop();
      return { callStack: newStack };
    }),

  updateLocalVariable: (functionName, variable) => 
    set((state) => {
      const newStack = [...state.callStack];
      const frameIndex = newStack.findIndex(f => f.functionName === functionName);
      if (frameIndex !== -1) {
        newStack[frameIndex] = {
          ...newStack[frameIndex],
          variables: {
            ...newStack[frameIndex].variables,
            [variable.id]: variable
          }
        };
      }
      return { callStack: newStack };
    }),

  setLoopIteration: (loopId, iteration, total) =>
    set((state) => ({
      activeLoops: {
        ...state.activeLoops,
        [loopId]: { loopId, currentIteration: iteration, totalIterations: total }
      }
    })),

  exitLoop: (loopId) =>
    set((state) => {
      const newLoops = { ...state.activeLoops };
      delete newLoops[loopId];
      return { activeLoops: newLoops };
    }),

  resetMemory: () => set({ globalVariables: {}, callStack: [], activeLoops: {} })
});
