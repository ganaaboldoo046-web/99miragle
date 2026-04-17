import React, { useEffect, useRef } from 'react';

const AnimatedCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const W = 700;
    const H = 420;
    canvas.width = W; 
    canvas.height = H;

    let t = 0;
    let animationFrameId;

    const noise = (x, y, t) => {
      return Math.sin(x * 0.015 + t * 0.7) * Math.cos(y * 0.012 + t * 0.5) 
           + Math.sin(x * 0.025 - t * 0.4 + y * 0.008) * 0.6
           + Math.cos(x * 0.008 + y * 0.02 + t * 0.9) * 0.4;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      
      const imgData = ctx.createImageData(W, H);
      const data = imgData.data;
      
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const n = noise(x, y, t);
          const n2 = noise(x * 1.3 + 50, y * 0.8 + 100, t * 0.7);
          const n3 = noise(x * 0.6 - 80, y * 1.5 + 30, t * 1.2);
          
          const combined = (n * 0.5 + n2 * 0.3 + n3 * 0.2);
          const normalized = (combined + 1) / 2;
          
          const bright = 0.72 + normalized * 0.28;
          
          const r = Math.round(bright * 255);
          const g = Math.round(bright * 255);
          const b = Math.round(bright * 255);
          
          const idx = (y * W + x) * 4;
          data[idx]     = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = 255;
        }
      }
      
      ctx.putImageData(imgData, 0, 0);
      
      const layers = [
        { oy: 0.3, amp: 40, spd: 0.8, phase: 0,   alpha: 0.06 },
        { oy: 0.5, amp: 35, spd: 0.6, phase: 1.2, alpha: 0.05 },
        { oy: 0.65, amp: 45, spd: 0.9, phase: 2.5, alpha: 0.07 },
        { oy: 0.8, amp: 30, spd: 0.7, phase: 0.8, alpha: 0.04 },
      ];
      
      layers.forEach(l => {
        ctx.beginPath();
        ctx.moveTo(0, l.oy * H);
        for (let x = 0; x <= W; x += 3) {
          const waveY = l.oy * H 
            + Math.sin(x * 0.012 + t * l.spd + l.phase) * l.amp
            + Math.sin(x * 0.008 - t * l.spd * 0.7 + l.phase) * l.amp * 0.5;
          ctx.lineTo(x, waveY);
        }
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
        ctx.fillStyle = `rgba(255,255,255,${l.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < 5; i++) {
        const px = (i / 5) * W + Math.sin(t * 0.3 + i) * 60;
        const py = H * 0.1 + Math.sin(t * 0.5 + i * 1.3) * H * 0.15;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 120);
        grad.addColorStop(0, 'rgba(255,255,255,0.25)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath();
        ctx.ellipse(px, py, 120, 60, Math.sin(t * 0.2 + i) * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
      
      t += 0.012;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-x-0 inset-y-8 flex justify-center pointer-events-none overflow-hidden z-0 px-5">
      <canvas 
        ref={canvasRef} 
        style={{ display: 'block', width: '100%', height: '100%', borderRadius: '2.5rem', opacity: 0.8 }} 
      />
    </div>
  );
};

export default AnimatedCanvas;
