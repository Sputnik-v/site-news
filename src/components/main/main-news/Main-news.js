import React, { useState,useEffect } from "react";
import ApiServer from "../../../api-server/Api-server";
import './main-news.css';

const MainNews = () => {

    const [news, setNews] = useState([]);
    const [loadNews, setLoadNews] = useState(false);

    const appServer = new ApiServer();

    useEffect(() => {
        appServer.getNewsPopularRequest('war')
            .then(({articles}) => {
                if (loadNews) {
                    return
                } else {
                    setLoadNews(true);
                    setNews(articles);
                }
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
                    <img src={urlToImage} alt="" className="news__link-img" />
                    <div className="news__cont">
                        <span className="news__descp">{descp}</span>
                    </div>
                </a>
        )
    }
   })

    return (
        <div className="news">
            <div className="news__container">
                {content}
            </div>
        </div>
       

    )
}

export default MainNews;