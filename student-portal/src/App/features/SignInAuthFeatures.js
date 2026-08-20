import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdmin = createAsyncThunk("auth/signin", async ({ email, password }, { rejectWithValue }) => {
    try {
        const res = await axios.get("http://localhost:3000/admin")//get the admin data
        const user = res.data.find((user) => (
            user.email == email && user.password == password
        ))
        if (!user) {
            return rejectWithValue("invalid email and passwords")
        }
        localStorage.setItem("isAuthenticated", "true")//important line for protectroute
        return user;//this is most imp line
    } catch (error) {
        return rejectWithValue(error.message)
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