"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-roses.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-20 text-center max-w-3xl mx-auto">
        {/* Animated heart */}
        <div className="animate-pulse-heart">
          <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary fill-primary drop-shadow-lg" />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
          Una invitacion especial para vos, mi amor
        </h1>

        <div className="w-24 h-0.5 bg-primary/40 rounded-full" />

        <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
          Mi amorcito, este 14 de febrero quiero celebrar nuestro amor.
        </p>

        <a
          href="#propuesta"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <Heart className="w-5 h-5 fill-current" />
          Descubri la sorpresa
        </a>
      </div>
    </section>
  );
}
