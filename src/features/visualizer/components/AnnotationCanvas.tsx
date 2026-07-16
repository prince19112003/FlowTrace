import React, { useRef, useEffect, useCallback } from 'react';

interface Point { x: number; y: number }
export interface Stroke { points: Point[]; color: string }

interface AnnotationCanvasProps {
  isActive: boolean;
  color: string;
  strokesRef: React.MutableRefObject<Stroke[]>;
}

export const AnnotationCanvas: React.FC<AnnotationCanvasProps> = ({ isActive, color, strokesRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const currentStroke = useRef<Point[]>([]);

  const getCtx = () => canvasRef.current?.getContext('2d') ?? null;

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = getCtx();
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 4;
    
    strokesRef.current.forEach(stroke => {
      if (stroke.points.length < 2) return;
      ctx.strokeStyle = stroke.color;
      ctx.shadowColor = stroke.color;
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      stroke.points.slice(1).forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.stroke();
    });
  }, [strokesRef]);

  const getPos = (e: React.PointerEvent): Point => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!isActive) return;
    isDrawing.current = true;
    currentStroke.current = [getPos(e)];
    canvasRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isActive || !isDrawing.current) return;
    const pt = getPos(e);
    currentStroke.current.push(pt);

    // Draw incremental
    const ctx = getCtx();
    if (!ctx || currentStroke.current.length < 2) return;
    const pts = currentStroke.current;
    
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 4;
    
    ctx.beginPath();
    ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
  };

  const onPointerUp = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    if (currentStroke.current.length > 0) {
      strokesRef.current.push({ points: [...currentStroke.current], color });
    }
    currentStroke.current = [];
  };

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      redraw();
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [redraw]);

  // Redraw when strokes change externally (undo/redo)
  useEffect(() => {
    if (!isDrawing.current) redraw();
  }, [strokesRef.current.length, redraw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        cursor: isActive ? 'crosshair' : 'default',
        pointerEvents: isActive ? 'all' : 'none',
        touchAction: 'none',
        zIndex: 30,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    />
  );
};
