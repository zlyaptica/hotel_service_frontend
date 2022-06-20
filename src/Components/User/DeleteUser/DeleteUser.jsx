import classes from "./DeleteUser.module.css"
import {DeleteUserForm} from "./DeleteUserForm";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../../redux/registrationSlice";

const DeleteUser = () => {
    const dispatch = useDispatch()
    const onSubmit = ({phone_number}) => {
        dispatch(deleteUser({phone_number}))
    }
    return (
        <div className={classes.deleteUser}>
            <div className={classes.wrapper}>
                <DeleteUserForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export {DeleteUser}