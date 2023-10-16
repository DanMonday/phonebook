import { createSlice } from "@reduxjs/toolkit";


const initialState = {  
    isLoading: false,
    error: null,
    email: null,
    token: null,    
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.userData 
            state.token = action.payload.token
        },
        removeUser(state, action){
            state.email = null
            state.token = null
        }
    },
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer 