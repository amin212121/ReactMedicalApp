import {ProfileAPI} from "../API/api";

let initalPage = {
    profile: {
        photos: {}
    },
    status: 'null'
};

export const ProfilePageReducer = (state = initalPage, action) => {


    if (action.type === "PROFILE-CREATOR") {
        return {
            ...state,
            profile: action.profile
        }

    } else if (action.type === "STATUS-CREATOR") {
        return {
            ...state,
            status: action.status
        }

    } else {
        return state
    }

};


export const SetProfile = (info) => ({type: "PROFILE-CREATOR", profile: info});
export const SetStatusProfile = (status) => ({type: "STATUS-CREATOR", status});

export const getUserProfile = (UserId) => {

    return (dispatch) => {
        ProfileAPI.getUserProfile(UserId).then(response => {
            dispatch(SetProfile(response));
        })
    }
};

export const getUserStatus = (id) => {

    return (dispatch) => {
        ProfileAPI.getUserStatus(id).then(response => {
            dispatch(SetStatusProfile(response));
        })
    }

};

export const updateUserStatus = (text) => {

    return (dispatch) => {
        ProfileAPI.UpdateUserStatus(text).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetStatusProfile(text));
            }
        })
    }

};