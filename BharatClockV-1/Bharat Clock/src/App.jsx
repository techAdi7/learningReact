//            [NOTE :- ITS A TODO APP MISTAKENLY IT IS WRITTEN AS BHARAT CLOCK]

import Heading from "./components/Heading";
import RowOne from "./components/RowOne";
import RowTwo from "./components/RowTwo";
import RowThree from "./components/RowThree";
import "./App.css";

function App() {
  return (
    <center>
      <div className="toDo-container">
        <Heading />

        <div className="align">
          <RowOne />

          <RowTwo></RowTwo>

          <RowThree></RowThree>
        </div>
      </div>
    </center>
  );
}

export default App;
