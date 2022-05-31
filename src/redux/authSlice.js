import {createSlice} from "@reduxjs/toolkit";
import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:8080/`,
    withCredentials: true
})

const initialState = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: () => {

        }
    }
})

export const getMe = () => async (dispatch) => {
    axios.get(`private/whoami`).then(data => {
        if (data.status === 200) {

        }
    })
}

export const login = (phoneNumber) => dispatch => {
    try {
        axios.post(`sessions`, phoneNumber).then(data => {
            if (data.status === 200) {
                dispatch(getMe())
            }
        })
    } catch (e) {

    }
}