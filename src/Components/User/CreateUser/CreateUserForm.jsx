import classes from "../../Login/SignIn/SignIn.module.css";
import {Input} from "../../common/FormsControls/FormsControls";
import {Field} from "redux-form";
import React from 'react'

const CreateUserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h2 className={classes.headerCreate}>Создание пользователя</h2>
            <p>Имя</p>
            <Field className={classes.input} name="l_name" type="text" placeholder="Имя" component={Input}/>
            <p>Фамилия</p>
            <Field className={classes.input} name="f_name" type="text" placeholder="Фамилия" component={Input}/>
            <p>Номер телефона</p>
            <Field className={classes.input} name="phone_number" type="text" placeholder="Номер телефона"
                   component={Input} />
            <button className={classes.createButton}>Создать пользователя</button>
        </form>
    )
}

export {CreateUserForm}