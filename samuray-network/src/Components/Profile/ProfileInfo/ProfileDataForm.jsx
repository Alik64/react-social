import React from 'react'
import style from "./ProfileInfo.module.css";

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormControl/FormikControl'




function ProfileDataForm({ profile, onSubmit }) {

    const initialValues = {
        aboutMe: !profile.aboutMe ? '' : profile.aboutMe,
        contacts: {
            facebook: !profile.contacts.facebook ? '' : profile.contacts.facebook,
            github: !profile.contacts.github ? '' : profile.contacts.github,
            instagram: !profile.contacts.instagram ? '' : profile.contacts.instagram,
            mainLink: !profile.contacts.mainLink ? '' : profile.contacts.mainLink,
            twitter: !profile.contacts.twitter ? '' : profile.contacts.twitter,
            vk: !profile.contacts.vk ? '' : profile.contacts.vk,
            website: !profile.contacts.website ? '' : profile.contacts.website,
            youtube: !profile.contacts.youtube ? '' : profile.contacts.youtube,
        },

        fullName: !profile.fullName ? '' : profile.fullName,
        lookingForAJob: !profile.lookingForAJob ? '' : profile.lookingForAJob,
        lookingForAJobDescription: !profile.lookingForAJobDescription ? '' : profile.lookingForAJobDescription
    }




    console.log(profile)

    const onSendProfileUpdate = (formData, { setSubmitting, setStatus }) => {
        onSubmit(formData, setSubmitting, setStatus)

    }

    const validationSchema = Yup.object({
        aboutMe: Yup.string(),
        contacts: Yup.object().shape({
            facebook: Yup.string(),
            github: Yup.string(),
            instagram: Yup.string(),
            mainLink: Yup.string(),
            twitter: Yup.string(),
            vk: Yup.string(),
            website: Yup.string(),
            youtube: Yup.string(),
        }),

        fullName: Yup.string(),
        lookingForAJob: Yup.string(),
        lookingForAJobDescription: Yup.string()

        // fullName: Yup.string().nullable(),
        // lookingForAJobDescription: Yup.string().nullable(),
        // aboutMe: Yup.string().nullable(),
        // contacts: Yup.object().shape({
        //     facebook: Yup.string().nullable(),
        //     github: Yup.string().nullable(),
        //     instagram: Yup.string().nullable(),
        //     mainLink: Yup.string().nullable(),
        //     twitter: Yup.string().nullable(),
        //     vk: Yup.string().nullable(),
        //     website: Yup.string().nullable(),
        //     youtube: Yup.string().nullable(),
        // })

        // password: Yup.string().required('Required')
    })
    return (

        <Formik
            initialValues={initialValues}
            onSubmit={onSendProfileUpdate}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnMount
        >

            {formik => {
                console.log("formik", formik)

                return (
                    <Form className={style.descriptionBlock}>


                        <button type="submit">Save</button>

                        <div className="error">error : {formik.status}</div>

                        <div className={style.form_champ}>
                            <b>Full name :</b>

                            <FormikControl
                                control='input'
                                type='text'
                                name='fullName'
                                id='fullName'
                                placeholder={profile.fullName}
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
                        <div >
                            <h3>Contacts</h3>
                            {Object.keys(profile.contacts).map((key, index) => {
                                return (

                                    <ul key={index}>
                                        <li >
                                            {/* <Contact contactTitle={key} contactValue={profile.contacts[key]} /> */}
                                            <b>{key}</b>  <Field
                                                type='text'
                                                name={`contacts.${key}`}
                                                id={key}

                                            />
                                        </li>
                                    </ul>

                                )
                            })}

                        </div>

                        {/* <button type="submit" disabled={!formik.isValid}>Sign in</button> */}


                    </Form>
                )
            }}


        </Formik>
    )
}

export default ProfileDataForm
