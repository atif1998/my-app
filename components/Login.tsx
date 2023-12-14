"use client";
import { Button } from "@/app/registary/default/ui/button";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import Link from "next/link";

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
            top: "-75px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "35%",
              borderRadius: "50%",
              border: "15px solid  #F9F9FD",
            }}
            src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"
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
            }}
          >
            <FaMicrosoft size={16} color="#0078D4" />
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
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
              }}
            >
              <FcGoogle size={20} />
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  margin: 0,
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
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaApple color="#000000" size={20} />
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
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
            }}
          >
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
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
            }}
          >
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
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
              justifyContent: "center",
            }}
          >
            <input type="checkbox" />
            <p>I have read & agree to the </p>
            <p>Terms of use</p>
          </div>
        </div>
      </div>
    </div>
  );
};
