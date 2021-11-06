import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
          A is the wedge operator    
          a A b  =  w 
          <table>
            <tr> <td> ｜ a1 a2 ｜ </td></tr>
            <tr> <td> ｜ &#8239; &#8239; &#8239;    ｜ = w  </td></tr>   
            <tr> <td> ｜ b1 b2 ｜</td></tr>
          </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
