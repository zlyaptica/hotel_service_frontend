import {createSlice} from "@reduxjs/toolkit";
import { hotelsAPI } from "../Components/common/api/api";

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
        await hotelsAPI.getHotels().then(data => {
            dispatch(addHotels(data.hotels))
        })        
    } catch (err) {
        throw new Error(err)
    }
}

export const {addHotels} = hotelSlice.actions
export const showHotels = (state) => state.hotel.hotels
export default hotelSlice.reducer
