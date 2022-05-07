import * as React from 'react';
import { View, Text,Button } from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import {increment} from '../store-notification'
function NotificationLandingPage() {
  const notificationStore=useSelector(state=>state.notification)
  const dispatch=useDispatch()
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:40}}>Notification</Text>
      <Text style={{fontSize:20}}>start Development Here</Text>
      <Button title="plus 5 using redux" onPress={()=>{dispatch(increment(5))}}/>
      <Text style={{fontSize:50,marginTop:80}}>{notificationStore.value}</Text>
     
    </View>
    );
  }
  export default NotificationLandingPage