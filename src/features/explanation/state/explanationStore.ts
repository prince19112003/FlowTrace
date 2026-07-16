import { create } from 'zustand';

export type LanguageCode = 'en' | 'hi';

export interface ExplanationState {
  currentLanguage: LanguageCode;
  currentTextId: string | null;
  translations: { en: string; hi: string } | null;
  
  // Actions
  setLanguage: (lang: LanguageCode) => void;
  setExplanation: (id: string, translations: { en: string; hi: string }) => void;
  clearExplanation: () => void;
}

export const useExplanationStore = create<ExplanationState>((set) => ({
  currentLanguage: 'en',
  currentTextId: null,
  translations: null,
  
  setLanguage: (lang) => set({ currentLanguage: lang }),
  
  setExplanation: (id, translations) => set({ 
    currentTextId: id, 
    translations 
  }),
  
  clearExplanation: () => set({ 
    currentTextId: null, 
    translations: null 
  }),
}));
