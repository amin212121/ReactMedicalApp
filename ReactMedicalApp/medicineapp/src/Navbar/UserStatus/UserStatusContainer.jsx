import React from 'react';
import {connect} from "react-redux";
import UserStatus from "./UserStatus";
import {getUserData, setUserAuthInfo} from "../../Redux/user-info-page-reducer";
import {Logout} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


class UserStatusContainerAPI extends React.Component {

    constructor(props) {
        super(props);
        this.Logout = this.Logout.bind(this)
    }


    componentDidMount() {
        this.props.getUserData()
    }

    Logout() {
        this.props.Logout()
    }





    render() {

        return <UserStatus {...this.props}  Logout={this.Logout} />
    }
}


let MapStateToProps = (state) => {
    return {
        name: state.UserInfoPage.doctor[0].name,
        count: state.UserInfoPage.doctor[0].count,
        UserAuthInfo: state.UserInfoPage.UserAuthInfo,
        isAuth: state.UserInfoPage.UserAuthInfo.isAuth
         }
};


const UserStatusContainer = connect(MapStateToProps, {setUserAuthInfo, getUserData, Logout})(UserStatusContainerAPI);

export default UserStatusContainer;
