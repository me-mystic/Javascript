import React from 'react';

// css
import botCss from '../assets/css/CardBot.module.css'
export default function CardBottom() {
    return(
        <bottom>
            <div className={botCss.about}>
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making cool designs and animations. I ensure that the application is optimized both in technology and aesthetics while delivering the best user experience on desktop and mobile. I have expertise in html, css, Vanilla js and React js.</p>
            </div>

            <div className={botCss.about}>
                <h1>Interests</h1>
                <p>Music. Artist. Reader. Internet fanatic. Entrepreneur. Travel geek. JPop culture ninja. Coffee fanatic. Anime</p>
            </div>
        </bottom>
    );
}