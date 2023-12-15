"use client";
import { Button } from "@/app/registary/default/ui/button";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import Link from "next/link";
import Microsoft from "@/app/assests/svgs/Microsoft";
import Check from "@/app/assests/svgs/Check";
import logo from "@/app/assests/images/Icon.png";
import Logo from "@/app/assests/svgs/Logo";

export const Login = () => {
  const handleClick = () => {
    console.log("click");
    <Link href="/dashboard" />;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to top left, #081623, #355572)",
      }}
    >
      <div
        style={{
          border: "1px solid",
          height: 500,
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
            height: 350,
          }}
        >
          <Button
            style={{
              marginTop: 20,
              width: "calc(100% - 40px)",
              height: 48,
              margin: "0 20px",
              backgroundColor: "white",
              marginBottom: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px",
            }}
          >
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
          </Button>
          <div style={{ display: "flex" }}>
            <Button
              style={{
                marginTop: 20,
                width: "calc(100% - 40px)",
                height: 48,
                margin: "0 20px",
                backgroundColor: "white",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                borderRadius: "8px",
              }}
            >
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
            </Button>
          </div>
          <Button
            onClick={handleClick}
            style={{
              marginTop: 20,
              width: "calc(100% - 40px)",
              height: 48,
              margin: "0 20px",
              backgroundColor: "white",
              marginBottom: 20,
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
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
          </Button>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              gap: "5px",
            }}
          >
            <Check />
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
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "12px",
                color: "#1D374E",
                lineHeight: "15px",
                textDecoration: "underline",
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
