import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import CartPage from "./components/Products/CartPage";
import AddProductForm from "./components/Products/AddPoductForm";
import EditProduct from "./components/Products/EditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/addProducts" element={<AddProductForm />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
