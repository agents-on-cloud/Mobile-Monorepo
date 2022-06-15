import {createSlice} from '@reduxjs/toolkit'


export const searchStore=createSlice({
    name:'provider',
    initialState:{
        value:66,
        searchInput:''
    },
    reducers:{
    increment:(state,action)=>{
    state.value = state.value + action.payload
    },
    searchInputHandler:(state,action)=>{
        state.searchInput = action.payload
        },
    }
})



export const {increment,searchInputHandler} =searchStore.actions
export default searchStore.reducer 