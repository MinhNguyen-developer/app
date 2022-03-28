/** @format */

import React, { Component } from "react";

class HandleEvent extends Component {
  // handle event function
  handleClick = (name) => {
    alert("Hello " + name);
  };

  // param
  handleClickParam = (param) => {
    alert("param: " + param);
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick("Minh");
          }}
        >
          Click me
        </button>
        <button onClick={this.handleClick.bind(this, "hello")}>Click me</button>
      </div>
    );
  }
}

export default HandleEvent;
