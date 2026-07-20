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
export const EditBooks = createAsyncThunk("books/edit", async (book) => {
    const res = await axios.put(`http://localhost:3000/books/${book.id}`, book)
    return res.data;
})

const bookSlices = createSlice({
    name: "books",
    initialState: {
        books: [],
        loading: false,
        error: null
    },
    reducers: {
        // addBooks: (state, action) => {
        //     state.books.push(action.payload)
        // },
        // deleteBooks: (state, action) => {
        //     const { i } = action.payload
        //     state.books.splice(i, 1);
        // },
        // editBooks: (state, action) => {
        //     const { index, book } = action.payload
        //     state.books[index] = book
        // }
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
        builder.addCase(EditBooks.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(EditBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.books = state.books.map((book) => {
                if (book.id === action.payload.id) {
                    return action.payload
                }
                return book;
            })
        })
        builder.addCase(EditBooks.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
    })
})
export const { addBooks, deleteBooks, editBooks } = bookSlices.actions;
export default bookSlices.reducer