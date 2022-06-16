import * as axios from "axios";
import { usersAPI } from "../Components/common/api/api";

export const registration = ({phone_number, l_name, f_name}) => async () => {
    try {
        await usersAPI.createUser({phone_number, l_name, f_name}).then(() => {
            alert("Пользователь создан!")
        })
    } catch (e) {
        throw new Error(e)
    }
}