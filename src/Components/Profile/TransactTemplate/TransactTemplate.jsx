import classes from './TransactTemplate.module.css'

const TransactTemplate = (props) => {
    return (
        <div className={classes.transactTemplate}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <h2>{props.hotelName} — {props.apartmentName}</h2>
                    <h3>Апартаменты класса {props.class} на  {props.bedCount} спальных места</h3>
                </div>
                <div className={classes.info}>
                    <p>Дата транзакции:{props.opDate}</p>
                    <p>Даты проживания: {props.arDate} - {props.depDate}</p>
                    <p>{props.price} рублей.</p>
                </div>
            </div>
        </div>
    )
}

export {TransactTemplate}