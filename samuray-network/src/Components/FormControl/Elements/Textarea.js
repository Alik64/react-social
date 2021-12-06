import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import styles from './Textarea.module.css'

function Textarea(props) {
    const { name, label, ...rest } = props
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea
