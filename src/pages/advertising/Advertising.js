import React from 'react';
import './advertising.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';


const Advertising = () => {
    return (
        <main className="advert">
            <Header/>
            <div className="container">
                <h3 className="advert__title">Advertising and prices</h3>
                <p className="advert__description">
                For advertising on the site on the sites 3DNews.ru and ServerNews.ru, please contact our advertising department at the email address <a className='advert__link' href='mailto:reclama@my.ru'>reclama@my.ru</a> or phone <a className='advert__link' href="tel: +74951234567">+7 (495) 123 45 67</a>
                </p>
                <p className="advert__description">
                For all your questions, as well as for information about additional placement options, such as: advanced targeting options for advertising campaigns, provision of additional services, placement of non-standard materials and organization of exclusive special projects, please contact the advertising department of 3DNews:
                </p>
                <ul className='advert__ul'>
                    <li className="advert__li">-- Ksenia Uskova — media director - <a className='advert__link' href='mailto:ksenia@3dnews.ru'>ksenia@3dnews.ru</a></li>
                    <li className="advert__li">-- Karina Tikhonova - Deputy Media Director - <a className='advert__link' href='mailto:karina@3dnews.ru'>karina@3dnews.ru</a></li>
                    <li className="advert__li">-- Anna Novikova - marketing communications manager - <a className='advert__link' href='mailto:market@3dnews.ru'>market@3dnews.ru</a></li>
                </ul>
                <p className="advert__description">
                 Or at the general address of the advertising department: <a className='advert__link' href='mailto:reclama@my.ru'>reclama@my.ru</a>
                </p>
                <h3 className="advert__title">Statistics</h3>
                <p className="advert__description">
                    The audience of the site News Today Go is about 300,000 unique users per day (5 million per month), the number of pages viewed per month is about 18 million.
                </p>
                
                <Link to="/" className="about__link-home">/home</Link>
            </div>
            <Footer/>
        </main>
    )
}

export default Advertising;