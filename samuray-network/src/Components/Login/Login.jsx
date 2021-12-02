import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import style from "./Login.module.css"

const initialValues = {
    login: "",
    password: "",
    remember: true
}
const onSubmit = (values) => {
    console.log(values)
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

                <Form className={style.form}>
                    <h1>Login</h1>
                    <div className={style.field}>
                        <Field type="text" id="login" name='login' placeholder="Login" autoComplete="your-login"></Field>
                        <ErrorMessage name='login' className={style.error} />
                    </div>
                    <div className={style.field}>
                        <Field type="password" id="password" name='password' placeholder="Your password" autoComplete="current-password"></Field>
                        <ErrorMessage name='password' className={style.error} />
                    </div>
                    <div >
                        <Field type="checkbox" id="remember" name="remember" /> <span>Remember me</span>
                    </div>
                    <button type="submit">Sign in</button>


                </Form>

            </Formik>
        </div>
    )
}
