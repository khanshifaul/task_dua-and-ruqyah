import { MdSearch } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const SearchBar = () => {
  return (
    <div className="flex items-center bg-white rounded relative">
      <Input
        type="text"
        placeholder="Search"
        className="w-full h-10 focus-visible:border-1 focus-visible:border-green-600 focus-visible:ring-0"
      />
      <Button
        variant="none"
        className="bg-slate-200 md:absolute top-50 right-0.5 border-2 border-white"
      >
        <MdSearch className="react-icons" />
      </Button>
    </div>
  );
};

export default SearchBar;
