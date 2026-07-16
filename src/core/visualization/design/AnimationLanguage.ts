import { animate } from 'motion';
import type { Container } from 'pixi.js';

/**
 * Global Animation Language.
 * Ensures consistent educational motion across all lessons.
 * Wraps Framer Motion's `animate` function to tween PixiJS properties.
 */
export class AnimationLanguage {
  
  static async fadeIn(target: Container, duration: number = 0.3): Promise<void> {
    target.alpha = 0;
    await animate(target, { alpha: 1 }, { duration, ease: 'easeOut' });
  }

  static async fadeOut(target: Container, duration: number = 0.3): Promise<void> {
    await animate(target, { alpha: 0 }, { duration, ease: 'easeIn' });
  }

  static async scaleIn(target: Container, duration: number = 0.4): Promise<void> {
    target.scale.set(0.8);
    // Animate scale x and y together using keyframes
    await animate(
      target.scale, 
      { x: [0.8, 1.0], y: [0.8, 1.0] }, 
      { duration, ease: [0.34, 1.56, 0.64, 1] } // Custom spring-like easing
    );
  }

  static async pulse(target: Container): Promise<void> {
    const originalX = target.scale.x;
    const originalY = target.scale.y;
    const pulseX = originalX * 1.1;
    const pulseY = originalY * 1.1;
    
    await animate(
      target.scale, 
      { x: [originalX, pulseX, originalX], y: [originalY, pulseY, originalY] }, 
      { duration: 0.3, ease: 'easeInOut' }
    );
  }

  static async softBounce(target: Container): Promise<void> {
    const originalY = target.y;
    await animate(
      target, 
      { y: [originalY, originalY - 10, originalY] }, 
      { duration: 0.4, ease: 'easeOut' }
    );
  }

  /**
   * Future: `morphNumber` and `typewriter` will be implemented on Text objects specifically.
   */
}
