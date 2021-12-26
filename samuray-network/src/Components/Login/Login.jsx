import React from "react";
import style from "./Login.module.css"
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router";

const Login = (props) => {

    const onSubmit = (formData, setSubmitting, setStatus) => {
        console.log('Form data', formData)
        console.log('SetStatus', setStatus)

        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha, setStatus)

        setSubmitting(false)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return (
        <div className={style.formik}>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});
export default
    connect(mapStateToProps, { login })(Login);