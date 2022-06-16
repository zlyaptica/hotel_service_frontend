import classes from './ApartmentTemplate.module.css'
import {useState} from "react";
import {Popup} from "../../common/Popup/Popup";
import {reduxForm} from "redux-form";
import {RegistrationForm} from "./RegistrationForm";
import {useDispatch} from "react-redux";
import {addTransact} from "../../../redux/transactSlice";

const ApartmentTemplate = (props) => {
    const dispatch = useDispatch()
    const [popupActive, setPopupActive] = useState(false)
    const apartment_id = props.id
    const onSubmit = ({phone_number, date_arrival, date_departure}) => {
        dispatch(addTransact({phone_number, date_arrival, date_departure, apartment_id}))
    }
    return (
        <div className={classes.apartmentTemplate}>
            <div className={classes.wrapper}>
                <div className={classes.item}>
                    <p className={classes.apartmentName}>{props.apartmentName} класса {props.class}</p>
                    <p className={classes.apartmentBedCount}>Вмещает: {props.bedCount} человека</p>
                </div>
                <div className={classes.reg}>
                    <p className={classes.price}>{props.price} рублей за ночь</p>
                    <button className={classes.reservation} onClick={() => setPopupActive(true)}>Забронировать</button>
                </div>
            </div>
            <Popup active={popupActive} setActive={setPopupActive}>
                <RegistrationReduxForm onSubmit={onSubmit} hotelName={props.hotelName} apartmentName={props.apartmentName}/>
            </Popup>
        </div>
    )
}

const RegistrationReduxForm = reduxForm({form: 'registrationApartment'})(RegistrationForm)

export {ApartmentTemplate}