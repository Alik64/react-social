import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'

const initialValues = {
    friends: [
        {
            name: '',
            email: ''
        }
    ]
}

const Login = () => (
    <div>
        <h1>Invite Friends</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                }, 500)
            }}
        >
            {() => <div>Foo</div>}
        </Formik>
    </div>
)

export default Login