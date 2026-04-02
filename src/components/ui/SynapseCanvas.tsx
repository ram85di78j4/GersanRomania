'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  hueSpeed: number;
  pulsePhase: number;
  brightness: number;
}

interface Pulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
  hue: number;
}

const NODE_COUNT = 72;
const CONNECTION_DIST = 180;
const MAX_CONNECTIONS_PER_NODE = 4;

export default function SynapseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;

    function resize() {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Initialise nodes ──────────────────────────────────────────
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      radius: Math.random() * 2.2 + 1.2,
      hue: Math.random() * 360,
      hueSpeed: (Math.random() - 0.5) * 0.4,
      pulsePhase: Math.random() * Math.PI * 2,
      brightness: Math.random() * 0.5 + 0.5,
    }));

    // ── Active pulses travelling along edges ───────────────────────
    const pulses: Pulse[] = [];

    function spawnPulse() {
      const from = Math.floor(Math.random() * NODE_COUNT);
      // find closest neighbours
      const sorted = nodes
        .map((n, i) => ({ i, d: Math.hypot(n.x - nodes[from].x, n.y - nodes[from].y) }))
        .filter(e => e.i !== from && e.d < CONNECTION_DIST)
        .sort((a, b) => a.d - b.d)
        .slice(0, MAX_CONNECTIONS_PER_NODE);
      if (!sorted.length) return;
      const to = sorted[Math.floor(Math.random() * sorted.length)].i;
      pulses.push({
        from,
        to,
        progress: 0,
        speed: Math.random() * 0.006 + 0.004,
        hue: nodes[from].hue,
      });
    }

    // seed some pulses
    for (let i = 0; i < 18; i++) spawnPulse();

    let lastSpawn = 0;

    // ── Main draw loop ─────────────────────────────────────────────
    function draw(ts: number) {
      if (!ctx) return;

      ctx.clearRect(0, 0, W, H);

      // Spawn new pulses periodically
      if (ts - lastSpawn > 120) {
        spawnPulse();
        lastSpawn = ts;
      }

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.hue = (n.hue + n.hueSpeed + 360) % 360;
        n.pulsePhase += 0.018;
      }

      // Draw edges between close nodes
      for (let i = 0; i < NODE_COUNT; i++) {
        let connCount = 0;
        for (let j = i + 1; j < NODE_COUNT; j++) {
          if (connCount >= MAX_CONNECTIONS_PER_NODE) break;
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            connCount++;
            const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
            const hue = (nodes[i].hue + nodes[j].hue) / 2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `hsla(${hue},90%,65%,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw pulse signals along edges
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }
        const nf = nodes[pulse.from];
        const nt = nodes[pulse.to];
        const px = nf.x + (nt.x - nf.x) * pulse.progress;
        const py = nf.y + (nt.y - nf.y) * pulse.progress;
        pulse.hue = (pulse.hue + 0.8) % 360;

        // Glow halo
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 12);
        grad.addColorStop(0, `hsla(${pulse.hue},100%,75%,0.7)`);
        grad.addColorStop(0.4, `hsla(${pulse.hue},100%,65%,0.25)`);
        grad.addColorStop(1, `hsla(${pulse.hue},100%,55%,0)`);
        ctx.beginPath();
        ctx.arc(px, py, 12, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${pulse.hue},100%,90%,0.95)`;
        ctx.fill();
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = 0.65 + 0.35 * Math.sin(n.pulsePhase);
        const alpha = n.brightness * pulse;

        // outer glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 7);
        grad.addColorStop(0, `hsla(${n.hue},100%,70%,${alpha * 0.55})`);
        grad.addColorStop(1, `hsla(${n.hue},100%,50%,0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 7, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${n.hue},100%,80%,${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
