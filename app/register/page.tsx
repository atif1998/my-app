"use client";
import { Button } from "@/app/registary/default/ui/button";
import Image from "next/image";
import logo from "@/app/assests/images/Icon.png";
import { MdOutlineEmail } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z
  .object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

type VisibilityState = {
  password: boolean;
  confirmPassword: boolean;
};

const RegisterPage = () => {
  const [visibility, setVisibility] = useState<VisibilityState>({
    password: false,
    confirmPassword: false,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const handleSubmit = () => {
    console.log("submit");
    const formData = form.getValues();
    console.log("Form Data:", formData);
  };

  const handleVisibilityToggle = (field: keyof VisibilityState) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [field]: !prevVisibility[field],
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tl from-[#081623] to-[#355572]">
      <div
        className="flex items-center justify-center bg-[#F9F9FD] relative  w-[375px] h-[560px] border border-solid border-gray-300 "
        style={{ borderRadius: "20px" }}
      >
        <div className="text-center absolute  -top-14 flex">
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
          <div className="flex w-full items-center justify-center p-5 ">
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "22px",
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
                color: "#000000",
                lineHeight: "27px",
                textAlign: "center",
              }}
            >
              Connect
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mb-7 flex items-center justify-center m-5 relative">
                        <Input
                          className="h-[48px]"
                          placeholder="Enter your name..."
                          type="text"
                          {...field}
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                          <MdOutlineEmail />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mb-7 flex items-center justify-center m-5 relative">
                        <Input
                          className="h-[48px]"
                          placeholder="Enter your email..."
                          type="email"
                          {...field}
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                          <MdOutlineEmail />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mb-7 flex items-center justify-center m-5 relative ">
                        <Input
                          className="h-[48px] rounded-8"
                          placeholder="Enter your password..."
                          type={visibility.password ? "text" : "password"}
                          {...field}
                        />
                        <div
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          onClick={() => handleVisibilityToggle("password")}
                        >
                          {visibility.password ? (
                            <MdVisibility />
                          ) : (
                            <MdVisibilityOff />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="m-5" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mb-7 flex items-center justify-center m-5 relative">
                        <Input
                          className="h-[48px] rounded-8"
                          placeholder="Confirm your password..."
                          type={
                            visibility.confirmPassword ? "text" : "password"
                          }
                          {...field}
                        />
                        <div
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          onClick={() =>
                            handleVisibilityToggle("confirmPassword")
                          }
                        >
                          {visibility.confirmPassword ? (
                            <MdVisibility />
                          ) : (
                            <MdVisibilityOff />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="m-5" />
                  </FormItem>
                )}
              />
              <div className="mb-4">
                <Button
                  style={{
                    width: "calc(100% - 40px)",
                    margin: "0 20px",
                    height: 48,
                    backgroundColor: "#1D374E",
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
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
