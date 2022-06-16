import {reduxForm} from "redux-form";
import {CreateUserForm} from "./CreateUserForm";
import classes from './CreateUser.module.css'
import {useDispatch} from "react-redux";
import {registration} from "../../../redux/registrationSlice";

const CreateUser = () => {
    const dispatch = useDispatch()
    const onSubmit = ({phone_number, l_name, f_name}) => {
        console.log({phone_number, l_name, f_name})
        dispatch(registration({phone_number, l_name, f_name}))
    }
    return (
        <div className={classes.wrapper}>
            <CreateUserReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const CreateUserReduxForm = reduxForm({form: 'createUser'})(CreateUserForm)

export {CreateUser}