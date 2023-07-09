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
            <a href="https://www.instagram.com/shrutzztz/">
                <img src={insta} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/shruti-kolla-514637204/">
                <img src={linkIn} alt="" />
            </a>
            <a href="https://github.com/me-mystic">
                <img src={git} alt="" />
            </a>
        </footer>
    );
}