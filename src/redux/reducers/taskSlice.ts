import { createSlice } from "@reduxjs/toolkit"
import { createNewTask, deleteTask, getAllTasks, getSearchTasks, updateTask } from "../actions/tasksActions";

interface Ttask {
    _id: string;
    title: string;
    description: string;
    completed: boolean
}
export interface TinitialState {
    tasks: Ttask[];
    tasksLoading: "pending" | "success" | "rejected";
    tasksError: string | null;
    searchTasks: Ttask[];
    searchTasksLoading: "pending" | "success" | "rejected";
    searchTasksError: string | null;
    updateItem: Ttask
}
const initialState : TinitialState = {
    tasks: [],
    tasksLoading: "pending",
    tasksError: null,
    searchTasks: [],
    searchTasksLoading: "pending",
    searchTasksError: null,
    updateItem: {
        _id: '',
        title: '',
        description: '',
        completed: false
    }
}
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        setUpateItem:(state,action)=>{
            state.updateItem = action.payload
        }
    },
    extraReducers:(builder)=>{
        // start read all task action handler
        builder.addCase(getAllTasks.pending, (state)=>{
            state.tasksLoading = "pending"
            state.tasksError = null
        }),
        builder.addCase(getAllTasks.fulfilled, (state, action)=>{
            state.tasksLoading = "success"
            state.tasks = action.payload
        }),
        builder.addCase(getAllTasks.rejected, (state, action)=>{
            state.tasksLoading = "rejected"
            if(action.payload && typeof action.payload === "string"){
                state.tasksError = action.payload
            }
        })
        // start update action handler
        builder.addCase(updateTask.pending, (state)=>{
            state.tasksLoading = "pending"
            state.tasksError = null
        }),
        builder.addCase(updateTask.fulfilled, (state)=>{
            state.tasksLoading = "success"
        }),
        builder.addCase(updateTask.rejected, (state, action)=>{
            state.tasksLoading = "rejected"
            if(action.payload && typeof action.payload === "string"){
                state.tasksError = action.payload
            }
        }),
        // start create a new task handler
        builder.addCase(createNewTask.pending, (state)=>{
            state.tasksLoading = "pending"
            state.tasksError = null
        }),
        builder.addCase(createNewTask.fulfilled, (state)=>{
            state.tasksLoading = "success"
        }),
        builder.addCase(createNewTask.rejected, (state, action)=>{
            state.tasksLoading = "rejected"
            if(action.payload && typeof action.payload === "string"){
                state.tasksError = action.payload
            }
        }),
        // start delete action handler
        builder.addCase(deleteTask.pending, (state)=>{
            state.tasksLoading = "pending"
            state.tasksError = null
        }),
        builder.addCase(deleteTask.fulfilled, (state)=>{
            state.tasksLoading = "success"
        }),
        builder.addCase(deleteTask.rejected, (state, action)=>{
            state.tasksLoading = "rejected"
            if(action.payload && typeof action.payload === "string"){
                state.tasksError = action.payload
            }
        }),
        // start search action handler
        builder.addCase(getSearchTasks.pending, (state)=>{
            state.searchTasksLoading = "pending"
            state.searchTasksError = null
        }),
        builder.addCase(getSearchTasks.fulfilled, (state, action)=>{
            state.searchTasksLoading = "success"
            state.searchTasks = action.payload
        }),
        builder.addCase(getSearchTasks.rejected, (state, action)=>{
            state.searchTasksLoading = "rejected"
            if(action.payload && typeof action.payload === "string"){
                state.searchTasksError = action.payload
            }
        })
    }
})
export const {setUpateItem} = taskSlice.actions
export default taskSlice.reducer