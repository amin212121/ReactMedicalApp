import {UsersAPI as UserAPI, UsersAPI} from "../API/api";

let initalPage = {
    DoctorList: [],
    CurrentPage: 1,
    PageSize: 5,
    TotalDoctorCount: 0,
    isFetch: false
};

export const DoctorsListPageReducer = (state = initalPage, action) => {

        if (action.type === 'SUB-STATUS') {

            return {
                ...state,
                DoctorList: state.DoctorList.map((m) => {
                    if (m.id == action.id) {
                        m.followed = !(m.followed);
                        return {...m}
                    }
                    return m;
                })
            }
        } else if (action.type === 'DOCTOR-LIST') {
            return {

                ...state,
                DoctorList: [...action.list]
            };
            return state;
        } else if (action.type === 'TOTAL-COUNT') {
            return {
                ...state,
                TotalDoctorCount: action.totalCount
            };
            return state;
        } else if (action.type === 'CHANGE-CURRENT-PAGE') {
            return {
                ...state,
                CurrentPage: action.page
            }
        } else if (action.type === 'CHECK-FETCH') {
            return {
                ...state,
                isFetch: action.statusFetch
            }
        } else {
            return state;
        }


    }
;


export const changesubs = (id) => ({type: "SUB-STATUS", id: id});
export const doctorlistgenerate = (list) => ({type: "DOCTOR-LIST", list: list});
export const totalCount = (totalCount) => ({type: "TOTAL-COUNT", totalCount: totalCount});
export const CHANGEPAGE = (page) => ({type: "CHANGE-CURRENT-PAGE", page: page});
export const CHANGESTATUSFETCH = (statusFetch) => ({type: "CHECK-FETCH", statusFetch: statusFetch});

export const getUsersThunkCreator = (CurrentPage, PageSize) => {

    return (dispatch) => {

        dispatch(doctorlistgenerate([]));
        dispatch(CHANGESTATUSFETCH(true));
        dispatch(CHANGEPAGE(CurrentPage));
        UsersAPI.getUsers(CurrentPage, PageSize).then(data => {
            dispatch(doctorlistgenerate(data.items));
            dispatch(totalCount(data.totalCount));
            dispatch(CHANGESTATUSFETCH(false));
        })
    }
};


export const FollowThunkCreator = (id) => {
    return (dispatch) => {
        UserAPI.Following(id).then(r => {
            if (r.resultCode === 0) {
                dispatch(changesubs(id))
            }
        })
    }

};


export const UnFollowThunkCreator = (id) => {
    return (dispatch) => {
        UserAPI.UnFollowing(id).then(r => {
            if (r.resultCode === 0) {
                dispatch(changesubs(id))
            }
        })
    }

};