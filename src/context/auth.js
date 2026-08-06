import { createContext, useContext, useEffect, useState } from "react"
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = (auth) => {
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])
    return(
        <AuthContext value={{ user, login, logout }}>
            {!loading && children}
        </AuthContext>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
