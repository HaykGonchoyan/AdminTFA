import "./index.css"

import React, {useState} from "react"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth, db} from "../../firebase.js"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSignIn = async () => {
        setEmail(document.getElementById("loginEmail"))
        setPassword(document.getElementById("loginPassword"))
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setEmail("")
            setPassword("")
        } catch (err) {
            setError(err.message.replace("Firebase: ", ""))
        }
    }

    return(
        <div className="login-page">
            <div className="login-container">
                <div className="login-container-header">Login to admin panel</div>
                <input className="login-input" id="loginEmail" placeholder="Email"></input>
                <input className="login-input" id="loginPassword" placeholder="Password" type="password"></input>
                <div className="login-button" onClick={handleSignIn}>Login</div>
            </div>
        </div>
    )
}

export default Login
