import Register from "./Form";
import { Navbar } from "./Navbar";
import { DataTableDemo } from "./TableComponent";
import { Form } from "./ui/form";
import { MdNotificationsNone } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import Sidebar from "./ui/sidebar/sidebar";
import Notification from "@/app/assests/svgs/Notification";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "./ui/button";
import Add from "@/app/assests/svgs/Add";
import { TabsDemo } from "./TabsComponent";
import Navigation from "./Navigation";

export const Detail = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "16%",
          background: "linear-gradient(to top left, #081623, #355572)",
        }}
      >
        <Sidebar />
      </div>
      <div style={{ width: "84%", height: "calc(100vh - 9rem)" }}>
        <div
          style={{
            width: "100%",
            height: "4.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "20px",
              alignItems: "center",
            }}
          >
            {/* <Navbar /> */}
            <p
              style={{
                padding: "20px",
                borderRight: "1px solid #EDEDED",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "medium",
                color: "#19151C",
                lineHeight: "24px",
              }}
            >
              Sunrise Hospital
            </p>
            <p
              style={{
                padding: "20px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "medium",
                color: "#8B909A",
                lineHeight: "17px",
              }}
            >
              Admin Panel
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              borderLeft: "1px solid #EDEDED",
            }}
          >
            <Notification />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ margin: "10px" }}>John doe</p>
              <Image
                src="/Profile.png"
                alt=""
                width={36}
                height={36}
                style={{ marginRight: "10px" }}
              />
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        {/* <Button
          style={{
            backgroundColor: "#1D374E",
            color: "white",
            width: "146px",
            height: "44px",
            borderRadius: "6px",
            // padding: "11px 14px 11px 14px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Add />
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "500",
              color: "#FFFFFF",
              lineHeight: "15px",
            }}
          >
            Add New User
          </p>
        </Button> */}
        <TabsDemo />

        {/* <DataTableDemo /> */}
      </div>
    </div>
  );
};
