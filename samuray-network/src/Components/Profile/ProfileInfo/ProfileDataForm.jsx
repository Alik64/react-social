import React from 'react'
import style from "./ProfileInfo.module.css";

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormControl/FormikControl'
import { Contact } from './ProfileInfo';


const ProfileDataForm = ({ profile }) => {
    return (<div className={style.descriptionBlock}>
        {" "}

        <div>
            <h2>{profile.fullName}</h2>
        </div>


        <div>
            <b>Looking for a job</b> :{profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skils</b>:{profile.lookingForAJobDescription}
            </div>
        }

        <div>
            <h3>Contacts</h3>
            {Object.keys(profile.contacts).map((key, index) => {
                return (
                    <ul key={index}>
                        <li >
                            <Contact contactTitle={key} contactValue={profile.contacts[key]} />
                        </li>
                    </ul>
                )
            })}

        </div>

    </div>)

}

export default ProfileDataForm
