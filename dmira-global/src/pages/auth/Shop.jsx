import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          productName: "Banana",
          price: 1200,
          quantity: 8,
          imgUrl: "/imgs/banana.jpg",
        },
        {
          id: 2,
          productName: "Apple",
          price: 200,
          quantity: 0,
          imgUrl: "/imgs/computer.jpg",
        },
        {
          id: 3,
          productName: "computer",
          price: 2000,
          quantity: 0,
          imgUrl: "/imgs/computer.jpg",
        },
        {
          id: 4,
          productName: "table-water",
          price: 500,
          quantity: 0,
          imgUrl: "/imgs/computer.jpg",
        },
        {
          id: 5,
          productName: "Car",
          price: 80000,
          quantity: 0,
          imgUrl: "/imgs/car.jpg",
        },
        {
          id: 6,
          productName: "Book",
          price: 1700,
          quantity: 0,
          imgUrl: "/imgs/book.jpg",
        },
      ],
    };
  }

  handleIncrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts[index].quantity++;

    this.setState({ products: allProducts });
  };

  handleDecrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts[index].quantity--;

    this.setState({ products: allProducts });
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Confirm delete")) {
      allProducts.splice(index, 1);

      this.setState({ products: allProducts });
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <h2 className="text-muted">Shop</h2>
          <div className="row">
            {this.state.products.map((prod) => {
              return (
                <Product
                  key={prod.id}
                  product={prod}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
