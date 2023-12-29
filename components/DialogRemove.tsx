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

const user = { name: "Atif ", username: "@atif" };
export default function DialogDemoRemove() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p>Remove User</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] h-[170px] flex flex-col gap-7">
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle className="w-full flex justify-center">
            {" "}
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "bold",
                lineHeight: "21px",
                color: "#1D1617",
              }}
            >
              {" "}
              Remove User
            </p>
          </DialogTitle>
          <DialogDescription
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              justifyContent: "center",
            }}
          >
            <div>
              {" "}
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontWeight: "regular",
                  lineHeight: "15px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "#19151C",
                }}
              >
                Are you sure you want to delete the user
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px",
            gap: "15px",
          }}
        >
          <DialogPrimitive.Close>
            <Button
              style={{
                width: "110px",
                height: "40px",
                backgroundColor: "white",
                color: "red",
                border: "1px solid red",
                borderRadius: "8px",
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
              color: "#1D374E",
              border: "1px solid #1D374E",
              borderRadius: "8px",
            }}
          >
            Remove
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
