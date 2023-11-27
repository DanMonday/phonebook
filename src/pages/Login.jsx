import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { changePage } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    

    const hendleLogin = evt => {
        evt.preventDefault();
        const children = evt.currentTarget.elements
        const email = children.userEmail.value
        const password = children.userPassword.value

        console.log(evt)
        console.log(children)
        console.log(email)
        console.log(password)

        evt.preventDefault();
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            dispatch(changePage())
            console.log(user)
            navigate('/');
        })
        
        .catch(console.error)
    }


    return(
        <div>
        <h1>Login Account</h1>
        <form onSubmit={hendleLogin}>
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