"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const BackBtn = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <Button variant={"none"} className="md:hidden p-0" onClick={handleClick}>
      <Image
        src="/assets/back.svg"
        alt="Logo"
        width={100}
        height={100}
        className="h-5 w-5"
      />
    </Button>
  );
};

export default BackBtn;
