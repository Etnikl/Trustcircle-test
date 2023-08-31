import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import BottomNav from "../../components/BottomNav";
import HomeNav from "../../components/HomeNav";
import COLORS from "../../constants/colors";
import { NavButton } from "../../components/Button";
import ScrollComponent from "../../components/MoneyChart";
import NewOppuScroll from "../../components/NewOppuScroll";
import { oppurtunity, walletItems } from '../../assets/data/data'

const TermsConditions = ({ navigation }) => {

  const walletItems = [
    {
      imageSource: require('../assets/images/Money.png'),
      text1: '$185.25',
      text2: 'Total referrals received',
      backgroundColor: '#62AD0A'
    },
    {
      imageSource: require('../assets/images/Money.png'),
      text1: '$350.21',
      text2: 'Total referrals sent',
      backgroundColor: '#3F73AF',
    },
    {
      imageSource: require('../assets/images/Money.png'),
      text1: '$902.22',
      text2: 'Pending incomings',
      backgroundColor: '#0F2D4E',
    },
    {
      imageSource: require('../assets/images/Money.png'),
      text1: '$0',
      text2: 'Pending Outgoing',
      backgroundColor: '#233975',
    },
  ];


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <HomeNav name={"Etnik Latifi"} />
      <SafeAreaView style={styles.container}>
        <View style={{ paddingHorizontal: 25, paddingVertical: 25 }}>
          <NavButton
            label={"My Trust Circle"}
            leftSource={require("../assets/images/IconUser.png")}
            onPress={() => {
              console.log("Button Pressed");
            }}
          />
          <NavButton
            label={"Invite to my Trust Circle"}
            leftSource={require("../assets/images/IconAdd.png")}
            onPress={() => {
              console.log("Button Pressed");
            }}
          />
          <NavButton
            label={"Send New Referral"}
            leftSource={require("../assets/images/IconNewRef.png")}
            onPress={() => {
              console.log("Button Pressed");
            }}
          />
          <NavButton
            label={"My Referrals"}
            leftSource={require("../assets/images/IconMyRef.png")}
            onPress={() => {
              console.log("Button Pressed");
            }}
          />
          <NavButton
            label={"Notifications"}
            leftSource={require("../assets/images/IconNotRef.png")}
            notificationCount={2}
            onPress={() => { 
              console.log("Button Pressed");
            }}
          />
          <NavButton
            label={"Auction"}
            leftSource={require("../assets/images/IconAuction.png")}
            onPress={() => { 
              console.log("Button Pressed");
            }}
          />
        </View>
        <NewOppuScroll items={oppurtunity}  onPress={() => navigation.navigate("Oppurtunities")} />
        <ScrollComponent items={walletItems}/>
        <ScrollView style={styles.content}></ScrollView>
        <BottomNav notifications={null} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
  },
});

export default TermsConditions;
