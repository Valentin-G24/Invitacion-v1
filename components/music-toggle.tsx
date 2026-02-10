"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3?filename=romantic-piano-10871.mp3"
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card text-foreground border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label={playing ? "Silenciar musica" : "Reproducir musica"}
    >
      {playing ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </button>
  );
}
