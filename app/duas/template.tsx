import PageNavbar from "@/components/guest/page-navbar";
import Category from "./_components/category";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-5">
      <PageNavbar>
        <Category />
      </PageNavbar>
      {children}
    </div>
  );
}
