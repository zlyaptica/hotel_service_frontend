import classes from "./User.module.css"
import {CreateUser} from "./CreateUser/CreateUser";
import {DeleteUser} from "./DeleteUser/DeleteUser";

const User = () => {
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.userWrapper}>
                    <CreateUser/>
                    <DeleteUser/>
                </div>
            </div>
        </div>
    )
}

export {User}