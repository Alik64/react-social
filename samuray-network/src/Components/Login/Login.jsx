import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const initialValues = {
    login: "",
    password: ""
}
const onSubmit = (values) => {
    console.log(values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')

})

const Login = () => (
    <div>
        <h1>Login</h1>
        <Formik>

        </Formik>


    </div>
)

export default Login