import React, { Component } from "react";

class Input extends Component {
  state = {
    name: "",
    age: "",
    errorMsg: "",
  };

  handleChange = (event) => {
    const nameIzTargeta = event.target.name;
    const valueIzTargeta = event.target.value;
    console.log("nameIzTargeta je: ", nameIzTargeta);
    console.log("valueIzTargeta je: ", valueIzTargeta);

    this.setState({ [nameIzTargeta]: valueIzTargeta }); // dinamicki pristup objektu

    let errorMsg = "";
    if (nameIzTargeta === "age") {
      // ne konkretan name, vec atribut name
      if (valueIzTargeta !== "" && !Number(valueIzTargeta)) {
        errorMsg = "You must enter a number!";
      }
    }

    this.setState({ errorMsg: errorMsg });
  };

  render() {
    return (
      <form>
        <h1>Hello {this.state.name}</h1>
        <p>Your age is {this.state.age}</p>

        <p>Enter your name</p>
        <input type="text" name="name" onChange={this.handleChange} />

        <p>Enter your age</p>
        <input type="text" name="age" onChange={this.handleChange} />
        <strong style={{ color: "red" }}>{this.state.errorMsg}</strong>
      </form>
    );
  }
}

export default Input;
