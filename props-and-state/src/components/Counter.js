// import React, { Component } from "react";

// class Counter extends Component {
//   render() {
//     return (
//       <div>
//         <button className="btn-secondary">Decrement</button>
//         <span>{this.props.count}</span>
//         <button
//           className="btn-primary"
//           onClick={() => this.props.onIncrement(this.props.id)}
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

// const props = {
//  count: 0, id: 0, onIncrement: onIncrement =() => {}
// }

// destructuring
const Counter = ({ count, id, onIncrement, onDecrement, onDelete }) => {
  return (
    <div>
      <button className="btn-secondary" onClick={() => onDecrement(id)}>
        Decrement
      </button>
      <span>{count}</span>
      <button className="btn-primary" onClick={() => onIncrement(id)}>
        Increment
      </button>
      <button className="btn-danger" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Counter;
