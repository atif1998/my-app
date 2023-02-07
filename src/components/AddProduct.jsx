import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Slice from "../counter/Slice";

const AddProduct = () => {
  const dispatch = useDispatch;
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const handleChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };
  const postMethod = async () => {
    const rawResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const content = await rawResponse.json();
    console.log(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Slice.actions.setProduct(product));
    console.log("submited", product);
    postMethod();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="product">Product </Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="product price">Price</Label>
          <Input
            type="text"
            name="price"
            id="priceid"
            value={product.price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input
            type="text"
            name="quantity"
            id="quantuty id"
            value={product.quantity}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AddProduct;
