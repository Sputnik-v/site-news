import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__social">
                    <p className="footer__text">Watch news in</p>
                    <div className="footer__icons">
                        <a className="footer__social-link" href="https://www.instagram.com"><img src="icons/ins.png" alt="instagram" className="footer__icon" /></a>
                        <a className="footer__social-link" href="https://web.telegram.org"><img src="icons/tel.png" alt="telegramm" className="footer__icon" /></a>
                        <a className="footer__social-link" href="https://vk.com"><img src="icons/vk.png" alt="vkontakte" className="footer__icon" /></a>
                    </div>
                </div>
                <div className="footer__menu">
                    <Link className="footer__link-page" to="/about">About the platform</Link>
                    <Link className="footer__link-page" to="/terms">Terms of use</Link>
                    <Link className="footer__link-page" to="/feedback">Feedback</Link>
                    <Link className="footer__link-page" to="/advertising">Advertising</Link>
                </div>

            </div>
            <p className="footer__name-site">© 2022 Igor Tronin "igortronin@gmail.com" </p>
        </footer>
    )
}

export default Footer;