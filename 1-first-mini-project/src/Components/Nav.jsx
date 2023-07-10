import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import navCss from '../assets/css/Nav.module.css';
// logo
import logo from '../assets/imgs/react.svg';

export default function Nav() {
    return(
        <div className={navCss.navBar}>
            <img src={logo} width='28px' alt="" />
            <h1>ReactFacts</h1>
            <h2>React Course - Project 1</h2>
        </div>
    );
}