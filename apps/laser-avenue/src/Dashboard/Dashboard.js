import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment} from '../Dashboard/store-dashboard';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Button,IconButton,HStack,StatusBar,Box,Icon,Heading,Avatar,Center,VStack} from "native-base";
import LottieView from 'lottie-react-native';
import {  FlatList, Spacer, NativeBaseProvider } from "native-base";
import { PieChart } from "react-native-gifted-charts";
import { MaterialIcons } from "@expo/vector-icons";



function Dashboard() {
const renderLegend = (text, color) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 12}}>
      <View style={{ height: 18, width: 18, marginRight: 10, borderRadius: 4, backgroundColor: color || 'white',}} />
      <Text style={{color: 'white', fontSize: 12}}>{text || ''}</Text>
    </View>
  );
};
  const exampleItems = [
    {  title: 'Task 1',  text: 'Deadline : 12/5/2020',},{  title: 'Task 2',  text: 'Deadline : 12/5/2021',},{  title: 'Task 3',  text: 'Deadline : 12/5/2021',},{  title: 'Task 4',  text: 'Deadline : 12/5/2021',},{  title: 'Task 5',  text: 'Deadline : 12/5/2021',},
  ];

  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }];

  const billingData=[
    {name:'Expenses',totalExpenses:3500,section1:50,section2:30,section3:20},
    {name:'Revenues',totalRevenue:3500,section1:40,section2:60}]
  

    const dashboardStore = useSelector(state => state.dashboard);
    const dispatch = useDispatch();

    const [carouselItems, setCarouselItems] = useState(exampleItems);
    const ref = useRef(null);
   
  const colorDynamic=()=>{
      const colors =["#06919D"]
      const randomNumber=Math.floor(Math.random() * colors.length);

      return colors[randomNumber]
  }
    const renderItem = useCallback(({ item, index }) => (
      <View style={{ backgroundColor:  colorDynamic() , borderRadius:20, height: 180, padding: 30, }} >
        <LottieView  style={{marginLeft:112,height:40}} source={require('../../animation/test.json')} autoPlay loop  />
        <Text style={{ fontSize: 30,color:'white' }}>{item.title}</Text>
      <Text style={{ color:'#f5f5f5f5' }}>{item.text}</Text>
      </View>
    ), []);

    const billingItem=useCallback(({ item, index }) => (
      <View> 
      <Box  >
      </Box>  


      <View
            style={{
              marginVertical: 50,
              marginHorizontal: 30,
              borderRadius: 10,
              paddingVertical: 50,
              backgroundColor: '#414141',
              justifyContent: 'center',
              alignItems: 'center',
            }}>


            {/*********************    Custom Header component      ********************/}
            <Text
              style={{
                color: 'white',
                fontSize: 32,
                fontWeight: 'bold',
                marginBottom: 12,
              }}>
             {item.name}
            </Text>
            {/****************************************************************************/}

{  <View  >
            <PieChart
              strokeColor="white"
              strokeWidth={2}
              donut
              data= {item.section3 ?  [
                {value: item.section1, color: 'rgb(84,219,234)',text:`${item.section1}%`},
                {value: item.section2, color: 'lightgreen',text:`${item.section2}%`},
                {value: item.section3 , color: 'orange',text: `${item.section3}%` },
              ] : [
                {value: item.section1, color: 'rgb(84,219,234)',text:`${item.section1}%`},
                {value: item.section2, color: 'lightgreen',text:`${item.section2}%`},
               
              ] } 
              innerCircleColor="#414141"
              innerCircleBorderWidth={3}
              innerCircleBorderColor={'white'}
              showValuesAsLabels={true}
              showText
              textSize={17}
              textBackgroundRadius={20}
              showTextBackground={true}
              centerLabelComponent={() => {
                return (
                  <View>
                    <Text style={{color: 'white', fontSize: 28}}>Total</Text>
                    <Text style={{color: 'white', fontSize: 14,textAlign:'center'}}> {item.name}</Text>
                  </View>
                );
              }}
            />
</View>}

            {/*********************    Custom Legend component      ********************/}
          { item.section3 ? <View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 50,
              }}>
              {renderLegend('Provider Expenses', 'rgb(84,219,234)')}
              {renderLegend('Clinic Expenses', 'lightgreen')}
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,
              }}>
             
              {renderLegend('Inventory Expenses', 'orange')}
            </View>

            </View> :
            
            <View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 50,
              }}>
              {renderLegend('Product Revenues', 'rgb(84,219,234)')}
              {renderLegend('Appointment Revenues', 'lightgreen')}
            </View>
           

            </View>
            
            }
            {/****************************************************************************/}

            
          </View>
          

    </View>

    ),[])
  
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "" }}>
          <View>
          <HStack space={3} justifyContent="center" style={{marginBottom:50}} >
          </HStack>     
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "center"  }}>
          <Carousel
            layout={'default'} layoutCardOffset={`10`}
            activeSlideAlignment={`center`}
            ref={ref}
            data={carouselItems}
            sliderWidth={400}
            itemWidth={310}
            renderItem={renderItem}
            firstItem={2} 
            
            />
        </View>
        <HStack space={3} justifyContent="center" >
        <Button style={{ width:120,marginTop:50 }} onPress={()=>console.log('dd')} mt="5" colorScheme="teal">
        View All Tasks
        </Button>
        </HStack >
        </View>
        <View>

        <Box shadow={9} style={{backgroundColor:'#EEEEEE',marginTop:110,width:'90%',marginLeft:"5%",marginBottom:80  }} w="90%" h="580" rounded="xl" _text={{
    fontSize: "md",
    fontWeight: "medium",
    color: "warmGray.50",
   
  }}>
     <Avatar shadow={9} bg="teal"  alignSelf="center" size="xl" style={{position:'absolute',top:-30}}  >
     <LottieView  style={{height:130}}  source={require('../../animation/appointments.json')} autoPlay loop  />
      </Avatar>

     
      <VStack space={3}  mt="100" >
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

        <Box  >
        <Carousel
            layout={'stack'} layoutCardOffset={`38`}
            activeSlideAlignment={`center`}
            ref={ref}
            data={billingData}
            sliderWidth={400}
            itemWidth={380}
            renderItem={billingItem}
            firstItem={1} 
            
            />
            </Box>

            <Box h="400" w="92%" ml="4%" justifyContent="center"  mb="100"  style={{backgroundColor:'#EEEEEE'}} shadow={9}>
              <VStack space={0}>
              <HStack  space={10} justifyContent="center" >
              <Box h="120" w="120" justifyContent="center" style={{backgroundColor:'#787A91',borderRadius:20}} shadow={9}>
                <Center>Leave</Center>
              </Box>
              <Box h="120" w="120"  justifyContent="center" style={{backgroundColor:'#787A91',borderRadius:20}} shadow={9}>
              <Center>Attendance</Center>
              </Box>
              </HStack>
              <Center>
              <Button   fontSize={'20'} h={'60'} w={'60'}   borderRadius="full" bg={'indigo.600'} variant="solid"   >HR </Button>
              
              </Center>
              <HStack  space={10} justifyContent="center">
              <Box h="120" w="120" justifyContent="center"  style={{backgroundColor:'#787A91',borderRadius:20}} shadow={9}>
              <Center>Working Hours</Center>
              </Box>
              <Box h="120" w="120" justifyContent="center" style={{backgroundColor:'#787A91',borderRadius:20}} shadow={9}>
              <Center>Check in/out</Center>
              </Box>
              </HStack>
              </VStack>

           </Box>
        </ScrollView>
    );
  };
export default Dashboard