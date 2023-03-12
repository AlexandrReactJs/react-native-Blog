import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (params) => {
        
        const response = await axios.get(`http://192.168.31.116:4444/posts?page=1&pageSize=30`)
        return response.data
    }
)


const initialState = {
    posts: [],
    status: 'Loading', /*Ok, Loading, Error */
    category: ''

}

export const PostsSlice = createSlice({
    name: 'posts',
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload.posts
            state.status = 'Ok'
        })
        .addCase(fetchPosts.pending, (state) => {
            state.posts = []
            state.status = 'Loading'
        }).addCase(fetchPosts.rejected, (state) => {
            state.posts = []
            state.status = 'Error'
        })
    }

})



export const { } = PostsSlice.actions

export default PostsSlice.reducer