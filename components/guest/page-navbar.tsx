"use client";

import { Poppins } from "next/font/google";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Button } from "../ui/button";
import BackBtn from "./back-btn";
import Logo from "./logo";
import SearchBar from "./search-bar";
import SettingsBtn from "./settings-btn";
import UserBtn from "./user-btn";

const poppins = Poppins({ weight: "600", subsets: ["latin"], display: "swap" });
interface PageNavbarProps {
  children: React.ReactNode;
}

const PageNavbar = ({ children }: PageNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarClasses = isOpen ? "-translate-x-full" : "";
  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex justify-between items-center rounded-xl gap-5 min-w-full">
        <div className="flex items-center gap-2">
          <BackBtn />
          <h1
            className={`${poppins.className} text-xl block md:hidden lg:block`}
          >
            Duas Page
          </h1>
          <div className="hidden md:block lg:hidden">
            <Logo label="Dua & Ruqyah" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <UserBtn />
          <SettingsBtn />
        </div>
      </div>
      <div className="lg:hidden flex flex-nowrap justify-between items-center p-4 rounded-xl gap-5 mt-4 bg-background shadow">
        <div className="flex items-center gap-2">
          <Button variant={"none"} className="p-0" onClick={toggleCategory}>
            <MdMenu className="react-icons" />
          </Button>

          <h1 className="text-xl text-white">CategoryName</h1>
        </div>
        {/*  */}
        {isOpen && (
          <div
            className={`${navbarClasses} h-[100vh] w-[100vw] bg-background translate-x-0 absolute top-0 left-0 inset-0 transition duration-200 ease-in-out`}
          >
            <div className="bg-primary !text-white p-4 text-xl flex justify-between items-center">
              <h2 className="font-semibold !text-white">Category</h2>
              <Button variant={"none"} onClick={toggleCategory}>
                <MdClose className="react-icons cursor-pointer" />
              </Button>
            </div>

            <div className="p-4 h-[100vh] scroll-smooth focus:scroll-auto default:overflow-y-scroll-visible overflow-y-scroll scrollbar-thin">
              {/* Category Component from ./_components */}
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageNavbar;
