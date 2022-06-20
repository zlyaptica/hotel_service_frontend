import {Field} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../common/validators/validators";
import React from "react";
import classes from "./CreateHotel.module.css"

const CreateHotelForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h2 className={classes.headerCreate}>Создание отеля</h2>
            <p>Название отеля</p>
            <Field className={classes.input} name="name" type="text" placeholder="Название"
                   component={Input} validate={[required]}/>
            <p>Количество звезд</p>
            <Field className={classes.input} name="stars_count" type="text" placeholder="Количество звезд"
                   component={Input} validate={[required]}/>
            <p>Описание</p>
            <Field className={classes.input} name="description" type="text" placeholder="Описание"
                   component={Textarea} validate={[required]}/>
            <p>Страна</p>
            <Field className={classes.input} name="country" type="text" placeholder="Страна"
                   component={Input} validate={[required]}/>
            <p>Город</p>
            <Field className={classes.input} name="city" type="text" placeholder="Город"
                   component={Input} validate={[required]}/>
            <p>Улица</p>
            <Field className={classes.input} name="street" type="text" placeholder="Улица"
                   component={Input} validate={[required]}/>
            <p>Номер дома</p>
            <Field className={classes.input} name="house" type="text" placeholder="Номер дома"
                   component={Input} validate={[required]}/>
            <p>Адрес фотографии</p>
            <Field className={classes.input} name="header_image_address" type="text" placeholder="Адрес фотографии"
                   component={Input} validate={[required]}/>
            <button className={classes.createButton}>Создать</button>
        </form>
    )
}

export {CreateHotelForm}