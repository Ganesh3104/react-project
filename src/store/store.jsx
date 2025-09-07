
import { configureStore } from "@reduxjs/toolkit";
import videoSlicer from '../slicers/slicer';

export default configureStore({
    reducer: videoSlicer
})