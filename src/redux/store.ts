import {configureStore} from "@reduxjs/toolkit"
import publicVariablesSlice from "./reducers/publicVariablesSlice"
import taskSlice from "./reducers/taskSlice"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import completedTasksSlice from "./reducers/completedTasksSlice"
import onProgressSlice from "./reducers/onProgressSlice"



const store = configureStore({
    reducer:{
        publicVariablesSlice: publicVariablesSlice,
        taskSlice: taskSlice,
        completedTaskSlice:completedTasksSlice,
        onProgressSlice: onProgressSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
export default store