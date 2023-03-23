import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    return (
      <Card className="h-100 col-lg-5 m-2">
        <Card.Img
          variant="top"
          src={this.state.product.imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column card-body">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{this.state.product.productName}</span>
            <span className="ms-2 text-muted">${this.state.product.price}</span>
          </Card.Title>
          <div className="mt-auto">
            {this.state.product.quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => {
                  this.props.onIncrement(this.state.product);
                }}
              >
                + Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <Button
                    onClick={() => {
                      this.props.onDecrement(this.state.product);
                    }}
                  >
                    -
                  </Button>
                  <div>
                    <span className="fs-3">{this.state.product.quantity}</span>{" "}
                    in cart
                  </div>
                  <Button
                    onClick={() => {
                      this.props.onIncrement(this.state.product);
                    }}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    this.props.onDelete(this.state.product);
                  }}
                >
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
