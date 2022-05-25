import  React,{useEffect,useState} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,Spinner } from "native-base";
import { useDispatch, useSelector } from 'react-redux';
import {loginFlagHandler,closeloginFlagHandler} from '../../FinalLayout/store-finalLayout'
import {saveToken} from '../../Dashboard/store-dashboard'
import axios from 'axios'
import requestBuilder from '../../requestRebuilder  '


const Example = ({navigation}) => {
const [loader,setLoader]=useState(false)
  const [userObj,setUserObj]=useState({
    email: "",
    password: "" 
  })
  const [isAuthenticated,setIsAuthenticated]=useState(false)

    const finalLayoutStore = useSelector(state => state.finalLayoutStore);
    const dispatch = useDispatch();

    
    


const signInAuthentication = (results)=> {
    if ( results.success==false) {
      dispatch(closeloginFlagHandler())
      setLoader(false)
      setIsAuthenticated(true)

    }
    else{
      dispatch(saveToken(results.data.token.accessToken))
      dispatch(loginFlagHandler())
      navigation.navigate('Dashboard')
      setLoader(false)
    }
  }

  const signInHandler = async () => {

    setLoader(true)
    
      try {
          // dispatch(closeloginFlagHandler())
      await axios(requestBuilder('ciam','/users/login','post',userObj)).then((results=>signInAuthentication(results)))
          } 
      catch (error) {
  
        dispatch(closeloginFlagHandler())
        setLoader(false)
        setIsAuthenticated(true)
      }}
    
    return (
      <NativeBaseProvider>
    {loader && <Spinner mt="250" color="emerald.500" size="lg" accessibilityLabel="Loading posts" />}
    {loader==false &&  <Center  flex={1} px="3" w="100%">
     
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Laser Avenue 
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
   
              <Input onChangeText={value => setUserObj({ ...userObj,
        email: value
      })}  />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input   onChangeText={value => setUserObj({ ...userObj,
        password: value
      })}   type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "#05595B"
            }} onPress={()=>navigation.navigate('forgetPassword')} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            {isAuthenticated && <FormControl.Label ><Text style={{textAlign:"center",color:'red'}}> The Email address or Password you entered is invalid </Text></FormControl.Label>}
            <Button mt="2" style={{backgroundColor:'teal'}} onPress={ ()=> signInHandler() } >
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                I'm a new user.{" "}
              </Text>
              <Link _text={{
              color: "#05595B",
              fontWeight: "medium",
              fontSize: "sm"
            }} onPress={()=>navigation.navigate('SignUp')}>
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>}
      </NativeBaseProvider>
      )
  };

      export default Example