"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

const moments = [
  {
    src: "/images/momento1.jpeg",
    caption: "Nuestras aventuras juntos",
  },
  {
    src: "/images/momento2.jpeg",
    caption: "Playita",
  },
  {
    src: "/images/momento3.jpeg",
    caption: "Rico heladito",
  },
  {
    src: "/images/momento4.jpeg",
    caption: "Rico sushi",
  },
];

export function GallerySection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="font-sans text-sm uppercase tracking-widest text-primary font-medium">
            Nuestros Momentos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 text-balance">
            Recuerdos que nos unen
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {moments.map((moment) => (
            <div
              key={moment.src}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={moment.src || "/placeholder.svg"}
                alt={moment.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <Heart className="w-6 h-6 text-primary-foreground fill-primary mb-2" />
                <p className="font-sans text-sm text-primary-foreground text-center font-medium">
                  {moment.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
