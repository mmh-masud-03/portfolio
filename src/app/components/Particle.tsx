// components/StarryNight.tsx

import React, { useRef, useEffect } from "react";

const StarryNight: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const x = 0; // Replace 0 with the desired value for 'x'
    const y = 0; // Replace 0 with the desired value for 'y'
    const radius = 10; // Replace 10 with the desired value for 'radius'

    // Set canvas size to match viewport
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Generate random stars
    if (ctx) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default StarryNight;
