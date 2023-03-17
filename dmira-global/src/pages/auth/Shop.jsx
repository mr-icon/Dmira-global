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
  render() {
    return (
      <div>
        <Navbar />
        <h4>Shop</h4>
        <div>
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                id={prod.id}
                productName={prod.productName}
                price={prod.price}
                quantity={prod.quantity}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shop;
