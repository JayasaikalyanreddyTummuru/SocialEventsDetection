import React from 'react'
import './loginstyle.css';
import { Link,Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Register() {
    const [register, setregister] = useState(false);
    const [message,setmessage] = useState(false);
    const [userinput, setUsername] = useState("");
    const [emailInput, setuserEmail] = useState("");
    const [passwordInput, setuserPassword] = useState("");
    const handleClick = async (e) => {
        axios.post('http://localhost:5000/register', {
            uname: userinput,
            email: emailInput,
            pass: passwordInput
        }).then((response) => {
            if (response.data ==='success')
                setregister(true)
            else
                setmessage(true)
        })
    }
    if (register)
        return <Navigate to="/" />
    return (
        <div className = "img_container">
        <div class="container">
            <h1 class="form_heading">Registration</h1>
            <div class="form_style">
                <input type="text" value={userinput} onChange={e => setUsername(e.target.value)} class="input_style"  placeholder="Username" />
            </div>
            <div class="form_style">
                <input type="text" value={emailInput} class="input_style" onChange={e => setuserEmail(e.target.value)}  placeholder="Email Address" />
            </div>
            <div class="form_style">
                <input type="password" value={passwordInput} class="input_style" onChange={e => setuserPassword(e.target.value)}  placeholder="Password" />
            </div>
            <button class="form_button" onClick = {handleClick} type="submit">Register</button>
            <p class="form_para">
                {message?<span> Couldn't Register ,Try Login you might </span> : null}
                <span >Already have an account <Link to={"/"}>Sign in</Link></span>
            </p>
        </div>
        </div>
    )
}
export default Register;