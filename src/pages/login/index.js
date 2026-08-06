import "./index.css"

import React, {useState} from "react"
import { useAuth } from "../../context/auth.js"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth, db} from "../../firebase.js"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {login} = useAuth()

    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            setError("")
            await login(email, password)
            setEmail("")
            setPassword("")
        } catch (err) {
            setError(err.message.replace("Firebase: ", ""))
            console.log(error)
        }
    }

    return(
        <div className="login-page">
            <div className="login-container">
                <div className="login-container-header">Login to admin panel</div>
                <input
                    className="login-input"
                    id="loginEmail"
                    placeholder="Email"
                    onChange={(e) => {setEmail(e.target.value)}}
                    required />

                <input
                    className="login-input"
                    id="loginPassword"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {setPassword(e.target.value)}}
                    required
                />

                <div className="login-button" onClick={handleSignIn}>Login</div>
            </div>
        </div>
    )
}

export default Login
