import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import TopNav from "../components/TopNav";
import Loader from "../components/Loadings/Loader";
import BottomNav from "../components/BottomNav";
import NotificationShow from "../components/NotificationShow";
import { notifications } from "../assets/data/data-notification";

const Notification = ({ navigation }) => {

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Notifications"
        iconRight={null}
        onPressLeft={() => {
          navigation.navigate("Home");
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
        <Loader visible={null} />

        <NotificationShow items={notifications} onPress={null} />
        
      <BottomNav />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Notification;
