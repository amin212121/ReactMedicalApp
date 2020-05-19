import React from 'react';
import style from './Logo.module.css';
import {NavLink} from "react-router-dom";


function Logo() {
    return (
        <NavLink to="/"><img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1Mo1uzej-15F6qOHOO7avJdMVcZxf4jCI4qa8r9d1GQZTo2TL'/></NavLink>
    );
}

export default Logo;
