import { createSlice } from "@reduxjs/toolkit";//we are importing slice method

//1.first step is createSlice
const counterSlice = createSlice({
    name: "counter",//when you create slice what will be name of features so now are naming of this feature is counter
    initialState: {
        count: 0,
    },
    reducers: {
        increament: (state) => {//alwys remeber redusers give to values like 1.state(in indialstate what is give me in that we see count named is key),actions(means what his actions increament or decreament so the means of actions)
            if (state.count >= 20) {
                alert("this is last number")
            } else {
                state.count += 1;//if i use like state.count ++ => which means ++ alws +1 like shortcut and same is it like --
            }
        },
        decrement: (state) => {
            if (state.count <= 0) {
                alert("this last number")
            } else {
                state.count -= 1;
            }
        },
        remove: (state) => {
            state.count = 0;
        }
    },
})//now i thinking how supposed to be send to this ui and display so now we have send them and how we code ??
export const { increament, decrement, remove } = counterSlice.actions;
//alwys remeber 2 things first is we sending to 1.store only reducer and 2.actions that it
export default counterSlice.reducer
//store - reducer
//ui - actions