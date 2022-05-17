import React from "react";
import MainNews from "./main-news/Main-news";
import './main.css';


const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block__head">
                    <h1 className="main__title">The main thing today</h1>
                    <MainNews/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates repellendus eius explicabo rerum expedita, facere dolore blanditiis corrupti similique recusandae qui aliquid itaque iste dolorum delectus, vitae alias. Vitae.
                </div>
                <div className="main__nav">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel iusto maxime vero quas modi accusantium iure et! Quis, doloremque, ipsa tempore voluptatibus porro molestiae, beatae non similique eligendi excepturi accusantium!
                </div>
            </div>
        </main>
    )
}

export default Main;