import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchAdmin = createAsyncThunk("auth/signin", async ({ email, password }) => {
    try {
        const res = await axios.get("http://localhost:3000/admin")
        const user = res.data.find((user) => (
            user.email == email && user.password == password
        ))
        if (user) {
            localStorage.setItem("isAuthenticated", "true");
            alert("singin successfully")
        } else {
            alert("invalid inputs!")
        }
    } catch (error) {
        throw error;
    }
})


const SignInSlice = createSlice({
    name: "admin",
    initialState: {
        admin: [],
        error: null,
        loader: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAdmin.pending, (state, action) => {
            state.loader = true
        }).addCase(fetchAdmin.fulfilled, (state, action) => {
            state.loader = false
            state.admin = action.payload
        }).addCase(fetchAdmin.rejected, (state, action) => {
            state.loader = false
            state.error = action.error.message
        })
    }
})
export default SignInSlice.reducer