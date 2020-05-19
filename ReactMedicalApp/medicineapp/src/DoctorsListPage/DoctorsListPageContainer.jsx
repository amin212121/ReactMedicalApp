import React from 'react';
import {connect} from "react-redux";
import DoctorsListPage from "./DoctorsListPage";
import {
    changesubs,
    FollowThunkCreator,
    getUsersThunkCreator,
    UnFollowThunkCreator
} from "../Redux/doctor-listpage-reducer";

class DoctorsListPageAPIContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.API.CurrentPage, this.props.API.PageSize)
    }


    OnPageChandeg(p) {
        this.props.getUsersThunkCreator(p, this.props.API.PageSize)
    }


    render() {
        return (
            <DoctorsListPage OnPageChandeg={this.OnPageChandeg.bind(this)}
                             API={this.props.API}
                             TotalDoctorCount={this.props.TotalDoctorCount}
                             isFetch={this.props.isFetch}
                             DB={this.props.DB}
                             changesubs={this.props.changesubs}
                             FollowThunkCreator={this.props.FollowThunkCreator}
                             UnFollowThunkCreator={this.props.UnFollowThunkCreator}/>
        )
    }
}


let MapStateToProps = (state) => {
    return {
        DB: state.DoctorsListPage.DoctorList,
        API: state.DoctorsListPage,
        TotalDoctorCount: state.DoctorsListPage.TotalDoctorCount,
        isFetch: state.DoctorsListPage.isFetch
    }

};

export default connect(MapStateToProps, {
    getUsersThunkCreator,
    FollowThunkCreator,
    UnFollowThunkCreator
})(DoctorsListPageAPIContainer);
