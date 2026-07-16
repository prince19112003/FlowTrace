import { create } from 'zustand';

// Sub-stores for feature modules
interface GlobalState {
  isInitialized: boolean;
  setInitialized: (value: boolean) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  isInitialized: false,
  setInitialized: (value) => set({ isInitialized: value }),
}));

// We intentionally do NOT combine all feature stores here.
// Feature stores should live in their respective feature folders (e.g., `src/features/timeline/useTimelineStore.ts`).
// This ensures loose coupling and avoids a monolithic state object.
