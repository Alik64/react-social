import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormControl/FormikControl'
import style from './Login.module.css'


function LoginForm(props) {

    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
        captcha: ""
    }
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        props.onSubmit(values, setSubmitting, setStatus)

    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email format'),
        password: Yup.string().required('Required'),
        captcha: Yup.string()
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={false}
        // validateOnMount
        >

            {formik => {
                console.log(props.captchaUrl)
                console.log(formik.errors)

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
                        {/* if captcha = true, show image */}
                        <div>{props.captchaUrl && <img src={props.captchaUrl} alt='captcha' />}</div>
                        {/* then show input to send captcha to server */}
                        <div>{props.captchaUrl && <FormikControl
                            control='input'
                            type='text'
                            name='captcha'
                            id='captcha'
                            placeholder='Put the text you see'
                        />}</div>
                        <div className="error">{formik.status}</div>
                        <button type="submit" disabled={!formik.isValid}>Sign in</button>


                    </Form>
                )
            }}


        </Formik>
    )
}

export default LoginForm
