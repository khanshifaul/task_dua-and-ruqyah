"use client";
import { Progress } from "@/components/ui/progress"; // Assuming correct path
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

interface AudioBtnProps {
  audioSrc: string | null;
}

const AudioBtn = ({ audioSrc }: AudioBtnProps) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0); // Initialize progress state

  // Handle audio loading
  useEffect(() => {
    const audioElement = audio.current;
    if (audioElement) {
      audioElement.addEventListener("loadeddata", () => {
        setProgress(0); // Reset progress when audio loads
      });
    }
  }, [audio]);

  // Update progress bar on playback
  useEffect(() => {
    const audioElement = audio.current;
    if (audioElement && play) {
      const updateProgress = () => {
        if (audioElement.readyState > 2) {
          // Ensure audio is ready
          const percentage = Math.floor(
            (audioElement.currentTime / audioElement.duration) * 100
          );
          setProgress(percentage);
        }
        if (play) {
          requestAnimationFrame(updateProgress); // Update smoothly
        }
      };
      requestAnimationFrame(updateProgress);
    }
  }, [play, audio]);

  const togglePlay = () => {
    setPlay(!play);
    if (audio.current) {
      play ? audio.current.play() : audio.current.pause();
      audio.current.style.border = "none"; // Remove border if present
    }
  };

  return audioSrc !== null ? (
    <>
      <Button
        variant={"none"}
        className="p-0"
        onClick={togglePlay}
        aria-label={play ? "Pause audio" : "Play audio"} // Add aria-label
      >
        <Image
          src="/assets/audiobtn.svg"
          alt="Audio Button"
          width={100}
          height={100}
          className="h-10 w-10"
        />
      </Button>
      <audio ref={audio} src={audioSrc} />
      <Progress value={progress} className="w-[50%]" />
    </>
  ) : null;
};

export default AudioBtn;
