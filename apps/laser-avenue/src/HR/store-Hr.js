import {createSlice} from '@reduxjs/toolkit'

export const hrStore=createSlice({
    name:'layout',
    initialState:{
        value:66
    },
    reducers:{
    increment:(state,action)=>{
        console.log('haroun in store');
    state.value = state.value + 1
    }
    }
})



export const {increment} =hrStore.actions
export default hrStore.reducer 