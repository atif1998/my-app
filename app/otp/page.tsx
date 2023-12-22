"use client";
import Image from "next/image";
import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import logo from "@/app/assests/images/Icon.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const OtpPage: React.FC = () => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [otpFilled, setOtpFilled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(30);
    setOtpFilled(false);
  };

  const inputRefs = useRef([
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
  ]);

  const handleOTPChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOTP = [...otp];
    const inputValue = e.target.value;

    if (/^\d$|^$/.test(inputValue)) {
      newOTP[index] = inputValue;
      setOTP(newOTP);

      if (index < otp.length - 1 && inputValue !== "") {
        inputRefs.current[index + 1].current?.focus();
      }
    }
    const isOtpFilled = newOTP.every((digit) => /\d/.test(digit));
    setOtpFilled(isOtpFilled);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (otpFilled) {
      const otpValue = otp.join("");
      console.log(otpValue);
    } else {
      alert("Please fill in the OTP");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tl from-[#081623] to-[#355572]">
      <div
        style={{
          border: "1px solid",
          height: 450,
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
              OTP Verification
            </p>
          </div>
          <div>
            <form className="w-[280px] flex justify-between items-centen mb-10 m-10  text-center ">
              {otp.map((number, i) => (
                <Input
                  key={i}
                  type="text"
                  value={number}
                  className="w-[45px] h-[45px] flex items-center text-center border-blue-900"
                  maxLength={1}
                  onChange={(e) => handleOTPChange(e, i)}
                  ref={inputRefs.current[i]}
                  required
                />
              ))}
            </form>
          </div>
          <div className=" flex flex-col justify-between">
            <Button
              onClick={handleSubmit}
              style={{
                width: "calc(100% - 70px)",
                margin: "0 40px",
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
                Submit
              </p>
            </Button>
            {timer === 0 && (
              <p className="text-color-[#000000] text-sm  flex justify-center gap-3">
                Resend OTP
                <span
                  className="text-blue-500 cursor-pointer  flex justify-center"
                  onClick={handleResend}
                >
                  click here
                </span>
              </p>
            )}
            {timer > 0 && (
              <p className="text-color-[#000000] text-sm flex justify-center ">
                Resend OTP in {timer} seconds
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
