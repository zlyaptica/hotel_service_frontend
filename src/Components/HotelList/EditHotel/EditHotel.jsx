import classes from "./EditHotel.module.css"
import {MyForm} from "./EditHotelForm";
import {showHotels, updateHotel} from "../../../redux/hotelSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import React from "react";

const EditHotel = () => {
    const navigate = useNavigate()
    const {hotel_id} = useParams()
    const id = parseInt(hotel_id)
    const hotels = useSelector(showHotels)
    const hotel = hotels.find(h => h.id === id)
    const dispatch = useDispatch()
    const onSubmit = ({name, stars_count, description, country, city, street, house, header_image_address}) => {
        dispatch(updateHotel({id, name, stars_count, description, country, city, street, house, header_image_address}))
        navigate("/")
    }

    return (
        <div className={classes.wrapper}>
            <MyForm onSubmit={onSubmit} name={hotel.name} stars_count={hotel.stars_count} description={hotel.description} country={hotel.address.country} city={hotel.address.city} street={hotel.address.street} house={hotel.address.house} header_image_address={hotel.header_image_address}/>
        </div>
    )
}


// const EditHotelReduxForm = reduxForm({
//     form: 'editHotel',
// })(EditHotelForm)

export {EditHotel}