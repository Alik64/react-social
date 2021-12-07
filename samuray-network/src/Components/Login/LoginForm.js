import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormControl/FormikControl'
import style from './Login.module.css'


function LoginForm(props) {

    const initialValues = {
        email: "",
        password: "",
        rememberMe: false
    }
    const onSubmit = (values, { setSubmitting, setFieldError, setStatus }) => {
        props.onSubmit(values, setSubmitting, setFieldError, setStatus)

    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email format'),
        password: Yup.string().required('Required')
    })
    return (
        <Formik

            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnMount
        >

            {formik => {


                return (
                    <Form className={style.form}>
                        <h1>Login</h1>
                        <FormikControl
                            control='input'
                            type='email'
                            name='email'
                            id='email'
                            placeholder='E-mail'
                        />
                        <div>{formik.status}</div>

                        <FormikControl
                            control='input'
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Your password'
                        />
                        <div >
                            <Field type="checkbox" id="rememberMe" name="rememberMe" /> <span>Remember me</span>
                        </div>
                        <button type="submit" disabled={!formik.isValid}>Sign in</button>


                    </Form>
                )
            }}


        </Formik>
    )
}

export default LoginForm
