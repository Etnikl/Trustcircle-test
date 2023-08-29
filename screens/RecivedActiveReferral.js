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
import NotificationShow from "../components/NotificationShow";
import { notifications } from "../assets/data/data-notification";
import occupations from '../assets/JSON/occupations.json';
import { Button, ButtonLicense, ButtonPrimary, ButtonSecondary, NavButton, NavButtonPri, NavButtonRef } from "../components/Button";
import { CustomPicker, CustomPicker2 } from "../components/CostumePicker";
import Input from "../components/Input";
import NewOppuScrollVertical from "../components/NewOppuScrollVertical";
import { referralsdata } from "../assets/data/dataReferrals";
import ReferralShowScrollVertical from "../components/ReferralShowScrollVertical";

const RecivedActiveReferral = ({ navigation }) => {

  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;

  return (

<KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Active Referrals"
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
            }} > 
            <ReferralShowScrollVertical items={referralsdata} filterSign="Yes"  filterType="Recived" onPress={null} />
          </View>
      </SafeAreaView>
      <BottomNav />
    </KeyboardAvoidingView>
  );
};


export default RecivedActiveReferral;
