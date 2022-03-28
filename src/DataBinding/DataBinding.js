/** @format */

import { Component } from "react";
import HeaderDemo from "../components/LayoutEx/HeaderDemo";

// class component render
/** @format */
class DataBinding extends Component {
  name = "Minh";

  // Binding object
  student = {
    name: "Quoc",
    age: "20",
  };

  //Binding property
  // Return JSX
  renderImage = () => {
    return <img src="http://casestudy.cyberlearn.vn/image/covid.jpg" alt="#" />;
    // const virus = {
    //   id: "Covid-19",
    //   name: "Corona",
    //   alias: "SARs-CoV-2",
    // };
  };

  renderMultiComponent = () => {
    return <HeaderDemo />;
  };

  renderVirusInfo = () => {
    const virus = {
      id: "Covid-19",
      name: "Corona",
      alias: "SARs-CoV-2",
    };
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src="holder.js/100px180/"
          alt={virus.alias}
        />
        <div className="card-body">
          <h4 className="card-title">{virus.name}</h4>
          <p className="card-text">{virus.id}</p>
        </div>
      </div>
    );
  };

  render() {
    const student = {
      name: "Minh",
      age: 25,
    };
    return (
      <div>
        <h1>React class component data binding</h1>
        <h1>Binding Object</h1>
        <h1>
          Name: {this.student.name} - Age: {this.student.age}
        </h1>
        <h1>
          Hello {student.name} - age: {student.age}
        </h1>
        <h3>Binding function</h3>
        {this.renderImage()}
        {this.renderMultiComponent()}
        {this.renderVirusInfo()}
      </div>
    );
  }
}

// Functional
const DataBindingRFC = () => {
  const name = "Minh";
  return (
    <div>
      <h1>React functional databinding</h1>
      <h1>{name}</h1>
    </div>
  );
};
export default DataBinding;
