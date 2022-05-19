import * as React from 'react';
import { View, Text } from 'react-native';
import { Checkbox} from "native-base";
import { HStack ,Button} from "native-base";
import {increment} from '../store-Hr'
import { useDispatch, useSelector } from 'react-redux';

function Hr({navigation}) {
  const HumanResourcesStore = useSelector(state => state.hrStore);
  const dispatch = useDispatch();
    return (
      <View>
     

    <Text style={{fontSize:100}}>{HumanResourcesStore.value}</Text>
    <Text style={{fontSize:100}}>start Development Here</Text>
      <Button style={{width:100, marginLeft:200}} onPress={()=>dispatch(increment(5))}> test</Button>
  

    </View>
    );
  }
  export default Hr
  ///