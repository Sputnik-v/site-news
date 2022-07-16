import React from "react";
import MainNews from "./main-news/Main-news";
import TechNews from "./tech-news/Tech-news";
import './main.css';


const Main = () => {


    return (
        <main className="main">
            <div className="container">
                <div className="main__block__head">
                    <h1 className="main__title">The main thing today...</h1>
                    <MainNews/>
                </div>
                <div className="main__nav">
                    <TechNews/>
                </div>
            </div>
        </main>
    )
}

export default Main;