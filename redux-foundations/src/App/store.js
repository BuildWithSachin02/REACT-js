import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/todo/todosSlice"

const store = configureStore({
    reducer: {
        counter: CounterReducer,

    }
})//always he will be add in argument with pass objects.

export default store;