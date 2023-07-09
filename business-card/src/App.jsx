import React from 'react';

// css
import appCss from '../src/assets/css/App.module.css';

// components
import Footer from '../src/Components/Footer.jsx'
import CardTop from '../src/Components/CardTop.jsx'
import CardBottom from '../src/Components/CardBottom.jsx'

function App() {

  return (
    <card>
      <div className={appCss.cols}>
        <CardTop />
        <CardBottom />
      </div>
      <Footer className={appCss.footer}/>
    </card>
  )
}

export default App
