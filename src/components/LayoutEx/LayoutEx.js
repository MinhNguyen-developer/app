/** @format */

import React, { Component } from "react";
import HeaderDemo from "./HeaderDemo";
import Product from "./Product";
class Layout extends Component {
  render() {
    return (
      <div>
        <HeaderDemo />
        <Product />
      </div>
    );
  }
}

export default Layout;
