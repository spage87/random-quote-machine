import "./quote.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faJedi } from "@fortawesome/free-solid-svg-icons";

interface QuoteProps {
  quote: string;
  author: string;
}

export class Quote extends React.Component<QuoteProps> {
  render() {
    return (
      <div className="quote">
        <div id="text" className="quote__quote">
          "{this.props.quote}"
        </div>
        <div id="author" className="quote__author">
          {this.props.author}
        </div>
        <a
          id="tweet-quote"
          href={
            "https://twitter.com/intent/tweet?text=" +
            this.props.quote +
            " - " +
            this.props.author
          }
          className="quote__tweet"
        >
          <FontAwesomeIcon icon={faJedi} />
        </a>
      </div>
    );
  }
}
