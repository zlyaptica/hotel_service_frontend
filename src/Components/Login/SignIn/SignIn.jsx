import React from 'react'
import {SignInForm} from "./SignInForm";
import {reduxForm} from "redux-form"
import classes from './SignIn.module.css'
import {NavLink} from "react-router-dom";

const SignIn = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={classes.signIn}>
            <div className={classes.wrapper}>
                <SignInReduxForm onSubmit={onSubmit}/>
                <p>Или</p>
                <NavLink to="/signup">Зарегистрироваться</NavLink>
            </div>
        </div>
    )
}

const SignInReduxForm = reduxForm({form: 'signin'})(SignInForm)

export {SignIn}