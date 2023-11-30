import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerRequest } from "../service/api";

export const registerThunk = createAsyncThunk(
    'user/registerThunk', 
    async (formData, thunkAPI) => {
    try{
        console.log(`${formData}`)
        const data = await registerRequest(formData)
        console.log(data);
        // return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
}) 



const initialState = {  
    isLoading: false,
    error: null,
    userData: null,
    token: null,    
}

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(registerThunk.pending, (state, action) => {
    
        })
        .addCase(registerThunk.rejected, (state, action) => {
            
        })
        .addCase(registerThunk.fulfilled, (state, action) => {
    
        })
    },
}) 

// export const userReducer = userSlice.reducer;