import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import BottomNav from "../components/BottomNav";
import COLORS from "../constants/colors";
import TopNav from "../components/TopNav";
import termsData from "../assets/JSON/terms.json";
import TermsShow from "../components/TermsShow";

const TermsConditions = ({ navigation }) => {

  const storedTerms = termsData.terms.flat();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Terms & Conditions"
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
      <SafeAreaView style={styles.container}>
        <TermsShow items={storedTerms} />
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
