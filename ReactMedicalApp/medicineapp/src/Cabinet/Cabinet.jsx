import React from 'react';
import style from './Cabinet.module.css';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


function Cabinet(props) {
    let path = (props.DB).map((objt) => objt._id);
    let pacientlist = (props.DB).map((objt) => {
        return (
            <div> {objt._id}: {objt.name} </div>
        )
    });


    let CreatePacient = (value) => {
        props.PushPacientsToDB(value.newPacient);
        props.CreatePacient(value.newPacient);
    };


    return (

        <div className={style.Cabinet}>
            <h1> Список пацієнтів</h1>
            <NavLink to={`/cabinet/1 ${path}`}>  {pacientlist} </NavLink>
            <CabinetPageRedux onSubmit={CreatePacient}/>

        </div>
    );
};

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div><Field name={'newPacient'} placeholder={"Write a new pacient"} component={'textarea'}/></div>
        <button> Добавити пацієнта</button>
    </form>)
};


const CabinetPageRedux = reduxForm({
    form: 'cabinet'
})(AddMessageForm);


export default Cabinet;
