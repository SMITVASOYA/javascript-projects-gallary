import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <h5 className="text-center">{product.name}</h5>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image_link} variant="top" />
      </Link>
      <Card.Body>
        <h6>
          <i class="fas fa-globe"></i>
          <a
            href={product.demolink}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Live Demo
          </a>
        </h6>
        <Card.Text as="h6">{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
