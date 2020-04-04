import "./quote.css";

import { Colour } from "../Colour";
import React from "react";

interface QuoteProps {
  quote: string;
  author: string;
  colour: Colour;
}

export class Quote extends React.Component<QuoteProps> {
  render() {
    return (
      <div className="quote">
        <div id="text" className="quote__quote">
          "{this.props.quote}"
        </div>
        <div
          id="author"
          className={"quote__author quote__author--" + this.props.colour}
        >
          {this.props.author}
        </div>
      </div>
    );
  }
}
