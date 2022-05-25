import React, { useState, useCallback, useRef,useEffect } from 'react';
import { Text, View ,ImageBackground} from 'react-native';
import { Button,HStack,Box,Center,VStack,Heading} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';


function HR({navigation}) {
  const dashboardStore = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

    return (
        <View>
           


           <Box h="320"  w="94%" ml="3%" justifyContent="center"  mb="70"   style={{backgroundColor:'#EEEEEE',marginTop:70,flex: 1,borderRadius:20}} shadow={9}>
    <Heading style={{position:"absolute",top:-50,left:"24%"}}>Human Recourses</Heading>

  { dashboardStore.userToken.profile_type=='provider' &&  <Button colorScheme="teal" onPress={()=>navigation.navigate('HrProvider')}  style={{position:'absolute' ,top:"21%",left:"11%" ,borderTopLeftRadius:250,borderBottomLeftRadius:250,width:140,height:220}}> 
    <Icon style={{fontSize:45,color:"white",marginLeft:10}} name="user-md"/>
    Provider
    </Button>}

    { dashboardStore.userToken.profile_type=='manager' && <Button colorScheme="primary" onPress={()=>navigation.navigate('HrManager')}  style={{position:'absolute' ,top:"21%",right:"11%" ,borderTopRightRadius:250,borderBottomRightRadius:250,width:140,height:220}}>

    <Icon style={{fontSize:45,color:"white"}} name="user-circle-o"/>
    Admin
    </Button>}
    </Box>
    </View>
    )
    
}
export default HR