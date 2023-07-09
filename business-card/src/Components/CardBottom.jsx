import React from 'react';

// css
import botCss from '../assets/css/CardBot.module.css'
export default function CardBottom() {
    return(
        <bottom>
            <div className={botCss.about}>
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

            <div className={botCss.about}>
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </bottom>
    );
}