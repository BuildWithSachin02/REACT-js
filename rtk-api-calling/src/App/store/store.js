import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../slices/BooksSlices.js"
const Books = configureStore({
    reducer:{
        books:BookSlice,
    }
})
export default Books;

