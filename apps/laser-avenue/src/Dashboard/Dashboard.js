import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import Tasks from '../Dashboard/components/Tasks.js'
import Appointment from '../Dashboard/components/Appointments.js'
import Billing from '../Dashboard/components/Billing.js'
import HR from '../Dashboard/components/HR'
import {saveToken  } from "./store-dashboard";
import jwt_decode from "jwt-decode";



function Dashboard({navigation}) {
  
  const dashboardStore = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
  

  

   
  
    return (
        <ScrollView >
        {/* /////////////////////////Tasks ///////////////// */}
        <Tasks navigation={navigation}/>
        {/* //////////////////////////Appontment Manager/////////////////////////////////////// */}
        {  dashboardStore.userToken.profile_type =="manager" &&   <Appointment navigation={navigation} />}
        {/* //////////////////////////Appontment Provider/////////////////////////////////////// */}
        {  dashboardStore.userToken.profile_type =="provider"   && <Appointment navigation={navigation} />}
        {/* //////////////////////////Billing////////////////////////////////////////// */}
        <Billing navigation={navigation} />
        {/* //////////////////////////HR////////////////////////////////////////// */}
         <HR navigation={navigation}/>
        </ScrollView  >
    );

    
  };
export default Dashboard