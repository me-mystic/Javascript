import React from 'react';

// img
import star from '../assets/imgs/card/star.svg';
import img1 from '../assets/imgs/card/img1.svg';
import img2 from '../assets/imgs/card/img2.svg';
import img3 from '../assets/imgs/card/img3.svg';

// css
import cardCss from '../assets/css/card.module.css';
export default function Card(props) {
    
    return (
        <card>
            <img className={cardCss.card__img} src={`src/assets/imgs/card/${props.img}`} alt="" />
            <div className={cardCss.card__stats}>
                <img className={cardCss.star} src={star} alt="" />
                <span className={cardCss.rating}>{props.rating}
                </span>
                <span className={cardCss.gray}>({props.count}) • </span>
                <span className={cardCss.gray}>{props.location}</span>
            </div>
            <p className={cardCss.card__title}>
                {props.title}
            </p>
            <p className={cardCss.card__pricing}>
            <span className={cardCss.bold}>From ${props.pricing}</span> / person
            </p>
        </card>
    );
}