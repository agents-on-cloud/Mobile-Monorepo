import React,{useEffect,useState,useCallback} from 'react'
import { Pressable, Text, View} from 'react-native';
import {Box,Button,Center,HStack,VStack} from "native-base";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { PieChart } from "react-native-gifted-charts";
import axios from 'axios';
import requestBuilder from '../../requestRebuilder  '
import Icon from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';



function Billing({navigation}) {
  
  const [selected, setSelected] = React.useState(1);
  const [ActiveSlide, setActiveSlide] = useState(1);
  const [extablishmentExpenses,setEstablishmentExpenses]=useState(0)
  const [extablishmentPercntage,setEstablishmentPercntage]=useState(0)
  const [providerExpenses,setproviderExpenses]=useState(0)
  const [providerPercentage,setproviderPercentage]=useState(0)
  const [inventoryExpenses,setinventoryExpenses]=useState(30)
  const [inventoryPercentage,setinventoryPercentage]=useState(0)
  const [billing,setBilling]=useState([{name: 'Expenses', section1: extablishmentExpenses, section2: providerExpenses, section3: inventoryExpenses},{name: 'Revenues',  section1: 40, section2: 60}])
  
  useEffect(() => {
    getData()

},[])


useEffect(() => {
  setBilling([{name: 'Expenses', section1: extablishmentExpenses, section2: providerExpenses, section3: inventoryExpenses},{name: 'Revenues',  section1: 40, section2: 60}])
},[extablishmentExpenses,providerExpenses,inventoryExpenses])



async function getData() {

      let expenseData=   await axios(requestBuilder('billing','/establishmentExpenses','get'))
      for (let i = 0; i < expenseData.data.length; i++) {
        setEstablishmentExpenses(extablishmentExpenses+expenseData.data[i].paid_amount)
      }

      let providerData=   await axios(requestBuilder('billing','/ProviderExpenses','get'))
      for (let i = 0; i < providerData.data.length; i++) {
       setproviderExpenses(providerExpenses+providerData.data[i].basic_Salary+providerData.data[i].service_cut)
      }





      let productRevenue= await axios(requestBuilder('billing','/ProductRevenuesItems','get'))

      let AppointmentRevenue= await axios(requestBuilder('billing','','get'))


      setEstablishmentPercntage (Math.floor(extablishmentExpenses/(extablishmentExpenses+providerExpenses+inventoryExpenses)*100) )
      setinventoryPercentage(Math.floor(inventoryExpenses/(extablishmentExpenses+providerExpenses+inventoryExpenses)*100))
      setproviderPercentage(Math.floor( providerExpenses/(extablishmentExpenses+providerExpenses+inventoryExpenses)*100))



}
        const renderLegend = (text, color) => {
            return (
              <View style={{flexDirection: 'row', marginBottom: 12}}>
                <View style={{ height: 18, width: 18, marginRight: 10, borderRadius: 4, backgroundColor: color || 'white'}} />
                <Text style={{color: 'teal', fontSize: 12}}>{text || ''}</Text>
              </View>
            );
          };


    const billingItem=useCallback(({ item, index }) => (
        <View> 
        <Box >
        </Box>  
        <View
              style={{
                marginVertical: 20,
                marginHorizontal: 30,
                paddingVertical: 50,
                backgroundColor: '#DDDDDD',
                borderRadius:20,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth:1,
                borderColor:'#92BA92'
              }}>
              {/*********************    Custom Header component      ********************/}
           
              <Text
                style={{
                  color: 'teal',
                  fontSize: 32,
                  fontWeight: 'bold',
                  marginBottom:40,
                }}>
               {item.name}
            
              </Text>
              {/**************************fds********vv*****************sa*************************/}
  
              {  <View  >
              <PieChart
                strokeColor="white"
                strokeWidth={2}
                donut
                data= {item.name=='Expenses' ?  [
                  {value: item.section1, color: 'rgb(84,219,234)'},
                  {value: item.section2, color: 'lightgreen'},
                  {value: item.section3 , color: 'orange' },
                ] : [
                  {value: item.section1, color: 'rgb(84,219,234)'},
                  {value: item.section2, color: 'lightgreen'},
                 
                ] } 
                innerCircleColor="teal"
                innerCircleBorderWidth={3}
                innerCircleBorderColor={'white'}
                showValuesAsLabels={true}
           
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
              {/*********************    Custom Legend component      **   ******************/}
            { item.name=='Expenses' ? <View>
  
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
              
            </View>
            
  
      </View>
  
      ),[])

    return (
        <View >
         <Box flex={1} bg="grey.200"  safeAreaTop width="100%" maxW="300px" alignSelf="center" >
        <Center flex={1}></Center>
        <HStack bg="#73777B" alignItems="center" safeAreaBottom shadow={6} h="70" style={{borderRadius:40}} >
          <Pressable cursor="pointer"  py="3" flex={1} onPress={() => navigation.navigate('BillingLandingPage')}>
            <Center>
            <Icon mb="1"   style={{fontSize:20 }}   color="white"  name= "md-receipt"/>
            <Text  fontSize="12" fontColor="white" style={{color:"white"}}>
                Billing
              </Text>
            </Center>
          </Pressable>
      
          <Pressable cursor="pointer"  py="2" flex={1} onPress={() => setSelected(3)}>
          <Center>
          <Icon mb="1"   style={{fontSize:40, color:'#EB5353' }}   color="white"  name= "notifications-circle-outline"/>
             
           </Center>
           </Pressable>
           </HStack>
           </Box>
           <Box  mb="50">
      {  billing[0].section1+  billing[0].section2+  billing[0].section3 >0 &&   <Carousel
           loop={true}
            layout={'stack'} layoutCardOffset={`38`}
            activeSlideAlignment={`center`}
            data={billing}
            sliderWidth={400}
            itemWidth={380}
            renderItem={billingItem}
            firstItem={1} 
            onSnapToItem={(index) => setActiveSlide(index)  }
            />}
            <Pagination  dotsLength={billing.length}
              activeDotIndex={ActiveSlide}
              containerStyle={{ backgroundColor: 'transparent' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#68A7AD'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}/>
            </Box>
            </View>
    )
    
}
export default Billing