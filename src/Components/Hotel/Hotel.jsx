import React from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showHotels} from "../../redux/hotelSlice";
import classes from './HotelInfo.module.css'
import {useEffect} from "react";
import {getApartmentsByHotelID, showApartmentImages, showApartments} from "../../redux/apartmentSlice";
import {ApartmentTemplate} from "./ApartmentTemplate/ApartmentTemplate";
import {Image} from "./Image/Image";

const Hotel = (props) => {
    const images = useSelector(showApartmentImages)
    const hotels = useSelector(showHotels)
    const dispatch = useDispatch()
    const {hotel_id} = useParams()

    const id = parseInt(hotel_id)
    const hotel = hotels.find((h) => h.id === id)

    useEffect(() => {
        dispatch(getApartmentsByHotelID(id))
    }, [dispatch, id])
    const apartments = useSelector(showApartments)
    return (
        <main className={classes.hotel}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <div className={classes.info}>
                        <h2 className={classes.name}>{hotel.id}. {hotel.name} — {hotel.stars_count} звезд</h2>
                        <div className={classes.location}>{hotel.address.city}, {hotel.address.country}</div>
                    </div>
                    <details className={classes.spoiler}>
                        <summary>Посмотреть фото</summary>
                        {images &&
                            images.map(i => <Image imgAddress={i.address}/>)
                        }
                    </details>
                    <p className={classes.hotelDescription}>{hotel.description}</p>
                    <h3 className={classes.apartmentsHeader}>
                        {apartments.length ? "Доступные номера" : "Доступных номеров нет"}
                    </h3>
                    <div>
                        {apartments.map(a => <ApartmentTemplate key={a.id} id={a.id} class={a.apartment_class.class}
                                                                apartmentName={a.name} price={a.price} bedCount={a.bed_count} hotelName={hotel.name}/>)}
                    </div>
                </div>
            </div>
        </main>
    )
}

export {Hotel}