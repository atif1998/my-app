"use client";
import { Button } from "@/app/registary/default/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assests/images/Icon.png";
import Logo from "@/app/assests/svgs/Logo";
import { Input } from "@/components/ui/input";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { useState } from "react";
import * as z from "zod";
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
    password: z.string().min(3),
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

const LoginPage = () => {
  const [visibility, setVisibility] = useState<VisibilityState>({
    password: false,
    confirmPassword: false,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

  const handleClick = () => {
    console.log("click");
    <Link href="/dashboard" />;
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
        <div className="w-[350px] ">
          <div className="flex w-full items-center justify-center p-10 ">
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
              Reset Password
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mb-10 flex items-center justify-center m-5 relative ">
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mb-10 flex items-center justify-center m-5 relative">
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
                    <FormMessage />
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
                    Update Password
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
export default LoginPage;
