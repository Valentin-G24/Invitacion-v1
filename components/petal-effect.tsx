"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export function PetalEffect() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 15 + 8,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 12,
      rotation: Math.random() * 360,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            top: "-20px",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: petal.size,
              height: petal.size,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          >
            <ellipse
              cx="12"
              cy="12"
              rx="6"
              ry="10"
              fill="hsl(347, 100%, 55%)"
              opacity="0.25"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
