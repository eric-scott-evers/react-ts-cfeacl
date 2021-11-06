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
          Start editing to see some magic  
          <table>
            <tr> <td> ｜ a b ｜ </td></tr>
            <tr> <td> ｜ &#8239; &#8239;  ｜ = w  </td></tr>   
            <tr> <td> ｜ c d ｜</td></tr>
          </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
