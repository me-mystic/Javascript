import React from 'react';

// css
import mainCss from '../assets/css/MainComp.module.css';

export default function MainComp() {
    return(
        <div className={mainCss.container}>
            <h1>Fun facts About React</h1>
            <ul className={mainCss.main__facts}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>               
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}