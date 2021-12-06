import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../FormControl/FormikControl";

function AddMessageForm(props) {
    const initialValues = {
        newMessageText: '',
    }
    const validationSchema = Yup.object({
        newMessageText: Yup.string()
    })
    const onSubmit = values => {
        props.addMessage(values.newMessageText)
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
                        name='newMessageText'
                        placeholder='Enter your message'
                    />
                    <button type='submit'>Send</button>
                </Form>
            }}

        </Formik>
    )
}

export default AddMessageForm
