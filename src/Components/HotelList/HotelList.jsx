import React from "react";
import classes from "./HotelList.module.css"
import {HotelListTemplate} from "./HotelListTemplate";
import {useSelector} from "react-redux";
import {showHotels} from "../../redux/hotelSlice";

const HotelList = () => {
    const hotelList = useSelector(showHotels)
    return (
        <div className={classes.wrapper}>
            <div className={classes.page}>
                {hotelList &&
                    hotelList.map((hotel) => <HotelListTemplate
                    key={hotel.id} id={hotel.id} name={hotel.name}
                    starsCount={hotel.stars_count} description={hotel.description}
                    city={hotel.address.city} country={hotel.address.country} headerImageAddress={hotel.header_image_address}/>)
                }
            </div>
        </div>
    )
}

export {HotelList}