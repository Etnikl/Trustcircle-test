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
  import { useSelector } from 'react-redux';

  const ProfileDetails = ({ navigation }) => {

    const userDetails = useSelector((state) => state.user);


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
          <View>
            <Text>Profile Details</Text>
            <Text>ID: {userDetails.id}</Text>
            <Text>Name: {userDetails.name}</Text>
            <Text>Email: {userDetails.email}</Text>
            <Text>Password: {userDetails.password}</Text>
          </View>
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


  export default ProfileDetails;
  