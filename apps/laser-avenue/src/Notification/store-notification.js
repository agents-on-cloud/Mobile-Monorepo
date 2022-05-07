import {createSlice} from '@reduxjs/toolkit'


export const notificationStore=createSlice({
    name:'notification',
    initialState:{
        value:66
    },
    reducers:{
    increment:(state,action)=>{
    state.value = state.value + action.payload
    }
    }
})



export const {increment} =notificationStore.actions
export default notificationStore.reducer 