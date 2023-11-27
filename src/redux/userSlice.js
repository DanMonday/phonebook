import { createSlice } from "@reduxjs/toolkit";


const initialState = {  
    email: null,
    id: null,
    token: null,  
    isLoggedIn: false,  
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.userData 
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        changePage(state, action){
            state.isLoggedIn = true
        },
        removeUser(state, action){
            state.email = null
            state.token = null
            state.isLoggedIn = false;
        }
    },
})

export const {setUser, changePage, removeUser} = userSlice.actions

export default userSlice.reducer 