import type { StateCreator } from 'zustand';

export type ExecutionStatus = 'IDLE' | 'RUNNING' | 'PAUSED' | 'FINISHED' | 'ERROR';

export interface ExecutionState {
  status: ExecutionStatus;
  currentStep: number;
  currentLine: number | null;
  nextLine: number | null;
  errorMessage: string | null;
  
  totalSteps: number;
  progress: number;
  isPlaying: boolean;
  playbackSpeed: number;
  
  // Actions
  setStatus: (status: ExecutionStatus) => void;
  setLines: (current: number | null, next: number | null) => void;
  setTotalSteps: (total: number) => void;
  stepForward: () => void;
  jumpToStep: (step: number) => void;
  jumpToLine: (line: number) => void;
  resetExecution: () => void;
  restart: () => void;
  stop: () => void;
  setPlaybackSpeed: (speed: number) => void;
  togglePlayback: () => void;
}

export const createExecutionSlice: StateCreator<ExecutionState> = (set) => ({
  status: 'IDLE',
  currentStep: 0,
  currentLine: null,
  nextLine: null,
  errorMessage: null,

  totalSteps: 0,
  progress: 0,
  isPlaying: false,
  playbackSpeed: 1,

  setStatus: (status) => set((state) => ({ 
    status,
    progress: state.totalSteps > 0 ? (state.currentStep / state.totalSteps) * 100 : 0
  })),
  setLines: (current, next) => set({ currentLine: current, nextLine: next }),
  setTotalSteps: (total) => set({ totalSteps: total }),
  
  stepForward: () => set((state) => {
    const nextStep = state.currentStep + 1;
    const progress = state.totalSteps > 0 ? (nextStep / state.totalSteps) * 100 : 0;
    const status = nextStep >= state.totalSteps ? 'FINISHED' : state.status;
    return { currentStep: nextStep, progress, status };
  }),
  
  jumpToStep: (step) => set((state) => ({
    currentStep: step,
    progress: state.totalSteps > 0 ? (step / state.totalSteps) * 100 : 0
  })),
  
  jumpToLine: (line) => set({ currentLine: line }),
  
  stop: () => set({ status: 'IDLE', currentStep: 0, progress: 0 }),
  
  restart: () => set({ status: 'RUNNING', currentStep: 0, progress: 0 }),
  
  resetExecution: () => set({ 
    status: 'IDLE', 
    currentStep: 0, 
    totalSteps: 0,
    progress: 0,
    currentLine: null, 
    nextLine: null, 
    errorMessage: null,
    isPlaying: false
  }),
  
  setPlaybackSpeed: (speed) => set({ playbackSpeed: speed }),
  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),
});
