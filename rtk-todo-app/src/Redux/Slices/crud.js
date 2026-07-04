import { createSlice } from "@reduxjs/toolkit";//first step is creating slice


const initialState = {
    allUsers:JSON.parse(localStorage.getItem("users")) || [],
}

const formCrudSlice = createSlice({
    name:"formRegistration",
    initialState,
    reducers:{
        handleAddUsersDetail:(state,action)=>{
            state.allUsers.push(action.payload);
            // console.log(state)
        },
        handleDelete:(state,action)=>{
            const {i} = action.payload;
            state.allUsers.splice(i,1);
        },
        handleUpdateUser:(state,action)=>{
            const {index, user}  = action.payload;// what is coming to and we are destrucring
            state.allUsers[index] = user; //this is replace the old objects
        }
    }
});

export const {handleAddUsersDetail, handleDelete, handleUpdateUser} = formCrudSlice.actions
export default formCrudSlice.reducer;