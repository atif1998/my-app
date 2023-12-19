"use client";
import { Button } from "@/app/registary/default/ui/button";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import Microsoft from "@/app/assests/svgs/Microsoft";
import Check from "@/app/assests/svgs/Check";
import logo from "@/app/assests/images/Icon.png";
import Logo from "@/app/assests/svgs/Logo";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

export const Login = () => {
  const handleClick = () => {
    console.log("click");
    <Link href="/dashboard" />;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tl from-[#081623] to-[#355572]">
      <div
        style={{
          border: "1px solid",
          height: 560,
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
        <div
          style={{
            width: 350,
          }}
        >
          <div className="flex w-full items-center justify-center p-5 ">
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
              Operi
            </p>
            <p
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
            </p>
          </div>
          <button className="mt-[10px] w-[310px] bg-white h-[48px] mx-[20px] mb-[15px] flex justify-center items-center gap-[10px] rounded-[8px]">
            <Microsoft />
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "12px",
                margin: 0,
                color: "#2C2C2C",
                lineHeight: "15px",
              }}
            >
              Login with Microsoft
            </p>
          </button>
          <div>
            <button className="mt-[10px] w-[310px] bg-white h-[48px] mx-[20px] mb-[15px] flex justify-center items-center gap-[10px] rounded-[8px]">
              <FcGoogle size={20} />
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#2C2C2C",
                  lineHeight: "15px",
                }}
              >
                Login with Google
              </p>
            </button>
          </div>
          <button
            className="mt-[10px] w-[310px] bg-white h-[48px] mx-[20px] mb-[40px] flex justify-center items-center gap-[10px] rounded-[8px]"
            onClick={handleClick}
          >
            <FaApple color="#000000" size={20} />
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "12px",
                margin: 0,
                color: "#2C2C2C",
                lineHeight: "15px",
              }}
            >
              Login with Apple
            </p>
          </button>
          <Link href={"/email"}>
            <Button
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
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "15px",
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                Login with Email
              </p>
            </Button>
          </Link>
          <Link href={"/phone"}>
            <Button
              style={{
                marginTop: 20,
                width: "calc(100% - 40px)",
                margin: "0 20px",
                backgroundColor: "#1D374E",
                marginBottom: 20,
                height: 48,
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "15px",
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                Login with Phone
              </p>
            </Button>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              gap: "5px",
            }}
          >
            <Checkbox className="rounded-full" />
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "12px",
                color: "#19151C",
                lineHeight: "15px",
              }}
            >
              I have read & agree to the
            </p>
            <p
              onClick={() => alert("I have read & agree to the")}
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "12px",
                color: "#1D374E",
                lineHeight: "15px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Terms of use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
