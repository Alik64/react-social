import React from 'react'


export default function Login() {
    return (
        <div>
            <h1>Login</h1>
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
        </div>
    )
}
