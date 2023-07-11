import React from 'react';

// img
import star from '../assets/imgs/card/star.svg';
import img1 from '../assets/imgs/card/img1.svg';
import img2 from '../assets/imgs/card/img2.svg';
import img3 from '../assets/imgs/card/img3.svg';

// css
import cardCss from '../assets/css/card.module.css';
export default function Card(props) {
    let badgeText;
    if(!props.openSpots) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <card>
            {badgeText && <div className={cardCss.soldBadge}>{badgeText}</div>}
            <img className={cardCss.card__img} src={`src/assets/imgs/card/${props.coverImg}`} alt="" />
            <div className={cardCss.card__stats}>
                <img className={cardCss.star} src={star} alt="" />
                <span className={cardCss.rating}>{props.stats.rating}
                </span>
                <span className={cardCss.gray}>({props.stats.reviewCount}) • </span>
                <span className={cardCss.gray}>{props.location}</span>
            </div>
            <p className={cardCss.card__title}>
                {props.title}
            </p>
            <p className={cardCss.card__pricing}>
            <span className={cardCss.bold}>From ${props.price}</span> / person
            </p>
        </card>
    );
}