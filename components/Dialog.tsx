import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            style={{
              width: "110px",
              height: "40px",
              backgroundColor: "white",
              color: "#1D374E",
              border: "1px solid #1D374E",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            style={{
              width: "110px",
              height: "40px",
              backgroundColor: "white",
              color: "#E8675E",
              border: "1px solid #E8675E",
            }}
          >
            Remove
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
