import TopNav from '../components/TopNav';
import { ScrollView, View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { Button, NavButton} from '../components/Button';
import Loader from '../components/Loader';
import NewOppuScrollVertical from '../components/NewOppuScrollVertical';
import { oppurtunity } from '../assets/data/data';
import BottomNav from '../components/BottomNav';


const Oppurtunities = ({ navigation }) => {


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Oppurtunities"
        iconRight={null}
        onPressLeft={() => {
          navigation.navigate("TermsConditions");
        }}
      />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.warmew }}
      >
        <Loader visible={null} />
          <View style={{ paddingVertical: 25, paddingHorizontal:25 }}>
          <NavButton
              style={{backgroundColor: '#F0F2F4'}}
              label={"Add your own"}
              leftSource={require("../assets/images/IconAdd.png")}
              onPress={() => {
                console.log("Added new Oppurtiunity");
              }}
            />
          </View>
          <NewOppuScrollVertical items={oppurtunity} onPress={null} />
          <BottomNav notifications={null} onPress/>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Oppurtunities