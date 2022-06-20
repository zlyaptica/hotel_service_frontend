import { usersAPI } from "../Components/common/api/api";

export const registration = ({phone_number, l_name, f_name}) => async () => {
    try {
        await usersAPI.createUser({phone_number, l_name, f_name}).then(() => {
            alert("Пользователь создан!")
        })
    } catch (err) {
        throw new Error(err)
    }
}

export const deleteUser = ({phone_number}) => async () => {
    try {
        await usersAPI.deleteUser({phone_number})
    } catch (err) {
        throw new Error(err)
    }
}