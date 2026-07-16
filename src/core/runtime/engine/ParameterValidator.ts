import type { EditableParameter } from '../registry/types';

/**
 * Validates parameter inputs against their predefined ranges and types.
 */
export class ParameterValidator {
  
  static validate(param: EditableParameter, input: unknown): { isValid: boolean; normalizedValue: unknown } {
    if (param.type === 'number') {
      const num = Number(input);
      if (isNaN(num)) return { isValid: false, normalizedValue: param.defaultValue };
      
      let val = num;
      if (param.range) {
        val = Math.max(param.range.min, Math.min(param.range.max, val));
      }
      return { isValid: true, normalizedValue: val };
    }
    
    if (param.type === 'boolean') {
      return { isValid: true, normalizedValue: Boolean(input) };
    }
    
    if (param.type === 'string') {
      return { isValid: true, normalizedValue: String(input) };
    }

    if (param.type === 'list') {
      if (Array.isArray(input)) return { isValid: true, normalizedValue: input };
      return { isValid: false, normalizedValue: param.defaultValue };
    }

    return { isValid: false, normalizedValue: param.defaultValue };
  }
}
