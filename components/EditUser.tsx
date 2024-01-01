"use client";

import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { resetValidationSchema } from "@/app/contants/validators/add-validator";
import { Arrow } from "@/app/assests/svgs/Arrow";

import { Switch } from "@/components/ui/switch";
const countryCodes = require("country-codes-list");
import { useEffect } from "react";
import DialogEdit from "./DialogEdit";

const EditUser = () => {
  const staticData = {
    name: "John",
    firstName: "Doea",
    lastName: "Angel",
    userName: "@john",
    gender: "male",
    jobTitle: "junior developer",
    department: "software",
    facility: "medical",
    office: "web team",
    language: "english",
    address: "Islamabad",
    state: "Islamabad",
    country: "Pakistan",
    city: "Islamabad",
    postalCode: "46756",
    degree: "bs it",
    email: "john@gmail.com",
    password: "123456789",
    mobilePhone: "123456789",
    officePhone: "123456789",
  };
  const { register, handleSubmit, reset, setValue } =
    useForm<resetValidationSchema>({
      resolver: zodResolver(resetValidationSchema),
    });

  useEffect(() => {
    Object.entries(staticData).forEach(([key, value]) => {
      setValue(key, value);
    });
    const myCountryCodesObject = countryCodes.customList(
      "countryCode",
      "[{countryCode}] {countryNameEn}: +{countryCallingCode}"
    );
    console.log(myCountryCodesObject);
  }, [setValue]);

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
    password,
    mobilePhone,
    officePhone,
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
      postalCode,
      password,
      mobilePhone,
      officePhone
    );
    reset();
  };

  return (
    <div className="w-full h-full bg-gray-100 flex overflow-auto">
      <div className="w-1/6 h-screen bg-red-500">gggg</div>
      <div className="flex-1 h-full bg-gray-100 p-10 m-0">
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-2 p-2 w-full">
            <Arrow />
            <div className="flex flex-row gap-1 items-center">
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  color: "#19151C",
                  lineHeight: "17px",
                }}
              >
                Edit
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                  color: " #19151C",
                  lineHeight: "17px",
                }}
              >
                John Doe's
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  color: " #19151C",
                  lineHeight: "17px",
                }}
              >
                profile
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit(Submit)}>
            <div>
              <div className="flex p-2 items-center gap-4 ">
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "4px" }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#8B909A",
                      display: "flex",
                    }}
                  >
                    Personal
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#8B909A",
                      display: "flex",
                    }}
                  >
                    detail
                  </p>
                </div>
                <div className="flex-1 border-t-2 border-#F9F9FD-500" />

                {/* <Separator className="w-full" /> */}
              </div>
              <div className="flex flex-row gap-10 p-2">
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    First Name
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("name")}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Middle Name
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("firstName")}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Last Name
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("lastName")}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10 p-2 w-2/3">
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    UPN Username
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("userName")}
                  />
                </div>

                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Gender
                  </label>
                  <select
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px] p-2"
                    placeholder="Select "
                    defaultValue={"select"}
                    {...register("gender")}
                  >
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex p-2 items-center gap-4 ">
              <div
                style={{ display: "flex", flexDirection: "row", gap: "2px" }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    fontFamily: "Montserrat",
                    color: "#8B909A",
                    display: "flex",
                  }}
                >
                  Job
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    fontFamily: "Montserrat",
                    color: "#8B909A",
                    display: "flex",
                  }}
                >
                  details
                </p>
              </div>
              <div className="flex-1 border-t-2 border-#F9F9FD-500" />
            </div>

            <div>
              <div className="flex flex-row gap-10 p-2">
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Job Title
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("jobTitle")}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Department
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("department")}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Office
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("office")}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10 p-2">
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Facility
                  </label>
                  <select
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px] p-2"
                    placeholder="Select "
                    {...register("facility")}
                  >
                    <option value="select">Select</option>
                    <option value="medical">medical</option>
                    <option value="dental">dental</option>
                  </select>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Language
                  </label>
                  <select
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px] p-2"
                    placeholder="Select "
                    defaultValue={"select"}
                    {...register("language")}
                  >
                    <option value="select">Select</option>
                    <option value="english">English</option>
                    <option value="urdu">Urdu</option>
                    <option value="arabic">Arabic</option>
                  </select>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Degree
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("degree")}
                  />
                </div>
              </div>
            </div>
            <div className="flex p-2 w-full items-center gap-4">
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  color: "#8B909A",
                }}
              >
                Address
              </p>
              <div className="flex-1 border-t-2 border-#F9F9FD-500" />
            </div>
            <div>
              <div className="flex flex-row gap-10 p-2">
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Street address
                  </label>
                  <Input
                    type="text"
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("address")}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    State or province
                  </label>
                  <Input
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("state")}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Country or region
                  </label>
                  <Input
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("country")}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-10 p-2 w-4/6">
                <div className="w-full flex flex-col gap-1">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    City
                  </label>
                  <Input
                    className="h-[48px] border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("city")}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    ZIP or postal Code
                  </label>
                  <Input
                    className="h-[48px]  border border-solid border-[#D3D4D4] rounded-[8px]"
                    placeholder="Type here..."
                    {...register("postalCode")}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row p-2 gap-2 w-full">
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  color: "#8B909A",
                  display: "flex",
                }}
              >
                Contact
              </p>
              <div className="flex-1 border-t-2 border-#F9F9FD-500" />
            </div>
            <div>
              <div className="flex flex-row gap-10 p-2 w-2/3">
                <div className="w-full flex flex-col gap-1">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Office phone
                  </label>
                  <Input
                    className="h-[48px] border border-solid border-[#D3D4D4]"
                    placeholder="Type here..."
                    {...register("officePhone")}
                  />
                </div>

                <div className="w-full flex flex-col gap-1">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Mobile phone
                  </label>
                  <Input
                    className="h-[48px]  border border-solid border-[#D3D4D4]"
                    placeholder="Type here..."
                    {...register("mobilePhone")}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row p-2 gap-2 w-full">
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  color: "#8B909A",
                  display: "flex",
                }}
              >
                Account
              </p>
              <div className="flex-1 border-t-2 border-#F9F9FD-500" />
            </div>
            <div>
              <div className="flex  p-2 items-center  w-1/3">
                <div className="w-full flex flex-col gap-1">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    Initial password
                  </label>
                  <Input
                    className="h-[48px] border border-solid border-[#D3D4D4]  dark:border-white "
                    placeholder="Type here..."
                    type="password"
                    {...register("password")}
                  />
                </div>
              </div>
              <div className="flex mt-2 p-2 items-center justify-between  w-1/3">
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    fontFamily: "Montserrat",
                    color: "#19151C",
                  }}
                >
                  Sign in enabled
                </p>
                <Switch />
              </div>
            </div>

            <div className="flex items-end justify-end p-2 mt-5 w-full">
              <div className="flex flex-row gap-8 p-3">
                <Button
                  style={{
                    width: "120px",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #1D374E",
                    marginRight: "5px",
                  }}
                >
                  Cancel
                </Button>

                <DialogEdit />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
