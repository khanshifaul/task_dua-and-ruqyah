import { MdSearch } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const SearchBar = () => {
  return (
    <div className="flex items-center bg-background rounded relative">
      <Input
        type="text"
        placeholder="Search By Dua Name"
        className="w-full h-10 focus-visible:border-1 focus-visible:border-green-600 focus-visible:ring-0"
      />
      <Button
        variant="none"
        className="bg-secondary md:absolute top-50 right-0.5 border-2 border-transparent"
      >
        <MdSearch className="react-icons" />
      </Button>
    </div>
  );
};

export default SearchBar;
