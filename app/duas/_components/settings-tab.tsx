"use client";
import SettingsAccordion from "@/components/guest/settings-accordion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const SettingsTab = () => {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="flex flex-col w-full h-[90vh] rounded-xl bg-background p-5 gap-5 shadow">
      <h3 className={`${inter.className} text-center w-full`}>Settings</h3>
      <SettingsAccordion
        iconName="/assets/language.svg"
        label="Language Settings"
      >
        <div className="flex justify-center items-center gap-5 p-4 shadow-md rounded-b-2xl">
          <Button>English</Button>
          <Button variant={"outline"}>Bangla</Button>
        </div>
      </SettingsAccordion>
      <SettingsAccordion
        iconName="/assets/general.svg"
        label="General Settings"
      />
      <SettingsAccordion iconName="/assets/font.svg" label="Font Settings" />
      <SettingsAccordion
        iconName="/assets/font.svg"
        label="Appearance Settings"
      >
        <div className="flex justify-between items-center gap-5 p-4 shadow-md rounded-b-md bg-muted">
          <p>Night Mode</p>
          <Switch
            onClick={() => {
              isDark ? setIsDark(false) : setIsDark(true);
              isDark ? setTheme("light") : setTheme("dark");
            }}
          />
        </div>
      </SettingsAccordion>
    </div>
  );
};

export default SettingsTab;
