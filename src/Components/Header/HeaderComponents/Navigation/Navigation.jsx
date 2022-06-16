import React from "react";
import classes from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavLink to="/administration/create" className={classes.link}>Администрирование</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/transacts" className={classes.link}>Транзакции</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/create" className={classes.link}>Создать пользователя</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {Navigation}