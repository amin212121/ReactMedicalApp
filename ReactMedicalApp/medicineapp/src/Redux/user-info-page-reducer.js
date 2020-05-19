import * as axios from "axios";

let initalPage = {
    doctor: [
        {name: " Степан", count: '21'}
    ],

    UserAuthInfo: {
        UserId: null,
        login: null,
        email: null,
        isAuth: false
    }

};

export const UserInfoPageReducer = (state = initalPage, action) => {

    if (action.type === 'SET-USER-DATA') {
debugger
        return {
            ...state,
            UserAuthInfo: {...action.data}

        }

    }

    return state;


};

export const setUserAuthInfo = (userId, login, email, isAuth) => ({type: 'SET-USER-DATA', data: {userId, login, email, isAuth:isAuth}});

export const getUserData = () => {
    return (dispatch) => axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
    }).then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserAuthInfo(id, login, email, true));
        }
    })
}
