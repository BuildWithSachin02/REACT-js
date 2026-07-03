import { configureStore } from "@reduxjs/toolkit";
import formCrudSlice from "../Slices/crud.js"

const store = configureStore({
    reducer:{
        formCrud : formCrudSlice,
    }
})
export default store;