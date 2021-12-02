import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

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
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>

            <Form>
                <h1>Login</h1>
                <div>
                    <Field type="text" id="login" name='login' placeholder="Login" autoComplete="your-login"></Field>
                    <ErrorMessage name='login' />
                </div>
                <div>
                    <Field type="password" id="password" name='password' placeholder="Your password" autoComplete="current-password"></Field>
                    <ErrorMessage name='password' />

                </div>
                <div>
                    <Field type="checkbox" id="remember" name="remember" /> <span>Remember me</span>
                </div>
                <button type="submit">Sign in</button>


            </Form>

        </Formik>
    )
}
