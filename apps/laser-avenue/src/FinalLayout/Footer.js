
import  React,{useState} from 'react';
import { View , Modal} from 'react-native';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Pressable,Stagger,useDisclose,IconButton } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import {settingsHandler} from './store-finalLayout'
import { useDispatch, useSelector } from 'react-redux';






 function Layout() {
  const layoutSore = useSelector(state => state.finalLayoutStore);
  const dispatch = useDispatch();


    const [selected, setSelected] = useState(0);
    const navigation = useNavigation();

    function homeHandler() {
        setSelected(0)
      navigation.navigate('Dashboard')
    }

    function notificationHandler(){
        setSelected(2)
        navigation.navigate('test')

    }

    function tasksHandler(){
      setSelected(1)
      navigation.navigate('TasksLandingPage')

  }
  function settingHandler() {
    setSelected(3)
    dispatch(settingsHandler())
  }
  return (
<View>



<Box  bg="white" safeAreaTop width="100%"  alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="teal.700" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => homeHandler() }>
            <Center>
            <Icon  mb="1" style={{fontSize:20 }}   color="white"   name="home"/> 
           
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => tasksHandler() }>
            <Center>
              <Icon  mb="1" style={{fontSize:20 }}   color="white"   name="tasks" />
              <Text color="white" fontSize="12">
                Tasks
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() =>  notificationHandler()}>
            <Center>
              <Icon mb="1"   style={{fontSize:20 }}   color="white"  name="bell-o" />
              <Text color="white" fontSize="12">
                Notifications
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.6}  py="2" flex={1} onPress={() =>  settingHandler()} >
          <Center>
              <Icon mb="1"   style={{fontSize:20 }}   color="white"  name="gears" />
              <Text color="white" fontSize="12">
                Settings
              </Text>
            </Center>
          </Pressable>
       
        </HStack>
        
      </Box>
     

</View>
  );
}

export default Layout