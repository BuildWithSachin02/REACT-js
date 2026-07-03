import { createSlice } from "@reduxjs/toolkit";//first step is creating slice


const initialState = {
    allUsers:[],
}

const formCrudSlice = createSlice({
    name:"formRegistration",
    initialState,
    reducers:{
        handleAddUsersDetail:(state,action)=>{
            state.allUsers.push(action.payload);
            // console.log(state)
        }
    }
});

export const {handleAddUsersDetail} = formCrudSlice.actions
export default formCrudSlice.reducer;