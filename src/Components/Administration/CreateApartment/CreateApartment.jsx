import React from 'react'
import {reduxForm} from "redux-form";
import {CreateApartmentForm} from "./CreateApartmentForm";
import {useDispatch} from "react-redux";
import classes from './CreateApartment.module.css'
import {createApartment} from "../../../redux/apartmentSlice";

const CreateApartment = () => {
    const dispatch = useDispatch()
    const onSubmit = ({name, bed_count, price, apartment_class_id, hotel_id}) => {
        dispatch(createApartment({name, bed_count, price, apartment_class_id, hotel_id}))
    }
    return (
        <div className={classes.wrapper}>
            <CreateApartmentReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const CreateApartmentReduxForm = reduxForm({form: 'createApartment'})(CreateApartmentForm)

export {CreateApartment}