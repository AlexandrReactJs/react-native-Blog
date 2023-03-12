import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './Slices/posts-slice'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})