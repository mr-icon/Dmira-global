import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Product extends Component {
  state = {
    id: this.props.id,
    productName: this.props.productName,
    price: this.props.price,
    quantity: this.props.quantity,
  };

  render() {
    return (
      <Card className="h-100 col-lg-6 m-2">
        {/* <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        /> */}
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{this.state.productName}</span>
            <span className="ms-2 text-muted">${this.state.price}</span>
          </Card.Title>
          <div className="mt-auto">
            {this.state.quantity === 0 ? (
              <Button className="w-100">+ Add To Cart</Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <Button>-</Button>
                  <div>
                    <span className="fs-3">{this.state.quantity}</span> in cart
                  </div>
                  <Button>+</Button>
                </div>
                <Button variant="danger" size="sm">
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
