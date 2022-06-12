import React, { useState, useCallback, useRef,useEffect } from 'react';
import { Button,HStack,StatusBar,Box,Heading,Avatar,Center,VStack,Menu} from "native-base";
import LottieView from 'lottie-react-native';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import { Text, View,Pressable,ImageBackground,Image} from 'react-native';
import axios from 'axios'
import requestBuilder from "../../requestRebuilder  "
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getTodayTasks } from '../../Tasks/store-tasks';
import {changeShowMenuFlag77} from '../store-dashboard'
// import sdas from '../../assests/vecteezy_man-marks-work-plan_4689075.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';




 function Tasks({navigation}){
  const dashboardStore = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
const [carouselItems, setCarouselItems] = useState([]);
const [ActiveSlide, setActiveSlide] = useState(0);
const [taskItem, setTaskItem] = useState({});
const [toodayDate, setTodayDate] = useState();
const [deleteFlag, setDeleteFlag] = useState(false);
const [priority, setPriority] = useState(['',"#FF5D5D","#FF8D29","#8CC0DE"]);
// useEffect(() => {
//   getUsers()
// }, [])

useFocusEffect(
  React.useCallback(() => {
    getUsers()

  }, [deleteFlag])
);
function menueHandler(item) {
  console.log('ddddddddddddddd',item);
  dispatch(changeShowMenuFlag77())
  setTaskItem(item)
}

async function deleteHadnler() {
  try {
 
    await axios(requestBuilder('tasks','/tasks/deleteTask/:id','delete ',{"id":taskItem.task_id}))
    setDeleteFlag(!deleteFlag)
    dispatch(changeShowMenuFlag77())
  } catch (error) {
    console.log('errorerror',error);
  }
 
}
async function ClaimHandler() {
  try {
 console.log('ttttttttttttttttttttttttttt');
    await axios(requestBuilder('tasks','/tasks/task/claimme/:id ','put', {id:taskItem.task_id, userId:dashboardStore.userToken.userId})).then(results=>console.log('99999999999',results.data))
    console.log('ttttttttttttttttttttttttttt');
    setDeleteFlag(!deleteFlag)
    dispatch(changeShowMenuFlag77())
  } catch (error) {
    console.log('errorerror',error);
  }
  
}
async function StatusHandler(params) {
  
}



    const getUsers = async () => {
      try {
     let monthes=['01','02','03','04','05','06','07','08','09','10','11','12']
     let todayDate=new Date()
     let splitArr=todayDate.toString().split(' ')[2]
     let ddd=`${todayDate.getFullYear()}-${monthes[todayDate.getMonth()]}-${splitArr}`


        await axios(requestBuilder('tasks','/tasks/assignedToMe/:id','get',{"id":dashboardStore.userToken.userId})).then((results)=>{
          console.log('resultsresultsdsfdsfresults',results.data);
          let dayTasks=[]
          for (let i = 0; i < results.data.length; i++) {
            console.log('insideee');
           if (results.data[i].due_date===ddd) {
            console.log('333333');
            dayTasks.push(results.data[i])
           } }
          console.log('dfsfsdfsdf',dayTasks);
          setCarouselItems(dayTasks)

        })
        
      
      
        
      } catch (error) {
        console.log((error.message));
      }
   
      };


const goTask = id => {
  console.log(id);
  navigation.navigate('TaskFullView', {
    task_id: id,
    type:'assigned',
  });
};
function SetReminder() {
  setTimeout(() => {
    
  }, timeout);}
  
    const ref = useRef(null);
    const renderItem = useCallback(({ item, index }) => (
      
   
      <View borderRadius={20} style={{ borderRadius:20,backgroundColor:'#DEEDF0'}} shadow={9}>
    
     
 <Menu trigger={triggerProps => {  return <Pressable onLongPress={()=>{menueHandler(item)} } delayLongPress={1000} {...triggerProps} onPress={()=>goTask(item.task_id)}   >
    {({
        isHovered,
        isFocused,
        isPressed
      }) => {
      return  <HStack  style={{ borderRightWidth:40 ,borderRightColor:priority[item.priority], borderBottomColor:'#06919D' , borderTopColor:'#06919D', borderLeftColor:'#06919D',borderRadius:20, height: 95, padding: 30 }} >
        <VStack space={1}>
        <Text style={{ fontSize: 20,color:'#06919D' }}>{item.subject}</Text>
        <Text style={{fontSize: 12, color:'#06919D' }}>Due Time: {item.due_time} {" "}<Icon name="clock-o"/> </Text>
        </VStack>
        <Image
        style={{position:'absolute',top:0,right:20,  width: 130, height: 92}}
        source={require('../../assests/vecteezy_man-marks-work-plan_4689075-removebg-preview.png')}
        /> 
        </HStack>}} 
        </Pressable>;
    }}>
        </Menu>
        </View>
              
           
        
      ), []);  

    return(
        <View>
         {/* <Text>ddddddddddd{taskItem.id}</Text>  */}
     <Center>
     
     <View style={{   borderColor:'black',
   borderWidth:0.5, backgroundColor:'#DEEDF0' ,borderRadius:20, height: 95,width:380, padding: 30,marginBottom:15,marginTop:50,marginRight:10,paddingLeft:10 }} >
     <Image  style={{height:90,width:180,position:'absolute',right:0,backgroundSize:'cover'}} source={require('../../assests/2661180-removebg-preview.png')} />
 {/* <Center> */}
            <Text  style={{ fontSize: 20,color:'#06919D',marginLeft:30 }}>Your Today Tasks</Text>
            {/* </Center> */}
         
          {/* <Image
          style={{position:'absolute',top:0,right:20,  width: 130, height: 92}}
          source={require('../../assestdfs/vecteezy_man-marks-work-plan_4689075-removebg-preview.png')}
        /> */}
   
          </View>
          
          </Center>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center"  }}>
        <Carousel
          loop={true}
          firstItem={1} 
          ref={ref}
          data={carouselItems}
          sliderWidth={400}
          itemWidth={380}
  
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveSlide(index)  }
          />
        
      </View>
      <Pagination  dotsLength={carouselItems.length}
              activeDotIndex={ActiveSlide}
              containerStyle={{ backgroundColor: 'transparent' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#68A7AD'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}/>
      <HStack space={3} justifyContent="center" >
      </HStack >
      {dashboardStore.ShowMenuFlag77 && <View style={{position:"absolute",top:220,left:"40%"}}>
            <View style={{backgroundColor:'#FAFAF6',height:108}}>
                <Box h="9" w="150" alignItems="flex-start">
           
                
                  <Button onPress={()=>ClaimHandler()}  style={{borderWidth:.5,borderColor:'white'}} h="10" w="100%">Claim </Button>
                  <Button onPress={()=>deleteHadnler()} style={{borderWidth:.5,borderColor:'white'}} h="10" w="100%">Delete</Button>
                  <Button onPress={()=>SetReminder()} style={{borderWidth:.5,borderColor:'white'}} h="10" w="100%">Set Reminder</Button>
                
     
              </Box>
              </View>
                </View>}
  
   
      </View>
    )

}
export default Tasks
