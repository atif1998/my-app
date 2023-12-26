"use client";

import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetValidationSchema } from "../contants/validators/add-validator";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Register from "@/components/Form";

const Page = () => {
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
      <div style={{ width: "16%", height: "100%", backgroundColor: "red" }}>
        {" "}
        gggg
      </div>
      <div style={{ width: "84%", height: "100%", padding: "20px" }}>
        <form onSubmit={handleSubmit(Submit)}>
          <div>
            <div className="flex w-full items-center justify-center flex-row gap-4 p-10">
              <p>Personaldetail</p>
              <Separator />
            </div>
            <div className="flex flex-row gap-10 p-2">
              <Input
                type="text"
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("name")}
              />
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("firstName")}
              />
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("lastName")}
              />
            </div>
            <div className="flex flex-row gap-10 p-2">
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("userName")}
              />
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("email")}
              />
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("gender")}
              />
            </div>
          </div>
          <div className="flex items-center justify-center flex-row p-10 gap-4">
            <p className="flex">Jobdetails</p>
            <Separator />
          </div>

          <div>
            <div className="flex flex-row gap-10 p-2">
              <Input
                type="text"
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("jobTitle")}
              />
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("department")}
              />
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("office")}
              />
            </div>
            <div className="flex flex-row gap-10 p-2">
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("facility")}
              />
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("language")}
              />
              <Input
                className="h-[48px] border border-solid border-[#D3D4D4]"
                placeholder="Type here..."
                {...register("degree")}
              />
            </div>
          </div>
          <div className="flex items-center justify-center flex-row p-10 gap-4">
            <p>Address</p>
            <Separator />
          </div>
          <div>
            <div className="flex flex-row gap-10 p-2">
              <div className="w-full">
                <label htmlFor="">Street Address</label>
                <Input
                  type="text"
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("address")}
                />
              </div>
              <div className="w-full">
                <label>State or Province</label>
                <Input
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("state")}
                />
              </div>
              <div className="w-full">
                <label>Country</label>
                <Input
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("country")}
                />
              </div>
            </div>
            <div className="flex flex-row gap-10 p-2">
              <div className="w-full">
                <label>City</label>
                <Input
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("city")}
                />
              </div>
              <div className="w-full">
                <label>Postal Code</label>
                <Input
                  className="h-[48px] border border-solid border-[#D3D4D4]"
                  placeholder="Type here..."
                  {...register("postalCode")}
                />
              </div>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
