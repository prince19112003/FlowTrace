import type { StateCreator } from 'zustand';
import type { EditableParameter, ParameterValue } from '../registry/types';

export interface ParameterState {
  parameters: Record<string, EditableParameter>;
  history: Record<string, EditableParameter>[];
  
  // Actions
  initializeParameters: (params: Record<string, EditableParameter>) => void;
  updateParameterValue: (paramId: string, value: ParameterValue) => void;
  undoParameterChange: () => void;
  resetParameter: (paramId: string) => void;
  resetAllParameters: () => void;
}

export const createParameterSlice: StateCreator<ParameterState> = (set) => ({
  parameters: {},
  history: [],

  initializeParameters: (params) => set({ parameters: { ...params }, history: [] }),
  
  updateParameterValue: (paramId, value) => 
    set((state) => {
      const param = state.parameters[paramId];
      if (!param) return state;
      
      // Basic validation hook (can be extended by ParameterValidator)
      let newValue = value;
      if (param.type === 'number' && param.range && typeof value === 'number') {
        newValue = Math.max(param.range.min, Math.min(param.range.max, value));
      }

      const newParams = {
        ...state.parameters,
        [paramId]: { ...param, value: newValue }
      };
      
      // Dispatch parameter change event (simplified as state update hook)
      // Save to history for undo support
      return {
        parameters: newParams,
        history: [...state.history, state.parameters]
      };
    }),
    
  undoParameterChange: () =>
    set((state) => {
      if (state.history.length === 0) return state;
      const newHistory = [...state.history];
      const previousParams = newHistory.pop();
      return {
        parameters: previousParams || state.parameters,
        history: newHistory
      };
    }),
    
  resetParameter: (paramId) =>  
    set((state) => {
      const param = state.parameters[paramId];
      if (!param) return state;
      return {
        parameters: {
          ...state.parameters,
          [paramId]: { ...param, value: param.defaultValue }
        }
      };
    }),
    
  resetAllParameters: () => 
    set((state) => {
      const resetParams: Record<string, EditableParameter> = {};
      Object.keys(state.parameters).forEach(key => {
        resetParams[key] = { ...state.parameters[key], value: state.parameters[key].defaultValue };
      });
      return { parameters: resetParams };
    })
});
