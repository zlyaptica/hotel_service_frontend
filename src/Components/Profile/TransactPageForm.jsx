import classes from "../Login/SignIn/SignIn.module.css";
import {Input} from "../common/FormsControls/FormsControls";
import {Field} from "redux-form";
import React from "react";

const TransactPageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>Введите номер телефона для получения списка бронирования:</p>
            <Field className={classes.input} name="phoneNumber" type="text" placeholder="Номер телефона"
                   component={Input} />
            <button className={classes.signInButton}>Найти</button>
        </form>
    )
}

export {TransactPageForm}