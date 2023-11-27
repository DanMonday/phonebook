import React from "react";
import { removeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Тут нужно добавить логику для выхода
        dispatch(removeUser());
        console.log("Logout logic");
      };

    return(
        <button onClick={handleLogout}>Home page</button>
    )   
}

export default LogoutButton