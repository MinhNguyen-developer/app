/** @format */

import React, { Component } from "react";

class StateDemo extends Component {
  // state: có sẵn của react class component
  state = {
    status: false,
  };
  //   setState sss

  userLogin = {
    name: "Minh",
    age: 20,
  };

  login = () => {
    let newState = { status: true };
    this.setState(newState, () => {
      console.log(this.state);
    });
  };

  renderUserLogin = () => {
    if (this.state.status) {
      return <div className="text-center">{this.userLogin.name}</div>;
    }
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        Login
      </button>
    );
  };

  render() {
    return <div>{this.renderUserLogin()}</div>;
  }
}

export default StateDemo;
