import React, {useState, useEffect} from "react";
import ApiServer from "../../api-server/Api-server";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './countryNews.css';

const CountryNews = (props) => {
    
    const [news, setNews] = useState([]);

    const appServer = new ApiServer();

    useEffect(() => {
        console.log(props.string);
        appServer.getNewsPopularRequest(props.string)
            .then(({articles}) => {
                
                    setNews(articles);
                
            })
    },[])


   const content = news.map(({urlToImage, description, url}, i) => {
       const descp = description.slice(0, 50) + '...'
    if (!news) {
        return <a href="mail.ru" className="news__link">
                    <img src="https://cdn-icons-png.flaticon.com/512/1339/1339824.png" alt="404" className="news__link-img" />
                </a>
    } else {
        return (
                <a href={url} className="news__link" key={i}>
                    <img src={urlToImage} className="news__link-img" />
                    <div className="news__cont">
                        <span className="news__descp">{descp}</span>
                    </div>
                </a>
        )
    }
   })

    return (
        <>
            <Header/>
            <div className="news">
                <div className="news__container">
                    {content}
                    <a href="https://yandex.ru/news" className="news__link">
                        <img src="more__fone.jpg" alt="fone" className="news__link-img" />
                        <div className="news__cont news__cont-more">More News</div>
                    </a>
                </div>
            </div>
            <Footer/>
        </>

    )
    
}

export default CountryNews;