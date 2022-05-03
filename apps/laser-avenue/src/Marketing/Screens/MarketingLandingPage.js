import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { Appbar } from 'react-native-paper';
function MarketingLandingPage() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Appbar>
      <Appbar.Action
       icon="archive"
       onPress={() => console.log('Pressed archive')}
       />
       <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
       <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
       <Appbar.Action
       icon="delete"
       onPress={() => console.log('Pressed delete')}
       />
       </Appbar>
       <Text style={{fontSize:40}}>Marketing</Text>
       <Text style={{fontSize:20}}>start Development Here</Text>
       
       </View>
    );
  }
  export default MarketingLandingPage