import React from 'react';

// img
import logo from '../assets/logo.svg'

// css
import navCss from '../assets/css/nav.module.css';
export default function bar() {
    return(
        <nav>
         <img src={logo} className={navCss.logo} alt="" />
        </nav>
    );
}