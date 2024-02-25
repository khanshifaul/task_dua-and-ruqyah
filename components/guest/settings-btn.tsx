"use client";
import SettingsTab from "@/components/guest/settings-tab";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";

const SettingsBtn = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Image
          src="/assets/settings.svg"
          alt="Logo"
          width={100}
          height={100}
          className="h-5 w-5"
        />
      </DrawerTrigger>
      <DrawerContent>
        <SettingsTab />
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsBtn;
