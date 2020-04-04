import "./lightsaber.css";

import { Colour } from "../Colour";
import React from "react";

interface LightsaberProps {
  colour: Colour;
  handleClick: any;
}

interface LightsaberState {
  lightsaberSize: number;
  lightsaberStatus: LightsaberStatus;
}

enum LightsaberStatus {
  Open,
  Closed,
}

export class Lightsaber extends React.Component<
  LightsaberProps,
  LightsaberState
> {
  constructor(props: LightsaberProps) {
    super(props);
    this.state = {
      lightsaberSize: 300,
      lightsaberStatus: LightsaberStatus.Open,
    };
  }

  handleClick = () => {
    this.setState({
      lightsaberStatus:
        this.state.lightsaberStatus == LightsaberStatus.Closed
          ? LightsaberStatus.Open
          : LightsaberStatus.Closed,
    });

    this.lightLightsaber();
    this.props.handleClick();
  };

  lightLightsaber = () => {
    if (
      this.state.lightsaberSize >= 0 &&
      this.state.lightsaberStatus == LightsaberStatus.Closed
    ) {
      this.setState({ lightsaberSize: this.state.lightsaberSize - 3 });
    }

    if (
      this.state.lightsaberSize <= 300 &&
      this.state.lightsaberStatus == LightsaberStatus.Open
    ) {
      this.setState({ lightsaberSize: this.state.lightsaberSize + 3 });
    }
    if (this.state.lightsaberSize > 0 || this.state.lightsaberSize < 300) {
      window.requestAnimationFrame(this.lightLightsaber);
    }
  };

  render() {
    return (
      <div className="lightsaber">
        <div
          id="lightsaber-blade"
          className={
            "lightsaber__blade lightsaber__blade" + "--" + this.props.colour
          }
          style={{ width: this.state.lightsaberSize + "px" }}
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
