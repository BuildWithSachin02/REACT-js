import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBooks = createAsyncThunk("books/fetch", async () => {
    const res = await axios.get("http://localhost:3000/books")
    // console.log(res.data)
    return res.data;
})
export const PostBooks = createAsyncThunk("books/post", async (book) => {
    const res = await axios.post("http://localhost:3000/books", book)
    return res.data;
})
export const DeleteBooks = createAsyncThunk("books/delete", async (id) => {
    const res = await axios.delete(`http://localhost:3000/books/${id}`)
    return res.data
})

const bookSlices = createSlice({
    name: "books",
    initialState: {
        books: [],
        loading: false,
        error: null
    },
    reducers: {
        addBooks: (state, action) => {
            state.books.push(action.payload)
        }
    },
    extraReducers: ((builder) => {
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.books = action.payload;
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(PostBooks.fulfilled, (state, action) => {
            state.loading = false
            state.books.push(action.payload)
        })
        builder.addCase(PostBooks.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message;
        })
        builder.addCase(DeleteBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.books = state.books.filter((book) => book.id !== action.payload.id)//if matched id not deleted and if not match id 2 !== 2 so then this will be deleted 
        })
        builder.addCase(DeleteBooks.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    })
})
export default bookSlices.reducer