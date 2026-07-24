import { configureStore } from "@reduxjs/toolkit";
import blogSlices from "../features/blogSlices.js"

const store = configureStore({
    reducer:{
        blogs:blogSlices
    }
})
export default store    