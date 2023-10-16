import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/userSlice";

const Login = () => {
    const dispatch = useDispatch

    const hendleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(console.log)
        .catch(console.error)
    }


    return(
        <div>
        <h1>Login Account</h1>
        <form>
            <label>
                <p>Email</p>
                <input name="userEmail" type="email" required/>
            </label>
            <label>
                <p>Password</p>
                <input name="userPassword" type="password" required/>
            </label>
            <br/>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    )
} 

export default Login