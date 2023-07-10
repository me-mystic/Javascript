import React from 'react'

import Nav from './Components/nav.jsx'
import Main from './Components/mainC.jsx'
import Card from './Components/card.jsx'
export default function App() {
  const color = ["red", "green", "blue", "orange"];
  return (
    <div>
      {color.map(color => {
          return <h1>{color}</h1>
      })}
      <Nav />
      <Main />
      <Card
        img="img1.svg"
        rating={5.0}
        count={6}
        location="USA"
        title="Life lessons with Katie Zaferes"
        pricing={136}
      />
      <Card
        img="img2.svg"
        rating={5.0}
        count={30}
        location="USA"
        title="Learn wedding photography"
        pricing={125}
      />
    </div>
  );
}
