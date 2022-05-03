import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MarketingLandingPage from '../Marketing/Screens/MarketingLandingPage';
import MainLandiingPage from '../Layout/LandingPage'
import BillingLandingPage from '../Billing/Screens/BillingLandingPage'
import ConsumersLandingPage from '../Consumers/Screens/ConsumersLandingPage'
import FacilitiesLandingPage from '../Facilities/Screens/FacilitiesLandingPage'
import IncidentLandingPage from '../Incidient/Screens/IncidentLandingPage'
import InventoryLandingPage from '../Inventory/Screens/InventoryLandingPage'
import KnowledgeBaseLandingPage from '../Knowledge-Base/Screens/KnowledgeBaseLandingPage'
import NotificationLandingPage from '../Notification/Screens/NotificationLandingPage'
import PerformanceLandingPage from '../Performance/Screens/PerformanceLandingPage'
import ProviderLandingPage from '../Provider/Screens/ProviderLandingPage'
import ServicesLandingPage from '../Services/Screens/ServicesLandingPage'
import SuppliersLandingPage from '../Suppliers/Screens/SuppliersLandingPage'
import TasksLandingPage from '../Tasks/Screens/TasksLandingPage'
import AppointmentLandingPage from '../Appointment/Screens/AppointmentLandingPage'
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
          {/* <AppointmentNavigation/> */}


     


        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    );
  }

  export default App