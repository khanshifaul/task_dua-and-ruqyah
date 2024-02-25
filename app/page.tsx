import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VscPreview } from "react-icons/vsc";
export default function Home() {
  return (
    <div className="mx-auto w-full flex flex-col items-center justify-center rounded-xl p-4 shadow-md text-center space-y-5">
      <p className="text-green-600 text-xl md:text-2xl text-center font-semibold">
        Intership Recruitment Task
      </p>
      <p className="text-green-600 text-xl md:text-lg">
        <span>Submitted By: </span>
        <span className="font-semibold">Md. Shifaul Islam</span>
      </p>
      <Button className="hover:scale-105 text-white hover:!text-black">
        <Link href={"/duas"} className="flex items-center gap-2">
          <VscPreview className="text-2xl" />
          See Inside
        </Link>
      </Button>
    </div>
  );
}
