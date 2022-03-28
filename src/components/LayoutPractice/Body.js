/** @format */

import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <div className="container">
      <div>
        <Banner />
      </div>
      <div className="d-flex">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Body;
