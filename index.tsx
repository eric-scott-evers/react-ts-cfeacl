import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello'; 
import Counter from './Counter';
// import Toggle from './Toggle';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

function Form(){
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <button type='submit'> Submit </button>
    </Form>
  )
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      count: 1
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Counter count={this.state.count} />
        {Form()}
        {Tool}
          <pre> {` 
            let a and b be vectors 
            let ∧ be the wedge operator

              a ∧ b = w 
            
            | a1 a2 |   
            |       | = w 
            | b1 b2 |  

            let a = (2,3)
            and b = (1,2)
            then 

            w = 4 - 3 = e12  

          `} </pre>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
