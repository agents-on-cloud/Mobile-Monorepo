import React,{useEffect,useState} from 'react'
import {View,Text,ScrollView} from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider, VStack ,Spinner,Heading,Avatar,Divider,Button } from "native-base";
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default function searchSreen({navigation}) {
  const searchStore = useSelector(state => state.searchStore);
  const dispatch = useDispatch();
  const [testARR,settestARR]=useState([1,2,3,4])


  useFocusEffect(
    React.useCallback(() => {
  
  
    }, [])
  );
  
  return (
   
  
         <ScrollView  >
          <View>
<Text>{searchStore.searchInput}</Text>
         </View>

{
   testARR.map(item=>      <Box  alignItems="center">
      <Pressable>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box  w="400" mt="10" borderWidth="1" borderColor={'grey'} shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
   
          transform: [{
            scale: isPressed ? 0.96 : 1
          }],
          }}>
              <HStack alignItems="center">
              <Avatar size="48px" source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/387/387561.png'
          }} />
          
                <Flex direction="row" h="7" p="1"mt="2" ml="3" >
        <Text> DR. Sami Ahmad</Text>
        <Divider h="6" bg="emerald.500" thickness="2" mx="2" orientation="vertical" ml="10" mr="10" />
        <Text>PT:Mahmoud  </Text>
        
      </Flex>
              </HStack>
           
    
             <HStack w="300" mt="2">
               <HStack w="180"  >
              <Text mt="2"  style={{fontSize:12}} color="coolGray.700">
             Service Name/s: Botox95
              </Text>
              </HStack>
              <HStack  w="150">
              <Text mt="2" style={{fontSize:12}}  color="coolGray.700">
             Assistant Name/s:Ahmad
              </Text>
              </HStack>
              </HStack>
             
              <Flex>
                <HStack  mt="2">
                 <Text  style={{fontSize:12}} color="coolGray.800" mt="2" fontWeight="medium"   alignSelf="flex-start">
                 <Icon name="clock-o" mr="5" />
                    {" "}Start Time :5-6-2022
                   
                  </Text> 
                  <Text  style={{fontSize:12,position:'absolute',left:'50%'}} color="coolGray.800" ml="10" mt="2" fontWeight="medium"   alignSelf="flex-start">
                    <Icon name="clock-o"/>
                    {" "}End Time :20-8-2022
                  </Text>
                  </HStack>
              </Flex>
            </Box>;
      }}
      </Pressable>
    </Box>
)}
{/* <View style={{marginTop:100}}>
  
</View> */}
        </ScrollView>
 
   
   

  )
}
