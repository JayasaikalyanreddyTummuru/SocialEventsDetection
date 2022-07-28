import React from 'react'
import './loginstyle.css';
import { useState } from "react";
import { Navigate,Link} from "react-router-dom";
import axios from 'axios'

function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [login , setlogin] = useState(false);

    const handleClick = async (e) => {
     axios.post('http://localhost:5000/login', {
            uname: username,
            pass: password
        }).then((response) => {
            console.log(response.data);
            if(response.data === 'success')
                setlogin(true)        
        })
    }
    if(login)
    return <Navigate to="/event" />
    return (
        <div class = "img_container">
        <div class="container">
                <h1 class="form_heading">User Login</h1>
                <div class="form_style">
                    <input type="text" value={username} onChange={e => setusername(e.target.value)} class="input_style" placeholder="Username or email" />
                </div>
                <div class="form_style">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} class="input_style" placeholder="Password" />
                </div>
                <button class="form_button" onClick={handleClick} type="submit">Login</button>
                <p class="form_para">
                    <span >Don't have an account?<Link to={"/register"}>Sign up</Link></span>
                </p>
        </div>
        </div>
    )
}
export default Login