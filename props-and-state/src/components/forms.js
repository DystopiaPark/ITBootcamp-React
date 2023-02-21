import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
  };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("forma je submitovana " + this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Hello {this.state.name}
        <p>Enter your name</p>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
