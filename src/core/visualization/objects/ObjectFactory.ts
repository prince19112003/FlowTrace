import { VariableBox } from './VariableBox';

export enum ObjectType {
  VARIABLE_BOX,
  MEMORY_CELL,
  POINTER
}

/**
 * Factory pattern ensuring consistent instantiation of visual objects.
 */
export class ObjectFactory {
  
  static createVariableBox(label: string, initialValue: string): VariableBox {
    return new VariableBox(label, initialValue);
  }

  // Future objects can be added here
}
