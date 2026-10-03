"use client";

import { useEffect, useRef } from "react";

export default function OrbLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cleanup = () => {};
    let disposed = false;

    void import("three").then((THREE) => {
      if (disposed) return;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(40, 40, false);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 10);
      camera.position.z = 3.1;
      const group = new THREE.Group();
      scene.add(group);

      const geometry = new THREE.IcosahedronGeometry(1, 2);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xef233c, wireframe: true, transparent: true, opacity: 0.72 }));
      const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.035, transparent: true, opacity: 0.9 }));
      group.add(mesh, points);

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let visible = true;
      let frame = 0;
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.01 });
      observer.observe(canvas);

      const render = () => {
        if (!visible || document.hidden) return;
        if (!reduceMotion) {
          group.rotation.y += 0.009;
          group.rotation.x += 0.004;
        }
        renderer.render(scene, camera);
      };
      const loop = () => { render(); frame = window.requestAnimationFrame(loop); };
      loop();

      cleanup = () => {
        observer.disconnect();
        window.cancelAnimationFrame(frame);
        geometry.dispose();
        mesh.material.dispose();
        points.material.dispose();
        renderer.dispose();
      };
    });

    return () => { disposed = true; cleanup(); };
  }, []);

  return (
    <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-red-500/40 bg-black shadow-[0_0_24px_rgba(239,35,60,.28)]" aria-hidden="true">
      <span className="absolute inset-1 rounded-full bg-red-600/10 blur-md" />
      <canvas ref={canvasRef} width={40} height={40} className="relative h-10 w-10" />
    </span>
  );
}
