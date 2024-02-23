"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="1" className="border-0">
        <AccordionTrigger className="flex text-start justify-start items-center p-2 rounded-xl md:bg-neutral-100 ">
          <div className="flex gap-2 md:p-0 justify-start items-center h-fit w-full ">
            <Image
              src={iconName}
              alt={label}
              width={100}
              height={100}
              className="rounded-full bg-slate-200 h-10 w-10 p-2 object-scale-down"
            />
            <h2 className="text-md">{label}</h2>
          </div>
        </AccordionTrigger>
        {children && <AccordionContent>{children}</AccordionContent>}
      </AccordionItem>
    </Accordion>
  );
};

export default SettingsAccordion;
