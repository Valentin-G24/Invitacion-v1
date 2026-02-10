"use client";

import { CalendarHeart, Clock, MapPin, Sparkles } from "lucide-react";

export function ProposalSection() {
  return (
    <section
      id="propuesta"
      className="relative py-20 md:py-32 px-4"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="font-sans text-sm uppercase tracking-widest text-primary font-medium">
            La Propuesta
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 text-balance">
            Una tarde para los dos
          </h2>
        </div>

        {/* Love letter card */}
        <div className="relative bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
          {/* Gold shimmer top accent */}
          <div
            className="h-1.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, hsl(347, 100%, 55%), hsl(43, 100%, 50%), hsl(347, 100%, 55%))",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          />

          <div className="p-8 md:p-12">
            {/* Letter opening */}
            <p className="font-serif text-xl md:text-2xl text-foreground italic mb-8 text-center leading-relaxed">
              &quot;No necesito nada más que estar con vos, y hoy quiero devolverte un poquito de todo lo que me das: una tarde para reírnos, abrazarnos y crear recuerdos que nos queden para siempre.&quot;
            </p>

            <div className="w-16 h-px bg-primary/30 mx-auto mb-8" />

            {/* Date details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50">
                <CalendarHeart className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="font-serif font-bold text-foreground text-lg">
                    14 de Febrero
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Dia de San Valentin
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50">
                <Clock className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="font-serif font-bold text-foreground text-lg">
                    6:00 PM
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Te paso a buscar
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50">
                <MapPin className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="font-serif font-bold text-foreground text-lg">
                    Sorpresa
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    ☕🥑🍳🍞
                  </p>
                </div>
              </div>
            </div>

            {/* Extra details */}
            <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border/30">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="font-serif font-bold text-foreground">
                  Lo que te espera
                </span>
              </div>
              <ul className="font-sans text-muted-foreground space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#10084;</span>
                  Una merienda romantica
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#10084;</span>
                  Un paseo de la mano
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#10084;</span>
                  Una sorpresa que te hara sonreir
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
