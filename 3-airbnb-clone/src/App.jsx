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
            item = {x} 
        // img={x.coverImg}
        // desc={x.description}
        // location={x.location}
        // openSpots={x.openSpots}
        // price={x.price}
        // rating={x.stats.rating}
        // count={x.stats.reviewCount}
        // title={x.title}
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
