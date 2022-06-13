import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';

export default function CommentReplay({
  replay,
  comments,
  setComments,
  taskCreator,
  userId,
}) {
  const [updateText, setUpdateText] = useState(false);
  const [str, setStr] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  useEffect(() => {
    setStr(replay.comment);
  }, [replay]);

  const handleInput = (text) => {
    setStr(text);
  };

  const openDialogDeleteReplay = () => {
    setModalVisible(false);
    Alert.alert('Delete this replay', `Do you want to delete this replay ?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Yes', onPress: deleteReplay },
    ]);
  };

  /* ---------------------------------- delete replay --------------------------- */

  const deleteReplay = async () => {
    try {
      // const response = await axios.delete(
      //   `http://10.0.2.2:30122/comments/deleteReplay/${replay.replay_id}`,
      // );
      const response = await axios({
        method: 'POST',
        url: 'https://api.development.agentsoncloud.com/external/public/',
        headers: {
          'requsted-service': 'communities',
          'requsted-path': '/comments/deleteReplay/:id',
          'requsted-method': 'delete',
        },
        data: {
          id: replay.replay_id,
        },
      });
      if (response.status) {
        const arr = comments.map((ele) => {
          if (ele.comment.comment_id === replay.comment_id) {
            console.log('iam here');
            return {
              ...ele,
              replays: ele.replays.filter((el) => {
                return el.replay_id !== replay.replay_id;
              }),
            };
          } else {
            return ele;
          }
        });
        setComments(arr);
      }
    } catch (error) {}
  };

  /* ---------------------------------- update replay --------------------------- */

  const updateReplay = async () => {
    try {
      // const res = await axios.put(
      //   `http://10.0.2.2:30122/comments/updateReplay/${replay.replay_id}`,
      //   { newComment: str }
      // );
      const res = await axios({
        method: 'POST',
        url: 'https://api.development.agentsoncloud.com/external/public/',
        headers: {
          'requsted-service': 'communities',
          'requsted-path': '/comments/updateReplay/:id',
          'requsted-method': 'put',
        },
        data: {
          id: replay.replay_id,
          newComment: str,
        },
      });
      if (res.status) {
        setEditModalVisible(false);
        const arr = comments.map((ele) => {
          if (ele.comment.comment_id === replay.comment_id) {
            return {
              ...ele,
              replays: ele.replays.map((item) => {
                if (item.replay_id === replay.replay_id) {
                  console.log('here');
                  console.log(item);
                  return { ...item, comment: str };
                } else {
                  return item;
                }
              }),
            };
          } else {
            return ele;
          }
        });
        setUpdateText(false);
        setComments(arr);
      }
    } catch (error) {}
  };

  const showModel = () => {
    try {
      if (userId === replay.user_id) setModalVisible(!modalVisible);
    } catch (error) {}
  };

  const editInModal = () => {
    setModalVisible(false);
    setEditModalVisible(true);
  };

  /* ----------------------------------------------------------------------------------------------- */

  return (
    <>
      <Pressable onLongPress={showModel} style={style.comment}>
        <View
          style={{
            width: '22%',
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25, marginTop: 5 }}
            source={{
              uri: `https://randomuser.me/api/portraits/men/10.jpg`,
            }}
          />
        </View>
        <View style={{ width: '70%' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={style.userName}> {replay.user_name} </Text>
            <View style={{ flexDirection: 'row' }}>
              {userId === replay.user_id ? (
                <>
                  <Icon
                    name="ellipsis-v"
                    style={{ marginRight: 15 }}
                    size={18}
                    color="#009688"
                    onPress={showModel}
                  />
                </>
              ) : null}
            </View>
          </View>
          {!updateText ? (
            <Text style={style.text}> {replay.comment} </Text>
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: '70%' }}>
                <TextInput
                  onChangeText={handleInput}
                  value={str}
                  placeholder="new comment"
                />
              </View>
              <Icon
                name="check"
                size={20}
                style={{ color: 'blue' }}
                onPress={updateReplay}
              />
            </View>
          )}
        </View>
      </Pressable>
      {/* ------------------------- modal ------------------------------------ */}
      {/* ----------------------------------------------------------------------- */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={style.centeredView2}>
          <View style={style.modalViewStatus}>
            <View style={style.button_con}>
              <Pressable
                style={[
                  style.button,
                  { backgroundColor: '#009688', borderColor: '#009688' },
                ]}
                onPress={editInModal}
              >
                <Text style={style.textStyle}>Edit</Text>
                <Icon
                  name="pencil"
                  style={{ marginRight: 5 }}
                  size={18}
                  color="white"
                />
              </Pressable>
            </View>
            <View style={style.button_con}>
              <Pressable
                style={[
                  style.button,
                  { backgroundColor: '#ff5252', borderColor: '#ff5252' },
                ]}
                onPress={openDialogDeleteReplay}
              >
                <Text style={style.textStyle}>Delete</Text>
                <Icon
                  name="trash-o"
                  style={{ marginRight: 5 }}
                  size={18}
                  color="white"
                />
              </Pressable>
            </View>
            <View style={style.button_con}>
              <Pressable
                style={[
                  style.button,
                  { backgroundColor: '#2A416A', borderColor: '#2A416A' },
                ]}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={style.textStyle}>Close</Text>
                <Icon
                  name="close"
                  style={{ marginRight: 5 }}
                  size={18}
                  color="white"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
      >
        <View style={style.centeredViewEdit}>
          <View style={style.modalViewStatusEdit}>
            <View style={{ width: '100%', marginTop: 25 }}>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#F5F4F4', width: '85%' }}>
                  <TextInput
                    onChangeText={handleInput}
                    value={str}
                    placeholder="new comment"
                    style={{ width: '100%' }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                paddingHorizontal: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 25,
              }}
            >
              <Pressable
                onPress={() => {
                  setEditModalVisible(false);
                }}
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#2A416A',
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingRight: 20,
                  paddingLeft: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#2A416A',
                }}
              >
                <Text style={{ color: 'white', fontSize: 15, marginRight: 5 }}>
                  Close
                </Text>
              </Pressable>
              <Pressable
                onPress={updateReplay}
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#009688',
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingRight: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#009688',
                }}
              >
                <Text style={{ color: 'white', fontSize: 15, marginRight: 5 }}>
                  Update
                </Text>
                <Icon name="check" size={20} style={{ color: 'white' }} />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const style = StyleSheet.create({
  comment: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    // alignItems: 'center',
    minHeight: 90,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  userName: {
    width: '80%',
    fontSize: 14,
    color: 'black',
  },
  text: {
    marginTop: 10,
    color: 'black',
    fontSize: 12,
  },

  centeredView2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalViewStatus: {
    width: '100%',
    height: 280,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  centeredViewEdit: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  modalViewStatusEdit: {
    width: '100%',
    height: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
    alignItems: 'flex-start',
    marginTop:-10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button_con: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginRight: 10,
  },
});
