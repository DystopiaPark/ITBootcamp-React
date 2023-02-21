import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 1,
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  constructor() {
    super();
    console.log("Constructor", this);
    this.handleIncrement = this.handleIncrement.bind(this); // nije nuzno, samo sa obicnom funkcijom ide
  }
  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  styles = {
    fontSize: "36px",
    fontWeight: "bold",
  };

  conditionalRenderingofMyArray() {
    return this.state.tags.length === 0 ? (
      "Empty array"
    ) : (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (increment) => {
    this.setState({
      count: this.state.count + increment,
    });
  };

  handleDecrement = (decrement) => {
    this.setState({
      count: this.state.count - decrement,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ fontSize: 24 }}>Hello World!</h1>
        <p style={this.styles}>{2 + 2}</p>
        <div>
          <span style={{ color: "green", background: "red" }}>
            {this.formatCount()}
          </span>
          {/* <button className="btn-primary" onClick={this.handleIncrement}> */}
          <button
            className="btn-primary"
            onClick={() => this.handleIncrement(1)}
          >
            Increment
          </button>
          <button
            className="btn-primary"
            onClick={() => this.handleDecrement(1)}
          >
            Decrement
          </button>
        </div>
        <img src={this.state.imgUrl} alt="random picture" />
        {/* <ul>
          {this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul> */}
        <p>{this.state.tags.length === 0 ? "niz je prazan" : "My tags"}</p>
        <div>{this.conditionalRenderingofMyArray()}</div>
      </div>
    );
  }
}

export default App;
