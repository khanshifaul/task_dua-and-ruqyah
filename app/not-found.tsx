import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto w-full flex flex-col items-center justify-center rounded-xl p-4 shadow-md text-center space-y-5">
      <p className="font-bold text-3xl">404</p>
      <p className="font-semibold text-xl">Page Not Found!</p>
      <Button className="hover:scale-105">
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
