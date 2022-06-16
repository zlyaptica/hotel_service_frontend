import hotel from "./hotelSlice"
import transact from './transactSlice'
import apartment from './apartmentSlice'
import {configureStore} from "@reduxjs/toolkit";
import {reducer as formReducer} from "redux-form"

export const store = configureStore({
    reducer: {
        hotel,
        transact,
        apartment,
        form: formReducer
    }
})