import SettingsAccordion from "@/components/guest/settings-accordion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const SettingsTab = () => {
  return (
    <div className="flex flex-col w-full h-[90vh] rounded-xl bg-white p-5 gap-5 shadow">
      <h3 className={`${inter.className} text-center w-full`}>Settings</h3>
      <SettingsAccordion iconName="/assets/font.svg" label="Language Settings">
        <div className="flex justify-center items-center gap-5 p-4 shadow rounded-b-2xl">
          <Button>English</Button>
          <Button variant={"outline"}>Bangla</Button>
        </div>
      </SettingsAccordion>
      <SettingsAccordion iconName="/assets/font.svg" label="General Settings" />
      <SettingsAccordion iconName="/assets/font.svg" label="Font Settings" />
      <SettingsAccordion
        iconName="/assets/font.svg"
        label="Appearance Settings"
      >
        <div className="flex justify-between items-center gap-5 p-4 shadow rounded-b-2xl">
          <p>Night Mode</p>
          <Switch />
        </div>
      </SettingsAccordion>
    </div>
  );
};

export default SettingsTab;
