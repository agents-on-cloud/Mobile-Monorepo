import * as React from 'react';
import { View, Text,Button ,ScrollView } from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import {increment} from '../store-notification'
import { List } from 'react-native-paper';

function Notifications() {
  const notificationStore=useSelector(state=>state.notification)
  const dispatch=useDispatch()
    return (
      <ScrollView>
      {/* <Text style={{fontSize:40}}>Notification</Text>
      <Text style={{fontSize:20}}>start Development Here</Text>
      <Button title="plus 5 using redux" onPress={()=>{dispatch(increment(5))}}/>
      <Text style={{fontSize:50,marginTop:80}}>{notificationStore.value}</Text>
     */}
         <List.Subheader>Recent notifications</List.Subheader>
  
  
    </ScrollView>
    
    
    );
  }
  export default Notifications