import "./quote-box.css";

import { Colour } from "./Colour";
import { Lightsaber } from "./Components/Lightsaber";
import { Quote } from "./Components/Quote";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <Quote />
        <Lightsaber colour={Colour.Green} />
      </div>
    );
  }
}

export default App;
