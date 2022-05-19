import React,{useEffect} from 'react';
import { AppRegistry } from 'react-native';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import marketingReducer from '../src/Marketing/store-marketing.js'
import tasksReducer from '../src/Tasks/store-tasks.js'
import notificationReducer from '../src/Notification/store-notification.js'
import providerReducer from '../src/Provider/store-provider.js'
import appointmentReducer from '../src/Appointment/store-Appointment.js'
import billingReducer from '../src/Billing/store-Billing.js'
import dashboardReducer from '../src/Dashboard/store-dashboard.js'
import finalLayoutStore from "../src/FinalLayout/store-finalLayout.js"
import { NativeBaseProvider,StatusBar,Box,HStack,Text} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import ciamStore from '../src/CIAM/store-CIAM'
import hrStore from '../src/HR/store-Hr.js'




import App from '../App';

function main() {
   

    const store=configureStore({
        reducer:{
          billing:billingReducer,
          tasks:tasksReducer,
          notification:notificationReducer,
          provider:providerReducer,
          appointment:appointmentReducer,
          marketing:marketingReducer,
          dashboard:dashboardReducer,
          finalLayoutStore:finalLayoutStore,
          ciamStore:ciamStore,
          hrStore:hrStore
        }
      })
    return(
        <Provider store={store}>
        <NativeBaseProvider>
        <NavigationContainer>
        <App/>
        </NavigationContainer>
        </NativeBaseProvider>
        </Provider>
    )
}

AppRegistry.registerComponent('LaserAvenue', () => main);
