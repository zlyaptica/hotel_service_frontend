import classes from "./EditHotel.module.css";
// import {Field} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../common/validators/validators";
import React from "react";
import { Form, Field } from 'react-final-form'

// const EditHotelForm = (props) => {
//     return (
//         <Form
//             initialValues = {{
//                 city: 'city'
//         }}
//         >
//             {() => (
//                 <form onSubmit={props.handleSubmit}>
//                     <h2 className={classes.headerCreate}>Редактирование отеля</h2>
//                     <p>Название отеля</p>
//                     <Field className={classes.input} name="name" type="text" placeholder="Название"
//                            component={Input} validate={[required]}/>
//                     <p>Количество звезд</p>
//                     <Field className={classes.input} name="stars_count" type="text" placeholder="Количество звезд"
//                            component={Input} validate={[required]}/>
//                     <p>Описание</p>
//                     <Field className={classes.input} name="description" type="text" placeholder="Описание"
//                            component={Textarea} validate={[required]}/>
//                     <p>Страна</p>
//                     <Field className={classes.input} name="country" type="text" placeholder="Страна"
//                            component={Input} validate={[required]}/>
//                     <p>Город</p>
//                     <Field className={classes.input} name="city" type="text" placeholder="Город"
//                            component={Input} validate={[required]}/>
//                     <p>Улица</p>
//                     <Field className={classes.input} name="street" type="text" placeholder="Улица"
//                            component={Input} validate={[required]}/>
//                     <p>Номер дома</p>
//                     <Field className={classes.input} name="house" type="text" placeholder="Номер дома"
//                            component={Input} validate={[required]}/>
//                     <p>Адрес фотографии</p>
//                     <Field className={classes.input} name="header_image_address" type="text" placeholder="Адрес фотографии"
//                            component={Input} validate={[required]}/>
//                     <button className={classes.createButton}>Создать</button>
//                 </form>
//             )}
//         </Form>
//     )
// }
//
// export {EditHotelForm}

const MyForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        initialValues={{
            name: props.name,
            stars_count: props.stars_count,
            description: props.description,
            country: props.country,
            city: props.city,
            street: props.street,
            house: props.house,
            header_image_address: props.header_image_address
        }}
        render = {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <h2 className={classes.headerCreate}>Редактирование отеля</h2>
                <p>Название отеля</p>
                <Field className={classes.input} name="name" type="text" placeholder="Название"
                       component="input" />
                <p>Количество звезд</p>
                <Field className={classes.input} name="stars_count" type="text" placeholder="Количество звезд"
                       component="input" />
                <p>Описание</p>
                <Field className={classes.input} name="description" type="text" placeholder="Описание"
                       component="textarea" />
                <p>Страна</p>
                <Field className={classes.input} name="country" type="text" placeholder="Страна"
                       component="input" />
                <p>Город</p>
                <Field className={classes.input} name="city" type="text" placeholder="Город"
                       component="input" />
                <p>Улица</p>
                <Field className={classes.input} name="street" type="text" placeholder="Улица"
                       component="input" />
                <p>Номер дома</p>
                <Field className={classes.input} name="house" type="text" placeholder="Номер дома"
                       component="input" />
                <p>Адрес фотографии</p>
                <Field className={classes.input} name="header_image_address" type="text" placeholder="Адрес фотографии"
                       component="input" />
                <button type="submit">Обновить отель</button>
            </form>
        )}
    />
)

export {MyForm}