import  React,{useState,useEffect} from 'react';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MarketingLandingPage from './src/Marketing/Screens/MarketingLandingPage';
import MainLandiingPage from './src/Layout/LandingPage'
import BillingLandingPage from './src/Billing/Screens/BillingLandingPage'
import ConsumersLandingPage from './src/Consumers/Screens/ConsumersLandingPage'
import FacilitiesLandingPage from './src/Facilities/Screens/FacilitiesLandingPage'
import IncidentLandingPage from './src/Incidient/Screens/IncidentLandingPage'
import InventoryLandingPage from './src/Inventory/Screens/InventoryLandingPage'
import KnowledgeBaseLandingPage from './src/Knowledge-Base/Screens/KnowledgeBaseLandingPage'
import Notifications from './src/Notification/Screens/Notifications'
import PerformanceLandingPage from './src/Performance/Screens/PerformanceLandingPage'
import ProviderLandingPage from './src/Provider/Screens/ProviderLandingPage'
import ServicesLandingPage from './src/Services/Screens/ServicesLandingPage'
import SuppliersLandingPage from './src/Suppliers/Screens/SuppliersLandingPage'
import TasksLandingPage from './src/Tasks/Screens/TasksLandingPage'
import AppointmentLandingPage from './src/Appointment/Screens/AppointmentLandingPage'
import Increment from '../laser-avenue/src/Marketing/Screens/increment'
import { Provider as PaperProvider } from 'react-native-paper';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import marketingReducer from './src/Marketing/store-marketing.js'
import tasksReducer from './src/Tasks/store-tasks.js'
import notificationReducer from './src/Notification/store-notification.js'
import providerReducer from './src/Provider/store-provider.js'
import appointmentReducer from './src/Appointment/store-Appointment.js'
import billingReducer from './src/Billing/store-Billing.js'
import dashboardReducer from './src/Dashboard/store-dashboard.js'
import Dashboard from './src/Dashboard/Dashboard.js'
import { NativeBaseProvider,StatusBar,Box,HStack,Text} from "native-base";
import Layout  from './src/FinalLayout/Footer.js';
import Header from '../laser-avenue/src/FinalLayout/Header.js'
import Test from './src/Notification/Screens/test.js'
import Calendar from '../laser-avenue/src/calendar/screens/Calendar.js'
import SignIn from '../laser-avenue/src/CIAM/screens/Signin.js'
import { useDispatch, useSelector } from 'react-redux';
import SignUp from '../laser-avenue/src/CIAM/screens/Signup.js'
import ForgetPassword from '../laser-avenue/src/CIAM/screens/forgetPassword.js'
import TestLibrary from '../laser-avenue/src/FinalLayout/libraryTest'
import {  BackHandler, Alert } from "react-native";
import {useRoute} from '@react-navigation/native';
import SettingsModal from '../laser-avenue/src/FinalLayout/SettingsModal.js'
import OttpModel from '../laser-avenue/src/CIAM/screens/ottpModel'
import HrLandingPAge from '../laser-avenue/src/HR/screens/landingPage.js'


/////////////////////////////////////////////////////

import CreateTask from "./src/Tasks/Screens/CreateTask.js"
import TaskFullView from "./src/Tasks/Screens/TaskFullView.js"


  function App() {
    const layoutSore = useSelector(state => state.finalLayoutStore);
    const ciamStore = useSelector(state => state.ciamStore);
    const dispatch = useDispatch();


 

 
    return (
        <>

        {/* <NativeBaseProvider> */}

        {/* <NavigationContainer> */}     
        { <Header style={{position:'fixed',top:80}}/>}
     

          <Stack.Navigator   >
        {/* <Stack.Screen name="TestLibrary" component={TestLibrary}   /> */}
         { <Stack.Screen name="Dashboard" component={Dashboard}   />}
          <Stack.Screen name="SignIn" component={SignIn}  />
          <Stack.Screen name="SignUp" component={SignUp}   />
          <Stack.Screen name="forgetPassword" component={ForgetPassword}   />
          <Stack.Screen name="MainLandingPAge" component={MainLandiingPage} />
          <Stack.Screen name="MarketingLandingPage" component={MarketingLandingPage} />
          <Stack.Screen name="BillingLandingPage" component={BillingLandingPage} />
          <Stack.Screen name="ConsumersLandingPage" component={ConsumersLandingPage} />
          <Stack.Screen name="FacilitiesLandingPage" component={FacilitiesLandingPage} />
          <Stack.Screen name="IncidentLandingPage" component={IncidentLandingPage} />
          <Stack.Screen name="InventoryLandingPage" component={InventoryLandingPage} />
          <Stack.Screen name="KnowledgeBaseLandingPage" component={KnowledgeBaseLandingPage} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="PerformanceLandingPage" component={PerformanceLandingPage} /> 
          <Stack.Screen name="ProviderLandingPage" component={ProviderLandingPage} />
          <Stack.Screen name="ServicesLandingPage" component={ServicesLandingPage} />
          <Stack.Screen name="SuppliersLandingPage" component={SuppliersLandingPage} />
          <Stack.Screen name="TasksLandingPage" component={TasksLandingPage} />
          <Stack.Screen name="AppointmentLandingPage" component={AppointmentLandingPage} options={{title:'Appointments'}} />
          <Stack.Screen name="calendar" component={Calendar}   />
          <Stack.Screen name="Hr" component={HrLandingPAge}   />
   
         
         {/* /* /////////////////////Billing/////////////////////////////////////// */ }
       






         {/* //////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Tasks////////////////////////////////////////// */}
         <Stack.Screen name="createTask" component={CreateTask} />
         <Stack.Screen name="TaskFullView" component={TaskFullView} />







         {/* /////////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Appointment/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Provider/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// ////*/}
         {/* /////////////////////Notification/////////////////////////////////////// */}

         <Stack.Screen name="test" component={Test} />






         {/* //////////////////////////////////////////////////////////////////// /*/}
         {/* /////////////////////Marketing/////////////////////////////////////// */}
         <Stack.Screen name="increment" component={Increment} />


     


         {/* ////////////////////////////////////////////////////////////////////// */}


     


      </Stack.Navigator> 
      { layoutSore.settingsFlag && < SettingsModal/>}
      { ciamStore.ottpFlag && < OttpModel/>}
      {  <Layout />}
      {/* </NavigationContainer> 
      </NativeBaseProvider>    */}
      {/* </Provider> */}
      </>
    );
  }

  export default App