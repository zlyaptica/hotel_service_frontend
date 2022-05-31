import hotel from "./hotelSlice"
import {configureStore} from "@reduxjs/toolkit";
import {reducer as formReducer} from "redux-form"

export const store = configureStore({
    reducer: {
        hotel,
        form: formReducer
    }
})