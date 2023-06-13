// import logo from './logo.svg';
import React, {useState} from 'react';

import './App.css';

function App() {
  // const [count, setCount] = useState(4);
  const [state, setState] = useState({color: 'blue', count : 4});
  const color = state.color;
  const count = state.count;

  const decrementCount = () => {
      setState(prevState => {
        return {...prevState, count : prevState.count -1}
      });
  }

  const incrementCount = () => {
    setState(prevState => {
      return {...prevState, count : prevState.count +1}
    })
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>