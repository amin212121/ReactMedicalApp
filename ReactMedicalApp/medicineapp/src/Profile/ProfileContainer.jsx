import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, SetProfile, updateUserStatus} from "../Redux/profile-page-reducer";
import {withRouter} from "react-router-dom";


class ProfileAPIContainer extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let UserId = this.props.match.params.userId;
        this.props.getUserProfile(UserId);
        this.props.getUserStatus(UserId);
    }


    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    }
}


let MapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }

};


let WithURLDATA = withRouter(ProfileAPIContainer);


const ProfileContainer = connect(MapStateToProps, {SetProfile, getUserProfile, getUserStatus, updateUserStatus})(WithURLDATA);

export default ProfileContainer;
