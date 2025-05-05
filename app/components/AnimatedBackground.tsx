'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css'; // Import styles

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      const offsetX = Math.sin(time * 0.002 + mouseX * 0.003) * 100 + (mouseX - centerX) * 0.05;
      const offsetY = Math.cos(time * 0.003 + mouseY * 0.003) * 100 + (mouseY - centerY) * 0.05;

      const flameGradient = ctx.createLinearGradient(
        centerX - 400 + offsetX, centerY - 400 + offsetY,
        centerX + 400 + offsetX, centerY + 400 + offsetY
      );

      flameGradient.addColorStop(0, 'rgba(0, 0, 128, 0.0)');
      flameGradient.addColorStop(0.3, 'rgba(75, 0, 130, 0.3)');
      flameGradient.addColorStop(0.5, 'rgba(106, 6, 124, 0.547)');
      flameGradient.addColorStop(0.7, 'rgba(75, 0, 130, 0.3)');
      flameGradient.addColorStop(1, 'rgba(0, 0, 128, 0.0)');

      ctx.fillStyle = flameGradient;
      ctx.fillRect(0, 0, width, height);

      time += 16;
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles['animated-canvas']} // ✅ Correct usage
    />
  );
}
