import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
// import img from './one.jpeg'

// export default ({ count }) =>

interface AppProps { }
interface AppState {
  name: string;
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  formatCount () {
    const { count } = this.state;
    return count === 0 ? 'zero' : (count + 1);
  }

  render() {
    return (
      <div>
        <h1>Count: {this.formatCount()}!</h1> 
        <button> Inc </button>
      </div>
    );
  }
}

export default Counter;

