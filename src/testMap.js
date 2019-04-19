import React from 'react';
import HeaderBg from './img/0-header.jpg'
import {NavLink} from "react-router-dom";
import PorfolioImg1 from './img/1.jpg';
import PorfolioImg2 from './img/2.jpg';
import PorfolioImg3 from './img/3.jpg';
import PorfolioImg4 from './img/4.jpg';
import PorfolioImg5 from './img/5.jpg';
import PorfolioImg6 from './img/6.jpg';
import PorfolioImg7 from './img/7.jpg';
import PorfolioImg8 from './img/8.jpg';
import PorfolioImg9 from './img/9.jpg';
const TestMap = (props) => {
    return (<div>
            <div className="users">
                {props.users.map((itm) => {
                    return <li className="userItm" key={itm.id}>{itm.name} {itm.lastName} {itm.text}</li>
                })}
            </div>
            <div className="grid">
                {/*<div>item-1</div>*/}
                {/*<div>item-2</div>*/}
                {/*<div>item-3</div>*/}
                {/*<div>item-4</div>*/}
                {/*<div>item-5</div>*/}
               <header>Header</header>
                <article>
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet cupiditate delectus deserunt dicta dolore dolorum eveniet, ex fugiat harum id magni maiores nesciunt officiis repellat sed totam unde veritatis.</p>
                </article>
                <aside>Sidebar</aside>
                <footer>Footer</footer>

            </div>

            <div className="grid-maket">
                <header className="main-header grid-block" style={{backgroundImage:`url(${HeaderBg})`}}>
                    <div className="header-content grid-block">
                        <h1>We are real Creators</h1>
                        <div className="header-buttons">
                            <NavLink to="/" className="button">Follow</NavLink>
                            <NavLink to="/" className="button button-gray">Go Home</NavLink>
                        </div>
                    </div>
                </header>
                <section className="portfolio-section grid-block">
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg1})`}}>
                        <span>Cool</span>
                    </div>
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg2})`}}></div>
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg3})`}}></div>
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg4})`}}></div>
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg5})`}}></div>
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg6})`}}></div>
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg7})`}}></div>
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg8})`}}></div>
                    <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg9})`}}></div>
                </section>
            </div>

        </div>

    )
}
export default TestMap;