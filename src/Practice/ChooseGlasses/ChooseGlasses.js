/** @format */

import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";
class ChooseGlasses extends Component {
  state = {
    glassesCurrent: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return dataGlasses.map((item, index) => {
      return (
        <img
          onClick={() => {
            this.changeGlass(item);
          }}
          className="ml-2 p-2 border border-width-1"
          style={{ width: "100px", cursor: "pointer" }}
          key={index}
          src={item.url}
        />
      );
    });
  };

  changeGlass = (newGlass) => {
    this.setState({ glassesCurrent: newGlass });
  };

  render() {
    const keyFrames = `@keyframes animationChangeGlass${Date.now()} {
      from {
        width: 0;
        transform: rotate(90deg);
        opacity: 0;
      } 
      to {
        width: 150px;
        transform: rotate(0deg);
        opacity: 0.7;
      }
    }`;

    const styleGlasses = {
      width: 150,
      top: 75,
      right: 70,
      opacity: 0.7,
      animation: `animationChangeGlass${Date.now()} 1s`,
    };

    const infoStyle = {
      width: 250,
      top: 200,
      left: 270,
      paddingLeft: 15,
      backgroundColor: "rgba(255, 127, 0, .5)",
      height: 105,
    };
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          minHeight: "2000px",
          backgroundSize: "2000px",
        }}
      >
        <style>{keyFrames}</style>
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, .5", minHeight: "2000px" }}
        >
          <h3 className="text-center text-white p-5">TRY GLASSES APP ONLINE</h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    style={{ width: 250 }}
                    src="/glassesImage/model.jpg"
                    className="position-absolute"
                  />
                  <img
                    style={styleGlasses}
                    src={this.state.glassesCurrent.url}
                    className="position-absolute"
                  />
                  <div style={infoStyle} className="position-relative">
                    <p>{this.state.glassesCurrent.name}</p>
                    <p>{this.state.glassesCurrent.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img style={{ width: 250 }} src="/glassesImage/model.jpg" />
              </div>
            </div>
          </div>
          <div className="bg-light text-center container p-4 mt-5 d-flex justify-content-center">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseGlasses;
