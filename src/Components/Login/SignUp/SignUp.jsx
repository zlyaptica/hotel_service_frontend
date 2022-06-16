import React from 'react'
import {reduxForm} from "redux-form";
import {SignUpForm} from "./SignUpForm";
import classes from './SignUp.module.css'
const SignUp = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={classes.signUp}>
            <div className={classes.wrapper}>
                Регистрация
                <SignUpReduxForm onSubmit={onSubmit()}/>
            </div>
        </div>
    )
}

const SignUpReduxForm = reduxForm({form: 'signUp'})(SignUpForm)

export {SignUp}