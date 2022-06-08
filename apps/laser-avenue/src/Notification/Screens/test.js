import React, { useState ,useEffect} from "react";
import { Dimensions, TouchableOpacity, View ,ScrollView ,RefreshControl} from "react-native";
import { NativeBaseProvider, Box, Text, Pressable,Checkbox ,Heading, IconButton, HStack, Avatar, VStack, Spacer, Center,Button,Radio } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
// import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import {onOpen,onClose} from '../store-notification'
import { useDispatch, useSelector } from 'react-redux';
import NotificationModal from '../Screens/NotificationModal'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native';
import requestBuilder from '../../requestRebuilder  '
import {loginFlagHandler,closeloginFlagHandler,componentsLoaderHandler} from '../../FinalLayout/store-finalLayout'
import Icon from 'react-native-vector-icons/MaterialIcons';


function Example() {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1).then(() => setRefreshing(false));
  }, []);

  const [mode, setMode] = useState("Basic");
  return <View >
  
  <ScrollView  refreshControl={
        <RefreshControl colors={["#42f545"]} refreshing={refreshing} onRefresh={onRefresh} />
      }>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Basic />
        </ScrollView>
        </ScrollView>

  </View>
  
}

function Basic() {
  const dispatch = useDispatch();
  const dashboardStore = useSelector(state => state.dashboard);
  const [listData, setListData] = useState([]);
  const [updateNotification, setUpdateNotification] = useState([]);
  const [ChangeFlag, setChangeFlag] = React.useState(false);


  useFocusEffect(
    React.useCallback(() => {
      getData()
    }, [ChangeFlag,updateNotification])
  );

  async function getData() {
    dispatch(componentsLoaderHandler())
    const notificationData= await axios(requestBuilder('notifications','/notifications/receivers/:id','get',{id:dashboardStore.userToken.userId}))
    setListData(notificationData.data)
    dispatch(componentsLoaderHandler())
    
  }
  

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };


  const deleteRow =async (rowMap, rowKey) => {
 
    // closeRow(rowMap, rowKey.key);
    // const newData = [...listData];
    // const prevIndex = listData.findIndex(item => item.key === rowKey.key+1);
    // newData.splice(prevIndex, 1);
    // setListData(newData);
    await axios(requestBuilder('notifications','/notifications/delete/:id','delete',{id:rowKey.id}))
    setChangeFlag(!ChangeFlag)
  };
  const onRowDidOpen = rowKey => {
    console.log("This row opened", rowKey);
  };

 
  const renderItem = ({
    item,
    index
  }) => <Box shadow={5} style={{borderWidth:.4,borderColor:'teal'}}>
      <Pressable onPress={() => console.log("You touched me")} _dark={{
      bg: "coolGray.800"
    }} _light={{
      bg: "white"
    }}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => { return  <Box pl="4" pr="5" py="2"  bg={item.is_unread ? "coolGray.300" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
        transform: [{
          scale: isPressed ? 1.08 : 1
        }],

      }} >
          <HStack alignItems="center" space={3}>
            <Avatar size="48px" source={{
            uri: "https://cdn4.iconfinder.com/data/icons/professions-1-2/151/3-512.png"
          }} />
            <VStack>
              <Text color="coolGray.800" _dark={{
              color: "warmGray.50"
            }} bold>
                Sender Name: {item.sender_name}
              </Text>
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                {item.notification_subject}
              </Text>
            </VStack>
            <Spacer />
            <Text style={{position:'absolute',right:2}} fontSize="xs" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} alignSelf="flex-start">
              {`${parseInt(item.createdAt.slice(11,16)) +3}: ${item.createdAt.slice(13,16)}` }
            </Text>
          </HStack>
        </Box>}}
      </Pressable>
    </Box>;

async function ReadHandler(payload) {

     try {
      await axios(requestBuilder('notifications','/notifications/updateUnread/:id','put',{
        "id":payload.id,
        "is_unread":!payload.is_unread
    }))
       
     } catch (error) {
      console.log('kkkkkkkkkkkkk',error); 
       
     }
setUpdateNotification(!updateNotification)
    
    }

  const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2" >
    
{/* //////////
    <Pressable w="70" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" onPress={() => dispatch(onOpen())} _pressed={{
      opacity: 0.5
    }}>
        <VStack alignItems="center" space={2}>
          {/* <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" /> */}
          {/* <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            More
          </Text>
        </VStack>
        
  </Pressable>  */}


      <Pressable style={{position:"absolute",right:0}} w="70" h="70" cursor="pointer" bg="red.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item)} _pressed={{
      opacity: 0.5
    }}>
        <VStack alignItems="center" space={2}>
          {/* <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" /> */}
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
      {/* //////////////////////////////////// */}
      <Pressable style={{position:"absolute",left:0}} w="63" h="70" cursor="pointer" bg="#9BA3EB" justifyContent="center" >
        <VStack alignItems="center" space={2}>
          {/* <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" /> */}
      { data.item.is_flagged==true &&     <Checkbox    defaultIsChecked onPress={async ()=>   await axios(requestBuilder('notifications','/notifications/updateFlag/:id','put',{
        "id":data.item.id,
        "is_flagged":!payload.is_flagged
    }))  }   />}
      {  data.item.is_flagged==false &&   <Checkbox     onPress={async ()=>   await axios(requestBuilder('notifications','/notifications/updateFlag/:id','put',{
        "id":data.item.id,
        "is_flagged":!data.item.is_flagged
    })) }   />}
     
          <Text color="white" fontSize="xs" fontWeight="medium">
            FLAG
          </Text>
        </VStack>
      </Pressable>
      {/* ////////////////////////////////////////////////// */}
      <Pressable style={{position:"absolute",left:62}} w="63" h="70" cursor="pointer"  justifyContent="center" >
        <VStack alignItems="center" space={2}>
          {/* <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" /> */}
    {   data.item.is_unread==true &&     <Button  h="70" style={{width:75,borderColor:"teal",borderWidth:1}}  onPress={ ()=> ReadHandler(data.item)  }   >Read</Button>}
    {    data.item.is_unread==false &&      <Button  h="70" style={{width:75}}  onPress={ ()=> ReadHandler(data.item)}  >UnRead</Button>}


          {/* <Text color="white" fontSize="xs" fontWeight="medium">
            READ
          </Text> */}
        </VStack>
      </Pressable>
    </HStack>;
  return <Box bg="white" safeArea flex="1" shadow={9}>
      <SwipeListView data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-70} leftOpenValue={130} previewRowKey={"0"} previewOpenValue={-40} previewOpenDelay={3000} onRowDidOpen={onRowDidOpen} />
    </Box>
}
  export default ({navigation}) => {
   
        return (
          <NativeBaseProvider>
                <Example />
       
              <NotificationModal/>
              <View  style={{position:'absolute',right:5,bottom:20,}}>
         <Button onPress={()=>navigation.navigate('createNotification')} bg="#2F8F9D"  width="62" height="62"  style={{borderRadius:100}}  ><Icon  style={{fontSize:37,paddingTop:9,color:"#F9F3EE"}} name="add-alert"/> </Button>
         </View>
     
          </NativeBaseProvider>
        );
    };