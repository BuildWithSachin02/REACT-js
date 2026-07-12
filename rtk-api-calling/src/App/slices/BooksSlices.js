import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//tasks is API-CALLING with createAsynkThunk

export const fetchBooks = createAsyncThunk("books/fetch", async () => {
    const res = await axios.get("http://localhost:3000/books");
    return res.data;//main imp line when you write a code for API and we getting data and now we return 
})//so there is no another variable and a state so we have to return format when we want to this data this is going to => extrareducers and then action have this return value.
export const PostBooks = createAsyncThunk("books/post", async (book) => {
    const res = await axios.post("http://localhost:3000/books", book);
    return res.data;//this is going to action keyword.
})
export const DelBooks = createAsyncThunk("books/del", async (id) => { //Delete data from json - API
    // console.log("called")
    const res = await axios.delete('http://localhost:3000/books/' + id);
    return res.data;
    console.log(res.data)
})

export const EditDataBooks = createAsyncThunk("books/edit", async (book) => {
                            //But PUT needs two things: (url,data)
    const res = await axios.put(`http://localhost:3000/books/${book.id}`,book)
    return res.data;
})
const BookSlice = createSlice({
    name: "books",
    initialState: {
        error: null,
        books: [],
        loading: false,//why we using loading this is showing for only for data is comming how far he coming to me
    },//synk tasks
    reducers: {

    },//if we works only on arrays objects any kind of CRUD tasks so we all do in in this reducers
    //2.extrareducers => asynk tasks delays and netwoking 
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true;//when data is comming to but not exacly coming but still is on the way and second thing is i want to display the loading status that why i showing a loading = true
        });//pending API
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            //now data is comeing and have to first is store the value but question where we have to store them and which varaible he holds the data 
            //so answer is action see the 7-8 line read properlly 
            state.books = action.payload;
            state.loading = false;//why i write this code when data is on the way so i want to display this now data is coming so i dont want to display this thats the reason is.
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })//rejected API when data is not coming and confirm any error andy other thing effected so this happens

        builder.addCase(PostBooks.fulfilled, (state, action) => {//PostBooks- Post-API
            state.loading = false;
            // console.log(action.payload)
            state.books.push(action.payload);
        })
        builder.addCase(PostBooks.rejected, (state, action) => {//PostBooks- Post-API with rejected
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(DelBooks.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(DelBooks.fulfilled, (state, action) => {
            state.loading = false;

            state.books = state.books.filter((book) => book.id != action.payload.id)
        })
        builder.addCase(DelBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
        builder.addCase(EditDataBooks.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.books = state.books.map((book) => {
                if (book.id === action.payload.id) {
                    return action.payload;
                }
                return book;
            })
        })
    },//if we work with API so we have to work or Code in extrareducer 
})
export default BookSlice.reducer;



