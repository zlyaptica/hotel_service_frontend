import React from 'react'
import classes from "./UserTransactTemplate.module.css";

const UserTransactTemplate = () => {
    return (
        <div className={classes.transact}>
            <div className={classes.wrapper}>
                <div className={classes.transactWrapper}>
                    <div className={classes.header}>
                        <h2 className={classes.name}>Название отеля - город, страна</h2>
                        <h3 className={classes.date}>Дата бронирования: дата</h3>
                    </div>
                    <h3>Количество проживающих: 3</h3>
                    <h3>Период проживания: дата-дата</h3>
                    <h3>Цена: 50 рублей</h3>
                </div>
            </div>
        </div>
    )
}

export {UserTransactTemplate}