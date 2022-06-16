import React from 'react'
import classes from './SignIn.module.css'
import {Field} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";

const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.input} name="numberPhone" type="text" placeholder="Номер телефона"
                   component={Input} />
            <Field name="rememberMe" type="checkbox" component={"input"}/> Запомнить меня <br></br>
            <button className={classes.signInButton}>Войти</button>
        </form>
    )
}

export {SignInForm}