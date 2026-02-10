import { FloatingHearts } from "@/components/floating-hearts";
import { PetalEffect } from "@/components/petal-effect";
import { HeroSection } from "@/components/hero-section";
import { ProposalSection } from "@/components/proposal-section";
import { GallerySection } from "@/components/gallery-section";
import { ReasonsSection } from "@/components/reasons-section";
import { AcceptSection } from "@/components/accept-section";
import { MusicToggle } from "@/components/music-toggle";
import { Heart } from "lucide-react";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <FloatingHearts />
      <PetalEffect />
      <MusicToggle />

      <HeroSection />
      <ProposalSection />
      <GallerySection />
      <ReasonsSection />
      <AcceptSection />

      {/* Footer */}
      <footer className="py-10 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-sans text-sm">
          <span>Hecho con</span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-heart" />
          <span>para vos</span>
        </div>
      </footer>
    </main>
  );
}
