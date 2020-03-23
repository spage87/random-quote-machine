import "./quote-box.css";

import { Colour } from "./Colour";
import { Lightsaber } from "./Components/Lightsaber";
import { Quote } from "./Components/Quote";
import React from "react";

interface AppState {
  quote: string;
  author: string;
  colour: Colour;
}

class App extends React.Component<{}, AppState> {
  state = {
    quote: "",
    author: "",
    colour: Colour.Green
  };

  componentDidMount = () => {
    this.fetchQuote();
  };

  fetchQuote = async () => {
    const result = await fetch(
      "https://gist.githubusercontent.com/spage87/998fc53a890dd14b40fa835975500a8b/raw/6c5868e947076b8aefda9cd4c3d6cd1bf370f58f/star-wars-quotes.json"
    );
    result
      .json()
      .then(response => {
        var randomQuote =
          response.quotes[Math.floor(Math.random() * response.quotes.length)];

        if (
          randomQuote.hasOwnProperty("quote") &&
          randomQuote.hasOwnProperty("author")
        ) {
          this.setState({
            quote: randomQuote["quote"],
            author: randomQuote["author"]
          });
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div id="quote-box">
        <Quote quote={this.state.quote} author={this.state.author} />
        <Lightsaber colour={this.state.colour} handleClick={this.fetchQuote} />
      </div>
    );
  }
}

export default App;
