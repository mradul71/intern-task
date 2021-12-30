import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login({login}) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    return (
    <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={() => login(loginEmail, loginPassword)}> Login</button>
        <Link to="/register"><p>Create an account</p></Link>
    </div>
    )
}

export default Login
