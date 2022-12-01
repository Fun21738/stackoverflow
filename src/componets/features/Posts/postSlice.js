import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [
        // {
        //     name: 'Jose'
        // },
        // {
        //     name: 'Jose2'
        // },
        // {
        //     name: 'Jose3'
        // },
    ]
};


const url="https://stack-28e5a-default-rtdb.firebaseio.com/stack.json"

export const createNewPost = createAsyncThunk('posts/createNewPost',
    async (newPost) => {
        try {
            // console.log(res);
            const res = await axios.post(url, newPost)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
);

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async () => {
        try {
            const response = await axios.get(url);
            const dataArray=[]
            for(let key in response.data){

                dataArray.push({
        
                  id: key,
                  postQuestion: response.data[key].quiz,      
                });
        
              }
            return dataArray
        } catch (error) {
            console.log(error)
        }
    }
)

export const postSlice = createSlice({
    name: 'popostQuestionts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createNewPost.fulfilled, (state, action) => {
        //     state.posts.push(action.payload);
        state.posts=action.payload.posts
         });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
});

export default postSlice.reducer;