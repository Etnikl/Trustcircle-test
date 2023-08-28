import TopNav from '../components/TopNav';
import { ScrollView, View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { Button, NavButton} from '../components/Button';
import Loader from '../components/Loadings/Loader';
import NewOppuScrollVertical from '../components/NewOppuScrollVertical';
import { oppurtunity } from '../assets/data/data';
import BottomNav from '../components/BottomNav';


const AppSettings = ({ navigation }) => {


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="App Settings"
        iconRight={null}
        onPressLeft={() => {
          navigation.navigate("TermsConditions");
        }}
      />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.warmew }}
      >
      <View 
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 60
        }} >
            <ImageBackground
              style={{ height: 110, width: 110 }}
              source={require("../assets/images/IconSettings.png")}
            />
      </View>
      <View style={{flex:1, paddingHorizontal: 25, justifyContent: 'space-between', alignContent: 'space-between' }} >
        <View>
            <NavButton
                label={"Profile Details"}
                leftSource={require("../assets/images/IconUser.png")}
                onPress={() => {
                console.log("Button Pressed");
                }}
            />
            <NavButton
                label={"Privacy"}
                leftSource={require("../assets/images/IconPrivacy.png")}
                onPress={() => {
                console.log("Button Pressed");
                }}
            />
            <NavButton
                label={"Support"}
                leftSource={require("../assets/images/IconSupport.png")}
                onPress={() => {
                  navigation.navigate('QASupport');
                console.log("Button Pressed");
                }}
            />
            <NavButton
                label={"Terms & Conditions"}
                leftSource={require("../assets/images/IconTerms.png")}
                onPress={() => {
                console.log("Button Pressed");
                }}
            />
        </View>
        <View style={{marginBottom: 80}} >
            <Button title="Log Out" onPress={() => navigation.navigate("LoginFormik")} />
        </View>
      </View>
        <Loader visible={null} />
        <BottomNav notifications={null} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default AppSettings