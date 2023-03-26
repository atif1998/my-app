import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import CartPage from "./components/Products/CartPage";
import AddProductForm from "./components/Products/AddPoductForm";
import EditProduct from "./components/Products/EditProduct";
import Login from "./pages/login";
import RegistrationForm from "./pages/registerationForm";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import { ChatPage } from "./pages/ChatPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      {/* <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/addProducts" element={<AddProductForm />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes> */}
    </div>
  );
}

export default App;
