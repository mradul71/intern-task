import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register({register}) {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    return (
        <div>
          
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={() => register(registerEmail, registerPassword)}> Create User</button>
        <Link to="/login"><p>Already have an account ?</p></Link>
      </div>
    )
}

export default Register
