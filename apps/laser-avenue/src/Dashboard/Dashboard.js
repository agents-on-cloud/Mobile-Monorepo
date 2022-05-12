import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import Tasks from '../Dashboard/components/Tasks.js'
import Appointment from '../Dashboard/components/Appointments.js'
import Billing from '../Dashboard/components/Billing.js'
import HR from '../Dashboard/components/HR'

function Dashboard({navigation}) {
    const dashboardStore = useSelector(state => state.dashboard);
    const dispatch = useDispatch();
   
  
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "" }}>
        {/* /////////////////////////Tasks ///////////////// */}
        <Tasks navigation={navigation}/>
        {/* //////////////////////////Appontment/////////////////////////////////////// */}
        <Appointment />
        {/* //////////////////////////Billing////////////////////////////////////////// */}
        <Billing/>
        {/* //////////////////////////HR////////////////////////////////////////// */}
         <HR/>
        </ScrollView>
    );
  };
export default Dashboard