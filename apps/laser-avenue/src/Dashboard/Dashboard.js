import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, SafeAreaView,ScrollView,Pressable } from 'react-native';
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
import { useFocusEffect } from '@react-navigation/native';
import {closeMenue} from './store-dashboard'
import { Box, useDisclose, IconButton, Stagger, HStack, Center, NativeBaseProvider } from "native-base";



function Dashboard({navigation}) {
  const {
    isOpen,
    onToggle
  } = useDisclose();
  
  const dashboardStore = useSelector(state => state.dashboard);
  const dispatch = useDispatch();



  useFocusEffect(
    React.useCallback(() => {
      dispatch(selectedHandler(0))
  
    }, [])
  );
  



   
  
    return (
      <View>
     
     
      {/* <Box alignItems="center" style={{position:'absolute',bottom:50,right:10,zIndex:10}}>

        <Stagger visible={isOpen} initial={{
        opacity: 0,
        scale: 0,
        translateY: 34
      }} animate={{
        translateY: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          mass: 0.8,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }} exit={{
        translateY: 34,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 100,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }}>
          <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon   name="location-pin" _dark={{
          color: "warmGray.50"
        }} color="warmGray.50" />} />
          <IconButton mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon  _dark={{
          color: "warmGray.50"
        }}  name="microphone" color="warmGray.50" />} />
          <IconButton mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon  _dark={{
          color: "warmGray.50"
        }}  name="video" color="warmGray.50" />} />
          <IconButton mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon   name="photo-library" _dark={{
          color: "warmGray.50"
        }} color="warmGray.50" />} />
        </Stagger>
      </Box> */}



      
        <ScrollView >
        <Pressable onPress={()=>dispatch(closeMenue())}>
        {/*//////////////////////////Tasks //////////////////////////////////////////////////////*/}
        <Tasks navigation={navigation}/>
        {/*///////////////////////////Appontment Manager/////////////////////////////////////// /*/}
        {dashboardStore.userToken.profileType?.toLowerCase() =="manager" &&   <AppointmentManager navigation={navigation} />}
        {/*///////////////////////////Appontment Provider/////////////////////////////////////// */}
        {dashboardStore.userToken.profileType?.toLowerCase() =="provider"   && <Appointment navigation={navigation} />}
        {/*///////////////////////////Billing/////////////////////////////////////////////////// */}
        {dashboardStore.userToken.profileType?.toLowerCase() =="manager" &&     < Billing navigation={navigation} />}
        {/*///////////////////////////HR//////////////////////////////////////////////////////// */}
        {dashboardStore.userToken.profileType?.toLowerCase() =="provider" &&     < Billing navigation={navigation} />}
        {/*///////////////////////////HR//////////////////////////////////////////////////////// */}
        <HR navigation={navigation}/>
         {/*//////////////////////////////////////////////////////////////////////////////////// */}
        </Pressable>
        </ScrollView  >

        {/* <HStack  justifyContent="center">
        <IconButton  style={{position:'absolute',right:5,bottom:20,}} variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon   name="dots-horizontal" color="warmGray.50" _dark={{
        color: "warmGray.50"
        }} />} />
        </HStack> */}
      
        {/* <View  style={{position:'absolute',right:5,bottom:20,}}>
        <Button onPress={()=>navigation.navigate('createNotification')} bg="#2F8F9D"  width="62" height="62"  style={{borderRadius:100}}  ><Icon  style={{fontSize:37,paddingTop:9,color:"#F9F3EE"}} name="add-alert"/> </Button>
        </View> */}
         
        </View>
    );

    
  };
export default Dashboard