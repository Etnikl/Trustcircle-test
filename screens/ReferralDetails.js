import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
  } from "react-native";
  import React from "react";
  import COLORS from "../constants/colors";
  import TopNav from "../components/TopNav";
  import ContainerLoad from "../components/Loadings/ContainerLoad";
  import BottomNav from "../components/BottomNav";
  import { Button, ButtonLicense, ButtonPrimary, ButtonSecondary, NavButton, NavButtonPri, NavButtonRef } from "../components/Button";
  
  const ReferralDetails = ({ navigation, route }) => {
  

    const { itemDetails } = route.params;

    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    
    const getStatusStyle = (status) => {
        switch (status.toLowerCase()) {
          case 'active':
            return styles.active;
          case 'pending':
            return styles.pending;
          case 'canceled':
            return styles.canceled;
          default:
            return {};
        }
      };

    return (
  
  <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TopNav
          iconLeft="arrow-left"
          title="Referral Details"
          iconRight={null}
          onPressLeft={() => {
            navigation.goBack();
          }}
          onPressRight={() => {
            {
              null;
            }
          }}
        />
        <SafeAreaView
          style={{ flex: 1, height: "100%", backgroundColor: COLORS.warmew }}
        >
          <ContainerLoad visible={false} />
          {itemDetails.type.toLowerCase() === 'sent' && (
            <View>
              {itemDetails.sign.toLowerCase() === 'yes' && (
              <View 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: screenHeight - 200,
                  paddingTop: 25,
                  paddingHorizontal: 25
                }} > 
                  <View>
                  <View style={styles.containerYes}>
                      <View style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginBottom: 15 ,
                      }}>
                      <Text style={styles.title}>{itemDetails.headline}</Text>
                      <View style={{flexDirection: 'row', justifyContent:'space-between', width: '100%', alignItems: 'flex-end'}}>
                          <View style={{flexDirection: 'row'}}>
                              <Text>State: {itemDetails.state} |</Text>
                              <Text> Status: <Text style={[styles.Status, getStatusStyle(itemDetails.status)]}>{itemDetails.status}</Text> |</Text>
                              <Text> {itemDetails.type}</Text>
                          </View>
                              <Text style={{fontSize: 8}} >{itemDetails.time}</Text>
                          </View>    
                      </View>
                      <ScrollView>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Referrer</Text>
                              <Text style={styles.subTitle} >{itemDetails.referrer}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Referral Type</Text>
                              <Text style={styles.subTitle} >{itemDetails.referalType}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Name</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientFirstName + " " + itemDetails.clientLastName}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Phone Number</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientPhone}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Email Address</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientEmailAdress}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Property Description</Text>
                              <Text style={styles.subTitle} >{itemDetails.description}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Zoning Requirement</Text>
                              <Text style={styles.subTitle} >{itemDetails.zoning}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Location</Text>
                              <Text style={styles.subTitle} >{itemDetails.location}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Commission</Text>
                              <Text style={styles.subTitle} >{itemDetails.fee}</Text>
                          </View>
                      </ScrollView>
                  </View>
                </View>
                <View style={{marginBottom: 30}}> 
                  <Button title="View Status" />
                </View>
              </View>
            )}
            {itemDetails.sign.toLowerCase() === 'no' && (
              <View 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: screenHeight - 200,
                  paddingTop: 25,
                  paddingHorizontal: 25
                }} > 
                  <View>
                  <View style={styles.container}>
                      <View style={{
                          display: 'flex',
                          marginBottom: 15 ,
                      }}>
                      <Text style={styles.title}>{itemDetails.headline}</Text>
                      <View style={{flexDirection: 'row', justifyContent:'space-between', width: '100%', alignItems: 'flex-end'}}>
                          <View style={{flexDirection: 'row'}}>
                              <Text>State: {itemDetails.state} |</Text>
                              <Text> Status: <Text style={[styles.Status, getStatusStyle(itemDetails.status)]}>{itemDetails.status}</Text> |</Text>
                              <Text> {itemDetails.type}</Text>
                          </View>
                              <Text style={{fontSize: 8}} >{itemDetails.time}</Text>
                          </View>    
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Referrer</Text>
                          <Text style={styles.subTitle} >{itemDetails.referrer}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Referral Type</Text>
                          <Text style={styles.subTitle} >{itemDetails.referalType}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Property Description</Text>
                          <Text style={styles.subTitle} >{itemDetails.description}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Zoning Requirement</Text>
                          <Text style={styles.subTitle} >{itemDetails.zoning}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Location</Text>
                          <Text style={styles.subTitle} >{itemDetails.location}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Commission</Text>
                          <Text style={styles.subTitle} >{itemDetails.fee}</Text>
                      </View>
                  </View>
                  <View style={{marginTop: 10}}>
                      <Text style={{fontSize: 12, textAlign: 'center', color: COLORS.darkgrey}}>Client information will not be shared until Referral is accepted!</Text>
                  </View>
                </View>
                <View style={{marginBottom: 30}}> 
                  <ButtonLicense title="Cancel Referral" />
                  <Button title="Request Update" />
                </View>
              </View>
            )}
            {itemDetails.sign.toLowerCase() === 'done' && (
              <View 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: screenHeight - 200,
                  paddingTop: 25,
                  paddingHorizontal: 25
                }} > 
                  <View>
                  <View style={styles.containerYes}>
                      <View style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginBottom: 15 ,
                      }}>
                      <Text style={styles.title}>{itemDetails.headline}</Text>
                      <View style={{flexDirection: 'row', justifyContent:'space-between', width: '100%', alignItems: 'flex-end'}}>
                          <View style={{flexDirection: 'row'}}>
                              <Text>State: {itemDetails.state} |</Text>
                              <Text> Status: <Text style={[styles.Status, getStatusStyle(itemDetails.status)]}>{itemDetails.status}</Text> |</Text>
                              <Text> {itemDetails.type}</Text>
                          </View>
                              <Text style={{fontSize: 8}} >{itemDetails.time}</Text>
                          </View>    
                      </View>
                      <ScrollView>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Referrer</Text>
                              <Text style={styles.subTitle} >{itemDetails.referrer}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Referral Type</Text>
                              <Text style={styles.subTitle} >{itemDetails.referalType}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Name</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientFirstName + " " + itemDetails.clientLastName}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Phone Number</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientPhone}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Email Address</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientEmailAdress}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Property Description</Text>
                              <Text style={styles.subTitle} >{itemDetails.description}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Zoning Requirement</Text>
                              <Text style={styles.subTitle} >{itemDetails.zoning}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Location</Text>
                              <Text style={styles.subTitle} >{itemDetails.location}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Commission</Text>
                              <Text style={styles.subTitle} >{itemDetails.fee}</Text>
                          </View>
                      </ScrollView>
                  </View>
                </View>
                <View style={{marginBottom: 30}}> 
                  <Button title="View Status" />
                </View>
              </View>
            )}
            </View>
          )}
          {itemDetails.type.toLowerCase() === 'recived' && (
            <View>
              {itemDetails.sign.toLowerCase() === 'yes' && (
              <View 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: screenHeight - 200,
                  paddingTop: 25,
                  paddingHorizontal: 25
                }} > 
                  <View>
                  <View style={styles.containerYes}>
                      <View style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginBottom: 15 ,
                      }}>
                      <Text style={styles.title}>{itemDetails.headline}</Text>
                      <View style={{flexDirection: 'row', justifyContent:'space-between', width: '100%', alignItems: 'flex-end'}}>
                          <View style={{flexDirection: 'row'}}>
                              <Text>State: {itemDetails.state} |</Text>
                              <Text> Status: <Text style={[styles.Status, getStatusStyle(itemDetails.status)]}>{itemDetails.status}</Text> |</Text>
                              <Text> {itemDetails.type}</Text>
                          </View>
                              <Text style={{fontSize: 8}} >{itemDetails.time}</Text>
                          </View>    
                      </View>
                      <ScrollView>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Referrer</Text>
                              <Text style={styles.subTitle} >{itemDetails.referrer}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Referral Type</Text>
                              <Text style={styles.subTitle} >{itemDetails.referalType}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Name</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientFirstName + " " + itemDetails.clientLastName}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Phone Number</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientPhone}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Email Address</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientEmailAdress}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Property Description</Text>
                              <Text style={styles.subTitle} >{itemDetails.description}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Zoning Requirement</Text>
                              <Text style={styles.subTitle} >{itemDetails.zoning}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Location</Text>
                              <Text style={styles.subTitle} >{itemDetails.location}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Commission</Text>
                              <Text style={styles.subTitle} >{itemDetails.fee}</Text>
                          </View>
                      </ScrollView>
                  </View>
                </View>
                <View style={{marginBottom: 30}}> 
                  <Button title="Update Status" />
                </View>
              </View>
            )}
            {itemDetails.sign.toLowerCase() === 'no' && (
              <View 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: screenHeight - 200,
                  paddingTop: 25,
                  paddingHorizontal: 25
                }} > 
                  <View>
                  <View style={styles.container}>
                      <View style={{
                          display: 'flex',
                          marginBottom: 15 ,
                      }}>
                      <Text style={styles.title}>{itemDetails.headline}</Text>
                      <View style={{flexDirection: 'row', justifyContent:'space-between', width: '100%', alignItems: 'flex-end'}}>
                          <View style={{flexDirection: 'row'}}>
                              <Text>State: {itemDetails.state} |</Text>
                              <Text> Status: <Text style={[styles.Status, getStatusStyle(itemDetails.status)]}>{itemDetails.status}</Text> |</Text>
                              <Text> {itemDetails.type}</Text>
                          </View>
                              <Text style={{fontSize: 8}} >{itemDetails.time}</Text>
                          </View>    
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Referrer</Text>
                          <Text style={styles.subTitle} >{itemDetails.referrer}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Referral Type</Text>
                          <Text style={styles.subTitle} >{itemDetails.referalType}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Property Description</Text>
                          <Text style={styles.subTitle} >{itemDetails.description}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Zoning Requirement</Text>
                          <Text style={styles.subTitle} >{itemDetails.zoning}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Location</Text>
                          <Text style={styles.subTitle} >{itemDetails.location}</Text>
                      </View>
                      <View style={styles.itemDisplay}>
                          <Text style={styles.label}>Commission</Text>
                          <Text style={styles.subTitle} >{itemDetails.fee}</Text>
                      </View>
                  </View>
                  <View style={{marginTop: 10}}>
                      <Text style={{fontSize: 12, textAlign: 'center', color: COLORS.darkgrey}}>Client information will not be shared until Referral is accepted!</Text>
                  </View>
                </View>
                <View style={{marginBottom: 30}}> 
                  <ButtonLicense title="Reject" />
                  <Button title="Approve Referral" />
                </View>
              </View>
            )}
            {itemDetails.sign.toLowerCase() === 'done' && (
              <View 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: screenHeight - 200,
                  paddingTop: 25,
                  paddingHorizontal: 25
                }} > 
                  <View>
                  <View style={styles.containerYes}>
                      <View style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginBottom: 15 ,
                      }}>
                      <Text style={styles.title}>{itemDetails.headline}</Text>
                      <View style={{flexDirection: 'row', justifyContent:'space-between', width: '100%', alignItems: 'flex-end'}}>
                          <View style={{flexDirection: 'row'}}>
                              <Text>State: {itemDetails.state} |</Text>
                              <Text> Status: <Text style={[styles.Status, getStatusStyle(itemDetails.status)]}>{itemDetails.status}</Text> |</Text>
                              <Text> {itemDetails.type}</Text>
                          </View>
                              <Text style={{fontSize: 8}} >{itemDetails.time}</Text>
                          </View>    
                      </View>
                      <ScrollView>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Referrer</Text>
                              <Text style={styles.subTitle} >{itemDetails.referrer}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Referral Type</Text>
                              <Text style={styles.subTitle} >{itemDetails.referalType}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Name</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientFirstName + " " + itemDetails.clientLastName}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Phone Number</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientPhone}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Clients Email Address</Text>
                              <Text style={styles.subTitle} >{itemDetails.clientEmailAdress}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Property Description</Text>
                              <Text style={styles.subTitle} >{itemDetails.description}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Zoning Requirement</Text>
                              <Text style={styles.subTitle} >{itemDetails.zoning}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Location</Text>
                              <Text style={styles.subTitle} >{itemDetails.location}</Text>
                          </View>
                          <View style={styles.itemDisplay}>
                              <Text style={styles.label}>Commission</Text>
                              <Text style={styles.subTitle} >{itemDetails.fee}</Text>
                          </View>
                      </ScrollView>
                  </View>
                </View>
                <View style={{marginBottom: 30}}> 
                  <Button title="View Status" />
                </View>
              </View>
            )}
            </View>
          )}
        </SafeAreaView>
        <BottomNav />
      </KeyboardAvoidingView>
    );
  };

  const styles = StyleSheet.create({
    containerYes: {
      height: '90%',
      overflow: "hidden",
      padding: 15,
      borderWidth: 1,
      borderColor: COLORS.lightgrey,
      borderRadius: 26,
    },
    container: {
        padding: 15,
        borderWidth: 1,
        borderColor: COLORS.lightgrey,
        borderRadius: 26,
    },
    title: {
      fontSize: 18,
      color: COLORS.primary,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    subTitle: {
        fontSize: 14, 
        fontWeight: 'bold',
        color: COLORS.otherblue
    },
    label: {
        fontSize: 10, 
        fontWeight: '600', 
        color: COLORS.secondary
    },
    itemDisplay: {
        flexDirection: 'column',
        paddingHorizontal: 19,
        paddingVertical: 10,
        backgroundColor: COLORS.supToggle,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: COLORS.lightgrey,
        marginBottom: 6,
    },
    Status: {
        color: COLORS.primary,
      },
      active: {
        color: '#62AD0A',
      },
      pending: {
        color: '#FFAA00',
      },
      canceled: {
        color: '#FF0000',
      },
  });
  
  
  export default ReferralDetails;
  