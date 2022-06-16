import React from 'react'
import {Navigation} from "./HeaderComponents/Navigation/Navigation";
import {Logo} from "./HeaderComponents/Logo/Logo";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <Logo/>
                <Navigation/>
            </div>
        </header>
    )
}

export {Header}