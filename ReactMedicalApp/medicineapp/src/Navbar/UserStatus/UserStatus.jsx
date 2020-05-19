import React from 'react';
import style from './UserStatus.module.css';
import {NavLink} from "react-router-dom";


function UserStatus(props) {
    if (props.isAuth) {
        return (
            <div>
                <div><span> Ваша пошта: {props.UserAuthInfo.email}</span> <span onClick={props.Logout}> || Вийти </span>
                </div>
                <div> Доброго дня, лікаре {props.name}  </div>
                <div> На сьогодні до Вас на прийом записано {props.count} людей</div>
            </div>
        )
    } else {
        return <NavLink to="/login">Увійти </NavLink>
    }
}

export default UserStatus;
