import "./quote-box.css";

import { Button } from "./Components/Button";
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
    colour: Colour.Yellow,
  };

  componentDidMount = () => {
    this.fetchQuote();
  };

  setColour = () => {
    var author = this.state.author;
    this.setState({
      colour:
        author === "Darth Vader"
          ? Colour.Red
          : author === "Yoda" || author === "Qui-Gon Jinn"
          ? Colour.Green
          : author === "Obi-Wan Kenobi"
          ? Colour.Blue
          : Colour.Yellow,
    });
  };

  fetchQuote = async () => {
    const result = await fetch(
      "https://gist.githubusercontent.com/spage87/998fc53a890dd14b40fa835975500a8b/raw/6c5868e947076b8aefda9cd4c3d6cd1bf370f58f/star-wars-quotes.json"
    );
    result
      .json()
      .then((response) => {
        var randomQuote =
          response.quotes[Math.floor(Math.random() * response.quotes.length)];

        if (
          randomQuote.hasOwnProperty("quote") &&
          randomQuote.hasOwnProperty("author")
        ) {
          this.setState({
            quote: randomQuote["quote"],
            author: randomQuote["author"],
          });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const tweetLink: string =
      "https://twitter.com/intent/tweet?text=" +
      this.state.quote +
      " - " +
      this.state.author;

    return (
      <div id="quote-box">
        <Quote
          colour={this.state.colour}
          quote={this.state.quote}
          author={this.state.author}
        />
        <Lightsaber colour={this.state.colour} handleClick={this.setColour} />
        <Button
          text="New Quote"
          colour={this.state.colour}
          handleClick={this.fetchQuote}
          id="new-quote"
          href={null}
        />
        <Button
          text="Tweet"
          colour={this.state.colour}
          handleClick={null}
          id="tweet-quote"
          href={tweetLink}
        />
      </div>
    );
  }
}

export default App;
