import React from 'react'
import style from "./ProfileInfo.module.css";

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormControl/FormikControl'



function ProfileDataForm(props) {

    const initialValues = {
        fullName: "",
        lookingForAJob: true,
        lookingForAJobDescription: "",

    }
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        props.onSubmit(values, setSubmitting, setStatus)

    }

    const validationSchema = Yup.object({
        email: Yup.string()
        // password: Yup.string().required('Required')
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

                // console.log(formik.status)
                return (
                    <Form className={style.form}>
                        <button type="submit">Save</button>

                        <FormikControl

                            control='input'
                            type='text'
                            name='fullName'
                            id='fullName'
                            placeholder='Enter your name'
                        />


                        <div className="error">{formik.status}</div>
                        {/* <button type="submit" disabled={!formik.isValid}>Sign in</button> */}


                    </Form>
                )
            }}


        </Formik>
    )
}

export default ProfileDataForm
