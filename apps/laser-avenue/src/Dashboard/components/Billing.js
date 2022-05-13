import React,{useEffect,useState,useCallback} from 'react'
import { Text, View} from 'react-native';
import {Box} from "native-base";
import Carousel from 'react-native-snap-carousel';
import { PieChart } from "react-native-gifted-charts";
import axios from 'axios';
import requestBuilder from '../../requestRebuilder  '



function Billing() {
    useEffect(() => {
        getData()

    }, [])
    const [data,setData]=useState([])
    const [billing,setBilling]=useState([{section1:50,section2:30,section3:20},{}])
    
async function getData() {
    let response = await axios.get('https://627e9cbeb75a25d3f3bb300c.mockapi.io/Billing')
    let inventoryExpenses=  await axios(requestBuilder('billing','/establishmentExpenses','get'));
    console.log('====================================');
    console.log(inventoryExpenses.data);
    console.log('====================================');

    setData(response.data)
    
}
        const renderLegend = (text, color) => {
            return (
              <View style={{flexDirection: 'row', marginBottom: 12}}>
                <View style={{ height: 18, width: 18, marginRight: 10, borderRadius: 4, backgroundColor: color || 'white',}} />
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
                marginVertical: 50,
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
                innerCircleColor="teal"
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
              
            </View>
            
  
      </View>
  
      ),[])

    return (
        <View>
            <Box  >
           <Carousel
            layout={'stack'} layoutCardOffset={`38`}
            activeSlideAlignment={`center`}
            data={data}
            sliderWidth={400}
            itemWidth={380}
            renderItem={billingItem}
            firstItem={1} 
            />
            </Box>

        </View>
    )
    
}
export default Billing