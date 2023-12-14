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
      <div style={{ width: "84%" }}>
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
            style={{ display: "flex", padding: "20px", alignItems: "center" }}
          >
            {/* <Navbar /> */}
            <p
              style={{
                padding: "20px",
                borderRight: "1px solid #EDEDED",
                fontFamily: "Montserrat, sans-serif",
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
                fontFamily: "Montserrat, sans-serif",
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
        <DataTableDemo />
      </div>
    </div>
  );
};
