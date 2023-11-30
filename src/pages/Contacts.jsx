import React from "react";

const Contacts = () => {
    return(
    <>
        <h1>Contact page</h1>
        <form>
            <label>
                Contact Number
                <input name="contactNumber" />
            </label>
            <label>
                Contact Name
                <input name="contactUser" />
            </label>
            <button type="submit">Send Contact</button>
        </form>
    </>
    )
}

export default Contacts