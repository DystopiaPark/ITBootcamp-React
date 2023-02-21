import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, count: 1 },
      { id: 2, count: 2 },
      { id: 3, count: 3 },
      { id: 4, count: 4 },
    ],
  };

  handleIncrement = (id) => {
    // spread operator
    const counters = [...this.state.counters]; /* kopira vrednost counters*/

    this.setState({
      counters: counters.map((counter) => {
        return counter.id === id
          ? { ...counter, count: counter.count + 1 }
          : counter;
      }),
    });
  };

  handleDecrement = (id) => {
    // spread operator
    const counters = [...this.state.counters]; /* kopira vrednost counters*/

    this.setState({
      counters: counters.map((counter) => {
        return counter.id === id
          ? { ...counter, count: counter.count - 1 }
          : counter;
      }),
    });
  };

  handleDelete = (id) => {
    console.log("handle delete");
    const counters = [...this.state.counters];
    this.setState({
      counters: counters.filter((counter) => {
        console.log("filter", id, counter);
        return counter.id !== id;
      }),
    });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.count}
            id={counter.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> /* props */
        ))}
      </div>
    );
  }
}

export default Counters;
