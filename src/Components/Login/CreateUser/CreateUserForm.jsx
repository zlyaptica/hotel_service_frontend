import classes from "../SignIn/SignIn.module.css";
import {Input} from "../../common/FormsControls/FormsControls";
import {Field} from "redux-form";
import React from 'react'

const CreateUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.input} name="l_name" type="text" placeholder="Имя" component={Input}/>
            <Field className={classes.input} name="f_name" type="text" placeholder="Фамилия" component={Input}/>
            <Field className={classes.input} name="phone_number" type="text" placeholder="Номер телефона"
                   component={Input} />
            <button className={classes.create}>Создать пользователя</button>
        </form>
    )
}

export {CreateUserForm}