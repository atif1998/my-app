import { Detail } from "@/components/Detail";
import { DialogDemo } from "@/components/Dialog";
import DialogDemoRemove from "@/components/DialogRemove";
import Register from "@/components/Form";
import { Login } from "@/components/Login";
import { Navbar } from "@/components/Navbar";
import { DataTableDemo } from "@/components/TableComponent";
import { TabsDemo } from "@/components/TabsComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Login />
      <DialogDemo />
      <DialogDemoRemove />
      {/* <Navbar />
      <DataTableDemo />
      <Register />

      <TabsDemo />
      <div
        style={{
          width: 350,
          height: 350,
          border: "1px solid #000000",
        }}
      >
        <Button
          style={{
            marginTop: 20,
            width: "calc(100% - 40px)",
            height: 48,
            margin: "0 20px",
            backgroundColor: "#1D374E",
            marginBottom: 20,
          }}
        >
          Login with Microsoft
        </Button>
        <Button
          style={{
            width: "calc(100% - 40px)",
            height: 48,
            margin: "0 20px",
            backgroundColor: "#1D374E",
            marginBottom: 20,
          }}
        >
          Login with Google
        </Button>
        <Button
          style={{
            marginTop: 20,
            width: "calc(100% - 40px)",
            margin: "0 20px",
            height: 48,
            backgroundColor: "#1D374E",
            marginBottom: 20,
          }}
        >
          Login with Apple
        </Button>
        <Button
          style={{
            width: "calc(100% - 40px)",
            margin: "0 20px",
            height: 48,
            backgroundColor: "#1D374E",
            marginBottom: 20,
          }}
        >
          Login with Email
        </Button>
        <Button
          style={{
            marginTop: 20,
            width: "calc(100% - 40px)",
            margin: "0 20px",
            backgroundColor: "#1D374E",
            marginBottom: 20,
            height: 48,
          }}
        >
          Login with phone
        </Button>
      </div> */}
    </div>
  );
}
