import React from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/userReducer";

const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt =>{
        evt.preventDefault();

        const children = evt.currentTarget.elements

        const name = children.userName.value
        const email = children.userEmail.value
        const password = children.userPassword.value

        console.log(name)
        console.log(email)
        console.log(password)

        dispatch(registerThunk({ name, email, password }))
    }

    return(
    <div>
        <h1>Register Account</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Name</p>
                <input name="userName" type="text" required/>
            </label>
            <label>
                <p>Email</p>
                <input name="userEmail" type="email" required/>
            </label>
            <label>
                <p>Password</p>
                <input name="userPassword" type="password" minLength={4} required/>
            </label>
            <br/>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    )
} 

export default Register

