
import  React,{useState} from 'react';
import { View , Modal} from 'react-native';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Pressable,Stagger,useDisclose,IconButton } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import {settingsHandler,componentsLoaderHandler,selectedHandler} from './store-finalLayout'
import { useDispatch, useSelector } from 'react-redux';


 function Layout() {
  const layoutSore = useSelector(state => state.finalLayoutStore);
  const dispatch = useDispatch();

    const navigation = useNavigation();

    function homeHandler() {
        dispatch( selectedHandler(0))
        dispatch(componentsLoaderHandler())
        setTimeout(() => {
          navigation.navigate('Dashboard')
          dispatch(componentsLoaderHandler())
        }, 200);
     
    }

    function notificationHandler(){
      dispatch( selectedHandler(2))
        dispatch(componentsLoaderHandler())
        setTimeout(() => {
          navigation.navigate('test')
          dispatch(componentsLoaderHandler())
        }, 200);
      

    }

    function tasksHandler(){
      dispatch( selectedHandler(1))
      dispatch(componentsLoaderHandler())

      setTimeout(() => {
        navigation.navigate('TasksLandingPage')
        dispatch(componentsLoaderHandler())
      }, 200);
 

  }
  function settingHandler() {
    dispatch( selectedHandler(3))
    dispatch(componentsLoaderHandler())
    setTimeout(() => {
      dispatch(settingsHandler())
      dispatch(componentsLoaderHandler())
    }, 200);
 
  }
  return (
<View>



        <Box  bg="white" safeAreaTop width="100%"  alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="teal.700" h="52" alignItems="center" safeAreaBottom shadow={6}>
        <Button colorScheme={'teal'} opacity={layoutSore.selected == 0 ? 1 : 0.5}  flex={1} onPress={() => homeHandler() }>
        <Center>
        <Icon  mb="1" style={{fontSize:20 }}   color="white"   name="home"/> 
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Button>
          <Button colorScheme={'teal'}  opacity={layoutSore.selected == 1 ? 1 : 0.5} py="2" flex={1} onPress={() => tasksHandler() }>
            <Center>
              <Icon colorScheme={'teal'}  mb="1" style={{fontSize:20 }}   color="white"   name="tasks" />
              <Text color="white" fontSize="12">
                Tasks
              </Text>
            </Center>
          </Button>
          <Button colorScheme={'teal'}  opacity={layoutSore.selected == 2 ? 1 : 0.6} py="2" flex={1} onPress={() =>  notificationHandler()}>
            <Center>
              <Icon mb="1"   style={{fontSize:20 }}   color="white"  name="bell-o" />
              <Text color="white" fontSize="12">
                Notifications
              </Text>
            </Center>
          </Button>
          <Button colorScheme={'teal'}  opacity={layoutSore.selected == 3 ? 1 : 0.6}  py="2" flex={1} onPress={() =>  settingHandler()} >
          <Center>
              <Icon mb="1"   style={{fontSize:20 }}   color="white"  name="gears" />
              <Text color="white" fontSize="12">
                Settings
              </Text>
            </Center>
          </Button>
       
        </HStack>
        
      </Box>
     

</View>
  );
}

export default Layout