"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface NavBtnProps {
  iconName: string;
  url: string;
  label: string;
}
const NavBtn = ({ iconName, url, label }: NavBtnProps) => {
  return (
    <Button
      variant={"none"}
      className="md:bg-transparent p-0 md:justify-center justify-start h-full w-full "
    >
      <Link href={url} className="flex items-center">
        <Image
          src={iconName}
          alt={label}
          width={100}
          height={100}
          className="rounded-full bg-slate-200 h-10 w-10 p-2 object-scale-down"
        />
        <h2 className="hidden text-xl">{label}</h2>
      </Link>
    </Button>
  );
};

export default NavBtn;
