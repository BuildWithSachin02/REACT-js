import { configureStore } from "@reduxjs/toolkit";
import authSlices from "../featuresSlicecs/authSlices"
import bookSlices from "../featuresSlicecs/booksSlices";

const store = configureStore({
    reducer: {
        users: authSlices,
        books: bookSlices
    }
})
export default store