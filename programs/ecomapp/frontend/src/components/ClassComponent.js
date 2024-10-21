import React, { Component } from 'react';
import './ClassComponent.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h2>Counter</h2>
        <div className="count">{this.state.count}</div>
        <button onClick={this.increment} className="increment-btn">Increment</button>
        <button onClick={this.decrement} className="decrement-btn">Decrement</button>
      </div>
    );
  }
}

export default Counter;