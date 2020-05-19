import React from "react";
import style from "./Link.module.css";
import {NavLink, Route} from "react-router-dom";

function Link() {
    return (
        <div className={style.Header}>
            <div><NavLink className = 'activeoff'  to="/">Головна </NavLink></div>
            <div><NavLink to="/aboutus">Про нас </NavLink></div>
            <div><NavLink to="/contacts">Контакти </NavLink></div>
            <div><NavLink to="/doctorsList">Список наших докторів</NavLink></div>
            <div><NavLink to="/cabinet">Кабінет лікаря </NavLink></div>
        </div>
    );
}

export default Link;
