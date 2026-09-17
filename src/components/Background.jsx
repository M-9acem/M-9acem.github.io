import React, { useEffect, useRef } from 'react';
export default function Background() {
  const canvasRef = useRef(null); const glowRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current, ctx = canvas.getContext('2d'); let stars = [], frame;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      stars = Array.from({length: Math.min(120, Math.floor(innerWidth/10))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.2+.15,s:Math.random()*.16+.03}));
    };
    const draw = () => { ctx.clearRect(0,0,innerWidth,innerHeight); ctx.fillStyle='rgba(255,255,255,.75)'; stars.forEach(s=>{s.y+=s.s;if(s.y>innerHeight)s.y=0;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()}); frame=requestAnimationFrame(draw); };
    const move = e => { if(glowRef.current){glowRef.current.style.left=`${e.clientX}px`;glowRef.current.style.top=`${e.clientY}px`;} };
    addEventListener('resize', resize); addEventListener('pointermove', move); resize(); draw();
    return () => { removeEventListener('resize',resize); removeEventListener('pointermove',move); cancelAnimationFrame(frame); };
  }, []);
  return <><canvas ref={canvasRef} id="stars"/><div ref={glowRef} className="cursor-glow" /></>;
}
