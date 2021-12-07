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
            validationSchema={validationSchema}
            validateOnMount
        >
            {formik => {
                console.log(formik)

                return <Form>
                    <FormikControl
                        control='textarea'
                        name='newPostText'
                        placeholder='Enter your text'
                    />
                    <button type='submit' disabled={!formik.isValid || !formik.dirty}>New post</button>
                </Form>
            }}

        </Formik>
    )
}

export default AddPostForm
