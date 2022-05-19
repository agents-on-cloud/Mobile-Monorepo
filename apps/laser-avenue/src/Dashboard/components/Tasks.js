import React, { useState, useCallback, useRef,useEffect } from 'react';
import { Button,HStack,StatusBar,Box,Heading,Avatar,Center,VStack} from "native-base";
import LottieView from 'lottie-react-native';
import Carousel from 'react-native-snap-carousel';
import { Text, View} from 'react-native';
import axios from 'axios'
import requestBuilder from "../../requestRebuilder  "


 function Tasks({navigation}){

const [carouselItems, setCarouselItems] = useState([]);
useEffect(() => {
  getUsers()
}, [])


    const getUsers = async () => {
      try {
     
        const res = await axios(requestBuilder('tasks','/tasks/assignedToMe/:id','get',{"id":"2457b45c-18fd-4caa-a43e-f9af85771e85"}));
        setCarouselItems(res.data)
        
      } catch (error) {
        console.log((error.message));
      }
   
      };
const testHadnler= async()=>{
  console.log('hiiiiiiiiiiiiiiiiiiiiiii');
 
try {
  await axios(requestBuilder('tasks','/tasks/assignedToMe/:id','get',{"id":"2457b45c-18fd-4caa-a43e-f9af85771e85"
})).then(results=>console.log('resultsresults',results.data))
  
} catch (error) {
  console.log(error.response.data);
}


}
    const ref = useRef(null);
    const renderItem = useCallback(({ item, index }) => (
        <View style={{ backgroundColor:  '#06919D' , borderRadius:20, height: 180, padding: 30, }} >
          <LottieView  style={{marginLeft:112,height:40}} source={require('../../animation/test.json')} autoPlay loop  />
          <Text style={{ fontSize: 30,color:'white' }}>{item.subject}</Text>
        <Text style={{ color:'#f5f5f5f5' }}>{item.due_date}</Text>
        </View>
      ), []);  

    return(
        <View>
           <Button onPress={()=>testHadnler()}>Test</Button>
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
          firstItem={1} 
          
          />
      </View>
      <HStack space={3} justifyContent="center" >
  
      </HStack >
      </View>
    )

}
export default Tasks
////