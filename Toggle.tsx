import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  // -- 
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  // -- 
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'} 
      </button>
    );
  }
}

export default Toggle;