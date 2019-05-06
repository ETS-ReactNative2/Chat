import React from "react";
import HeaderBg from "../img/0-header.jpg";
import {Link, NavLink} from "react-router-dom";
import PorfolioImg1 from "../img/1.jpg";
import PorfolioImg2 from "../img/2.jpg";
import PorfolioImg3 from "../img/3.jpg";
import PorfolioImg4 from "../img/4.jpg";
import PorfolioImg5 from "../img/5.jpg";
import PorfolioImg6 from "../img/6.jpg";
import PorfolioImg7 from "../img/7.jpg";
import PorfolioImg8 from "../img/8.jpg";
import PorfolioImg9 from "../img/9.jpg";


const Posts = (props) => {
console.log("POSTS", props);
    return (

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
                <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg2})`}}>
                    <span>Cool</span>
                </div>
                <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg3})`}}>
                    <span>Cool</span>
                </div>
                <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg4})`}}>
                    <span>Cool</span>
                </div>
                <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg5})`}}>
                    <span>Cool</span>
                </div>
                <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg6})`}}>
                    <span>Cool</span>
                </div>
                <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg7})`}}>
                    <span>Cool</span>
                </div>
                <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg8})`}}>
                    <span>Cool</span>
                </div>
                <div className="porfolio-item grid-block" style={{backgroundImage:`url(${PorfolioImg9})`}}>
                    <span>Cool</span>
                </div>
                <div className="buttoncase">
                    <NavLink className="button">View Porfolio</NavLink>
                </div>
            </section>
            <section className="landing-section section-ready">
                <div className="container grid-block">
                    <div className="ready-left">
                        <h2>Are You Ready?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis earum laborum nostrum voluptatibus. Architecto atque dolor dolore dolorem et ipsam iure laboriosam molestiae nesciunt, omnis, placeat quis sit veniam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, dolor ducimus enim ipsam laborum libero minima mollitia necessitatibus neque odio sint unde. Corporis eligendi exercitationem ipsam maiores optio quidem tempora.</p>
                    </div>
                    <div className="ready-right">
                        <img src={require('../img/example.jpg')} className="img-responsive" alt="img"/>
                    </div>
                </div>

            </section>
            <section className="form-section">
                <div className="container">
                    <form className="grid-block">
                        <input type='text' name="name" placeholder="Your name..." required/>
                        <input type='text' name="name" placeholder="Your name..."/>
                        <input type='text' name="name" placeholder="Your name..."/>
                        <div><button className="button">Yes! Ready!</button></div>
                    </form>
                </div>
            </section>
            <section className="landing-section section-blog">
                <div className="container">
                    <h2>Ready to Blog?</h2>
                    <div className="blog-home grid-block">
                        {props.posts.map( post =>
                           <Link to={`/blog/${post.id}`} className="blog-item grid-block" key={post.id}>
                                <span className="blog-home-img" style={{backgroundImage:`url(" + post.img + ")`}}/>
                                <span className="blog-home-content grid-block">
                                        <h4>{post.blogTitle}</h4>
                                        <p>{post.data}</p>
                                        <p>{post.blogText}</p>
                                    </span>
                               <p onClick={()=>props.fullPost(post.id)}>Read more</p>
                            </Link>
                            )
                        }


                        <div className="buttoncase">
                            <NavLink className="button">View Porfolio</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-logo">
                        We Are Real <span>Creators</span>
                    </div>
                    <div className="footer-copy">~©~</div>
                </div>
            </footer>
    </div>
    )
}
export default Posts;