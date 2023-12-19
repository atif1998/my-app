"use client";
import { Button } from "@/app/registary/default/ui/button";
import Image from "next/image";
import logo from "@/app/assests/images/Icon.png";
import { Input } from "@/components/ui/input";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

type EmailState = {
  email: string;
};

const ForgetPage = () => {
  const [email, setEmail] = useState<EmailState>({ email: "" });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ email: e.target.value });
  };

  const handleClick = () => {
    console.log("click", email);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tl from-[#081623] to-[#355572]">
      <div
        style={{
          border: "1px solid",
          height: 400,
          width: 375,
          position: "relative",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F9F9FD",
        }}
      >
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "-56px",
            display: "flex",
          }}
        >
          <Image
            style={{
              width: "112px",
              height: "112px",
              border: "10px solid  #F9F9FD",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
            src={logo}
            alt=""
          />
        </div>
        <div className="w-[350px] ">
          <div className="flex w-full items-center justify-center p-8 ">
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "22px",
                margin: 0,
                color: "#000000",
                lineHeight: "27px",
                textAlign: "center",
              }}
            >
              Forget Password
            </p>
            {/* <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "22px",
                margin: 0,
                color: "#000000",
                lineHeight: "27px",
                textAlign: "center",
              }}
            >
              Connect
            </p> */}
          </div>

          <div className="mb-10 flex items-center justify-center m-5 relative">
            <Input
              className="h-[48px]"
              placeholder="Enter your email..."
              type="email"
              onChange={handleEmailChange}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <MdOutlineEmail />
            </div>
          </div>
          <div className="mb-4">
            <Button
              onClick={handleClick}
              style={{
                width: "calc(100% - 40px)",
                margin: "0 20px",
                height: 48,
                backgroundColor: "#1D374E",
                marginBottom: 20,
                borderRadius: "8px",
              }}
            >
              <p
                className="text-color-[#FFFFFF]  "
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "15px",
                }}
              >
                Reset Password
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgetPage;
