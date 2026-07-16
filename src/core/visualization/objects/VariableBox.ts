import { Container, Graphics, Text, TextStyle } from 'pixi.js';
import { ColorTokens } from '../design/ColorTokens';
import { AnimationLanguage } from '../design/AnimationLanguage';

/**
 * A renderable Variable Box.
 * Automatically handles text placement, background rounded rectangles, and standard animations.
 */
export class VariableBox extends Container {
  private bgGraphics: Graphics;
  private labelText: Text;
  private valueText: Text;
  
  constructor(label: string, initialValue: string) {
    super();

    // Background
    this.bgGraphics = new Graphics();
    this.bgGraphics.roundRect(0, 0, 100, 60, 8);
    this.bgGraphics.fill(ColorTokens.Memory.VariableBox);
    this.bgGraphics.stroke({ width: 2, color: ColorTokens.Background.Grid });
    this.addChild(this.bgGraphics);

    const style = new TextStyle({
      fontFamily: 'monospace',
      fill: ColorTokens.Memory.VariableText,
      fontSize: 14
    });

    // Label (e.g. 'x')
    this.labelText = new Text({ text: label, style });
    this.labelText.position.set(10, 8);
    this.addChild(this.labelText);

    // Value (e.g. '42')
    this.valueText = new Text({ 
      text: initialValue, 
      style: { ...style, fontSize: 24, fontWeight: 'bold' } 
    });
    this.valueText.position.set(10, 30);
    this.addChild(this.valueText);
  }

  public async setValue(newValue: string) {
    this.valueText.text = newValue;
    // Play semantic animation defined globally
    await AnimationLanguage.pulse(this);
  }
}
