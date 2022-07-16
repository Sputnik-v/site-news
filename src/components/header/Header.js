import React, {useState, useEffect} from "react";
import ApiServer from "../../api-server/Api-server";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [id, setId] = useState('');
    

    const ap = new ApiServer();

    useEffect(() => {
        
        ap.getNewsPopularRequest('Ukraine')
            .then(({articles}) => {
                if(load) {
                    return
                } else {
                    setLoad(true);
                    setData(articles);
                }
            });
    }, []);

    
    
  
    const elem = data.map((item, i) => {
        return (
            <span key={i}>
                <span className="header__name-source">{item.source.name}&nbsp;&#8658;</span>
                <span className="header__content">{item.title} &emsp;&bull;&emsp;</span>
            </span>
            
        )
    })



    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <a href="/"><div className="header__logo">News Today <span className="header__logo-span">Go</span></div></a>
                    <nav className="header__nav">
                        <ul className="header__ul">

                            <Link to="/world"><li className="header__li">World News</li></Link>
                            <Link to="/us_news"><li className="header__li">US News</li></Link>
                            <Link to="/ukr_news"><li className="header__li header__li-ukrain">Ukrain News</li></Link>
                            <Link to="/europe"><li className="header__li">Europe News</li></Link>
                            <Link to="/russian"><li className="header__li header__li-russian">Russian News</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
            <marquee className="header__string">{elem}</marquee>
        </header>
    )

}

export default Header;