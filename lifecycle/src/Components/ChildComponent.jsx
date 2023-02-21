import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "shouldComponentUpdate method",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("componentDidMount");
      this.setState({ name: "ComponentDidMount method" });
    }, 3000);
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return false;
  }

  render() {
    return (
      <div>
        <p>This is a {this.state.name}</p>
      </div>
    );
  }
}
