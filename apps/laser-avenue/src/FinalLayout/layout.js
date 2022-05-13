
import  React,{useState} from 'react';
import { View } from 'react-native';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Pressable } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';






 function Layout() {

    const [selected, setSelected] = useState(0);
    const navigation = useNavigation();

    function homeHandler() {
        setSelected(0)
      navigation.navigate('Dashboard')
    }

    function notificationHandler(){
        setSelected(2)
        navigation.navigate('test')

    }
  return (
<View>

<Box  bg="white" safeAreaTop width="100%"  alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="teal.700" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => homeHandler() }>
            <Center>
            <Icon  mb="1" style={{fontSize:20 }}   color="white"   name="home"/> 
           
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon  mb="1" style={{fontSize:20 }}   color="white"   name="search" />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() =>  notificationHandler()}>
            <Center>
              <Icon mb="1"   style={{fontSize:20 }}   color="white"  name="bell-o" />
              <Text color="white" fontSize="12">
                Notifications
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1"   style={{fontSize:20 }}   color="white"  name= "gears"/>
              <Text color="white" fontSize="12">
                Settings
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
     

</View>
  );
}

export default Layout