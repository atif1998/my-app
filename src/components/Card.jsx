import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import {
  useGetAllProductsQuery,
  useAddProductMutation,
} from "../Services/product.service";

const Card = () => {
  // const { product } = useSelector((state) => state.product);
  // const [] = useLazyGetAllProductsQuery;
  const { data, isLoading, isError } = useGetAllProductsQuery();
  const [addProduct, { isSucces }] = useAddProductMutation();
  console.log("", isLoading, data, isError);
  if (isLoading) return <div>loading....</div>;
  return (
    <div>
      <p>data list</p>

      {data.length > 0 ? (
        data?.map((data) => <li>{data.name}</li>)
      ) : (
        <p>no data foud</p>
      )}
    </div>
  );
};

export default Card;
