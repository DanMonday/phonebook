import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendContact } from "../service/api";

export const sendContactAsync = createAsyncThunk(
    'contact/sendThunk', 
    async (formData, thunkAPI) => {
    try{
        console.log(`${formData}`)
        const data = await sendContact(formData);
        console.log(data);
        return data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
      }
}) 

const initialState = {  
    email: null,
    id: null,
    token: null,  
    isLoggedIn: false, 
    isLoding: false, 
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email 
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        removeUser(state, action){
            state.email = null
            state.token = null
            state.isLoggedIn = false;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(sendContactAsync.pending, (state, action) => {
            state.isLoding = true;
        })
        .addCase(sendContactAsync.rejected, (state, action) => {
            state.isLoding = false;
            console.error("Error sending contact:", action.error.message);
        })
        .addCase(sendContactAsync.fulfilled, (state, action) => {
            state.isLoding = false;
            console.log("Contact sent successfully");
        })
    },
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer 