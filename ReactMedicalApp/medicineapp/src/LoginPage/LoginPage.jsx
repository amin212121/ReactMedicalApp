import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength30Creator, requiredField} from "../validators/validators";
import {Input} from "../CommonElements/FormsControl/FormsControl";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const maxLength15 = maxLength30Creator(15);

const LoginPage = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field name={'email'} placeholder={'email'} component={Input}
                            validate={[requiredField, maxLength15]}/></div>
                <div><Field name={'pass'} placeholder={'Pass'} component={Input}
                            validate={[requiredField, maxLength15]}/></div>
                <div><Field name={'rememberme'} component={'input'} type={'checkbox'}/> Remember me</div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
        </div>
    );
};

const LoginPageRedux = reduxForm({
    form: 'login'
})(LoginPage);


const Login = (props) => {
    const onSubmit = (formdata) => {
        props.login(formdata.email, formdata.pass, formdata.rememberme);
    };
    if(props.isAuth) {
       return (<Redirect to="/profile"/>)
    }
    return (<div>
        <h1> Ви повинні увійти! </h1>
        <LoginPageRedux onSubmit={onSubmit}/>
    </div>)
};

const MapStateToProps = (state) => ({
    isAuth: state.UserInfoPage.UserAuthInfo.isAuth
})

export default connect(MapStateToProps, {login})(Login);
