import React from "react";
import { useSelector } from 'react-redux';



const UserMenu = () => {
    const userEmail = useSelector((state) => state.user.email);

    console.log(userEmail)

    return(
        <p>Ласкаво Просимо, {userEmail}</p>
    )   
}

export default UserMenu