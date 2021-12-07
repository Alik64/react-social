import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import style from "./Login.module.css"
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import LoginForm from "./LoginForm";







const Login = (props) => {

    const onSubmit = (formData) => {
        console.log('Form data', formData)

        // onSubmitProps.setSubmitting(true)
    }
    return (
        <div className={style.formik}>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, { login })(Login)