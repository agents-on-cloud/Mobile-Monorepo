import React,{useEffect,useState} from 'react'
import { Text, View, SafeAreaView,ScrollView,Pressable } from 'react-native';
import { Button,HStack,StatusBar,Box,Heading,Avatar,Center,VStack} from "native-base";
import LottieView from 'lottie-react-native';
import {  FlatList, Spacer, NativeBaseProvider } from "native-base";
import axios from 'axios';
import requestBuilder from '../../requestRebuilder  '
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

function Appointment({navigation}) {
  const dashboardStore = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    getAppointments()
    
     },[])

    const [data,setData] =useState([])
    const [appointmentData,setAppointmentData] =useState([])
    const [ALLappointmentNumber,setALLappointmentNumber] =useState(null)

async function getAppointments() {
  try {
console.log(';;;;;;;;;;;;;;;;');
const res = await axios(
        requestBuilder( "appointments", "/appointments/getallappointmentsbyproviderid/:provider_id","get",
         {
            provider_id: "bcaaf7d8-3bfc-4411-b265-5981206f7737",
          }
        )
      );
      console.log('helllllllllllll');
      console.log(res);
    
  } catch (error) {
    console.log('errrrore',error);
  }

 


//   if (dashboardStore.userToken.profile_type=='provider') {
//     console.log('firrrrrrrraaaaaaaaaaaaaas');
//     const res = await this.$axios(
//       requestBuilder( "appointments", "/appointments/getallappointmentsbyproviderid/:provider_id","get",
//        {
//           provider_id: "bcaaf7d8-3bfc-4411-b265-5981206f7737",
//         }
//       )
//     );
//     console.log('helllllllllllll');
//     console.log(res.data);

    
//   }else{

//     await axios(requestBuilder('appointments','/appointments/getAllappointments','get')).then(results=>{
//       setALLappointmentNumber( results.data.Appointments.length)
//       const rr=[]
//       for (let i = 0; i < results.data.Appointments.length; i++) {
//       if (i<5) {
//        rr.push({fullName:results.data.Appointments[i].doctorname,avatarUrl:"https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",id:results.data.Appointments[i].appid,timeStamp:results.data.Appointments[i].start,recentText:results.data.Appointments[i].patientname}) }
       
//       }
//       setAppointmentData(rr)

//  })
    
//   }
  


 await axios('https://625fbc0892df0bc0f3397ad0.mockapi.io/Appointments').then(results=>   appontmentHandler(results))

}
function appontmentHandler(results) {
  console.log('====================================');
  console.log(results.data);
  console.log('====================================');

  let testDate=new Date(results.data[1].start)
  setALLappointmentNumber(results.data.length)
 let rr=[]
    for (let i = 0; i < results.data.length; i++) {
      if (i<5) {
       rr.push({fullName:results.data[i].doctorname,avatarUrl:"https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",id:results.data[i].appid,timeStamp:results.data[i].start,recentText:results.data[i].patientname}) }
       
      }
      rr.sort((a, b) => a.timeStamp - b.timeStamp);
      setAppointmentData(rr)
      console.log('oooooooooo',appointmentData);
     }


    return (
    <View>
       
        <View>
        <Box shadow={9} style={{backgroundColor:'#EEEEEE',marginTop:110,width:'90%',marginLeft:"5%",marginBottom:80  }} w="90%" h="760" rounded="xl" _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
   
  }}>
      
      <Pressable variant="ghost"  onPress={()=>navigation.navigate('AppointmentLandingPage')}>
     <Avatar   shadow={9} bg="teal"  alignSelf="center" size="xl" style={{position:'absolute',top:-30}}  >
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
      + {ALLappointmentNumber}
      </Text>     
      </Center>
      <HStack style={{marginBottom:30}}>
      <Text style={{marginLeft:20,fontSize:17,color:'teal',marginBottom:18,paddingTop:6}}>Next 5 Appointments</Text>
      <Button variant="ghost" bg="#d4d4d4"  onPress={()=>navigation.navigate('AppointmentLandingPage')} style={{width:69 ,height:32,marginLeft:80}} shadow={1}><Text style={{fontSize:10}} >See More</Text></Button>
      </HStack>
       {appointmentData.map(item=> <Box   borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="gray.300" pl="4" pr="5" py="2">
            <HStack shadow={1} space={3} justifyContent="space-between" style={{height:70,paddingTop:20}}>
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
              <Icon name="calendar" style={{ position:'absolute',right:"27%"}}/>
              <Text style={{fontSize:10 ,position:'absolute',right:0}} _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" >
       
               {" "} {item.timeStamp}
        </Text>
        </HStack>
        </Box>)}
        </Box>
        </VStack>
        </Box>
        </View>


    </View>
    )
    
}

export default Appointment