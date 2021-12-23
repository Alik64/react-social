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

    }
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        props.onSubmit(values, setSubmitting, setStatus)

    }

    const validationSchema = Yup.object({
        fullName: Yup.string(),

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
                            <Field type="checkbox" id="lookingForAJob" name="lookingForAJob" />
                        </div>
                        <div className={style.form_champ}>
                            <b>Description :</b>

                            <FormikControl
                                control='input'
                                type='text'
                                name='lookingForAJobDescription'
                                id='lookingForAJobDescription'

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
