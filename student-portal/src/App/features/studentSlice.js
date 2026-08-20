import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudent = createAsyncThunk("fetch/student", async () => {//get all student data
    try {
        const res = await axios.get("http://localhost:3003/student")
        return res.data
    } catch (error) {
        throw error
    }
})
export const PostStudent = createAsyncThunk("post/student", async (student) => {
    try {
        const res = await axios.post(`http://localhost:3003/student`, student)
        return res.data
    } catch (error) {
        throw error
    }
})
export const deleteStudent = createAsyncThunk("delete/student", async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3003/student/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
})
export const editStudent = createAsyncThunk("edit/student", async (student) => {
    try {
        const res = await axios.put(`http://localhost:3003/student/${student.id}`, student)
        return res.data
    } catch (error) {
        throw error
    }
})


const studentSlice = createSlice({
    name: "student",
    initialState: {
        students: [],
        loader: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudent.pending, (state, action) => {
            state.loader = false
        }).addCase(fetchStudent.fulfilled, (state, action) => {
            state.loader = true
            state.students = action.payload
        }).addCase(fetchStudent.rejected, (state, action) => {
            state.error = action.error.message
        });
        builder.addCase(PostStudent.pending, (state, action) => {
            state.loader = true
        }).addCase(PostStudent.fulfilled, (state, action) => {
            state.loader = false
            state.students.push(action.payload)
        }).addCase(PostStudent.rejected, (state, action) => {
            state.error = action.error.message
        });
        builder.addCase(deleteStudent.pending, (state, action) => {
            state.loader = true
        }).addCase(deleteStudent.fulfilled, (state, action) => {
            state.loader = false
            state.students = state.students.filter((std) => (std.id !== action.payload.id))
        }).addCase(deleteStudent.rejected, (state, action) => {
            state.error = action.error.message
        });
        builder.addCase(editStudent.pending, (state) => {
            state.loader = true
        }).addCase(editStudent.fulfilled, (state, action) => {
            state.loader = false;
            state.students = state.students.map((std) => {
                if (std.id == action.payload.id) {
                    return action.payload
                }
                return std
            })
        }).addCase(editStudent.rejected, (state, action) => {
            state.loader = false
            state.error = action.error.message
        })
    }
})
export default studentSlice.reducer