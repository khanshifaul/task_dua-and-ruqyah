import { Input } from "@/components/ui/input";
import type { Metadata } from "next";
import Category from "./_components/category";
import Preview from "./_components/preview";
import SettingsTab from "./_components/settings-tab";
export const metadata: Metadata = {
  title: "Dua & Ruqyah | All Duas Collection",
  description: "Generated by create next app",
};

const Duas = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center gap-5 w-full">
      <div className="flex gap-2 w-full">
        {/* Category Sidebar for Desktop*/}
        <div className="basis-1/4 hidden lg:flex flex-col rounded-xl bg-white gap-2 w-full h-fit shadow">
          <h2 className="bg-green-600 text-white p-2 text-center font-semibold text-xl rounded-t-xl">
            Category
          </h2>
          <div className="flex flex-col p-2 ">
            <Input
              type="text"
              placeholder="Search Categories"
              className="w-full border-green-600 focus-visible:border-green-600"
            />
            <div className="h-[70vh] scroll-smooth focus:scroll-auto default:overflow-y-scroll-visible overflow-y-scroll scrollbar-thin">
              <Category />
            </div>
          </div>
        </div>

        <Preview />
        <div className="basis-1/4 hidden 2xl:flex">
          <SettingsTab />
        </div>
      </div>
    </main>
  );
};

export default Duas;
