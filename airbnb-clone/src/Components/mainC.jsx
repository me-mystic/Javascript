import React from 'react';

// img
import grp from '../assets/imgs/Group.svg';

// css
import mainCss from '../assets/css/main.module.css';
export default function mainC() {
    return (
        <main>
            <img className={mainCss.main__photo} src={grp} alt="" />
            <h1 className={mainCss.main__head}>Online Experiences</h1>
            <p className={mainCss.main__para}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </main>
    );
}