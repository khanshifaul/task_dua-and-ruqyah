"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

interface SettingsAccordionProps {
  children?: React.ReactNode;
  iconName: string;
  label: string;
}
const SettingsAccordion = ({
  iconName,
  label,
  children,
}: SettingsAccordionProps) => {
  return (
    <AccordionItem value={label} className="border-0">
      <AccordionTrigger className="flex text-start justify-between items-center p-2 rounded-t-md md:bg-secondary border-l-4 border-primary">
        <div className="flex gap-2 md:p-0 justify-start items-center h-fit w-full ">
          <Image
            src={iconName}
            alt={label}
            width={100}
            height={100}
            className="rounded-full bg-muted h-10 w-10 p-2 object-scale-down"
          />
          <h2 className="text-md text-nowrap mr-2">{label}</h2>
        </div>
        <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </AccordionTrigger>
      {children && <AccordionContent>{children}</AccordionContent>}
    </AccordionItem>
  );
};

export default SettingsAccordion;
