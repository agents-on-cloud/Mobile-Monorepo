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
     

    <Text>{HumanResourcesStore.value}</Text>
      <Button onPress={()=>dispatch( increment(5))}> test</Button>
  

    </View>
    );
  }
  export default Hr