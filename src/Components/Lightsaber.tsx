import "./lightsaber.css";

import { Colour } from "../Colour";
import React from "react";

interface LightsaberProps {
  colour: Colour;
}

export class Lightsaber extends React.Component<LightsaberProps> {
  handleClick() {}
  render() {
    return (
      <div className="lightsaber">
        <div
          className={
            "lightsaber__blade lightsaber__blade" + "--" + this.props.colour
          }
        ></div>
        <a
          id="new-quote"
          className="lightsaber__hilt"
          onClick={this.handleClick}
        ></a>
      </div>
    );
  }
}
