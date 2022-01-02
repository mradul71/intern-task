import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css';

function Login({login}) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    return (
      <div className='loginPage'>
      <div className='loginForm'>
        <h3> Login </h3>
        <input
        type="text"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
        type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={() => login(loginEmail, loginPassword)}> Login</button>
        <Link className='link' to="/register"><p>Create an account</p></Link>
    </div>
    </div>
    )
}

export default Login
