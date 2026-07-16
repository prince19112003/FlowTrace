/**
 * Semantic Color System for the Visualization Engine.
 * Never hardcode raw hex values in PixiJS objects. Always use these tokens.
 */
export const ColorTokens = {
  // Backgrounds
  Background: {
    Primary: 0x0f172a, // slate-900
    Secondary: 0x1e293b, // slate-800
    Grid: 0x334155, // slate-700
  },

  // Execution Flow
  Execution: {
    CurrentStep: 0x3b82f6, // blue-500
    NextStep: 0x64748b, // slate-500
    CompletedStep: 0x22c55e, // green-500
  },

  // State Types
  Memory: {
    VariableBox: 0x1e293b, // slate-800
    VariableText: 0xf8fafc, // slate-50
    ArrayCell: 0x0f172a, // slate-900
    FunctionCard: 0x3b82f6, // blue-500
    OutputText: 0xa8a29e, // stone-400
  },

  // Logic & Conditions
  Logic: {
    ConditionTrue: 0x22c55e, // green-500
    ConditionFalse: 0xf97316, // orange-500
    LoopBadge: 0xa855f7, // purple-500
  },

  // Highlights & Feedback
  Feedback: {
    Highlight: 0x3b82f6, // blue-500
    Warning: 0xeab308, // yellow-500
    Error: 0xef4444, // red-500
    Glow: 0x60a5fa, // blue-400
  }
} as const;
