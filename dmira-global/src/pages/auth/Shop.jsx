import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";

class Shop extends Component {
  state = {
    products: [
      { id: 1, productName: "Banana", price: 1200, quantity: 8 },
      { id: 2, productName: "Apple", price: 200, quantity: 0 },
      { id: 3, productName: "fish", price: 2000, quantity: 0 },
      { id: 4, productName: "table-water", price: 500, quantity: 0 },
      { id: 5, productName: "Car", price: 80000, quantity: 0 },
      { id: 6, productName: "Book", price: 1700, quantity: 0 },
    ],
  };

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
