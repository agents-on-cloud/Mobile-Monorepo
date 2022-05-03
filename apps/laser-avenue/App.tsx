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
import { Provider as PaperProvider } from 'react-native-paper';

  function App() {
    return (
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







         {/* /////////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Appointment/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////Provider/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// ////*/}
         {/* /////////////////////Notification/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// /*/}
         {/* /////////////////////Marketing/////////////////////////////////////// */}







         {/* //////////////////////////////////////////////////////////////////// */}


     


        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    );
  }

  export default App