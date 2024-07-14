import { createSlice } from "@reduxjs/toolkit"
import { getOnProgressTasks } from "../actions/onProgressTasksAction";

interface Ttask {
    _id: string;
    title: string;
    description: string;
    completed: boolean
}
export interface TinitialState {
    onProgressTasks: Ttask[];
    onProgressTasksLoading: "pending" | "success" | "rejected";
    onProgressTasksError: string | null;
}
const initialState : TinitialState = {
    onProgressTasks: [],
    onProgressTasksLoading: "pending",
    onProgressTasksError: null,
}


const onProgressSlice = createSlice({
    name: "onProgressTasks",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // start read all task action handler
        builder.addCase(getOnProgressTasks.pending, (state)=>{
            state.onProgressTasksLoading = "pending"
            state.onProgressTasksError = null
        }),
        builder.addCase(getOnProgressTasks.fulfilled, (state, action)=>{
            state.onProgressTasksLoading = "success"
            state.onProgressTasks = action.payload
        }),
        builder.addCase(getOnProgressTasks.rejected, (state, action)=>{
            state.onProgressTasksLoading = "rejected"
            if(action.payload && typeof action.payload === "string"){
                state.onProgressTasksError = action.payload
            }
        })
    }
})

export default onProgressSlice.reducer