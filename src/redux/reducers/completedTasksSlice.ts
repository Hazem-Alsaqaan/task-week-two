import { createSlice } from "@reduxjs/toolkit"
import { getCompletedTasks } from "../actions/completedTasksAction";

interface Ttask {
    _id: string;
    title: string;
    description: string;
    completed: boolean
}
export interface TinitialState {
    completedTasks: Ttask[];
    completedTasksLoading: "pending" | "success" | "rejected";
    completedTasksError: string | null;
}
const initialState : TinitialState = {
    completedTasks: [],
    completedTasksLoading: "pending",
    completedTasksError: null,
}


const completedTaskSlice = createSlice({
    name: "completedTasks",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // start read all task action handler
        builder.addCase(getCompletedTasks.pending, (state)=>{
            state.completedTasksLoading = "pending"
            state.completedTasksError = null
        }),
        builder.addCase(getCompletedTasks.fulfilled, (state, action)=>{
            state.completedTasksLoading = "success"
            state.completedTasks = action.payload
        }),
        builder.addCase(getCompletedTasks.rejected, (state, action)=>{
            state.completedTasksLoading = "rejected"
            if(action.payload && typeof action.payload === "string"){
                state.completedTasksError = action.payload
            }
        })
    }
})

export default completedTaskSlice.reducer