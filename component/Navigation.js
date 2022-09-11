import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Navigation = ({userObj}) => {
    useEffect(() => {
        console.log(userObj)
    }, []);
    return(
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
            <li><Link to="/Profile">{userObj.displayName}'s Profile</Link></li>
        </ul>
    </nav>
    );
}

export default Navigation;