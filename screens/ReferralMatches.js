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
import Loader from "../components/Loadings/Loader";
import BottomNav from "../components/BottomNav";
import NotificationShow from "../components/NotificationShow";
import { notifications } from "../assets/data/data-notification";
import occupations from '../assets/JSON/occupations.json';
import { Button, ButtonLicense, ButtonPrimary, ButtonSecondary } from "../components/Button";
import { CustomPicker, CustomPicker2 } from "../components/CostumePicker";
import Input from "../components/Input";

const ReferralMatches = ({ navigation }) => {

  const options = occupations.map((occupation, index) => ({
    label: occupation.name,
    value: occupation.name,
    sub: occupation.sub,  // Include the sub-options here
    key: index + 1,
  }));
  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={{width: screenWidth, height:screenHeight}} >
      <TopNav
        iconLeft="arrow-left"
        title="Referral Matches"
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <SafeAreaView
        style={{height: "100%", backgroundColor: COLORS.warmew }}
      >
        <Loader visible={null} />

        <View style={{height: screenHeight-220,paddingHorizontal: 25, alignContent: 'space-between', justifyContent: 'space-evenly', flexDirection: 'column'}} >
          <ScrollView style={{paddingVertical: 25}}>
            <CustomPicker2
              ref={null}
              options={options}
              onValueChange={null}
              placeholder="Select Occupation"
              modaltitle="Select Your Occupation"
            />
            <Input
              ref={null}
              placeholder="Client First Name"
            />
            <Input
              ref={null}
              placeholder="Client Last Name"
            />
            <Input
              ref={null}
              placeholder="Client Email Adress"
            />
            <Input
              ref={null}
              placeholder="Client Phone Number"
            />
            <Input
              ref={null}
              placeholder="Client Needs"
            />
            <Input
              ref={null}
              placeholder="Headline"
            />
            <Input
              ref={null}
              placeholder="Specify Location"
            />
            <Input
              ref={null}
              placeholder="Fee $ (tap $ to change to %)"
            />
            <Input
              ref={null}
              placeholder="Referral Notes"
            />
          </ScrollView>
          <View>
            <Button title="Search for Candidates" />
          </View>
        </View>
      </SafeAreaView>
      </KeyboardAvoidingView>
      <BottomNav />
    </View>
  );
};

export default ReferralMatches;
