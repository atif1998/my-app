import Register from "./Form";
import { Navbar } from "./Navbar";
import { DataTableDemo } from "./TableComponent";
import { Form } from "./ui/form";
import { MdNotificationsNone } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";
import Sidebar from "./ui/sidebar/sidebar";

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
      <div style={{ width: "84%", padding: "20px" }}>
        <div
          style={{
            width: "100%",
            height: "4.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <Navbar />
            <p> Sunrise Hospital </p>
            <p>Admin Panel</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MdNotificationsNone />
            <p>John doe</p>
          </div>
        </div>
        <DataTableDemo />
      </div>
    </div>
  );
};
