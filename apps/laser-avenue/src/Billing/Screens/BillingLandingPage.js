import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import axios from 'axios';
function BillingLandingPage() {
  const [togle, setTogle] = useState(false);
  const [togle2, setTogle2] = useState(false);
  const [togle3, setTogle3] = useState(false);
  const [fixedOpenAndClose, setFixedOpenAndClose] = useState([]);
  const [openAndClose, setOpenAndClose] = useState([]);
  const [due_date, setDue_date] = useState();
  const [inventoryExpenses, setInventoryExpenses] = useState([]);


  const [establishmentExpenses, setEstablishmentExpenses] = useState([]);
  const [appoinmentsRevenus, setAppoinmentsRevenus] = useState([]);
  const [productRevenuse, setProductRevenuse] = useState([]);
  const [minus, setminus] = useState(false);
  const [date, setDate] = useState(new Date());
  const billingStore = useSelector((state) => state.billing);
  const dispatch = useDispatch();


  useEffect(() => {
    if (togle) {
      getCashRegister();
      setminus(!minus);
    }
  }, [togle, togle2, togle3]);

  useEffect(() => {
    const arr = fixedOpenAndClose.filter(ele => {
      return ele.Date === due_date;
    });
    setOpenAndClose(arr);
    console.log('FIX', fixedOpenAndClose);
    console.log('DaTE', due_date);
  }, [due_date]);


  useEffect(() => {
    const getinventoryExpenses = () => {
      axios
        .get(`http://10.0.2.2:30162/InventoryExpenses/expenses/Date/2022-05-22`)
        .then(response => {
          setInventoryExpenses(response.data.Response);
        })
        .catch(err => {
          console.error(err);
        });

      axios
        .get(
          `http://10.0.2.2:30162/establishmentExpenses/Expenses/Date/2022-05-22`,
        )
        .then(response => {
          setEstablishmentExpenses(response.data.Response);
        })
        .catch(err => {
          console.error(err);
        });

      axios
        .get(
          `http://10.0.2.2:30162/AppointmentsRevenue/Revenue/Date/2022-05-22`,
        )
        .then(response => {
          setAppoinmentsRevenus(response.data.Response);
        })
        .catch(error => {
          console.log(error.message);
        });

      axios
        .get(`http://10.0.2.2:30162/invoiceProduct/Revenues/date/2022-05-22`)
        .then(response => {
          setProductRevenuse(response.data.Response);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    getinventoryExpenses();
  }, []);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1 + '';
    if (month.length === 1) month = '0' + month;
    let day = currentDate.getDate() + '';
    if (day.length === 1) day = '0' + day;
    setDue_date(year + '-' + month + '-' + day);
    setDate(currentDate);
  };


  const showDate = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      maximumDate: new Date(),
    });
  };


  const getCashRegister = async () => {
    try {
      let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
      console.log(due_date, 'due_date');
      const responseOpenAndClose = await axios.get(
        `http://10.0.2.2:30162/cashRegister`,
      );
      setFixedOpenAndClose(responseOpenAndClose.data);
      const arr = responseOpenAndClose.data.filter(ele => {
        return ele.Date === today;
      });
      setOpenAndClose(arr);
    } catch {
      console.log('Error');
    }
  };



  let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
  const removeFilter = () => {
    setOpenAndClose(fixedOpenAndClose);
  };

  return (
    <View style={style.container}>
      <View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            View Cash Opening Closing
          </Text>
          {minus ? (
            <Icon
              size={30}
              name="minus"
              color="#009688"
              onPress={() => {
                setTogle(!togle);
                setTogle2(false);
                setTogle3(false);
                setminus(false);
              }}
            />
          ) : (
            <Icon
              size={30}
              name="plus"
              color="#009688"
              onPress={() => {
                setTogle(!togle);
                setTogle2(false);
                setTogle3(false);
              }}
            />
          )}
        </View>
        {togle ? (
          <ScrollView>
            <View
              style={{
                minheight: 200,
                backgroundColor: '#009688',
                padding: 25,
              }}
            >
              <View
                style={{
                  marginTop: 30,
                  paddingHorizontal: 20,
                }}
              >
                <View>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    <Icon name="money" size={60} color="#fff" />
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#fff',
                      fontSize: 25,
                    }}
                  >
                    Cash Registry
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{ color: '#FFF', fontWeight: 'bold', fontSize: 15 }}
                  >
                    Day is : {due_date}
                  </Text>
                  <Text>
                    <Icon
                      name="calendar"
                      size={25}
                      color="#fff"
                      onPress={showDate}
                    />
                    {/* <Icon
                      style={{
                        color: '#fff',
                      }}
                      name="remove"
                      size={25}
                      onPress={removeFilter}
                    /> */}
                  </Text>
                </View>
              </View>
              <FlatList
                data={openAndClose}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <View>
                      <View style={style.viewCashRegistry}>
                        <View>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              borderRadius: 5,
                              fontSize: 20,
                              textAlign: 'center',
                            }}
                          >
                            Period: {item.Type}
                          </Text>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              borderRadius: 5,
                              textAlign: 'center',
                            }}
                          >
                            Actual: {item.ActualAmount} JD
                          </Text>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              borderRadius: 5,
                              textAlign: 'center',
                            }}
                          >
                            Expected: {item.ExpectedAmount} JD
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.CashRegister_id}
              />
            </View>
          </ScrollView>
        ) : null}
        {/*  ------------------------------------------------------- */}
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            View List of Receivables / Payable
          </Text>
          {togle2 ? (
            <Icon
              size={30}
              name="minus"
              color="#009688"
              onPress={() => {
                setTogle(false);
                setTogle2(!togle2);
                setTogle3(false);
                setminus(false);
              }}
            />
          ) : (
            <Icon
              size={30}
              name="plus"
              color="#009688"
              onPress={() => {
                setTogle(false);
                setTogle2(!togle2);
                setTogle3(false);
              }}
            />
          )}
        </View>
        {togle2 ? (
          <View
            style={{ minheight: 200, backgroundColor: '#009688', padding: 25 }}
          >
            {/* Start Expenses */}
            {/* Start Filter Expenses */}
            {/* <View
              style={{
                marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 15}}>
                Day Is : {due_date}
              </Text>
              <Text>
                <Icon
                  name="calendar"
                  size={25}
                  color="#FFF"
                  onPress={showDate}
                />
              </Text>
            </View> */}
            {/* End Filter Expenses */}
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>
                Expenses
              </Text>
            </View>
            <View
              style={
                {
                  // marginTop: 20,
                  // flexDirection: 'row',
                  // alignItems: 'center',
                  // justifyContent: 'space-between',
                  // marginVertical: 15,
                }
              }
            >
              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFF',
                  justifyContent: 'space-between',
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#FFF',

                    fontWeight: 'bold',
                    borderRadius: 5,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  Provider
                  {'\n'}
                  290 JD
                </Text>
                <Icon
                  size={23}
                  name="plus"
                  color="#009688"
                  onPress={() => {
                    setTogle(!togle);
                    setTogle2(false);
                    setTogle3(false);
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFF',
                  justifyContent: 'space-between',
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#FFF',

                    fontWeight: 'bold',
                    borderRadius: 5,

                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  Inventory
                  {'\n'}
                  {inventoryExpenses &&
                    inventoryExpenses.map((ele) => {
                      return (
                        <View>
                          <Text
                            style={{
                              fontWeight: 'bold',
                            }}
                          >
                            {' '}
                            {ele.invoice_paid_amount} JD
                          </Text>
                        </View>
                      );
                    })}
                </Text>

                <Icon
                  size={23}
                  name="plus"
                  color="#009688"
                  onPress={() => {
                    setTogle(!togle);
                    setTogle2(false);
                    setTogle3(false);
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFF',
                  justifyContent: 'space-between',
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#FFF',

                    fontWeight: 'bold',
                    borderRadius: 5,

                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  Facilities
                  {'\n'}
                  {establishmentExpenses &&
                    establishmentExpenses.map((ele) => {
                      return (
                        <View>
                          <Text style={{ fontWeight: 'bold' }}>
                            {ele.paid_amount} JD
                          </Text>
                        </View>
                      );
                    })}
                </Text>

                <Icon
                  size={23}
                  name="plus"
                  color="#009688"
                  onPress={() => {
                    setTogle(!togle);
                    setTogle2(false);
                    setTogle3(false);
                  }}
                />
              </View>
            </View>
            {/* End Expenses */}

            {/* Start Revenue  */}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#fff',
                marginTop: 10,
              }}
            >
              Revenue
            </Text>
            <View>
              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFF',
                  justifyContent: 'space-between',
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#FFF',

                    borderRadius: 5,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  Appointment
                  {'\n'}
                  {appoinmentsRevenus &&
                    appoinmentsRevenus.map((ele) => {
                      return (
                        <View>
                          <Text style={{ fontWeight: 'bold' }}>
                            {ele.Paid_total} JD
                          </Text>
                        </View>
                      );
                    })}
                </Text>

                <Icon
                  size={23}
                  name="plus"
                  color="#009688"
                  onPress={() => {
                    setTogle(!togle);
                    setTogle2(false);
                    setTogle3(false);
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFF',
                  justifyContent: 'space-between',
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#FFF',
                    borderRadius: 5,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  Products
                  {'\n'}
                  {productRevenuse &&
                    productRevenuse.map((ele) => {
                      return (
                        <View>
                          <Text style={{ fontWeight: 'bold' }}>
                            {ele.paid_total} JD
                          </Text>
                        </View>
                      );
                    })}
                </Text>

                <Icon
                  size={23}
                  name="plus"
                  color="#009688"
                  onPress={() => {
                    setTogle(!togle);
                    setTogle2(false);
                    setTogle3(false);
                  }}
                />
              </View>

              <Text></Text>
            </View>
            {/* End Expenses */}
          </View>
        ) : null}
        {/*  ------------------------------------------------------- */}
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            View List of Service Profit Breakdown
          </Text>
          {togle3 ? (
            <Icon
              size={30}
              name="minus"
              color="#009688"
              onPress={() => {
                setTogle(false);
                setTogle2(false);
                setTogle3(!togle3);
                setminus(false);
              }}
            />
          ) : (
            <Icon
              size={30}
              name="plus"
              color="#009688"
              onPress={() => {
                setTogle(false);
                setTogle2(false);
                setTogle3(!togle3);
              }}
            />
          )}
          {/* <Icon
            size={30}
            name="plus"
            color="#009688"
            onPress={() => {
              setTogle(false);
              setTogle2(false);
              setTogle3(!togle3);
            }}
          /> */}
        </View>
        {togle3 ? (
          <View style={{ height: 200, backgroundColor: '#009688' }}></View>
        ) : null}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewCashRegistry: {
    marginTop: 15,
    backgroundColor: '#D8F0E7',
    padding: 15,
    width: '100%',
    borderRadius: 5,
  },
  filter: {
    color: 'green',
  },
});

export default BillingLandingPage;
