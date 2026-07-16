import { create } from 'zustand';

export interface OutputState {
  history: string[]; // Completed lines
  liveBuffer: string; // The current line being actively typed out
  
  // Actions
  appendCharacter: (char: string) => void;
  finalizeLine: () => void;
  clearOutput: () => void;
}

export const useOutputStore = create<OutputState>((set) => ({
  history: [],
  liveBuffer: '',
  
  appendCharacter: (char) => set((state) => {
    if (char === '\n') {
      return { 
        history: [...state.history, state.liveBuffer],
        liveBuffer: ''
      };
    }
    return { liveBuffer: state.liveBuffer + char };
  }),
  
  finalizeLine: () => set((state) => ({
    history: state.liveBuffer ? [...state.history, state.liveBuffer] : state.history,
    liveBuffer: ''
  })),
  
  clearOutput: () => set({ history: [], liveBuffer: '' })
}));
