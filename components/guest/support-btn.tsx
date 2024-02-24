import { FaHandHoldingHeart } from "react-icons/fa";
import { Button } from "../ui/button";
const SupportBtn = () => {
  return (
    <Button
      variant={"none"}
      className="bg-primary text-white w-12 h-12 rounded-xl mt-12"
    >
      <FaHandHoldingHeart className="react-icons !text-white" />
    </Button>
  );
};

export default SupportBtn;
