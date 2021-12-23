import React from 'react'
import style from "./ProfileInfo.module.css";

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormControl/FormikControl'




function ProfileDataForm(props) {

    const initialValues = {
        fullName: props.profile.fullName,
        lookingForAJob: props.profile.lookingForAJob,
        lookingForAJobDescription: "",
        aboutMe: "",


    }
    const onSubmit = (formData, { setSubmitting, setStatus }) => {
        props.onSubmit(formData, setSubmitting, setStatus)

    }

    const validationSchema = Yup.object({
        fullName: Yup.string(),
        lookingForAJobDescription: Yup.string(),
        aboutMe: Yup.string()
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
                    <Form className={style.descriptionBlock}>
                        <button type="submit">Save</button>
                        <div className={style.form_champ}>
                            <b>Full name :</b>

                            <FormikControl
                                control='input'
                                type='text'
                                name='fullName'
                                id='fullName'
                                placeholder={props.profile.fullName}
                            />

                        </div>

                        <div >
                            <b>Looking for a job : </b>
                            <label htmlFor="lookingForAJob">Yes</label>
                            <Field type="checkbox" id="lookingForAJob" name="lookingForAJob" />
                        </div>
                        <div className={style.form_champ}>
                            <b>My professional skills :</b>

                            <FormikControl
                                control='textarea'
                                type='textarea'
                                name='lookingForAJobDescription'
                                id='lookingForAJobDescription'
                                placeholder="My professional skills "
                            />

                        </div>
                        <div className={style.form_champ}>
                            <b>About me :</b>

                            <FormikControl
                                control='textarea'
                                type='textarea'
                                name='aboutMe'
                                id='aboutMe'

                            />

                        </div>

                        <div className="error">{formik.status}</div>
                        {/* <button type="submit" disabled={!formik.isValid}>Sign in</button> */}


                    </Form>
                )
            }}


        </Formik>
    )
}

export default ProfileDataForm
