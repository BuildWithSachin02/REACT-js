import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/blogs";//created a base url

export const fetchBlogs = createAsyncThunk("fetch/blogs", async () => {
    try {
        const res = await axios.get(BASE_URL);
        // console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
})

export const PostBlogs = createAsyncThunk("post/blogs", async (blog) => {
    try {
        const res = await axios.post(BASE_URL, blog)
        return res.data
    } catch (error) {
        throw error
    }
})
export const DeleteBlogs = createAsyncThunk("delete/blog", async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`)
        return id;//so this id going to action.payload(id)
        // return res.data For a DELETE request, JSON Server often returns an empty object:{}
        //when action.payload.id = {empty object} // undefined => blog.id !== undefined
    } catch (error) {
        throw error
    }
})
export const EditBlogs = createAsyncThunk("edit/blogs", async (blog) => {
    try {
        const res = await axios.put(`${BASE_URL}/${blog.id}`, blog)
        return res.data
    } catch (error) {
        throw error
    }
})

const blogSlices = createSlice({
    name: "blogs",
    initialState: {
        blogs: [],
        loader: false,
        error: null,
        search: ""
    },
    reducers: {
        setSearch: (state, action) => {
            // console.log(action.payload)
            state.search = action.payload
        }
    },
    extraReducers: ((builder) => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.loader = true
        })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.loader = false
                state.blogs = action.payload;
                // console.log(state.blogs)
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.loader = false
                state.error = action.error.message
            });
        builder.addCase(PostBlogs.pending, (state) => {
            state.loader = true;
        })
            .addCase(PostBlogs.fulfilled, (state, action) => {
                state.loader = false
                state.blogs.push(action.payload)
            })
            .addCase(PostBlogs.rejected, (state, action) => {
                state.loader = false
                state.error = action.error.message
            });
        builder.addCase(DeleteBlogs.pending, (state, action) => {
            state.loader = false
        })
            .addCase(DeleteBlogs.fulfilled, (state, action) => {
                state.loader = false
                state.blogs = state.blogs.filter((blog) => blog.id !== action.payload)//that means if i click on 2 index card so blog.id !== action.payload.id(what i want to delete that blog that blog have id so filter check the every index and they have id if matched)
                //if i click the blog that blog id is 2 so filter check the every blogs where is 2
                //so after let see state.blog !== action.payload.id
                // 1 !== 2 => true not deleted kept and 
                // 2 !== 2 => false left and right are same this condision is false both value is same so this blog will be skip and not deleted
            })
            .addCase(DeleteBlogs.rejected, (state, action) => {
                state.loader = false
                state.error = action.error.message
            });
        builder.addCase(EditBlogs.pending, (state) => {
            state.loader = true
        })
            .addCase(EditBlogs.fulfilled, (state, action) => {
                state.blogs = state.blogs.map((blog) => {
                    if (blog.id === action.payload.id) {
                        return action.payload
                    }
                    return blog
                })
            })
            .addCase(EditBlogs.rejected, (state, action) => {
                state.loader = false
                state.error = action.error.message
            });
    })
})
export const {setSearch} = blogSlices.actions
export default blogSlices.reducer