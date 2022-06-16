import {createSlice} from "@reduxjs/toolkit";
import { apartmentsAPI } from "../Components/common/api/api";

let initialState = {
    apartments: [],
    apartmentImages: []
}

const apartmentSlice = createSlice({
    name: 'apartment',
    initialState,
    reducers: {
        addTransacts: (state, {payload}) => {
            state.apartments = payload
        },
        addApartmentImages: (state, {payload}) => {
            state.apartmentImages = payload
        }
    }
})

export const getApartmentsByHotelID = (id) => async (dispatch) => {
    try {
        await apartmentsAPI.getApartments(id).then(data => {
            debugger
            dispatch(addTransacts(data.apartments))
            dispatch(addApartmentImages(data.apartments_images))
        })        
    } catch (err) {
        throw new Error(err)
    }
}

export const createApartment = ({name, bed_count, price, apartment_class_id, hotel_id}) => async () => {
    try {
        await apartmentsAPI.createApartment({
            name, 
            bed_count, 
            price, 
            apartment_class_id, 
            hotel_id
        }).then(() => {
            alert("Номер создан!")
        })
    } catch (err) {
        throw new Error(err)
    }
}

export const {addTransacts} = apartmentSlice.actions
export const {addApartmentImages} = apartmentSlice.actions
export const showApartments = (state) => state.apartment.apartments
export const showApartmentImages = (state) => state.apartment.apartmentImages
export default apartmentSlice.reducer