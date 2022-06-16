import React from 'react'
import {Field} from "redux-form";
import classes from './SignUp.module.css'

const SignUpForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.input} name="fname" type="text" placeholder="Имя"
                   component={"input"}/>
            <Field className={classes.input} name="lname" type="text" placeholder="Фамилия"
                   component={"input"}/>
            <Field className={classes.input} name="phoneNumber" type="text" placeholder="Номер телефона"
                   component={"input"}/>
            <button className={classes.signUpButton}>Регистрация</button>
        </form>
    )
}

export {SignUpForm}