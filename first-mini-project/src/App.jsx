import React from 'react';

// css
import appCss from '../src/assets/css/App.module.css'

// pages
import MainComponent from '../src/Components/MainComp.jsx';
import Nav from '../src/Components/Nav.jsx';

function App() {

  return (
    <div className={appCss.container}>
      <Nav/>
      <MainComponent/>
    </div>
  )
}

export default App
