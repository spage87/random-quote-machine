import "./quote.css";

import React from "react";

export class Quote extends React.Component {
  render() {
    return (
      <div className="quote">
        <div id="text" className="quote__quote"></div>
        <div id="author" className="quote__author"></div>
      </div>
    );
  }
}
