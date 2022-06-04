import React from 'react';
import {Card, Button} from 'react-bootstrap';

const ProductItem = ({ productItem, categoryName }) => {

  return (
    <Card className="col-10">
      <Card.Img variant="top" src={productItem.productImageUrl} />
      <Card.Body>
        <Card.Title className="text-monospace text-truncate">{productItem.productName}</Card.Title>
        {categoryName.length !== 0 ? "in "  + categoryName : ""}
        <p className="text-truncate">({productItem.productDesc})</p>
        <Card.Title className="font-weight-bold">
          {productItem.productPrice.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
          })}
        </Card.Title>
      </Card.Body>
      <Button variant="primary" className="mx-2 my-2">Add to Cart</Button>
    </Card>
  );
};

export default ProductItem;