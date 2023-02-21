import React, { Component } from "react";

class ComponentWillUnmount extends Component {
  componentWillUnmount() {
    alert("This component will unmount");
  }

  render() {
    return <>I am child component</>;
  }
}

export default ComponentWillUnmount;
