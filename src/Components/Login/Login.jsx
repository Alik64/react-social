import React from 'react'

import { reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form >
            <div>
                <input type={"text"} placeholder={"Login"} />

            </div>
            <div>
                <input type={"password"} placeholder={'Password'} />
            </div>
            <div>
                <input type={"checkbox"} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}





export default function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}
