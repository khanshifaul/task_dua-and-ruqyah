"use client";
import Image from "next/image";
import { Button } from "../ui/button";

const AudioBtn = () => {
  return (
    <Button variant={"none"} className="p-0">
      <Image
        src="/assets/audiobtn.svg"
        alt="Logo"
        width={100}
        height={100}
        className="h-10 w-10"
      />
    </Button>
  );
};

export default AudioBtn;
