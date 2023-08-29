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
import ContainerLoad from "../components/Loadings/ContainerLoad";
import BottomNav from "../components/BottomNav";
import NotificationShow from "../components/NotificationShow";
import { notifications } from "../assets/data/data-notification";
import occupations from '../assets/JSON/occupations.json';
import { Button, ButtonLicense, ButtonPrimary, ButtonSecondary } from "../components/Button";
import { CustomPicker, CustomPicker2 } from "../components/CostumePicker";
import Input from "../components/Input";

const CreateReferral = ({ navigation }) => {

  const options = occupations.map((occupation, index) => ({
    label: occupation.name,
    value: occupation.name,
    sub: occupation.sub,  // Include the sub-options here
    key: index + 1,
  }));
  
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
        <ScrollView 
            contentContainerStyle={{
            paddingHorizontal: 25,
            overflow: "hidden",
          }}>
          <View 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: screenHeight - 200,

            }} > 
            <View 
              style={{
                paddingTop: 20,
              }}>
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
            </View>
            <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <Button title="Search for Candidates" onPress={() => {navigation.navigate('ReferralMatches');}} />
            </View>
          </View>
        </ScrollView>
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

export default CreateReferral;
