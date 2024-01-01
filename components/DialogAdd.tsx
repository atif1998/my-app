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
const DialogAdd = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="submit"
          style={{
            width: "120px",
            backgroundColor: " #1D374E",
          }}
        >
          Apply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[490px] h-[770px]">
        <DialogHeader>
          <DialogTitle className="w-full flex justify-center">
            {" "}
            Review Details
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
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "25px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "#19151C",
                }}
              >
                John doe
              </p>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontWeight: "regular",
                  lineHeight: "18px",
                  width: "100%",
                  display: "flex",
                  color: "#19151C",
                }}
              >
                johndoe@gmail.com
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Name
            </p>

            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              {user.name}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Username
            </p>
            <hr />
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              {user.username}
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              initail password
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              atif
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              {" "}
              Block sign in
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              No
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Firstname
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              John
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              {" "}
              Lastname
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              doe
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Jobtitle
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              Cardiologist
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Department
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              Cardiology
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Usage Location
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              Islamabad
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Street Address
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              123 north bay washington
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              State or Province
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              Washington
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Country or Region
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              United States
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Office
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              123 Office name
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              City
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              Washington
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Zip or Postal code
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              11242
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Office phone
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              123345555
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Mobile Phone
            </p>

            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              1111111111111
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Sign in{" "}
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              enabeld
            </p>
          </span>
          <span className="flex items-center justify-between">
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "15px",
              }}
            >
              Associated with
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "15px",
              }}
            >
              Elastic devs and 4 others
            </p>
          </span>
        </div>
        <DialogFooter
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "5px",
          }}
        >
          <Button
            style={{
              width: "130px",
              height: "40px",
              backgroundColor: "white",
              color: "#1D374E",
              border: "1px solid #1D374E",
            }}
          >
            Continue Edit
          </Button>
          <Button
            type="submit"
            style={{
              width: "130px",
              height: "40px",
              backgroundColor: "#1D374E",
              color: "white",
            }}
          >
            Add User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DialogAdd;
