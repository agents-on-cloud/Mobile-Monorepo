import  React,{useState,useEffect} from 'react';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import MarketingLandingPage from './src/Marketing/Screens/MarketingLandingPage';
import MainLandiingPage from './src/Layout/LandingPage'
import BillingLandingPage from './src/Billing/Screens/BillingLandingPage'
import ConsumersLandingPage from './src/Consumers/Screens/ConsumersLandingPage'
import FacilitiesLandingPage from './src/Facilities/Screens/FacilitiesLandingPage'
import IncidentLandingPage from './src/Incidient/Screens/IncidentLandingPage'
import InventoryLandingPage from './src/Inventory/Screens/InventoryLandingPage'
import KnowledgeBaseLandingPage from './src/Knowledge-Base/Screens/KnowledgeBaseLandingPage'
import PerformanceLandingPage from './src/Performance/Screens/PerformanceLandingPage'
import ProviderLandingPage from './src/Provider/Screens/ProviderLandingPage'
import ServicesLandingPage from './src/Services/Screens/ServicesLandingPage'
import SuppliersLandingPage from './src/Suppliers/Screens/SuppliersLandingPage'
import TasksLandingPage from './src/Tasks/Screens/TasksLandingPage'
import AppointmentLandingPage from './src/Appointment/Screens/AppointmentLandingPage'
import Increment from '../laser-avenue/src/Marketing/Screens/increment'
import Dashboard from './src/Dashboard/Dashboard.js'
import Layout  from './src/FinalLayout/Footer.js';
import Header from '../laser-avenue/src/FinalLayout/Header.js'
import Test from './src/Notification/Screens/test.js'
import Calendar from '../laser-avenue/src/calendar/screens/Calendar.js'
import SignIn from '../laser-avenue/src/CIAM/screens/Signin.js'
import { useDispatch, useSelector } from 'react-redux';
import SignUp from '../laser-avenue/src/CIAM/screens/Signup.js'
import ForgetPassword from '../laser-avenue/src/CIAM/screens/forgetPassword.js'
import SettingsModal from '../laser-avenue/src/FinalLayout/SettingsModal.js'
import OttpModel from '../laser-avenue/src/CIAM/screens/ottpModel'
import HrProvider from './src/HR/screens/providerLandingPage.js'
import HrManager from './src/HR/screens/managerProvider.js'
import Loader1 from './src/Loaders/loader1'
import libraryTest from '../laser-avenue/src/FinalLayout/libraryTest'
import AppointmentProviderLandingPage from './src/Appointment/Screens/AppointmentProviderLandingPage'
import Splash from '../laser-avenue/src/FinalLayout/Splash.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from 'react-native-splash-screen'
import createNotification from '../laser-avenue/src/Notification/Screens/createNotification'


import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';


const Stack = createNativeStackNavigator();
// const RootStack = createStackNavigator();

async function saveTokenToDatabase(token) {
  // Assume user is already signed in
  const userId = auth().currentUser.uid;

  // Add the token to the users datastore
  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
}



/////////////////////////////////////////////////////

import CreateTask from "./src/Tasks/Screens/CreateTask.js"
import TaskFullView from "./src/Tasks/Screens/TaskFullView.js"

  function App() {
    useEffect(() => {
      // Get the device token
      messaging()
        .getToken()
        .then(token => {
        console.log('token========>',token);
        
        });
  
      // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }
  
      return messaging().onTokenRefresh(token => {
        saveTokenToDatabase(token);
      });
    }, []);
    
    const layoutSore = useSelector(state => state.finalLayoutStore);
    const dispatch = useDispatch();
    const ciamStore = useSelector(state => state.ciamStore);


 
  
 
    return (
        <>
          <NavigationContainer>
          {layoutSore.loginFlag && <Header style={{position:'fixed',top:0}}/>}
          {layoutSore.componentsLoader  && <Loader1  />}
          <Stack.Navigator    >
          {<Stack.Screen name="SignIn" component={SignIn}  />}
          {<Stack.Screen name="Dashboard" component={Dashboard}   />}
          {/* {<Stack.Screen name="Splash" component={Splash}  />} */}
          <Stack.Screen name="MainLandingPAge" component={MainLandiingPage} />
          {/* {<Stack.Screen name="libraryTest" component={libraryTest}  />} */}
          <Stack.Screen name="HrManager" component={HrManager}   />
          <Stack.Screen name="HrProvider" component={HrProvider}   />
          <Stack.Screen name="SignUp" component={SignUp}   />
          <Stack.Screen name="forgetPassword" component={ForgetPassword}   />
          <Stack.Screen name="MarketingLandingPage" component={MarketingLandingPage} />
          <Stack.Screen name="BillingLandingPage" component={BillingLandingPage} />
          <Stack.Screen name="ConsumersLandingPage" component={ConsumersLandingPage} />
          <Stack.Screen name="FacilitiesLandingPage" component={FacilitiesLandingPage} />
          <Stack.Screen name="IncidentLandingPage" component={IncidentLandingPage} />
          <Stack.Screen name="InventoryLandingPage" component={InventoryLandingPage} />
          <Stack.Screen name="KnowledgeBaseLandingPage" component={KnowledgeBaseLandingPage} />
          <Stack.Screen name="PerformanceLandingPage" component={PerformanceLandingPage} /> 
          <Stack.Screen name="ProviderLandingPage" component={ProviderLandingPage} />
          <Stack.Screen name="ServicesLandingPage" component={ServicesLandingPage} />
          <Stack.Screen name="SuppliersLandingPage" component={SuppliersLandingPage} />
          <Stack.Screen name="TasksLandingPage" component={TasksLandingPage}  options={{title:'Tasks'}} />
          <Stack.Screen name="AppointmentLandingPage" component={AppointmentLandingPage} options={{title:'Appointments'}} />
          <Stack.Screen name="calendar" component={Calendar}   />
          <Stack.Screen name="AppointmentProviderLandingPage" component={AppointmentProviderLandingPage}   />
   
   
         
         {/* /* /////////////////////Billing/////////////////////////////////////// */ }
       






         {/* //////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Tasks////////////////////////////////////////// */}
         <Stack.Screen name="createTask" component={CreateTask} options={{title:'Tasks'}} />
         <Stack.Screen name="TaskFullView" component={TaskFullView} />







         {/* /////////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Appointment/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Provider/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// ////*/}
         {/* /////////////////////Notification/////////////////////////////////////// */}

         <Stack.Screen name="test" component={Test} options={{title:'Notifications'}} />
         <Stack.Screen name="createNotification" component={createNotification} />






         {/* //////////////////////////////////////////////////////////////////// /*/}
         {/* /////////////////////Marketing/////////////////////////////////////// */}
         <Stack.Screen name="increment" component={Increment} />


     


         {/* ////////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Human resources/////////////////////////////////////// */}
           


     


         {/* ////////////////////////////////////////////////////////////////////// */}



     
 
       
          </Stack.Navigator> 
     
         
      
          {  layoutSore.componentsLoader==false && 
              <>
          { layoutSore.settingsFlag && < SettingsModal/>}
          { ciamStore.ottpFlag && < OttpModel/>}
          { layoutSore.loginFlag && <Layout />}
          {/* {<Layout/>} */}
          </>}
          </NavigationContainer>
    
      </>
    );
  }

  export default App