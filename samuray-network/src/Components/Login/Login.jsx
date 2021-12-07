import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import style from "./Login.module.css"
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import LoginForm from "./LoginForm";


const onSubmit = (values, onSubmitProps) => {
    console.log('Form data', values)

    // onSubmitProps.setSubmitting(true)
}




const Login = (props) => {
    return (
        <div className={style.formik}>
            <LoginForm />

        </div>
    )
}

export default connect(null, { login })(Login)