import React, { Component } from "react";

class GetSnapshotBeforeUpdate extends Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 3000);
  }
  // usual purpose: scroll position
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before update, my favorite color was " + prevState.favoriteColor;
    return null;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "After update, my favorite color is " + this.state.favoriteColor;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdate;
