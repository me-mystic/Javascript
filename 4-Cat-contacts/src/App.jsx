
import './App.css'
import React from "react"


import Contact from './contact';
import Jokes from './Jokes.jsx';
import {jokesArr} from './jokes.js'
function App() {
//   const jokesArr = [
//     {
//         setup: " I got my daughter a fridge for her birthday.",
//         punchline: " I can't wait to see her face light up when she opens it.",
//         comments: ["boo", "saitee"]
//     },

//     {
//         setup: " How did the hacker escape the police?",
//         punchline: " He just ransomware!",
//         comments: ["boo", "saitee"]
//     },
//     {
//         setup: " Why don't pirates travel on mountain roads?",
//         punchline: " Scurvy.",
//         comments: ["boo", "saitee"]
//     },
//     {
//         setup: " Why do bees stay in the hive in the winter?",
//         punchline: " Swarm.",
//         comments: ["boo", "saitee"],
//     },
//     {
//         punchline: "It’s hard to explain puns to kleptomaniacs because they always take things literally.",
//         comments: ["boo", "saitee"]
//     }
// ]
const jokes = jokesArr.map((x, idx) => {
  console.log(x.setup, x.punchline);
  return <Jokes key = {idx} 
  setup = {x.setup} 
  punchline = {x.punchline}/>
})
    return (
      <div>
        {jokes}
        {/* <Jokes 
          setup = " I got my daughter a fridge for her birthday."
          punchline = " I can't wait to see her face light up when she opens it."  
          comments = {["boo", "saitee"]}
        />
        <Jokes 
          setup = " How did the hacker escape the police?"
          punchline = " He just ransomware!"  
          comments = {["boo", "saitee"]}
        />
        <Jokes 
          setup = " Why don't pirates travel on mountain roads?"
          punchline = " Scurvy."  
          comments = {["boo", "saitee"]}
        />
        <Jokes 
          setup = " Why do bees stay in the hive in the winter?"
          punchline = " Swarm."  
          comments = {["boo", "saitee"]}
        />
        <Jokes 
          punchline =  "It’s hard to explain puns to kleptomaniacs because they always take things literally."
          comments = {["boo", "saitee"]}
        /> */}
      </div>
    )
  }
  
  export default App
  
  // <div className="contacts">
  //   <Contact 
  //       img = "./images/mr-whiskerson.png"
  //       name = "Mr. Whiskerson"
  //       ph = "(212) 555-1234"
  //       mail = "mr.whiskaz@catnap.meow"
  //   />
  //   <Contact
  //       img = "./images/fluffykins.png"
  //       name = "Fluffykins"
  //       ph = "(212) 555-2345"
  //       mail = "fluff@me.com"
  //   />
  //   <Contact
  //       img = "./images/felix.png"
  //       name = "Felix"
  //       ph = "(212) 555-4567"
  //       mail = "thecat@hotmail.com"
  //   />
  //   <Contact
  //       img = "./images/pumpkin.png"
  //       name = "Pumpkin"
  //       ph = "(0800) CAT KING"
  //       mail = "pumpkin@scrimba.com"
  //   />
  // </div>