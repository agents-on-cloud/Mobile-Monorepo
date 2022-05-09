import {createSlice} from '@reduxjs/toolkit'

export const dashboard=createSlice({
    name:'layout',
    initialState:{
        value:66
    },
    reducers:{
    increment:(state,action)=>{
    state.value = state.value + action.payload
    }
    }
})



export const {increment} =dashboard.actions
export default dashboard.reducer 