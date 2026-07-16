import type { ProgramMetadata } from '../registry/types';

/**
 * Handles checking if a specific line is a valid breakpoint, and tracking user-defined breakpoints.
 */
export class BreakpointManager {
  private allowedBreakpoints: Set<number> = new Set();
  private userBreakpoints: Set<number> = new Set();

  public loadProgram(program: ProgramMetadata) {
    this.allowedBreakpoints = new Set(program.allowedBreakpoints || []);
    this.userBreakpoints.clear();
  }

  public toggleBreakpoint(lineNum: number) {
    if (!this.allowedBreakpoints.has(lineNum)) {
      return false; // Cannot set breakpoint here
    }

    if (this.userBreakpoints.has(lineNum)) {
      this.userBreakpoints.delete(lineNum);
    } else {
      this.userBreakpoints.add(lineNum);
    }
    return true;
  }

  public isBreakpoint(lineNum: number): boolean {
    return this.userBreakpoints.has(lineNum);
  }

  public clearAll() {
    this.userBreakpoints.clear();
  }
}

export const breakpointManager = new BreakpointManager();
