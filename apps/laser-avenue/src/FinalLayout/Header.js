import  React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Pressable,IconButton,Avatar } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


 function Header({drawHandler}) {
 const [selected, setSelected] = useState(0);
 const navigation = useNavigation();
 function calendarHandler(){
 navigation.navigate('calendar')}
  return (
<View>

<Box  bg="#C6DCE4" safeAreaTop width="100%"  alignSelf="center">
        <Center flex={1}></Center>
        <HStack h="75" bg="grey.200" alignItems="center" safeAreaBottom shadow={6} spaceBetween={2}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => console.log('llll') }>
            <Center>

           
              <Text style={{color:"teal",width:250,position:"absolute",left:20}} bold fontSize="19">
                Laser Avenue
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => console.log('llll') }>
          <Center>
              {/* <IconButton bg="#F6FBF4" style={{borderRadius:20,position:'absolute',right:-50}}>
              <Icon mb="1"   style={{fontSize:20,color:"black",paddingLeft:2 }}     name="flash" />
              </IconButton> */}
          </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() =>  console.log('llll')}>
            <Center>
              <IconButton bg="#F6FBF4" style={{borderRadius:20,position:'absolute',right:0}}>
              <Icon mb="1"   style={{fontSize:18,color:"black",paddingLeft:2 }}     name="search" />
              </IconButton>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" py="2" flex={1} onPress={() => drawHandler.current.openDrawer()}>
            <Center>
            <Avatar size="48px" source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/387/387561.png'
        }} />
 
            </Center>
          </Pressable>
        </HStack>
      </Box>
     

</View>
  );
}

export default Header