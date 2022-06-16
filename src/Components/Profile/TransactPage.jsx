import React from 'react'
import classes from './TransactPage.module.css'
import {reduxForm} from "redux-form";
import {TransactPageForm} from "./TransactPageForm";
import {useDispatch, useSelector} from "react-redux";
import {getTransacts, showTransacts} from "../../redux/transactSlice";
import {TransactTemplate} from "./TransactTemplate/TransactTemplate";

const TransactPage = () => {
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        dispatch(getTransacts(formData.phoneNumber))
    }
    const transacts = useSelector(showTransacts)

    return (
        <div className={classes.profile}>
            <div className={classes.wrapper}>
                <div className={classes.main}>
                    <TransactPageReduxForm onSubmit={onSubmit}/>
                </div>
                <div className={classes.transacts}>
                    {transacts &&
                        transacts.map(t => <TransactTemplate
                        key={t.id} id={t.id} price={t.price} opDate={t.operation_date} arDate={t.date_arrival} depDate={t.date_departure}
                        apartmentName={t.apartment.name} class={t.apartment.apartment_class.class}
                        hotelName={t.apartment.hotel.name} bedCount={t.apartment.bed_count}/>)
                    }
                </div>
            </div>
        </div>
    )
}

const TransactPageReduxForm = reduxForm({form: 'transactPage'})(TransactPageForm)

export {TransactPage}