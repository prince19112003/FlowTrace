import { Container } from 'pixi.js';

export enum LayerType {
  BACKGROUND = 0,
  GRID = 1,
  MEMORY_OBJECTS = 2,
  VARIABLE_OBJECTS = 3,
  ARRAY_OBJECTS = 4,
  FUNCTION_OBJECTS = 5,
  OUTPUT_OBJECTS = 6,
  HIGHLIGHTS = 7,
  PARTICLES = 8,
  OVERLAY = 9,
  DEBUG = 10
}

export class LayerManager {
  private root: Container;
  private layers: Map<LayerType, Container> = new Map();

  constructor() {
    this.root = new Container();
    this.root.label = "RootContainer";
    this.root.sortableChildren = true;
    
    this.initializeLayers();
  }

  private initializeLayers() {
    // Create a strict container for every layer enum to enforce z-index
    const layerTypes = Object.values(LayerType).filter(val => typeof val === 'number') as LayerType[];
    
    layerTypes.forEach(type => {
      const layer = new Container();
      layer.label = `Layer_${LayerType[type]}`;
      layer.zIndex = type; // Enforce Pixi sorting
      this.root.addChild(layer);
      this.layers.set(type, layer);
    });
  }

  public getLayer(type: LayerType): Container {
    const layer = this.layers.get(type);
    if (!layer) throw new Error(`Layer ${type} does not exist`);
    return layer;
  }

  public getRootContainer(): Container {
    return this.root;
  }

  public clearAll() {
    this.layers.forEach(layer => layer.removeChildren());
  }
}
