import { Application } from 'pixi.js';
import { ColorTokens } from '../design/ColorTokens';
import { ResponsiveCanvasManager } from './ResponsiveCanvasManager';
import { LayerManager } from './LayerManager';

export class PixiAppManager {
  private app: Application;
  private canvasManager: ResponsiveCanvasManager;
  private layerManager: LayerManager;
  private isInitialized = false;

  constructor() {
    this.app = new Application();
    this.layerManager = new LayerManager();
    this.canvasManager = new ResponsiveCanvasManager(this.app);
  }

  public async initialize(containerElement: HTMLElement) {
    if (this.isInitialized) return;

    // WebGPU first, fallback to WebGL
    await this.app.init({
      background: ColorTokens.Background.Primary,
      resizeTo: containerElement,
      resolution: Math.max(window.devicePixelRatio, 2), // Retina support
      autoDensity: true,
      antialias: true
    });

    containerElement.appendChild(this.app.canvas);
    
    // Inject layers into the main stage
    this.app.stage.addChild(this.layerManager.getRootContainer());
    
    this.canvasManager.attachListeners(containerElement);
    this.isInitialized = true;
  }

  public getApp(): Application {
    return this.app;
  }

  public getLayerManager(): LayerManager {
    return this.layerManager;
  }

  public destroy() {
    this.canvasManager.detachListeners();
    this.app.destroy(true, { children: true, texture: true });
    this.isInitialized = false;
  }
}
