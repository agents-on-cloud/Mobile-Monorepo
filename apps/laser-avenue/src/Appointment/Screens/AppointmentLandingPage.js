import React,{useState,useEffect} from "react";
import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider, VStack, ScrollView ,Spinner,Heading,Avatar,Divider,Button } from "native-base";
import axios from 'axios'
import registerBuilder from '../../requestRebuilder  '
import {View} from 'react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import {loginFlagHandler,closeloginFlagHandler,componentsLoaderHandler} from '../../FinalLayout/store-finalLayout'

function Example() {
  const [date,setDate] =useState(new Date())
  // const [due_date, setDue_date] = useState('');
  const [calendarFlag, setCalendarFlag] = useState(false);
  const [AllAppointments,setAllAppointments]=useState([])
  const [FilteredAppointments,setFilteredAppointments]=useState([])
  const [gettingDAta,setgettingDAta]=useState(false)
  const [filterFlag,setFilterFlag]=useState(false)
  const finalLayoutStore = useSelector(state => state.finalLayoutStore);
  const dispatch = useDispatch();



  useEffect(() => {
    getData()
   
    
    }, [])

async function getData() { 
setgettingDAta(false)
dispatch(componentsLoaderHandler())
const res = await axios('https://625fbc0892df0bc0f3397ad0.mockapi.io/Appointments')
setAllAppointments(res.data)
setgettingDAta(true)
setFilterFlag(false)
dispatch(componentsLoaderHandler())
}

function  filterDate(due_date) {

  dispatch(componentsLoaderHandler())

  setFilterFlag(false)
  let filterArr=[]
  for (let i = 0; i < AllAppointments.length; i++) {
    if (AllAppointments[i].start.slice(0,10) == due_date) {
   filterArr.push(AllAppointments[i])
    }
    
  }
  setFilteredAppointments(filterArr)
  
  setFilterFlag(true)
  setgettingDAta(false)

  setTimeout(() => {
    dispatch(componentsLoaderHandler())
  }, 300);


  
}

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate;
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1 + '';
  if (month.length === 1) month = '0' + month;
  let day = currentDate.getDate() + '';
  if (day.length === 1) day = '0' + day;
//  setDue_date(year + '-' + month + '-' + day);

 filterDate(`${year + '-' + month + '-' + day}`)
};

const showDate = () => {

  DateTimePickerAndroid.open({
    value: date,
    onChange,
    mode: 'date',
  
  });
 
 
};


function AllHandler() {
  dispatch(componentsLoaderHandler())


  setTimeout(() => {
    setFilterFlag(false)
    setgettingDAta(true)
    dispatch(componentsLoaderHandler())
  }, 500);
}

  return(
  

    
  <ScrollView>

<View>

{gettingDAta && <View>

<View>
    <HStack justifyContent="center" style={{borderRadius:10}} h="60" bg="#406882" pt="1.5" mt="5" space={6}>
      <Button  shadow={9}  style={{borderRadius:35,width:50,height:50}}  onPress={()=> showDate()}>
    
      <Icon
                  name="calendar"
                  size={20}
                  color="white"
          
                />
     
      </Button>
      <Button shadow={9}  style={{borderRadius:35,width:50,height:50}}  onPress={()=>  AllHandler()}>
   
       ALL
   
      </Button>
      <Avatar bg="#82DBD8" shadow={9} style={{borderWidth:1, borderColor:'#D3DEDC'}} >
       
      </Avatar>
      <Avatar bg="#B3E8E5" shadow={9} style={{borderWidth:1, borderColor:'#D3DEDC'}}>
        
      </Avatar>
    </HStack>
    </View>


 <VStack>

 
 {AllAppointments.map(item=><Box alignItems="center">
      <Pressable>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box borderLeftWidth={15} mt="10" maxW="96" borderWidth="1" borderColor={item.color} shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }],
          transitionProperty: 'width',
  transitionDuration: '2s',
  transitionTimingFunction: 'linear',
  transitionDelay: '1s'
        }}>
              <HStack alignItems="center">
              <Avatar size="48px" source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/387/387561.png'
        }} />
                <Spacer />
                <Icon name="calendar" mr="5" />
                <Text fontSize={10} color="coolGray.800">
             {  " " +item.start.slice(0,10)}
                </Text>
              </HStack>
              <Flex direction="row" h="7" p="1"mt="2" >
        <Text> DR. {item.doctorname}</Text>
        <Divider h="6" bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
        <Text>PT:{item.patientname} </Text>
        
      </Flex>
    
             <HStack w="300">
               <HStack w="180">
              <Text mt="2" style={{fontSize:10}} color="coolGray.700">
             Service Name/s: { item.appservices.map(element=>element.services) }
              </Text>
              </HStack>
              <HStack  w="150">
              <Text mt="2" style={{fontSize:10}}  color="coolGray.700">
             Assistant Name/s:{ item.appservices.map(element=>element.assistantname) }
              </Text>
              </HStack>
              </HStack>
             
              <Flex>
                <HStack>
                 <Text fontSize={10} color="coolGray.800" mt="2" fontWeight="medium"   alignSelf="flex-start">
                 <Icon name="clock-o" mr="5" />
                    {" "}Start Time : {item.start.slice(10,item.start.length)}
                   
                  </Text> 
                  <Text fontSize={10} color="coolGray.800" ml="10" mt="2" fontWeight="medium"   alignSelf="flex-start">
                    <Icon name="clock-o"/>
                    {" "}End Time :  {item.end.slice(10,item.start.length)}
                  </Text>
                  </HStack>
              </Flex>
            </Box>;
      }}
      </Pressable>
    </Box> ) }
    
    </VStack>

    </View>}

{/* ///////////////////////////////////////////////////// */}
{filterFlag && <View>

<View>
    <HStack justifyContent="center" style={{borderRadius:10}} w="350" h="60" bg="#406882" pt="1.5" mt="5" space={6}>
      <Button  shadow={9}  style={{borderRadius:35,width:50,height:50}}  onPress={()=> showDate()}>
    
      <Icon
                  name="calendar"
                  size={20}
                  color="white"
          
                />
     
      </Button>
      <Button shadow={9}  style={{borderRadius:35,width:50,height:50}}  onPress={()=>  AllHandler()}>
   
       ALL
   
      </Button>
      <Avatar bg="#82DBD8" shadow={9} style={{borderWidth:1, borderColor:'#D3DEDC'}} >
       
      </Avatar>
      <Avatar bg="#B3E8E5" shadow={9} style={{borderWidth:1, borderColor:'#D3DEDC'}}>
        
      </Avatar>
    </HStack>
    </View>
    <VStack>

 
{FilteredAppointments.map(item=><Box alignItems="center">
     <Pressable>
       {({
       isHovered,
       isFocused,
       isPressed
     }) => {
       return <Box borderLeftWidth={15} mt="10" maxW="96" borderWidth="1" borderColor={item.color} shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
         transform: [{
           scale: isPressed ? 0.96 : 1
         }],
         transitionProperty: 'width',
 transitionDuration: '2s',
 transitionTimingFunction: 'linear',
 transitionDelay: '1s'
       }}>
             <HStack alignItems="center">
             <Avatar size="48px" source={{
         uri: 'https://cdn-icons-png.flaticon.com/512/387/387561.png'
       }} />
               <Spacer />
               <Icon name="calendar" mr="5" />
               <Text fontSize={10} color="coolGray.800">
            {  " " +item.start.slice(0,10)}
               </Text>
             </HStack>
             <Flex direction="row" h="7" p="1"mt="2" >
       <Text> DR. {item.doctorname}</Text>
       <Divider h="6" bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
       <Text>PT:{item.patientname} </Text>
       
     </Flex>
   
            <HStack w="300">
              <HStack w="180">
             <Text mt="2" style={{fontSize:10}} color="coolGray.700">
            Service Name/s: { item.appservices.map(element=>element.services) }
             </Text>
             </HStack>
             <HStack  w="150">
             <Text mt="2" style={{fontSize:10}}  color="coolGray.700">
            Assistant Name/s:{ item.appservices.map(element=>element.assistantname) }
             </Text>
             </HStack>
             </HStack>
            
             <Flex>
               <HStack>
                <Text fontSize={10} color="coolGray.800" mt="2" fontWeight="medium"   alignSelf="flex-start">
                <Icon name="clock-o" mr="5" />
                   {" "}Start Time : {item.start.slice(10,item.start.length)}
                  
                 </Text> 
                 <Text fontSize={10} color="coolGray.800" ml="10" mt="2" fontWeight="medium"   alignSelf="flex-start">
                   <Icon name="clock-o"/>
                   {" "}End Time :  {item.end.slice(10,item.start.length)}
                 </Text>
                 </HStack>
             </Flex>
           </Box>;
     }}
     </Pressable>
   </Box> ) }
   {FilteredAppointments.length==0 && <Text style={{marginTop:100,textAlign:'center',fontSize:20}}>Data Not Found</Text>}
   
   </VStack>
    
   </View>}


   </View>
    </ScrollView>
  
    
    )
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    