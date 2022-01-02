import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './register.css';

function Register({ register }) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  return (
    <div className='registerPage'>
      <div className='registerForm'>
        
          <h3> Register User </h3>
          <input
          type="text"
            placeholder="Enter Your Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
          type="password"
            placeholder="Enter Your Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={() => register(registerEmail, registerPassword)}> Create User</button>
          <Link className='link' to="/login"><p>Already have an account ?</p></Link>

      </div>
    </div>
  )
}

export default Register