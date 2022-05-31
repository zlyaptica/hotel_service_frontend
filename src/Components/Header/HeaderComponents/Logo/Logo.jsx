import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../img/logo.png"
import classes from "./Logo.module.css"

const Logo = () => {
    return (
        <NavLink to="/" ><img src={logo} alt="logo" className={classes.logo}/></NavLink>
    )
}

export {Logo}