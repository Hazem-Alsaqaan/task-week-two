import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "react-toastify"

 type TResponse = {
    _id: string;
    title: string;
    description: string;
    completed: boolean
}[]



 export const getCompletedTasks = createAsyncThunk("completedTasks/getCompletedTasks", async(_, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response = await axios.get<TResponse>(`https://openvoicehubserver.onrender.com/api/v1/openvoicehub/taskes`)
        const result = response.data.filter((item)=>item.completed === true)
        return result
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