import Image from "next/image";
import { Button } from "../ui/button";

const SettingsBtn = () => {
  return (
    <Button variant={"none"} className="md:hidden">
      <Image
        src="/assets/settings.svg"
        alt="Logo"
        width={100}
        height={100}
        className="h-5 w-5"
      />
    </Button>
  );
};

export default SettingsBtn;
