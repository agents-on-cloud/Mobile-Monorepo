import  React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Pressable } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';





 function Header() {


    const [selected, setSelected] = useState(0);
    const navigation = useNavigation();


  function calendarHandler(){

    navigation.navigate('calendar')
}
  return (
<View>

<Box  bg="grey.200" safeAreaTop width="100%"  alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="grey.200" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => console.log('llll') }>
            <Center>

           
              <Text color="transparent" fontSize="12">
                
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => console.log('llll') }>
            <Center>

              <Text color="transparent" fontSize="12">
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() =>  console.log('llll')}>
            <Center>
              {/* <Icon mb="1"   style={{fontSize:20 }}   color="transparent"  name="bell-o" /> */}
              <Text color="transparent" fontSize="12">
                
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" py="2" flex={1} onPress={() => calendarHandler()}>
            <Center>
              <Icon mb="1"   style={{fontSize:20 }}   color="teal"  name= "calendar"/>
              <Text style={{ color:"teal"}} fontSize="12">
                CALENDAR
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
     

</View>
  );
}

export default Header