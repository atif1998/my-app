import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Table, Button } from "reactstrap";
import { removeProduct } from "../../counter/ProductSlice";

const CartPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onDelete = (index) => {
    dispatch(removeProduct(index));
  };
  const navigate = useNavigate();
  const handler = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <Container className="mt-4">
        <Row xs="1">
          <Col className="bg-light border py-5">
            <h2 className="text-center">Products</h2>
            <br />
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tbody key={`cart-list-item-${index}`}>
                    <tr key={product.name}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>
                        <Button
                          color="primary"
                          className="mr-3, mb-2"
                          onClick={() => handler(index + 1)}
                        >
                          Edit
                        </Button>
                        <Button color="danger" onClick={() => onDelete(index)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <th>
                  <p>No item in cart to Display</p>
                </th>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
