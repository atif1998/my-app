"use client";

import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetValidationSchema } from "../contants/validators/add-validator";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Register from "@/components/Form";
import User from "../assests/svgs/User";
import { Arrow } from "../assests/svgs/Arrow";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";

const Page = () => {
  const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<resetValidationSchema>({
    resolver: zodResolver(resetValidationSchema),
  });
  const Submit: SubmitHandler<resetValidationSchema> = ({
    name,
    firstName,
    lastName,
    userName,
    gender,
    jobTitle,
    department,
    facility,
    office,
    language,
    address,
    state,
    country,
    city,
    postalCode,
    degree,
    email,
  }) => {
    console.log(
      name,
      firstName,
      lastName,
      userName,
      email,
      gender,
      jobTitle,
      department,
      facility,
      office,
      language,
      degree,
      address,
      state,
      country,
      city,
      postalCode
    );
    reset();
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ width: "16%", height: "100vh", backgroundColor: "red" }}>
        {" "}
        gggg
      </div>
      <div
        style={{
          width: "84%",
          height: "100%",
          padding: "5px",
          backgroundColor: "#F9F9FD",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Arrow />
          <p>Add new user</p>
        </div>
        <form onSubmit={handleSubmit(Submit)}>
          <div>
            <div className="flex w-full items-center justify-center flex-row gap-4 ">
              <p>Personaldetail</p>
              <Separator />
            </div>
            <div className="flex flex-row gap-10 p-2">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Name</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("name")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">FirstName</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("firstName")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Lastname</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="flex flex-row gap-10 p-2">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">UPN Username</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("userName")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("email")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Gender</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("gender")}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-row w-full ">
            <p>Jobdetails</p>
            <Separator />
          </div>

          <div>
            <div className="flex flex-row gap-10 p-2">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Jon Title</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("jobTitle")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Department</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("department")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Office</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("office")}
                />
              </div>
            </div>
            <div className="flex flex-row gap-10 p-2">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Facility</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("facility")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Language</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("language")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Degree</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("degree")}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-row  gap-4">
            <p>Address</p>
            <Separator />
          </div>
          <div>
            <div className="flex flex-row gap-10 p-2">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="">Street Address</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("address")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label>State or Province</label>
                <Input
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("state")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label>Country</label>
                <Input
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("country")}
                />
              </div>
            </div>
            <div className="flex flex-row gap-10 p-2">
              <div className="w-full flex flex-col gap-1">
                <label>City</label>
                <Input
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("city")}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label>Postal Code</label>
                <Input
                  className="h-[48px]  border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("postalCode")}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 mt-5">
            <div className="flex flex-row gap-4">
              <Button>Manage Permisions</Button>
              <Button>Facility Association</Button>
            </div>
            <div className="flex flex-row gap-4">
              <Button>Cancel</Button>
              <Button onClick={() => reset()}>Reset fields</Button>
              <Button type="submit">Add user</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
