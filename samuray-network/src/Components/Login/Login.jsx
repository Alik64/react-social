import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import style from "./Login.module.css"

const initialValues = {
    login: "",
    password: "",
    rememberMe: true
}
const onSubmit = (values, onSubmitProps) => {
    console.log('Form data', values)
    console.log('SUbmitProps', onSubmitProps)
    onSubmitProps.setSubmitting(true)
}

const validationSchema = Yup.object({
    login: Yup.string().required('Required'),
    password: Yup.string().required('Required')
})



export default function Login(props) {
    return (
        <div className={style.formik}>
            <Formik

                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {formik => {
                    return (
                        <Form className={style.form}>
                            <h1>Login</h1>
                            <div className={style.field}>
                                <Field type="text" id="login" name='login' placeholder="Login" autoComplete="your-login"></Field>
                                <ErrorMessage name='login' component='div' className="error" />
                            </div>
                            <div className={style.field}>
                                <Field type="password" id="password" name='password' placeholder="Your password" autoComplete="current-password"></Field>
                                <ErrorMessage name='password' component='div' className="error" />
                            </div>
                            <div >
                                <Field type="checkbox" id="rememberMe" name="rememberMe" /> <span>Remember me</span>
                            </div>
                            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Sign in</button>



                        </Form>
                    )
                }}


            </Formik>
        </div>
    )
}#