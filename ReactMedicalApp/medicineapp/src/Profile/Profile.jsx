import React from 'react';
import style from './Profile.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";


function Profile(props) {
    return (
        <div className={style.Profile}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/AlsterPanorama.jpg/900px-AlsterPanorama.jpg"/>

            <div><img className={style.ava} src={props.profile.photos.small}/> {props.profile.fullName} </div>

            <p>Мой статус:</p><ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>

        </div>
    );
}

export default Profile;
