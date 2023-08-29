import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import TopNav from "../components/TopNav";
import Loader from "../components/Loadings/Loader";
import ContainerLoad from "../components/Loadings/ContainerLoad";
import BottomNav from "../components/BottomNav";
import { NavButton, NavButtonPri, NavButtonRef } from "../components/Button";
import { referralsdata } from "../assets/data/dataReferrals";

const MyReferrals = ({ navigation }) => {

  const SentActiveReferralCount = referralsdata.filter((item) => {
    return (item.sign.toLowerCase() === 'yes') &&
           (item.type.toLowerCase() === 'sent')
  }).length;

  const SentPendingReferralCount = referralsdata.filter((item2) => {
    return (item2.sign.toLowerCase() === 'no') &&
           (item2.type.toLowerCase() === 'sent')
  }).length;

  const SentClosedReferralCount = referralsdata.filter((item3) => {
    return (item3.sign.toLowerCase() === 'done') &&
           (item3.type.toLowerCase() === 'sent')
  }).length;

  const RecivedActiveReferralCount = referralsdata.filter((item4) => {
    return (item4.sign.toLowerCase() === 'yes') &&
           (item4.type.toLowerCase() === 'recived')
  }).length;

  const RecivedPendingReferralCount = referralsdata.filter((item5) => {
    return (item5.sign.toLowerCase() === 'no') &&
           (item5.type.toLowerCase() === 'recived')
  }).length;

  const RecivedClosedReferralCount = referralsdata.filter((item6) => {
    return (item6.sign.toLowerCase() === 'done') &&
           (item6.type.toLowerCase() === 'recived')
  }).length;

  return (

<KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="New Referral"
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
              paddingVertical: 40,
              paddingHorizontal: 25,
              height: screenHeight - 200,
            }} > 
            <View>
              <View>
                <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 10}} >
                  <ImageBackground
                    style={{
                    height: 24,
                    width: 24,
                    marginRight: 10,
                    }} 
                    resizeMode="contain"
                    source={require("../assets/images/IconSentRef.png")}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '600',
                      color: COLORS.secondary
                    }}
                  >Sent Referrals</Text>
                </View>
                <NavButtonRef
                  label={"Active"}
                  notificationCount={SentActiveReferralCount}
                  onPress={() => {
                    navigation.navigate("SentActiveReferral");
                    console.log("Button Pressed - Sent Active");
                  }}
                />
                <NavButtonRef
                  label={"Pending"}
                  notificationCount={SentPendingReferralCount}
                  onPress={() => {
                    navigation.navigate("SentPendingReferral");
                    console.log("Button Pressed - Sent Pending");
                  }}
                />
                <NavButtonRef
                  label={"Closed"}
                  notificationCount={SentClosedReferralCount}
                  onPress={() => {
                    navigation.navigate("SentClosedReferral");
                    console.log("Button Pressed - Sent Closed");
                  }}
                />
              </View>
              <View style={{marginTop: 30}}>
                <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 10}} >
                  <ImageBackground
                    style={{
                    height: 24,
                    width: 24,
                    marginRight: 10,
                    }} 
                    resizeMode="contain"
                    source={require("../assets/images/IconRecivedRef.png")}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '600',
                      color: COLORS.secondary
                    }}
                  >Received Referrals</Text>
                </View>
                <NavButtonRef
                  label={"Active"}
                  notificationCount={RecivedActiveReferralCount}
                  onPress={() => {
                    navigation.navigate("RecivedActiveReferral");
                    console.log("Button Pressed - Recived Active");
                  }}
                />
                <NavButtonRef
                  label={"Pending"}
                  notificationCount={RecivedPendingReferralCount}
                  onPress={() => {
                    navigation.navigate("RecivedPendingReferral");
                    console.log("Button Pressed - Recived Pending");
                  }}
                />
                <NavButtonRef
                  label={"Closed"}
                  notificationCount={RecivedClosedReferralCount}
                  onPress={() => {
                    navigation.navigate("RecivedClosedReferral");
                    console.log("Button Pressed - Recived Closed");
                  }}
                />
              </View>
            </View>
            <View>
            <NavButton
                label={"Needs Updating"}
                leftSource={require("../assets/images/IconNeedsUpd.png")}
                onPress={() => {
                console.log("Button Pressed - NeedsUpdate");
                }} />
            <NavButtonPri
                label={"Send New Referral"}
                leftSource={require("../assets/images/IconSendNewRef.png")}
                onPress={() => {
                console.log("Button Pressed - NewRef");
                }}
                style={{backgroundColor: COLORS.primary, borderWidth: 0, color: COLORS.warmew}}
                 />
            </View>
          </View>
      </SafeAreaView>
      <BottomNav />
    </KeyboardAvoidingView>
  );
};


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  topContainer: {
    width: screenWidth - 50,
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 75,
    paddingBottom: 30,
  },
  info: {
    width: screenWidth - 50,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    flexWrap: 'wrap',
    color: COLORS.secondary,
    marginVertical: 30,
  },
  bottomContainer: {
    display: 'flex',
    width: screenWidth-50,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 115,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  spamtext: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 6,
    fontWeight: '500',
    color: COLORS.btnLicense,
  }
})

export default MyReferrals;
