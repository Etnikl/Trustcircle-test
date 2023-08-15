
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button_Old';

const Oppurtunities = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Change Password"
        iconRight={null}
        onPressLeft={() => {
          navigation.navigate("Login");
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
        <Loader visible={loading} />
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <Button title="Submit" onPress={()=> navigation.navigate('Login')} />
          </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Oppurtunities