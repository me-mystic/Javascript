import React from 'react';

// logo
import insta from '../assets/imgs/footer/Insta-Icon.svg';
import linkIn from '../assets/imgs/footer/Linkedin-Icon.svg';
import git from '../assets/imgs/footer/Git-Icon.svg';
// import insta from '../assets/imgs/footer/Insta-Icon.png';

// css
import footCss from '../assets/css/footer.module.css';
export default function Footer() {
    return (
        <footer>
            <a rel="noreferrer" href="https://www.instagram.com/shrutzztz/" target="_blank">
                <img src={insta} alt="" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/shruti-kolla-514637204/"  target="_blank">
                <img src={linkIn} alt="" />
            </a>
            <a rel="noreferrer" href="https://github.com/me-mystic" target="_blank">
                <img src={git} alt="" />
            </a>
        </footer>
    );
}