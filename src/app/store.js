import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import postReducer from "../features/postSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer
    }
})

export default store;