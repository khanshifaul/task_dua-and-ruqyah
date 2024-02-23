import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });

interface LogoProps {
  label?: string;
}

const Logo = ({ label }: LogoProps) => {
  return (
    <Link href="/">
      <div className="flex items-center flex-nowrap gap-2">
        <Image
          src="/assets/dua-logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="h-12 w-12"
        />
        <h1 className="text-xl text-nowrap sm:block lg:hidden">{label}</h1>
      </div>
    </Link>
  );
};

export default Logo;
