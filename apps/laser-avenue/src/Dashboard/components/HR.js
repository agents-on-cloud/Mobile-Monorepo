import React, { useState, useCallback, useRef,useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button,HStack,Box,Center,VStack} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';


function HR({navigation}) {

    return (
        <View>
            <Box h="400" w="92%" ml="4%" justifyContent="center"  mb="100"  style={{backgroundColor:'#EEEEEE'}} shadow={9}>
              <VStack space={0}>
              <HStack  space={10} justifyContent="center" >
              <Box h="120" w="120" justifyContent="center" style={{backgroundColor:'#06919D',borderRadius:20}} shadow={9}>
              <VStack  justifyContent="center">
              <Center>
              <Icon name="fax" color="white" onPress={()=>console.log('fffff')} style={{fontSize:50}}> </Icon>
              <Center><Text style={{color:'white'}} >Leave</Text></Center>
              </Center>
              </VStack>
              </Box>
              <Box h="120" w="120"  justifyContent="center" style={{backgroundColor:'#06919D',borderRadius:20}} shadow={9}>
              <VStack  justifyContent="center">
                  <Center>
                <Icon name="sellsy" color="white" onPress={()=>console.log('fffff')} style={{fontSize:50}}> </Icon>
                <Center  ><Text style={{color:'white'}} >Attendance</Text> </Center>
                </Center>
                </VStack>
              </Box>
              </HStack>
              <Center>
              <Button onPress={()=>navigation.navigate('Hr')}  fontSize={'20'} h={'100'} w={'100'}   borderRadius="full" bg={'#444444'} variant="solid"   >Manager </Button>
              
              </Center>
              <HStack  space={10} justifyContent="center">
              <Box h="120" w="120" justifyContent="center"  style={{backgroundColor:'#06919D',borderRadius:20}} shadow={9}>
              <VStack  justifyContent="center">
                  <Center>
              
                <VStack  justifyContent="center">
                  <Center>
                <Icon name="check-square-o" color="white" onPress={()=>console.log('fffff')} style={{fontSize:50}}> </Icon>
                <Center  ><Text style={{color:'white'}} >Check in/out</Text> </Center>
                </Center>
                </VStack>
                </Center>
                </VStack>
              </Box>
              <Box h="120" w="120" justifyContent="center" style={{backgroundColor:'#06919D',borderRadius:20}} shadow={9}>
              <VStack  justifyContent="center">
                  <Center>
                <Icon name="clock-o" color="white" onPress={()=>console.log('fffff')} style={{fontSize:50}}> </Icon>
                <Center  ><Text style={{color:'white'}} >Working Hours</Text> </Center>
                </Center>
                </VStack>
              </Box>
              </HStack>
              </VStack>

           </Box> 

        </View>
    )
    
}
export default HR