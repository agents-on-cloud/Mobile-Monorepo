import React,{useEffect,useState} from 'react'
import { Text, View, SafeAreaView,ScrollView,Pressable } from 'react-native';
import { Button,HStack,StatusBar,Box,Heading,Avatar,Center,VStack} from "native-base";
import LottieView from 'lottie-react-native';
import {  FlatList, Spacer, NativeBaseProvider } from "native-base";
import axios from 'axios';
import requestBuilder from '../../requestRebuilder  '

function Appointment({navigation}) {
  useEffect(() => {
    getAppointments()
    
     },[])

    const [data,setData] =useState([])
    const [appointmentData,setAppointmentData] =useState([])

async function getAppointments() {
     await axios(requestBuilder('appointments','/appointments/getAllappointments','get')).then(results=>{
     const rr=[]
     for (let i = 0; i < results.data.Appointments.length; i++) {
      rr.push({fullName:results.data.Appointments[i].doctorname,avatarUrl:"https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",id:results.data.Appointments[i].appid,timeStamp:results.data.Appointments[i].start,recentText:results.data.Appointments[i].patientname}) }
     setAppointmentData(rr)
  })
console.log('appointmentDataappointmentData',appointmentData);

}



    return (
    <View>
       
        <View>
        <Box shadow={9} style={{backgroundColor:'#EEEEEE',marginTop:110,width:'90%',marginLeft:"5%",marginBottom:80  }} w="90%" h="620" rounded="xl" _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
   
  }}>
      
      <Pressable onPress={()=>navigation.navigate('AppointmentLandingPage')}>
     <Avatar  shadow={9} bg="teal"  alignSelf="center" size="xl" style={{position:'absolute',top:-30}}  >
     <LottieView   style={{height:130}}  source={require('../../animation/appointments.json')} autoPlay loop  />
      </Avatar>
      </Pressable>
     

      <VStack space={3}  mt="100">
       <Box>
      <Center fontSize="xl"   >
      <Text style={{fontSize:20,color:'gray.200'}}>  TOTAL APPOINTMENTS
      </Text>    
      </Center>
      <Center    pb="20">
      <Text style={{fontSize:30,color:'teal'}}>  
      + {appointmentData.length}
      </Text>     
      </Center>
      <Text style={{marginLeft:20,fontSize:17,color:'teal',marginBottom:18}}>Up to 5 Appointments</Text>
      <FlatList data={appointmentData} renderItem={({item}) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="gray.300" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.avatarUrl
        }} />
              <VStack>
                <Text style={{color:'#191A19'}}>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
               Patient Name :   {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp.slice(10,item.timeStamp.length)}
        </Text>
        </HStack>
        </Box>} keyExtractor={item => item.id} />
        </Box>
        </VStack>
        </Box>
        </View>


    </View>
    )
    
}

export default Appointment