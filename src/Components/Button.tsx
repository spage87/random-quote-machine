import "./lightsaber.css";

import { Colour } from "../Colour";
import React from "react";

interface ButtonProps {
  id: string;
  href: any;
  text: string;
  colour: Colour;
  handleClick: any;
}
export class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <div
        className={"button button--" + this.props.colour}
        onClick={this.props.handleClick ? this.props.handleClick : undefined}
      >
        <a
          id={this.props.id}
          href={this.props.href ? this.props.href : undefined}
        >
          {this.props.text}
        </a>
      </div>
    );
  }
}
