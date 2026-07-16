export const AppConfig = {
  version: '0.1.0',
  defaultLanguage: 'Python',
  debugMode: import.meta.env.DEV,
  // Define performance or rendering limits here to prevent hardcoded numbers
  maxRenderObjects: 1000,
  maxTimelineDurationSeconds: 300,
} as const;
