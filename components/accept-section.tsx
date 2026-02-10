"use client";

import { useState, useCallback } from "react";
import { Heart } from "lucide-react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
}

const CONFETTI_COLORS = [
  "hsl(347, 100%, 55%)",
  "hsl(330, 60%, 65%)",
  "hsl(43, 100%, 50%)",
  "hsl(340, 100%, 76%)",
  "hsl(0, 100%, 80%)",
];

export function AcceptSection() {
  const [accepted, setAccepted] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const handleAccept = useCallback(() => {
    setAccepted(true);
    const pieces: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: Math.random() * 10 + 6,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 0.8,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4000);
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Confetti */}
      {confetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute top-0 animate-confetti-fall"
              style={{
                left: `${piece.left}%`,
                animationDuration: `${piece.duration}s`,
                animationDelay: `${piece.delay}s`,
              }}
            >
              <Heart
                style={{
                  width: piece.size,
                  height: piece.size,
                  color: piece.color,
                  fill: piece.color,
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto text-center">
        {!accepted ? (
          <div className="flex flex-col items-center gap-8">
            <div className="animate-pulse-heart">
              <Heart className="w-12 h-12 text-primary fill-primary" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance">
              Entonces... aceptas esta cita?
            </h2>

            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-md">
              Solo tenes que presionar el boton y prometo hacerte la mujer mas
              feliz del mundo.
            </p>

            <button
              type="button"
              onClick={handleAccept}
              className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-sans text-xl font-semibold shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95"
            >
              <Heart className="w-6 h-6 fill-current group-hover:animate-pulse-heart" />
              Acepto esta cita!
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 animate-fade-in-up">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-heart" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance">
              Sabia que ibas a decir que si!
            </h2>

            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-md">
              Preparate para una tarde magica, mi amor. Te amo con todo mi corazon.
            </p>

            <div className="mt-4 p-6 rounded-2xl bg-card border border-border/30 shadow-lg">
              <p className="font-serif text-xl text-foreground italic">
                &quot;Nos vemos el 14 de febrero a las 6:00 PM. Ponete bonita...
                aunque siempre lo estas.&quot;
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
