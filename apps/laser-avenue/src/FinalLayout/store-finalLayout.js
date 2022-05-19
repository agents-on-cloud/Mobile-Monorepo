import {createSlice} from '@reduxjs/toolkit'

export const finalLayoutStore=createSlice({
    name:'layout',
    initialState:{
        loginFlag:false,
        settingsFlag:false
    },
    reducers:{
  
    loginFlagHandler:(state,action)=>{
        state.loginFlag = true
    },
    closeloginFlagHandler:(state,action)=>{
        state.loginFlag = false
    },
    settingsHandler:(state,action)=>{
        state.settingsFlag = !state.settingsFlag
    },
    }
    
})



export const {loginFlagHandler,closeloginFlagHandler,settingsHandler} =finalLayoutStore.actions
export default finalLayoutStore.reducer 