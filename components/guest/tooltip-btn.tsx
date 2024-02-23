"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface TooltipBtnProps {
  label: string;
  icon: string;
}

const TooltipBtn = ({ label, icon }: TooltipBtnProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={"none"}>
            <Image
              src={icon}
              alt={label}
              width={100}
              height={100}
              className="h-5 w-5"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipBtn;
