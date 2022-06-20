import { Form, Field } from 'react-final-form'
import classes from "./DeleteUser.module.css";
import React from "react";

const DeleteUserForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} className={classes.deleteForm}>
                <h2 className={classes.headerDelete}>Удаление пользователя</h2>
                <p>Номер телефона:</p>
                <Field className={classes.input} name="phone_number" type="text" placeholder="Номер телефона"
                       component="input" />
                <button type="submit" className={classes.deleteButton}>Удалить пользователя</button>
            </form>
        )}
    />
)

export {DeleteUserForm}