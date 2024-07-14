import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "react-toastify"

 type TResponse = {
    _id: string;
    title: string;
    description: string;
    completed: boolean
}[]
 type TResponseObject = {
    _id?: string;
    title: string;
    description: string;
    completed: boolean
}


 export const getAllTasks = createAsyncThunk("tasks/getAllTasks", async(_, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.get<TResponse>(`https://openvoicehubserver.onrender.com/api/v1/openvoicehub/taskes`)
        return response.data
    }catch(err){
        if(axios.isAxiosError(err)){
            toast.error(err?.response?.data.message || err.message)
            return rejectWithValue(err?.response?.data.message || err.message)
        }else{
            toast.error("an unexpected error")
            return rejectWithValue("an unexpected error")
        }
    }
})
export const createNewTask = createAsyncThunk("tasks/createNewTask", async(item:TResponseObject, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.post<TResponseObject>(`https://openvoicehubserver.onrender.com/api/v1/openvoicehub/taskes`, {
            title: item?.title,
            description: item?.description,
            completed: item?.completed
        })
        toast.success("Success add new task")
        return response.data
    }catch(err){
        if(axios.isAxiosError(err)){
            toast.error(err?.response?.data.message || err.message)
            return rejectWithValue(err?.response?.data.message || err.message)
        }else{
            toast.error("an unexpected error")
            return rejectWithValue("an unexpected error")
        }
    }
})
export const updateTask = createAsyncThunk("tasks/updateTask", async(item:TResponseObject, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.patch<TResponseObject>(`https://openvoicehubserver.onrender.com/api/v1/openvoicehub/taskes/${item?._id}`, {
            title: item?.title,
            description: item?.description,
            completed: item?.completed
        })
        toast.success("Success update task")
        return response.data
    }catch(err){
        if(axios.isAxiosError(err)){
            toast.error(err?.response?.data.message || err.message)
            return rejectWithValue(err?.response?.data.message || err.message)
        }else{
            toast.error("an unexpected error")
            return rejectWithValue("an unexpected error")
        }
    }
})
export const deleteTask = createAsyncThunk("tasks/deleteTask", async(item:TResponseObject, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.delete<TResponseObject>(`https://openvoicehubserver.onrender.com/api/v1/openvoicehub/taskes/${item?._id}`)
        toast.success("Success delete task")
        return response.data
    }catch(err){
        if(axios.isAxiosError(err)){
            toast.error(err?.response?.data.message || err.message)
            return rejectWithValue(err?.response?.data.message || err.message)
        }else{
            toast.error("an unexpected error")
            return rejectWithValue("an unexpected error")
        }
    }
})
export const getSearchTasks = createAsyncThunk("tasks/searchTask", async(title: string, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.post<TResponse>(`https://openvoicehubserver.onrender.com/api/v1/openvoicehub/search`,
            {
                title:  title
            }
        )
        return response.data
    }catch(err){
        if(axios.isAxiosError(err)){
            toast.error(err?.response?.data.message || err.message)
            return rejectWithValue(err?.response?.data.message || err.message)
        }else{
            toast.error("an unexpected error")
            return rejectWithValue("an unexpected error")
        }
    }
})