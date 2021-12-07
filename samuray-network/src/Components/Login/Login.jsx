import React from "react";
import style from "./Login.module.css"
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router";






const Login = (props) => {

    const onSubmit = (formData) => {
        console.log('Form data', formData)
        props.login(formData.email, formData.password, formData.rememberMe)
        // onSubmitProps.setSubmitting(true)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return (
        <div className={style.formik}>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth
});
export default
    connect(mapStateToProps, { login })(Login);