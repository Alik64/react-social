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
            {({ isSubmitting }) => <Form>
                <div className="row">
                    <div className="col">
                        <Field name="name" type="text" />
                    </div>
                    <div className="col">
                        <Field name="email" type="email" />

                    </div>
                    <div className="col">
                        <button type="button">X</button>
                    </div>
                </div>
                <button type="submit" disabled={isSubmitting}>Invite</button>
                <button type="submit" disabled={isSubmitting}>AddFriend</button>

            </Form>}
        </Formik>
    </div>
)

export default Login