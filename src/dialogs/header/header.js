import React from 'react';
import logo from "../../logo.svg";
import {NavLink} from "react-router-dom";

const Header =(props)=>{
    return ( <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <div className="loginBlock">
                {props.isAuth ?
                    <p>{props.login}</p>
                :
                    <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>

    )
}
export default Header;
