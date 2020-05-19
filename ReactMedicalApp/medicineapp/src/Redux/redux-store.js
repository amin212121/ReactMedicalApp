import {applyMiddleware, combineReducers, createStore} from "redux";
import {CabinetPageReducer} from "./cabinet-page-reducer";
import {UserInfoPageReducer} from "./user-info-page-reducer";
import {DoctorsListPageReducer} from "./doctor-listpage-reducer";
import {ProfilePageReducer} from "./profile-page-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    CabinetPage: CabinetPageReducer,
    UserInfoPage: UserInfoPageReducer,
    DoctorsListPage: DoctorsListPageReducer,
    ProfilePage: ProfilePageReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
