import React,{useState,useEffect} from "react";
import { Button, Actionsheet, useDisclose, Box, Text, Center, NativeBaseProvider } from "native-base";
import { Path } from "react-native-svg";
import { useDispatch, useSelector } from 'react-redux';
import {onCloseUsers,saveSelectedUsers} from '../store-notification'
import Icon from 'react-native-vector-icons/Ionicons';
import {  Heading, VStack, FormControl, Input,Select, CheckIcon, WarningOutlineIcon,TextArea, IconButton, Checkbox, HStack  } from "native-base";
import {View} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
DropDownPicker.setMode('BADGE');


function Example() {

  
  const storeNotification = useSelector(state => state.notification);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selctedUsers, setSelctedUsers] = useState([]);
  const [users, setUsers] = useState(storeNotification.users);
    useEffect(() => {
      setUsers(storeNotification.users)
    }, [])

    useEffect(() => {
      dispatch(saveSelectedUsers(selctedUsers))

    }, [selctedUsers])
    


  return <Center >
    <View >
      <Actionsheet  isOpen={storeNotification.modalFlagUsers} onClose={()=>(dispatch(onCloseUsers()))} size="full">
        <Actionsheet.Content  style={{height:325}}>
          
        <DropDownPicker

                    open={open}
                    value={selctedUsers}
                    items={users}
                    setOpen={setOpen}
                    setValue={setSelctedUsers}
                    setItems={setUsers}
                    multiple={true}
                    min={0}
                    schema={{
                      label: 'name',
                      value: 'profileId',
               
                    }}
                    placeholder="Select Users"
                    searchable={true}
                    searchPlaceholder="Search by user name"
                    badgeStyle={{
                      padding: 5,
                      shadowColor: '#EEEE',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                  
                  
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                    badgeColors={['teal']}
                    badgeDotColors={['black']}
                    badgeTextStyle={{
                      fontStyle: 'italic',
                      color: 'white',
                    }}
                  />
        </Actionsheet.Content>
      </Actionsheet>
      </View>
    </Center>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center >
                <Example  />
            </Center>
          </NativeBaseProvider>
        );
    };
    