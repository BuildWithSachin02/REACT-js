import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../features/studentSlice"
import signInSlice from "../features/SignInAuthFeatures"

const store = configureStore({
    reducer: {
        admins: signInSlice,
        students: studentSlice
    }
})
export default store