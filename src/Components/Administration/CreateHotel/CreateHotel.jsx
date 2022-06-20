import classes from "../CreateApartment/CreateApartment.module.css";
import {reduxForm} from "redux-form";
import {CreateHotelForm} from "./CreateHotelForm";
import {useDispatch} from "react-redux";
import {createHotel} from "../../../redux/hotelSlice";

const CreateHotel = () => {
    const dispatch = useDispatch()
    const onSubmit = ({name, stars_count, description, country, city, street, house, header_image_address}) => {
        dispatch(createHotel({name, stars_count, description, country, city, street, house, header_image_address}))
    }
    return (
        <div className={classes.wrapper}>
            <CreateHotelReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const CreateHotelReduxForm = reduxForm({form: "createHotel"})(CreateHotelForm)

export {CreateHotel}