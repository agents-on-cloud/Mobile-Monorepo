import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import {Button} from 'native-base'
import Tasks from '../Dashboard/components/Tasks.js'
import Appointment from '../Dashboard/components/Appointments.js'
import Billing from '../Dashboard/components/Billing.js'
import HR from '../Dashboard/components/HR'
import {saveToken  } from "./store-dashboard";
import jwt_decode from "jwt-decode";
import AppointmentManager from '../Dashboard/components/AppointmentManager'
import {selectedHandler} from '../FinalLayout/store-finalLayout'
import Icon from 'react-native-vector-icons/MaterialIcons';




function Dashboard({navigation}) {
  
  const dashboardStore = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('ooooooooo',dashboardStore.userToken.profileType.toLowerCase());
    dispatch(selectedHandler(0))
  }, [])
  



   
  
    return (
      <View>
      
        <ScrollView >
         
        {/* /////////////////////////Tasks ///////////////// ////////////////////////////////////*/}
        <Tasks navigation={navigation}/>
        {/* //////////////////////////Appontment Manager/////////////////////////////////////// /*/}
    
        {/* {dashboardStore.userToken.profileType.toLowerCase() =="manager" &&   <AppointmentManager navigation={navigation} />} */}
        {/* //////////////////////////Appontment Provider/////////////////////////////////////// */}
        {/* {dashboardStore.userToken.profileType.toLowerCase() =="provider"   && <Appointment navigation={navigation} />} */}
        {/* //////////////////////////Billing/////////////////////////////////////////////////// */}
        <Billing navigation={navigation} />
        {/* //////////////////////////HR//////////////////////////////////////////////////////// */}
        {/* <HR navigation={navigation}/> */}
       
        </ScrollView  >
       
        <View  style={{position:'absolute',right:5,bottom:20,}}>
         <Button onPress={()=>navigation.navigate('createNotification')} bg="#2F8F9D"  width="62" height="62"  style={{borderRadius:100}}  ><Icon  style={{fontSize:37,paddingTop:9,color:"#F9F3EE"}} name="add-alert"/> </Button>
         </View>
        </View>
    );

    
  };
export default Dashboard