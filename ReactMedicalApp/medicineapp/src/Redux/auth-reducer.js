import {authAPI} from "../API/api";
import {getUserData, setUserAuthInfo} from "./user-info-page-reducer";
import {stopSubmit} from "redux-form";



export const login = (email, pass, rememberMe) => (dispatch) =>{

        let action = stopSubmit('login', {_error: 'Email or pass is wrong'} )
    dispatch(action)
        return;
    authAPI.Login(email, pass, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(getUserData());
        } else {
            let action = stopSubmit('login', {email: 'Email is wrong'} )
        }
    })
};

export const Logout = () => {
    return (dispatch) => authAPI.Logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthInfo(null, null, null, false));
        }
    })
};

