import type { StateCreator } from 'zustand';

export interface OutputState {
  consoleOutput: string[];
  
  // Actions
  appendOutput: (line: string) => void;
  clearOutput: () => void;
}

export const createOutputSlice: StateCreator<OutputState> = (set) => ({
  consoleOutput: [],

  appendOutput: (line) => 
    set((state) => ({
      consoleOutput: [...state.consoleOutput, line]
    })),

  clearOutput: () => set({ consoleOutput: [] })
});
