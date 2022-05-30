import {createSlice} from '@reduxjs/toolkit'


export const notificationStore=createSlice({
    name:'notification',
    initialState:{
        value:66,
        modalFlag:false,
        modalFlagUsers:false,
        users:[],
        selectedUsers:[]
    },
    reducers:{
    increment:(state,action)=>{
    state.value = state.value + action.payload
    },
    onOpen:(state,actions)=>{
       state.modalFlag= true
    },
    onClose:(state,actions)=>{
        state.modalFlag= false
     },
     onOpenUsers:(state,actions)=>{
        state.modalFlagUsers= true
     },
     onCloseUsers:(state,actions)=>{
         state.modalFlagUsers= false
      },
    


     saveUsers:(state,actions)=>{
        console.log('====================================');
        console.log(actions.payload);
        console.log('====================================');
        let usersNames=[]
        for (let i = 0; i < actions.payload.length; i++) {
            usersNames.push({name:actions.payload[i].firstName +" "+ actions.payload[i].middleName,
            profileId:actions.payload[i].profileId
        
        })
            
        }
        state.users=usersNames
        console.log(' state.users state.users state.users', state.users);
     },
     saveSelectedUsers:(state,actions)=>{
        state.selectedUsers= actions.payload
     },
    }
})



export const {increment,onOpen,onClose,saveUsers,onCloseUsers,onOpenUsers,saveSelectedUsers} =notificationStore.actions
export default notificationStore.reducer 