import React from 'react';
import {
    addPacient,
    CabinetGenerate, CreatePacient, PushPacientsToDB
} from "../Redux/cabinet-page-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../FrontSide/HOC/withAuthRedirect";
import {compose} from "redux";
import Cabinet from "./Cabinet";


class CabinetContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.CabinetGenerate();
    }


    render() {

        return <Cabinet NewText={this.props.NewText}
                        DB={this.props.DB}
                        CreatePacient={this.props.CreatePacient}
                        PushPacientsToDB={this.props.PushPacientsToDB}/>
    }

}

let MapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.UserInfoPage.UserAuthInfo.isAuth
    }

};

let MapStateToProps = (state) => {
    return {
        NewText: state.CabinetPage.NewText,
        DB: state.CabinetPage.pacientDB
    }
};


export default compose(
    connect(MapStateToProps, {
        CreatePacient,
        addPacient,
        CabinetGenerate,
        PushPacientsToDB

    }),
    connect(MapStateToPropsForRedirect),
    withAuthRedirect
)
(CabinetContainer);





