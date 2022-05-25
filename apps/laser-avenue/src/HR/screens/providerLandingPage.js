import  React,{useEffect,useState} from 'react';
import { View,ScrollView } from 'react-native';
import { Pressable, Text, Box, HStack, Button, Flex, Center,Avatar } from "native-base";
import {increment} from '../store-Hr'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import requestRebuilder  from '../../requestRebuilder  '
import {componentsLoaderHandler} from '../../FinalLayout/store-finalLayout'


function Hr({navigation}) {
  const [provider,setProviders]=useState([{}])
  const [checkOutFlag,setCheckOutFlag]=useState(false)
  const [checkInFlag,setCheckInFlag]=useState(false)
  const [CheckInNew,setCheckInNew]=useState('')
  const [CheckOutNew,setCheckOutNew]=useState('____')
  const [today,setToday]=useState('')
  const [time,setTime]=useState('')
  const [dueDate,setDueDate]=useState('')
  const tokenStore = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
  useEffect(() => {

     DateAndTimeHandler()
     getData()
     checkinhHandler()
  }, [])
  

   function DateAndTimeHandler() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d=new Date()
    setTime(`${d.getHours()}:${d.getMinutes()}`)
    const currentDate = d;
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1 + '';
    if (month.length === 1) month = '0' + month;
    let day = currentDate.getDate() + '';
    if (day.length === 1) day = '0' + day;
    setDueDate(`${year + '-' + month + '-' + day}`)
    var dayName = days[d.getDay()].toLocaleLowerCase();
    setToday(dayName)
    return `${d.getHours()}:${d.getMinutes()}`
   }

  async function getData() {


    dispatch(componentsLoaderHandler())
    await axios(requestRebuilder('providers','/workingHours','post',{
      "providerUuid": tokenStore.userToken.profile_id,
      "status": "latest"
  })).then(results=>setProviders( results.data))
    dispatch(componentsLoaderHandler())
  }



  async function checkinhHandler() {
    await axios(requestRebuilder('providers','/getAllTimeAttendance','post',{
      "providerUuid": tokenStore.userToken.profile_id,
      "date": dueDate,
  })).then(results=>enableDisableHandler(results))
  }





 function enableDisableHandler(results) {
  console.log('====================================');
  console.log('resultsresultsresults',results);
  console.log('====================================');

    if (results.data.length !==0) {
      let fullTime =results.data[results.data.length-1].checkIn.split(':')
     let hours= parseInt(fullTime[0]) + 3
      setCheckInNew(`${hours}:${fullTime[1]}`)
      setCheckOutNew(results.data[results.data.length-1].checkOut)
 if (results.data[results.data.length-1].checkOut !=='null') {
  setCheckOutFlag(true)
 }

      setCheckInFlag(true)
    }else{
      setCheckInFlag(false)
    }
 
    
  



  
}


  async function checkOutHandler() {
    console.log('ouuuuuuuuuuuuuuuut');
    setCheckOutNew(DateAndTimeHandler())
    setCheckOutFlag(true)
    await axios(requestRebuilder('providers','/checkOutClicked','post',{
      "providerUuid": tokenStore.userToken.profile_id,
      "status":"out"})).then(()=>{
       console.log('innnnnnnnnnnnnnnn');
       setCheckOutNew(DateAndTimeHandler())
       setCheckOutFlag(true)
      })}


 async function checkInHandler() {
      await axios(requestRebuilder('providers','/checkInClicked','post',{
      "providerUuid": tokenStore.userToken.profile_id,
      "providerName": tokenStore.userToken.name,
      "ProviderId": tokenStore.userToken.user_id})).then((results)=>{
        console.log('innnnnnnnn',results);
        setCheckInNew(DateAndTimeHandler())
        setCheckInFlag(true)
      })
    
    }
  


  
    return (
      <ScrollView>

    <Center  flex={1} px="3">

      <Pressable>
      {({
      isHovered,
      isFocused,
      
      }) => {
   
      
        return ( <View>
     
     <Box mt="4" maxW="96"  shadow={5}  pt="5"  pl="5"  pr="5" rounded="8" >
            <HStack space={10}  w="300"  justifyContent="center" alignItems="center">

             <Text style={{textAlign:'center'}}  color="coolGray.800" fontWeight="medium" fontSize="xl"> 
            DR <Text>{tokenStore.userToken.name}</Text> 
             </Text> 
              <Avatar  bg="cyan.500" source={{
        uri: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg"
        }}>
      </Avatar>
    
            </HStack>
           <HStack alignContent={'center'} justifyContent={'center'}>
             <Center>
             <Text italic style={{textAlign:'center'}}  mt="5" fontSize="sm" color="coolGray.700"> Working Hours</Text>
             
             </Center>
            </HStack>
        
          {Object.entries(provider[0]).map(ee=>   <HStack pb="2" style={{backgroundColor:today== ee[0].toLocaleLowerCase()?'#B8F1B0' :'transparent',paddingBottom:today== ee[0].toLocaleLowerCase()? 15 :2, borderRadius:today== ee[0].toLocaleLowerCase()? 10 :2 }} >
               {ee[1].from && <HStack >
            <Text  pl="5"  mt="5" fontSize="sm" color="coolGray.700">{ee[0].toUpperCase()}</Text>
            <Text style={{position:'absolute',left:120}}  pl="5"  mt="5" fontSize="sm" color="coolGray.700">{ee[1].from}</Text>
            <Text style={{position:'absolute',left:170}} pl="5" mt="5" fontSize="sm" color="coolGray.700">  to</Text>
            <Text style={{position:'absolute',left:220}} pl="5"  mt="5" fontSize="sm" color="coolGray.700">{ee[1].to}</Text>
            </HStack>}
           </HStack>  )}
         
         
            <HStack mt="6" >
            <Text italic  mt="2" fontSize="sm" color="coolGray.700"> Check in/out:  </Text>
            {!checkInFlag &&    <HStack >
          
              <Text pl="7" mt="2" fontSize="sm" color="coolGray.700">_____</Text>
              <Text pl="5" mt="2" fontSize="sm" color="coolGray.700">to</Text>
              <Text pl="7" mt="2" fontSize="sm" color="coolGray.700">_____</Text>
          
            </HStack>}
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
            
            {checkInFlag &&   <HStack>
            <Text pl="6" mt="2" fontSize="sm" color="coolGray.700">{CheckInNew}</Text>
            <Text pl="5" mt="2" fontSize="sm" color="coolGray.700">to</Text>
            {<Text pl="6" mt="2" fontSize="sm" color="coolGray.700">{CheckOutNew}</Text>}
            </HStack>}
            
           
             </HStack>
             <HStack space={6} pt="10"  w="300"  justifyContent="center" alignItems="center">
             <Text>{checkInFlag.toString()}</Text>
           {<Button  colorScheme={checkInFlag?'light' :"primary"} disabled={checkInFlag}  onPress={ ()=> checkInHandler()} > Check in </Button>}
           {<Button colorScheme={checkOutFlag?'light' :"primary"} disabled={checkOutFlag} onPress={ ()=> checkOutHandler()} >Check out</Button>}
            </HStack>
            <Flex>
              {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                  
                </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                 
                </Text>}
            </Flex> 
          </Box>
          </View>)
    }}
    </Pressable>

    </Center>
    <View style={{marginTop:50}}>

    </View>
    </ScrollView>
    );
  }
  export default Hr
  ///  //