import {NavLink} from "react-router-dom";
import classes from "./Administration.module.css"

const Administration = () => {
    return (
        <div className={classes.administration}>
            <div className={classes.wrapper}>
                <ul className={classes.list}>
                    <li  className={classes.item}>
                        <NavLink to="/administration/create_hotel" className={classes.link}>Создать отель</NavLink>
                    </li>
                    <li  className={classes.item}>
                    <NavLink to="/administration/create_apartment" className={classes.link}>Создать апартаменты</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export {Administration}