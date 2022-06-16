import classes from "./Image.module.css"
import React from "react";

const Image = (props) => {
    return  <img src={process.env.PUBLIC_URL + props.imgAddress} className={classes.photo} alt="hotelphoto"/>
}

export {Image}