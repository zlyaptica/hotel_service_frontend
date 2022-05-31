import {createSlice} from "@reduxjs/toolkit";
import * as axios from "axios";

let initialState = {
    hotels: []
}

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        addHotels: (state, {payload}) => {
            state.hotels = payload
        }
    }
})

export const getHotelsFromServer = () => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8080/hotels`)
        dispatch(addHotels(response.data.items))
    } catch (err) {
        throw new Error(err)
    }
}

export const {addHotels} = hotelSlice.actions
export const showHotels = (state) => state.hotel.hotels
export default hotelSlice.reducer
