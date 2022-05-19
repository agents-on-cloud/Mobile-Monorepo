import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import Tasks from '../Dashboard/components/Tasks.js'
import Appointment from '../Dashboard/components/Appointments.js'
import Billing from '../Dashboard/components/Billing.js'
import HR from '../Dashboard/components/HR'



function Dashboard({route,navigation}) {
  
  const dashboardStore = useSelector(state => state.finalLayoutStore);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('fffffffffffffff',route.params);

  }, [])
  

   
  
    return (
        <ScrollView >
        
      
        {/* /////////////////////////Tasks ///////////////// */}
        <Tasks navigation={navigation}/>
        {/* //////////////////////////Appontment/////////////////////////////////////// */}
        <Appointment navigation={navigation} />
        {/* //////////////////////////Billing////////////////////////////////////////// */}
        <Billing navigation={navigation} />
        {/* //////////////////////////HR////////////////////////////////////////// */}
         <HR navigation={navigation}/>
        </ScrollView  >
    );

    
  };
export default Dashboard