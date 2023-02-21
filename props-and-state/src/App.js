import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters.js";

import Form from "./components/forms.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counters />
        <Form />
      </div>
    );
  }
}

export default App;
