import Register from "@/components/Form";
import { DataTableDemo } from "@/components/TableComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Home
        <DataTableDemo />
        <Register />
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
        </div>
      </div>
    </main>
  );
}
