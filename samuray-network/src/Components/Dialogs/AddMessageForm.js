import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../FormControl/FormikControl";

function AddMessageForm() {
    const initialValues = {
        message: '',
    }
    const validationSchema = Yup.object({
        message: Yup.string()
    })
    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {formik => {
                return <Form>
                    <FormikControl
                        control='textarea'
                        label='New message'
                        name='message'
                    />
                    <button type='submit'>Send</button>
                </Form>
            }}

        </Formik>
    )
}

export default AddMessageForm
