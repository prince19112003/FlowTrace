import { Application } from 'pixi.js';

export class ResponsiveCanvasManager {
  private app: Application;
  private resizeObserver: ResizeObserver | null = null;

  constructor(app: Application) {
    this.app = app;
  }

  public attachListeners(containerElement: HTMLElement) {
    // Automatically scale the canvas to fill the parent without stretching
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === containerElement) {
          const { width, height } = entry.contentRect;
          this.app.renderer.resize(width, height);
          
          // Future: Broadcast a 'CANVAS_RESIZED' event to trigger Scene layouts
        }
      }
    });

    this.resizeObserver.observe(containerElement);
  }

  public detachListeners() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
}
