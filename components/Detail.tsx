import Register from "./Form";
import { Form } from "./ui/form";

export const Detail = () => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <div
        style={{
          width: "16%",
          background: "linear-gradient(to top left, #081623, #355572)",
        }}
      >
        Detail
      </div>
      <div style={{ width: "84%" }}>
        <Register />
      </div>
    </div>
  );
};
