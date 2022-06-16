import {Field} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import React from "react";
import classes from './CreateApartment.module.css'
import {required} from "../../common/validators/validators";

const CreateApartmentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h2 className={classes.headerCreate}>Создание номера</h2>
            <Field className={classes.input} name="name" type="text" placeholder="Имя номера"
                   component={Input} validate={[required]}/>
            <Field className={classes.input} name="bed_count" type="text" placeholder="Количество спальных мест"
                   component={Input} validate={[required]}/>
            <Field className={classes.input} name="price" type="text" placeholder="Цена"
                   component={Input} validate={[required]}/>
            <Field className={classes.input} name="apartment_class_id" type="text" placeholder="Идентификатор класса"
                   component={Input} validate={[required]}/>
            <Field className={classes.input} name="hotel_id" type="text" placeholder="Идентификатор отеля"
                   component={Input} validate={[required]}/>
            <button className={classes.createButton}>Создать</button>
        </form>
    )
}

export {CreateApartmentForm}