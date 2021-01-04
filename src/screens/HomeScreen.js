import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import details from "../details";

const HomeScreen = () => {
  return (
    <>
      <h3>List Projects</h3>
      <Row>
        {details.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
