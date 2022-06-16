import React from 'react'
import classes from './HotelListTemplate.module.css'
import {NavLink} from "react-router-dom";

const HotelListTemplate = (props) => {
    return (
        <div className={classes.hotelListTemplate}>
            <div className={classes.wrapper}>
               <div className={classes.item}>
                   <div className={classes.photo}>
                       <img src={process.env.PUBLIC_URL + props.headerImageAddress} className={classes.photo} alt="hotelphoto"/>
                   </div>
                   <div className={classes.info}>
                       <div className={classes.header}>
                           <NavLink to={'/hotel/' + props.id} >
                               <h1 className={classes.name}>{props.name}</h1>
                           </NavLink>
                           <div className={classes.rate}>
                               <p className={classes.stars}>{props.starsCount} звезд</p>
                           </div>
                       </div>
                       <div className={classes.loc}>
                           <p className={classes.location}>{props.city}, {props.country}</p>
                       </div>
                       <div className={classes.description}>
                           {props.description}
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export {HotelListTemplate}