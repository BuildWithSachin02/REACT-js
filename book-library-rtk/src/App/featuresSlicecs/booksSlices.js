import { createSlice } from "@reduxjs/toolkit";

const bookSlices = createSlice({
    name:"books",
    initialState:{
        books:[],
        loading:false,
        error:null
    },
    reducers:{
        addBooks:((state,action)=>{
            
        })
    }
})