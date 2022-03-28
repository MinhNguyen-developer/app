/** @format */

import React, { Component } from "react";

class RenderingCondition extends Component {
  login = false;
  username = "Minh";
  renderContent = () => {
    if (this.login) {
      return <p>Hello {this.username}</p>;
    }
    return <button>Login</button>;
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default RenderingCondition;
