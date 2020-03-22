import "./quote-box.css";

import { Lightsaber } from "./Components/Lightsaber";
import { Quote } from "./Components/Quote";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <Quote />
        <Lightsaber />
      </div>
    );
  }
}

export default App;
