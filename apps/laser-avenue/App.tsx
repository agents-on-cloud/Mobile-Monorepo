import * as React from 'react';
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
import NotificationLandingPage from './src/Notification/Screens/NotificationLandingPage'
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

const store=configureStore({
  reducer:{
    billing:billingReducer,
    tasks:tasksReducer,
    notification:notificationReducer,
    provider:providerReducer,
    appointment:appointmentReducer,
    marketing:marketingReducer,
  }
})

import CreateTask from "./src/Tasks/Screens/CreateTask.js"

  function App() {
 


    return (
      <>
      <Provider store={store}>
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen name="MainLandingPAge" component={MainLandiingPage} />
          <Stack.Screen name="MarketingLandingPage" component={MarketingLandingPage} />
          <Stack.Screen name="BillingLandingPage" component={BillingLandingPage} />
          <Stack.Screen name="ConsumersLandingPage" component={ConsumersLandingPage} />
          <Stack.Screen name="FacilitiesLandingPage" component={FacilitiesLandingPage} />
          <Stack.Screen name="IncidentLandingPage" component={IncidentLandingPage} />
          <Stack.Screen name="InventoryLandingPage" component={InventoryLandingPage} />
          <Stack.Screen name="KnowledgeBaseLandingPage" component={KnowledgeBaseLandingPage} />
          <Stack.Screen name="NotificationLandingPage" component={NotificationLandingPage} />
          <Stack.Screen name="PerformanceLandingPage" component={PerformanceLandingPage} /> 
          <Stack.Screen name="ProviderLandingPage" component={ProviderLandingPage} />
          <Stack.Screen name="ServicesLandingPage" component={ServicesLandingPage} />
          <Stack.Screen name="SuppliersLandingPage" component={SuppliersLandingPage} />
          <Stack.Screen name="TasksLandingPage" component={TasksLandingPage} />
          <Stack.Screen name="AppointmentLandingPage" component={AppointmentLandingPage} />
         
         {/* /* /////////////////////Billing/////////////////////////////////////// */ }







         {/* //////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Tasks////////////////////////////////////////// */}
         <Stack.Screen name="createTask" component={CreateTask} />






         {/* /////////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Appointment/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Provider/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// ////*/}
         {/* /////////////////////Notification/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// /*/}
         {/* /////////////////////Marketing/////////////////////////////////////// */}


         <Stack.Screen name="increment" component={Increment} />




         {/* //////////////////////////////////////////////////////////////////// */}


     


        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
      </Provider>
      </>
    );
  }

  export default App