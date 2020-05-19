import React from 'react';
import style from './Navbar.module.css';
import Link from "./Link/Link";
import Logo from "./Logo/Logo";
import UserStatusContainer from "./UserStatus/UserStatusContainer";

function Navbar(props) {
    return (
        <div className={style.Navbar}>
            <Logo/>
            <Link/>
            <UserStatusContainer/>
        </div>
    );
}

export default Navbar;
