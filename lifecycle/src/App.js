import React, { Component } from "react";
import "./App.css";
import ComponentWillUnmount from "./Components/ComponentWillUnmount";
import GetSnapshotBeforeUpdate from "./Components/GetSnapshotBeforeUpdate";
// import ChildComponent from "./Components/ChildComponent";
import ShouldComponentUpdate from "./Components/ShouldComponentUpdate";

class App extends Component {
  constructor() {
    super(); // sve lifecycle metode mogu da pristupe na this, samo ga zato pozivamo
    this.state = {
      name: "This name will change in 3 sec",
      show: true,
    };
  }
  // // Lifecycle metoda
  // componentDidMount() {
  //   console.log("ComponentDidMount");
  //   setTimeout(() => {
  //     this.setState({ name: "This name was changed" });
  //   }, 3000);

  //   //usual purpose
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }

  render() {
    return (
      <div className="App">
        {/* <p>{this.state.name}</p>
        <ChildComponent /> */}
        <ShouldComponentUpdate />
        <GetSnapshotBeforeUpdate />
        <br />
        <br />
        {this.state.show ? <ComponentWillUnmount /> : null}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Unmount Component" : "Mount Component"}
        </button>
      </div>
    );
  }
}

export default App;

// {
//   this.state.show ? "Unmount Component" : "Mount Component";
// }
// toggle
