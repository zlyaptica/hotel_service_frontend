import {Field} from "redux-form";
import classes from './RegistrationForm.module.css'
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../common/validators/validators"

const RegistrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3 className={classes.header}>Бронирование номера</h3>
            <p>Отель: {props.hotelName}</p>
            <p>Номер: {props.apartmentName}</p>
            <p>Формат ввода: гггг-мм-дд</p>
            <Field name="phone_number" type="text" placeholder="Номер пользователя" component={Input}/>
            <Field name="date_arrival" type="text" placeholder="Дата заезда" component={Input} validate={[required]}/>
            <Field name="date_departure" type="text" placeholder="Дата выезда" component={Input} validate={[required]}/>
            <p>Цена за один день</p>
            <button>Забронировать</button>
        </form>
    )
}

export {RegistrationForm}