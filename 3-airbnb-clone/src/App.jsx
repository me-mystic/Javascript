import React from 'react'

// components
import Nav from './Components/nav.jsx'
import Main from './Components/mainC.jsx'
import Card from './Components/card.jsx'

// css
import appCss from './assets/css/app.module.css'
// data
import { cardInfo } from './Components/cardDb.js';

export default function App() {

  const cards = cardInfo.map((x) => {
    return (
      <Card key= {x.id}
            // item = {x}
            {...x} 
      />
    )
  })

  return (
    <div>
      <Nav />
      <Main />
      <section className={appCss.cards__list}>
        {cards}
      </section>
    </div>
  );
}
