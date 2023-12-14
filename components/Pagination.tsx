import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function PaginationDemo() {
  return (
    <>
      <div>
        <Button
          variant="outline"
          size="sm"
          style={{ backgroundColor: "#F1F2F6" }}
        >
          <IoIosArrowBack />
        </Button>
        <Button
          variant="outline"
          size="sm"
          style={{ backgroundColor: "#F1F2F6" }}
        >
          1
        </Button>
        <Button
          variant="outline"
          size="sm"
          style={{ backgroundColor: "#F1F2F6" }}
        >
          2
        </Button>
        <Button
          variant="outline"
          size="sm"
          style={{ backgroundColor: "#F1F2F6" }}
        >
          3
        </Button>
        <Button
          variant="outline"
          size="sm"
          style={{ backgroundColor: "#F1F2F6" }}
        >
          <IoIosArrowForward />
        </Button>
      </div>
    </>
  );
}
