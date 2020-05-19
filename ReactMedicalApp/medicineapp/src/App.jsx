import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import Contacts from "./Contacts/Contacts";
import MainPage from "./MainPage/MainPage";
import CabinetContainerConnect from "./Cabinet/CabinetContainer";
import {Route} from "react-router-dom";
import DoctorsListPageContainer from "./DoctorsListPage/DoctorsListPageContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginPageRedux from "./LoginPage/LoginPage";



function App(props) {
    return (

        <div>
            <Navbar/>
            <Route exact path='/' render={() => <MainPage/>}/>
            <Route path='/aboutus' render={() => <AboutUs/>}/>
            <Route path='/contacts' render={() => <Contacts/>}/>
            <Route path='/doctorsList' render={() => <DoctorsListPageContainer/>}/>
            <Route path='/cabinet' render={() => <CabinetContainerConnect/>}/>
            <Route path='/login' render={() => <LoginPageRedux/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

        </div>

    );
}

export default App;
