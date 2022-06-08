import { Link } from "react-router-dom";
import './aboutPage.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const AboutPage = () => {
    return (
        <div className="about__flex">
            <Header/>
            <main className="about">
                <div className="container">
                    <h2 className="about__title">About The Platform</h2>
                    <div className="about__cont">
                        <div className="about__text">Address: 125167, Moscow, Leningradsky prospect, 2 39, building 79</div>
                        <div className="about__text">Phone: +7 (495) 725-63-57</div>
                        <div className="about__text">E-mail: news@corp.mail.ru</div>
                        <div className="about__text">Advertising placement: mediasales@corp.mail.ru</div>
                        <div className="about__text">Publication of the register in the register of news aggregators (No. 1-NA) of the Federal Service for Supervision of Communications, Information Technology and Mass Communications (Roskomnadzor) on February 16, 2017.</div>
                    </div>
                    <Link to="/" className="about__link-home">/home</Link>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

 export default AboutPage;