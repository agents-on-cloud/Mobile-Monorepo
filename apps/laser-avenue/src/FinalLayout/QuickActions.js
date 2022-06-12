import React from "react";
import { Box, useDisclose, IconButton, Stagger, HStack, Center, NativeBaseProvider, } from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text,TouchableOpacity,StyleSheet} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function QuickActions() {
    const layoutSore = useSelector(state => state.finalLayoutStore);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    


return(

<Box alignItems="center" style={{position:'absolute',bottom:120,left:20,zIndex:layoutSore.isQuickActionsOpen?10:0}}>
<Stagger visible={layoutSore.isQuickActionsOpen} initial={{
opacity: 0,
scale: 0,
translateY: 34
}} animate={{
translateY: 0,
scale: 1.1,
opacity: 1,
transition: {
type: "spring",
mass: 1,
stagger: {
offset: 30,
reverse: true
}
}
}} exit={{
translateY: 34,
scale: 0.5,
opacity: 0,
transition: {
  duration: 100,
  stagger: {
    offset: 30,
    reverse: true
  }
}
}}>
  <IconButton onPress={ ()=> navigation.navigate('HrProvider')} w="50" h="50" mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon   name="text-box-check-outline" 
  style={{fontSize:25}}
  _dark={{
  color: "warmGray.50"
}} color="warmGray.50" />} />
  <IconButton w="50" h="50" mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon  _dark={{
  color: "warmGray.50"
}}  name="microphone" color="warmGray.50" />} />
  <IconButton w="50" h="50" mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon  _dark={{
  color: "warmGray.50"
}}  name="video" color="warmGray.50" />} />
  <IconButton w="50" h="50" mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon   name="photo-library" _dark={{
  color: "warmGray.50"
}} color="warmGray.50" />} />
</Stagger>
</Box>




    )
    
}



export default QuickActions