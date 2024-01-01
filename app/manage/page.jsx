import React from "react";
import { Arrow } from "../assests/svgs/Arrow";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const page = () => {
  const permisions = [
    "Admin",
    "Provider admin",
    "Tester",
    "Issue Reporter",
    "Allow my patients",
    "Allow referal",
    "Allow videochat",
    "Create group chat",
    "View Schedule",
    "Edit schedule",
    "Edit department",
  ];
  return (
    <div className="w-full h-full bg-gray-100 flex overflow-auto">
      <div className="w-1/6 h-screen bg-red-500">gggg</div>
      <div className="flex-1 h-full bg-gray-100 p-10 m-0 flex-col gap-3">
        <div className="flex flex-col gap-3 mb-3">
          <Arrow />
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17px",
              color: "#19151C",
            }}
          >
            Manage permisions
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4 ">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                marginBottom: "2px",
              }}
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
                Permision
              </p>
            </div>
            <div className="flex-1 border-t-2 border-#F9F9FD-500" />
          </div>
          <div className=" flex flex-col w-full min-h-screen justify-between">
            <div>
              {permisions.map((permision) => (
                <li className="flex items-center flex-row gap-3 p-2">
                  <Checkbox className="rounded-full" />
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      fontFamily: "Montserrat",
                      color: "#19151C",
                    }}
                  >
                    {permision}
                  </p>
                </li>
              ))}
            </div>
            <div className="w-full flex justify-end flex-row gap-3 p-3">
              <Button
                style={{
                  width: "130px",
                  height: "40px",
                  backgroundColor: "white",
                  color: "#1D374E",
                  border: "1px solid #1D374E",
                }}
              >
                Cancel
              </Button>
              <Button
                style={{
                  width: "130px",
                  height: "40px",
                  backgroundColor: "white",
                  color: "#1D374E",
                  border: "1px solid #1D374E",
                }}
              >
                Restore Default
              </Button>
              <Button
                style={{
                  width: "130px",
                  height: "40px",
                  backgroundColor: "#1D374E",
                  color: "white",
                }}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
