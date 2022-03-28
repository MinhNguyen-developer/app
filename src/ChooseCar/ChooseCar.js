/** @format */

import React, { Component } from "react";

class ChooseCar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={require("../assets/Car_IMG/CarBasic/products/black-car.jpg")}
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div
                  className="row border border-link pt-2 pb-2"
                  onClick={() => {}}
                >
                  <img
                    style={{ width: "100%" }}
                    className="col-2"
                    src={require("../assets/Car_IMG/CarBasic/icons/icon-black.jpg")}
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2">
                  <img
                    style={{ width: "100%" }}
                    className="col-2"
                    src={require("../assets/Car_IMG/CarBasic/icons/icon-steel.jpg")}
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2">
                  <img
                    style={{ width: "100%" }}
                    className="col-2"
                    src={require("../assets/Car_IMG/CarBasic/icons/icon-silver.jpg")}
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2">
                  <img
                    style={{ width: "100%" }}
                    className="col-2"
                    src={require("../assets/Car_IMG/CarBasic/icons/icon-red.jpg")}
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseCar;
