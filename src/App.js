/** @format */

import Layout from "./components/LayoutEx/LayoutEx";
import Home from "./components/LayoutEx/Home";
import HomePractice from "./components/LayoutPractice/HomePractice";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import RenderingCondition from "./RenderingConditions/RenderingCondition";
import StateDemo from "./State/StateDemo";
import Styling from "./Styling/Styling";
import ChooseCar from "./Practice/ChooseCar/ChooseCar";
import RenderWithLoop from "./RenderWithLoop/RenderWithLoop";
import RenderPractice from "./RenderPractice/RenderPractice";
import ChooseGlasses from "./Practice/ChooseGlasses/ChooseGlasses";
function App() {
  return (
    <div className="App">
      {/* <HomePractice /> */}
      {/* <RenderingCondition /> */}
      {/* <StateDemo /> */}
      {/* <Styling /> */}
      {/* <ChooseCar /> */}
      {/* <RenderWithLoop /> */}
      {/* <RenderPractice /> */}
      {/* <ChooseGlasses /> */}
      <ChooseCar />
    </div>
  );
}

export default App;
