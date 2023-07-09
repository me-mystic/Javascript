import React from 'react';

// img
import pic from '../assets/imgs/cardTop/proPic.jpg';
import mail from '../assets/imgs/cardTop/Mail.svg';

// css
import topCss from '../assets/css/cardTop.module.css';

export default function CardTop() {
    return (
        <top>
            <div className={topCss.pic}>
                <img src={pic} alt="" />
            </div>
            <div className={topCss.info}>
                <h1>Shruti Kolla</h1>
                <p>Frontend Developer</p>
                <a href="mailto:shrutikolla.2002@gmail.com">
                <button>
                    <img className={topCss.email_logo} src={mail} alt="" />
                    Email
                </button>
                </a>
            </div>
        </top>
    );
}