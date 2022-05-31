import React, {useEffect} from "react";
import {Filters} from "../HotelList/Filters/Filters";
import classes from "./MainPage.module.css"
import {HotelListTemplate} from "../HotelList/HotelListTemplate";
import {useSelector} from "react-redux";
import {showHotels} from "../../redux/hotelSlice";

const MainPage = () => {
    const hotelList = useSelector(showHotels)


    const hotelsElement = hotelList
        .map((hotel) => <HotelListTemplate key={hotel.id} id={hotel.id} name={hotel.name}
                                                  starsCount={hotel.stars_count} description={hotel.description}
                                                  city={hotel.address.city} country={hotel.address.country}/>)
    return (
        <div className={classes.wrapper}>
            <div className={classes.page}>
                <Filters/>
                <div>
                    {hotelsElement}
                </div>
            </div>
        </div>
    )
}

export {MainPage}