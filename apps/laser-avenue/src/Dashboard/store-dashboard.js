import {createSlice} from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";


export const dashboard=createSlice({
    name:'layout',
    initialState:{
        value:66,
        userToken:{
        email: "hanadi@gmail.com",
        exp: 1654506398,
        firstName: "Hanadi",
        iat: 1654505498,
        isActive: true,
        lastName: "Tareq",
        middleName: "Mohd",
        phoneNumber: 795206419,
        photo: null,
        profileId: "8d350da6-cc4c-4f3f-8e6a-c63059739e2c",
        profileType: "PROVIDER",
        userId: "e2c219cc-bab5-4e4b-8b41-7c677805c34d"},
        ShowMenuFlag77:false
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
    changeShowMenuFlag77:(state,action)=>{
            state.ShowMenuFlag77=!state.ShowMenuFlag77
            },
            closeMenue:(state,action)=>{
                state.ShowMenuFlag77=false
                },
    }
})



export const {increment,saveToken,changeShowMenuFlag77,closeMenue} =dashboard.actions
export default dashboard.reducer 