import React, { useRef, useEffect } from 'react';
import './BackgroundEffects.css';

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(16,185,129,${alpha})`;
  const h = hex.replace('#', '').trim();
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;

    let w = window.innerWidth;
    let h = window.innerHeight;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    // Read CSS variables for colors (fallbacks provided)
    const rootStyles = getComputedStyle(document.documentElement);
    const primary = rootStyles.getPropertyValue('--primary').trim() || '#10B981';
    const textColor = rootStyles.getPropertyValue('--text-primary').trim() || '#0B1220';

    const nodeColor = hexToRgba(primary, 0.9);
    const lineColor = hexToRgba(primary, 0.16);
    const waveColor = hexToRgba(primary, 0.06);

    // Create nodes for the network
    const area = w * h;
    const baseCount = Math.min(70, Math.max(8, Math.floor(area / 200000)));
    const nodes = [];
    for (let i = 0; i < baseCount; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 0.6 + Math.random() * 1.0,
      });
    }

    // Create stars for galaxy effect
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    // Technology cards
    const techCards = [];
    for (let i = 0; i < 5; i++) {
      techCards.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 20,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    let rafId;
    let t = 0;

    function drawWaves() {
      const waveCount = 6; // Increased from 3 to 6
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const amp = 6 + i * 5;
        const freq = 0.0025 + i * 0.0006;
        const phase = t * (0.35 + i * 0.08) + i * 0.4;
        const yBase = h * (0.05 + i * 0.12); // More wave lines spread across height

        for (let x = 0; x <= w; x += 12) {
          const y = yBase + Math.sin(x * freq + phase) * amp + Math.sin(x * freq * 0.45 + phase * 0.6) * (amp * 0.45);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.lineWidth = 0.9 + i * 0.6;
        ctx.strokeStyle = hexToRgba(primary, 0.02 + i * 0.015);
        ctx.stroke();
      }
    }

    function drawGalaxy() {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const twinkle = Math.sin(t * 2 + star.twinkle) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      }
    }

    function drawTechCards() {
      for (let i = 0; i < techCards.length; i++) {
        const card = techCards[i];
        ctx.save();
        ctx.translate(card.x, card.y);
        ctx.rotate(card.rotation);
        ctx.fillStyle = hexToRgba(primary, 0.1);
        ctx.fillRect(-card.size / 2, -card.size / 2, card.size, card.size);
        ctx.strokeStyle = hexToRgba(primary, 0.3);
        ctx.lineWidth = 1;
        ctx.strokeRect(-card.size / 2, -card.size / 2, card.size, card.size);
        ctx.restore();
      }
    }

    function draw3DDepth() {
      const depthLayers = 3;
      for (let layer = 0; layer < depthLayers; layer++) {
        const alpha = 0.05 + layer * 0.03;
        const scale = 1 + layer * 0.1;
        ctx.save();
        ctx.translate(w / 2, h / 2);
        ctx.scale(scale, scale);
        ctx.translate(-w / 2, -h / 2);
        ctx.fillStyle = hexToRgba(primary, alpha);
        ctx.fillRect(0, 0, w, h);
        ctx.restore();
      }
    }

    function draw() {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);

      // 3D depth layers
      draw3DDepth();

      // galaxy stars
      drawGalaxy();

      // subtle vignette layer for depth
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      if (document.documentElement.classList.contains('dark')) {
        grad.addColorStop(0, 'rgba(2,6,23,0.12)');
        grad.addColorStop(1, 'rgba(2,6,23,0.24)');
      } else {
        grad.addColorStop(0, 'rgba(255,255,255,0.00)');
        grad.addColorStop(1, 'rgba(255,255,255,0.00)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // soft translucent waves
      drawWaves();

      // technology cards
      drawTechCards();

      // network connections
      const maxDist = Math.min(w, h) / 7;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = hexToRgba(primary, alpha);
            ctx.lineWidth = 0.45;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.fillStyle = hexToRgba(primary, 0.38);
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // update positions
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx + Math.sin(t + i) * 0.08;
        n.y += n.vy + Math.cos(t * 0.7 + i) * 0.08;
        if (n.x < -40) n.x = w + 40;
        if (n.x > w + 40) n.x = -40;
        if (n.y < -40) n.y = h + 40;
        if (n.y > h + 40) n.y = -40;
      }

      // update tech cards
      for (let i = 0; i < techCards.length; i++) {
        const card = techCards[i];
        card.x += card.vx;
        card.y += card.vy;
        card.rotation += card.rotSpeed;
        if (card.x < -50) card.x = w + 50;
        if (card.x > w + 50) card.x = -50;
        if (card.y < -50) card.y = h + 50;
        if (card.y > h + 50) card.y = -50;
      }

      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    // restart drawing
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="background-effects" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
