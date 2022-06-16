import {createSlice} from "@reduxjs/toolkit";
import { transactsAPI } from "../Components/common/api/api";

let initialState = {
    transacts: []
}

const transactSlice = createSlice({
    name: 'transact',
    initialState,
    reducers: {
        addTransacts: (state, {payload}) => {
            state.transacts = payload
        }
    }
})

export const getTransacts = (phoneNumber) => async (dispatch) => {
    try {
        transactsAPI.getTransacts(phoneNumber).then(data => {
            dispatch(addTransacts(data))
        })
    } catch (err) {
        throw new Error(err)
    }
}

export const addTransact = ({phone_number, date_arrival, date_departure, apartment_id}) => () => {
    try {
        transactsAPI.createTransact({
            phone_number, 
            date_arrival, 
            date_departure, 
            apartment_id
        }).then(() => {
            alert("Номер забронирован!")
        })
    } catch (err) {
        throw new Error(err)
    }
}

export const {addTransacts} = transactSlice.actions
export const showTransacts = (state) => state.transact.transacts
export default transactSlice.reducer

