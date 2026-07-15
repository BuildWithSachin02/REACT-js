import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

////////////////////////////////FETCH-API/////////////////////////////////////////////////////////
//now we have first thing to call api and get data and check if user is already they have account
export const userFetch = createAsyncThunk("users/fetch", async () => {//call API
    const res = await axios.get("http://localhost:3000/userAuth")
    return res.data;
})
////////////////////////////////FETCH-API/////////////////////////////////////////////////////////


/////////////////////////POST-API////////////////////////////////////////////////////////////
export const userPost = createAsyncThunk("users/post", async (user) => {//POST-API
    const res = await axios.post("http://localhost:3000/userAuth",user)//POST-API
    // console.log(res.data)
    return res.data;//POST-API
})
/////////////////////////POST-API////////////////////////////////////////////////////////////



const AuthSlices = createSlice({
    name: "user",
    initialState: {
        users: [],
        error: null,
        loader: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(userFetch.pending, (state, action) => {
            state.loader = true;
        })
        builder.addCase(userFetch.fulfilled, (state, action) => {//GET USER - FULFILLED
            state.loader = false
            state.users = action.payload
            // console.log(action.payload)
        }) //GET-DATA-API
        builder.addCase(userFetch.rejected, (state, action) => {//GET-USER - REJECTED
            state.loader = false
            state.error = action.error.message;
        })//GET-DATA-API

        builder.addCase(userPost.fulfilled, (state, action) => {
            console.log(action.payload)
            state.users.push(action.payload);
        })//POST-DATA-API
        builder.addCase(userPost.rejected, (state, action) => {
            state.loader = false
            state.error = action.error.message
        })//POST-DATA-API   
    }
})
export default AuthSlices.reducer;