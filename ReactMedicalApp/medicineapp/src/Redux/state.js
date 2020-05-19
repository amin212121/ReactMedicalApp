import {CabinetPageReducer} from "./cabinet-page-reducer";
import {UserInfoPageReducer} from "./user-info-page-reducer";

let store = {

    _state: {
        CabinetPage: {
            pacientDB: [
                {id: 1, name: 'Stepan'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Nastya'},
                {id: 4, name: 'Mykola'},
                {id: 5, name: 'Valera'},
            ],
            NewText: ''
        },


        UserInfoPage: {
            doctor: [
                {name: "Угрин Степан", count: '21'}
            ]
        }
    },

    getState() {
        return this._state;
    },

    _CallSubscribe() {

    },


    subscribe(observer) {
        this._CallSubscribe = observer;
    },

    dispatch(action) {
        this._state.CabinetPage = CabinetPageReducer(this._state.CabinetPage, action);
        this._state.UserInfoPage = UserInfoPageReducer(this._state.UserInfoPage, action);
        this._CallSubscribe(store);
    }
};


export default store;