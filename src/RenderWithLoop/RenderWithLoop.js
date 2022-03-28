/** @format */
import React, { Component } from "react";

class RenderWithLoop extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      price: 1000,
      img: "./carbasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "red car",
      price: 1000,
      img: "./carbasic/products/red-car.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 1000,
      img: "./carbasic/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel car",
      price: 1000,
      img: "./carbasic/products/steel-car.jpg",
    },
  ];

  /* First way: using array 
  renderTable = () => {
    let componentArr = [];
    for (let index = 0; index < this.productList.length; index++) {
      let product = this.productList[index];
      let trJSX = (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img style={{ width: "100%" }} src={product.img} />
          </td>
          <td>{}</td>
        </tr>
      );
      componentArr.push(trJSX);
    }
    return componentArr;
  };
  */

  // Using map
  renderTable = () => {
    let componentArr = this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} style={{ width: "200px" }} />
          </td>
          <td></td>
        </tr>
      );
    });
    return componentArr;
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default RenderWithLoop;
