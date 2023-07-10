import React from 'react';

// img
import star from '../assets/imgs/card/star.svg';
import img1 from '../assets/imgs/card/img1.svg';
import img2 from '../assets/imgs/card/img2.svg';
import img3 from '../assets/imgs/card/img3.svg';

// css
import cardCss from '../assets/css/card.module.css';
export default function bar() {
    return (
        <card>
            <img className={cardCss.card__img} src={img1} alt="" />
            <div className={cardCss.card__stats}>
                <img className={cardCss.star} src={star} alt="" />
                <span className={cardCss.rating}>5.0
                </span>
                <span className={cardCss.gray}>(6) • </span>
                <span className={cardCss.gray}>USA</span>
            </div>
            <p className={cardCss.card__title}>
                Life lessons with Katie Zaferes
            </p>
            <p className={cardCss.card__pricing}>
            <span className={cardCss.bold}>From $136</span> / person
            </p>
        </card>
    );
}