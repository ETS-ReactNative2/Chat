import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar =(props)=>{
    return (<nav className="navbar">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>

        </nav>

    )
}
export default Navbar;