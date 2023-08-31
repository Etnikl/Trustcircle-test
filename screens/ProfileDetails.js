import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import React from "react";
  import COLORS from "../constants/colors";
  import TopNav from "../components/TopNav";
  import ContainerLoad from "../components/Loadings/ContainerLoad";
  import BottomNav from "../components/BottomNav";
  import { Button, ButtonLicense, ButtonPrimary, ButtonSecondary, NavButton, NavButtonPri, NavButtonRef } from "../components/Button";
  import usersData from '../assets/JSON/users.json';
  import { useSelector } from 'react-redux';
import { ShowDetails, ShowMoreDetails } from "../components/ShowDetails";

  const ProfileDetails = ({ navigation }) => {

    const userDetails = useSelector((state) => state.user);

    const storedUser = usersData.users.find(
      (user) => user.id === userDetails.id
    );

    const name = storedUser.firstName + " " + storedUser.lastName;
      
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
          title="Profile Details"
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
                  <View>
                    <View style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: 25,
                          marginBottom: 10,
                          height: 100,
                          backgroundColor: 'red '
                      }}>
                        <View>
                          <ImageBackground 
                            style={{ height: 90, width: 90, marginLeft: 10 }}
                            source={require("../assets/images/LogoTC.png")}
                          />
                        </View>
                        <View style={{justifyContent: 'space-evenly', marginLeft: 20}}>
                          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.secondary}} >{name}</Text>
                          <Text style={{fontWeight: '500'}}>ID Verified</Text>
                          <Text style={{fontWeight: '500'}}>License Verified</Text>
                        </View>
                    </View>
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{
                        paddingBottom: 270,
                      }}
                    >
                        <View style={{paddingVertical: 10}} >
                          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                            <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.secondary, marginLeft: 10}} >About Me</Text>
                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate("UpdateBio");
                              }}
                            >
                              <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                                  <Text style={{fontSize: 15}}>Edit</Text>
                                  <ImageBackground
                                      style={{ height: 14, width: 8, marginLeft: 10 }}
                                      source={require("../assets/images/IconArrowGo.png")}
                                  />
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View>
                            <ShowDetails label="BIO" value={storedUser.bio} type={3}/>
                          </View>
                        </View>
                        <View style={{paddingVertical: 10}} >
                          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                            <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.secondary, marginLeft: 10}} >Personal Information</Text>
                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate("UpdatePersonalInformation");
                              }}
                            >
                              <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                                  <Text style={{fontSize: 15}}>Edit</Text>
                                  <ImageBackground
                                      style={{ height: 14, width: 8, marginLeft: 10 }}
                                      source={require("../assets/images/IconArrowGo.png")}
                                  />
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View>
                            <ShowDetails label="First Name" value={storedUser.firstName} type={2}/>
                            <ShowDetails label="Last Name" value={storedUser.lastName} type={2}/>
                            <ShowDetails label="Email Address" value={storedUser.email} type={2}/>
                            <ShowDetails label="Phone Number" value={storedUser.phoneNumber} type={2}/>
                            <ShowDetails label="Occupation" value={storedUser.occupation} type={2}/>
                            <ShowMoreDetails label="Occupation Categories" />
                          </View>
                        </View>
                        <View style={{paddingVertical: 10}} >
                          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                            <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.secondary, marginLeft: 10}} >Security</Text>
                            <TouchableOpacity>
                              <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                                  <Text style={{fontSize: 15}}>Edit</Text>
                                  <ImageBackground
                                      style={{ height: 14, width: 8, marginLeft: 10 }}
                                      source={require("../assets/images/IconArrowGo.png")}
                                  />
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View>
                            <ShowMoreDetails label="Password" onPress={() => navigation.navigate("ChangePassword")} />
                          </View>
                        </View>
                        <View style={{paddingVertical: 10}} >
                          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                            <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.secondary, marginLeft: 10}} >Company Information</Text>
                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate("UpdateCompanyInfo");
                              }}
                            >
                              <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                                  <Text style={{fontSize: 15}}>Edit</Text>
                                  <ImageBackground
                                      style={{ height: 14, width: 8, marginLeft: 10 }}
                                      source={require("../assets/images/IconArrowGo.png")}
                                  />
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View>
                            <ShowDetails label="Company Name" value={storedUser.companyName} type={2}/>
                            <ShowDetails label="Broker Name" value={storedUser.brokerName} type={2}/>
                            <ShowDetails label="State licensed in" value={storedUser.state} type={2}/>
                            <ShowDetails label="Business Area" value={storedUser.businessArea} type={2}/>
                          </View>
                        </View>
                    </ScrollView>
                  </View>
                </View>
              </View>
        </SafeAreaView>
        <BottomNav />
      </KeyboardAvoidingView>
    );
  };

  const styles = StyleSheet.create({
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
  });

  export default ProfileDetails;
  