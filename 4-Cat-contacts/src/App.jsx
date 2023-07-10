// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from "react"

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/


import Contact from './contact';
import Jokes from './Jokes';

function App() {
    return (
      <div>
        <Jokes 
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
        />
      </div>
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
    )
}

export default App


            // <div className="contact-card">
            //     <img src="./images/mr-whiskerson.png"/>
            //     <h3>Mr. Whiskerson</h3>
            //     <div className="info-group">
            //         <img src="./images/phone-icon.png" />
            //         <p>(212) 555-1234</p>
            //     </div>
            //     <div className="info-group">
            //         <img src="./images/mail-icon.png" />
            //         <p>mr.whiskaz@catnap.meow</p>
            //     </div>
            // </div>
            
            
            // <div className="contact-card">
            //     <img src="./images/fluffykins.png"/>
            //     <h3>Fluffykins</h3>
            //     <div className="info-group">
            //         <img src="./images/phone-icon.png" />
            //         <p>(212) 555-2345</p>
            //     </div>
            //     <div className="info-group">
            //         <img src="./images/mail-icon.png" />
            //         <p>fluff@me.com</p>
            //     </div>
            // </div>
            
            // <div className="contact-card">
            //     <img src="./images/felix.png"/>
            //     <h3>Felix</h3>
            //     <div className="info-group">
            //         <img src="./images/phone-icon.png" />
            //         <p>(212) 555-4567</p>
            //     </div>
            //     <div className="info-group">
            //         <img src="./images/mail-icon.png" />
            //         <p>thecat@hotmail.com</p>
            //     </div>
            // </div>
            
            // <div className="contact-card">
            //     <img src="./images/pumpkin.png"/>
            //     <h3>Pumpkin</h3>
            //     <div className="info-group">
            //         <img src="./images/phone-icon.png" />
            //         <p>(0800) CAT KING</p>
            //     </div>
            //     <div className="info-group">
            //         <img src="./images/mail-icon.png" />
            //         <p>pumpkin@scrimba.com</p>
            //     </div>
            // </div>