import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormControl/FormikControl'



function AddPostForm(props) {
    const initialValues = {
        newPostText: '',
    }
    const validationSchema = Yup.object({
        newPostText: Yup.string()
    })
    const onSubmit = values => {
        props.addPost(values.newPostText)
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
                        name='newPostText'
                        placeholder='Enter your text'
                    />
                    <button type='submit'>New post</button>
                </Form>
            }}

        </Formik>
    )
}

export default AddPostForm
