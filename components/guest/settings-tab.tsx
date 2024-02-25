"use client";
import SettingsAccordion from "@/components/guest/settings-accordion";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import { useState } from "react";
import SettingsBtn from "./settings-btn";
import UserBtn from "./user-btn";
const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const SettingsTab = () => {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="basis-1/6 flex flex-col gap-5">
      <div className="lg:flex hidden items-center justify-end gap-2">
        <UserBtn />
        <SettingsBtn />
      </div>
      <div className="flex flex-col w-full h-full rounded-xl bg-background p-5 gap-5 shadow">
        <h3 className={`${inter.className} text-center w-full`}>Settings</h3>
        <Accordion type="single" className="w-full flex flex-col gap-2">
          <SettingsAccordion
            iconName="/assets/language.svg"
            label="Language Settings"
          >
            <div className="flex justify-center items-center gap-5 p-4 shadow-md border-b-2 dark:border-l-4 dark:border-primary rounded-b-md">
              <Button>English</Button>
              <Button variant={"outline"}>Bangla</Button>
            </div>
          </SettingsAccordion>
          <SettingsAccordion
            iconName="/assets/general.svg"
            label="General Settings"
          />
          <SettingsAccordion
            iconName="/assets/font.svg"
            label="Font Settings"
          />
          <SettingsAccordion
            iconName="/assets/font.svg"
            label="Appearance Settings"
          >
            <div className="flex justify-between items-center gap-5 p-4 shadow-md border-b-2 dark:border-l-4 dark:border-primary rounded-b-md">
              <p>Night Mode</p>
              <Switch
                onClick={() => {
                  isDark ? setIsDark(false) : setIsDark(true);
                  isDark ? setTheme("light") : setTheme("dark");
                }}
              />
            </div>
          </SettingsAccordion>
        </Accordion>
      </div>
    </div>
  );
};

export default SettingsTab;
