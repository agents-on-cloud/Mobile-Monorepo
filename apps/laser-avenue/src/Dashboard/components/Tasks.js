import React, { useState, useCallback, useRef,useEffect } from 'react';
import { Button,HStack,StatusBar,Box,Heading,Avatar,Center,VStack} from "native-base";
import LottieView from 'lottie-react-native';
import Carousel from 'react-native-snap-carousel';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import axios from 'axios'


 function Tasks(){
 
    const [carouselItems, setCarouselItems] = useState([]);
    const [flag, setFlag] = useState(false);
    useEffect( () => {
        carouselHandler()
    
    },[flag])
    
    const carouselHandler=useCallback(async ()=>{
        axios.get(`https://625fbc0892df0bc0f3397ad0.mockapi.io/Tasks`).then((response) => {
            console.log(response.data);
          });
    
        }
         )


    const exampleItems = [
        {  "title": 'Maintaining patient data',  "text": 'Deadline : 12/5/2020',},{  "title": 'Guiding patients ',  "text": 'Deadline : 12/5/2021',},{  "title": 'Preparing patient files',  "text": 'Deadline : 12/5/2021',},{  "title": 'Mediating between patients',  "text": 'Deadline : 12/5/2021',},{  "title": 'Setting up procedure rooms',  "text": 'Deadline : 12/5/2021',},
      ];
   
    const ref = useRef(null);
    const renderItem = useCallback(({ item, index }) => (
        <View style={{ backgroundColor:  '#06919D' , borderRadius:20, height: 180, padding: 30, }} >
          <LottieView  style={{marginLeft:112,height:40}} source={require('../../animation/test.json')} autoPlay loop  />
          <Text style={{ fontSize: 30,color:'white' }}>{item.title}</Text>
        <Text style={{ color:'#f5f5f5f5' }}>{item.text}</Text>
        </View>
      ), []);  

    return(
        <View>
            <Text>asdsadasdasd</Text>
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
      <Button style={{ width:120,marginTop:50 }} onPress={()=>setFlag(!flag)} mt="5" colorScheme="teal">
      View All Tasks
      </Button>
      </HStack >
      </View>
    )

}
export default Tasks