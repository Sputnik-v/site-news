import React, {useState, useEffect} from "react";
import ApiServer from "../../../api-server/Api-server";
import './tech-news.css';

const TechNews = () => {

    const [techNews, setTechNews] = useState([]);
    const [loadTech, setLoadTech] = useState(false);

    const api = new ApiServer();

    useEffect(() => {
        api.getNewsTech('techcrunch')
            .then(({articles}) => {
                if (loadTech) {
                    return
                } else {
                    setLoadTech(true);
                    setTechNews(articles);
                }
            })
    }, [])

    const contentTech = techNews.slice(0, 5).map(({author, title, url, urlToImage}, i) => {
        
        return (
            <a href={url} className="tech__block-img" key={i}>
                <img src={urlToImage} alt={author} className="tech__img" />
                <p className="tech__title">{title}</p>
                <div className="tech__span">
                    <span className="tech__author">{author}</span>
                    <span className="tech__more">more&raquo;</span>
                </div>      
            </a>
        )
    })

    return (
        <div className="tech">
            <h2 className="tech__head-title">Technical news</h2>
            {contentTech}
        </div>
    )
}

export default TechNews;