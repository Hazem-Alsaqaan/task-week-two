import { createSlice } from "@reduxjs/toolkit"

export interface IinitialState {
    settingBoxVisible: boolean;
    moodButton: "create" | "update" ;
    render: boolean
}
const initialState : IinitialState = {
    settingBoxVisible: false,
    moodButton: "create",
    render: false
}
const publicVariablesSlice = createSlice({
    name: "publicVariables",
    initialState,
    reducers:{
        toggleSettingBoxVisible(state){
            state.settingBoxVisible = !state.settingBoxVisible
        },
        setMoodButton(state, action){
            state.moodButton = action.payload
        },
        setRender:(state, action)=>{
            state.render = action.payload
        }
    }
})

export const {toggleSettingBoxVisible, setMoodButton, setRender} = publicVariablesSlice.actions
export default publicVariablesSlice.reducer