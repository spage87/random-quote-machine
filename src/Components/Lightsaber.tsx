import "./lightsaber.css";

import React from "react";

export class Lightsaber extends React.Component {
  render() {
    return (
      <div className="lightsaber">
        <div className="lightsaber__blade"></div>
        <a id="new-quote" className="lightsaber__hilt"></a>
      </div>
    );
  }
}
