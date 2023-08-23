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
import SearchDropdown from "../components/SearchInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import profileUsers from '../assets/JSON/profileUsers.json'

const SearchScreen = ({ navigation }) => {

  // const searchData = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi'];
  // const searchData = [
  //   { title: { name: 'John Smith', profession: 'Software Developer' } },
  //   { title: { name: 'Mary Johnson', profession: 'UI/UX Designer' } },
  //   { title: { name: 'Robert Brown', profession: 'QA Engineer' } },
  //   // ...
  // ];

  const handleRightPress = () => {
    console.log('Add Search pressed');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Search"
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
        <SearchDropdown
          data={profileUsers}
          label="Search contacts, profession, city (popup)"
          leftSource={require('../assets/images/IconSearch.png')}
          rightSource={require('../assets/images/IconAdd.png')}
          onPressRight={handleRightPress}
      />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SearchScreen;
