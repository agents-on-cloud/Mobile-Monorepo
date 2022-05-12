import React,{useEffect,useState} from 'react'
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import { Button,HStack,StatusBar,Box,Heading,Avatar,Center,VStack} from "native-base";
import LottieView from 'lottie-react-native';
import {  FlatList, Spacer, NativeBaseProvider } from "native-base";
import axios from 'axios';

function Appointment() {
    const [data,setData] =useState([])

 useEffect(() => {
getData()

 }, [])
async function getData() {

  const response=await axios.get('https://625fbc0892df0bc0f3397ad0.mockapi.io/Appointments')  
  setData(response.data)
}


    return (
    <View>
        <View>
        <Box shadow={9} style={{backgroundColor:'#EEEEEE',marginTop:110,width:'90%',marginLeft:"5%",marginBottom:80  }} w="90%" h="580" rounded="xl" _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
   
  }}>
      
     
     <Avatar  shadow={9} bg="teal"  alignSelf="center" size="xl" style={{position:'absolute',top:-30}}  >
     <LottieView   style={{height:130}}  source={require('../../animation/appointments.json')} autoPlay loop  />
      </Avatar>
     

      <VStack space={3}  mt="100">
       <Box>
      <Center fontSize="xl"   >
      <Text style={{fontSize:20,color:'gray.200'}}>  TOTAL APPOINTMENTS
      </Text>    
      </Center>
      <Center    pb="20">
      <Text style={{fontSize:30,color:'teal'}}>  
      + 15
      </Text>     
      </Center>
      <FlatList data={data} renderItem={({item}) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="gray.300" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.avatarUrl
        }} />
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
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