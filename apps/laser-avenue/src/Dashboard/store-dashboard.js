import {createSlice} from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";


export const dashboard=createSlice({
    name:'layout',
    initialState:{
        value:66,
        userToken:{}
    },
    reducers:{
    increment:(state,action)=>{
    state.value = state.value + action.payload
    },
    saveToken:(state,action)=>{
        let decoded = jwt_decode(action.payload);
        console.log('decodeddecodeddecoded',decoded);
        state.userToken=decoded
        },
    }
})



export const {increment,saveToken} =dashboard.actions
export default dashboard.reducer 