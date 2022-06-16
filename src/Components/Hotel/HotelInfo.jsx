import React from 'react'
import classes from './HotelInfo.module.css'

const HotelTemplate = (props) => {
    return (
        <main className={classes.hotel}>
            <div className={classes.wrapper}>
                <div className={classes.hotelWrapper}>
                    {/*<div className={classes.apartments}>*/}
                    {/*    <div className={classes.item}>*/}
                    {/*        <p className={classes.apartmentName}>Просторный двухместный люкс</p>*/}
                    {/*        <p className={classes.apatmentCountlifer}>Вмещает 3 человека</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.apartmentReg}>*/}
                    {/*        <p className={classes.price}>5000 руб. за ночь</p>*/}
                    {/*        /!*<a href="#modal_open" className="registration">Забронировать</a>*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </main>
    )
}

export {HotelTemplate}