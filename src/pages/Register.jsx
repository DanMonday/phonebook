import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/userSlice";


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = evt =>{
        evt.preventDefault();
        const children = evt.currentTarget.elements
        const email = children.userEmail.value
        const password = children.userPassword.value

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user)
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }))
            navigate('/');

        })
        .catch(console.error)

        console.log(email)
        console.log(password)
}

    return(
    <div>
        <h1>Register Account</h1>
        <form onSubmit={handleSubmit}>
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

export default Register;