"use client";
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
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
const DialogClose = DialogPrimitive.Close;
export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Remove User</DialogTitle>
          <DialogDescription
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              justifyContent: "center",
            }}
          >
            Are you sure you want to delete the user
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                fontWeight: "bold",
                lineHeight: "18px",
              }}
            >
              John doe
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <DialogPrimitive.Close>
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
          </DialogPrimitive.Close>

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
