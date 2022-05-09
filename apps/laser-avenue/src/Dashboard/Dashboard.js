import React, { useState, useCallback, useRef,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment} from '../Dashboard/store-dashboard';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Button,IconButton,HStack,StatusBar,Box,Icon} from "native-base";

const exampleItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];

function Dashboard() {
  

  const [test,setTest]=useState([])
    const dashboardStore = useSelector(state => state.dashboard);
    const dispatch = useDispatch();

    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(exampleItems);
    const ref = useRef(null);
   
  const colorDynamic=()=>{
      const colors =['#A2B38B',"#E4E9BE","#FAFDD6","#E6BA95"]
      const randomNumber=Math.floor(Math.random() * colors.length);

      return colors[randomNumber]
  }
    const renderItem = useCallback(({ item, index }) => (
      <View
        style={{
          backgroundColor:  colorDynamic() ,
          borderRadius:20,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    ), []);
  
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#191919", paddingTop: 50 }}>
     
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <Carousel
            layout={'stack'} layoutCardOffset={`18`}
            activeSlideAlignment={`end`}
            ref={ref}
            data={carouselItems}
            sliderWidth={400}
            itemWidth={350}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
            firstItem={4}
          
          />
        </View>

        <Button style={{ width:80,marginTop:50 }} onPress={()=>console.log('dd')} mt="5" colorScheme="cyan">
        Submit
      </Button>

      </ScrollView>
        /* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',marginTop:30 }}>
          <Carousel
          layout={'default'} 
            ref={ref}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />

          
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',marginTop:30 }}>
          <Carousel
            layout={'stack'} 
            ref={ref}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />

          
        </View> */
  
    //   </ScrollView>
    );
  };
export default Dashboard