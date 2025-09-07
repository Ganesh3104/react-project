import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos : [],
    videosCount: 0
}

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        addToWatchLater: (state, action)=>{
            state.videos.push(action.payload);
            state.videosCount = state.videos.length;
        }
    }
})

export const { addToWatchLater } = videoSlice.actions;
export default videoSlice.reducer;