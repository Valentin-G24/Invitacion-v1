"use client";

import { Heart, Smile, Star, Sun } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Tu sonrisa",
    description:
      "No es solo linda, es mi lugar seguro. Me calma, me levanta el ánimo y me recuerda que, pase lo que pase, todo va a estar bien mientras estés ahí.",
  },
  {
    icon: Star,
    title: "Tu fuerza",
    description:
      "Admiro cómo seguís adelante incluso cuando no es fácil.Tu manera de enfrentar la vida me empuja a no rendirme y a creer más en mí.",
  },
  {
    icon: Smile,
    title: "Tu alegria",
    description:
      "Un momento cualquiera con vos siempre termina siendo uno de mis favoritos.",
  },
  {
    icon: Sun,
    title: "Tu amor",
    description:
      "Porque amar como vos me amas no es común. Me hacés sentir elegido, acompañado y profundamente querido, todos los días.",
  },
];

export function ReasonsSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="font-sans text-sm uppercase tracking-widest text-primary font-medium">
            Porque Eres Especial
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 text-balance">
            Razones por las que te amo
          </h2>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-card rounded-2xl p-8 shadow-md border border-border/30 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
