import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RNPickerSelect from "react-native-picker-select";
import { ButtonPrimary, Button } from "../components/Button";
import CustomModal from "../components/CosutmModal";
import Input from "../components/Input";
import Loader from "../components/Loader";
import COLORS from "../constants/colors";
import TopNav from "../components/TopNav";

const ChangePassword = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    currpassword: "",
    password: "",
    confpassword: "",
  });

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const realpassword = inputs.password;

  const validate = () => {
    let valid = true;

    Keyboard.dismiss();
    if (!inputs.currpassword) {
      handeleError("Please provide your password.", "currpassword");
    } else if (inputs.currpassword.length < 6) {
      handeleError("Min password length of 6", "currpassword");
    }

    if (!inputs.password) {
      handeleError("Please provide your password.", "password");
    } else if (inputs.password.length < 6) {
      handeleError("Min password length of 6", "password");
    }

    if (!inputs.password) {
      handeleError("Please provide your password.", "confpassword");
    } else if (inputs.confpassword.input != inputs.password.input) {
      handeleError("Please enter a matching password.", "confpassword");
    }

    if (valid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        AsyncStorage.setItem("user", JSON.stringify(inputs));
        navigation.navigate("Login");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  const handelOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handeleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  console.log(inputs);
  console.log(realpassword);

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
        <View
          style={{
            flexDirection: "row",
            height: 150,
            marginTop: 100,
            paddingHorizontal: 25,
            paddingBottom: 20,
          }}
        >
          <View style={{ justifyContent: "flex-end" }}>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 36,
                fontWeight: "bold",
              }}
            >
              Change {"\n"}
              Password
            </Text>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 18,
                fontWeight: "400",
                marginVertical: 5,
              }}
            >
              Please enter your old password than{"\n"}
              type your new password.{" "}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 30,
            paddingHorizontal: 25,
          }}
        >
          <Input
            placeholder="Current Password"
            error={errors.currpassword}
            onFocus={() => {
              handeleError(null, "currpassword");
            }}
            password
            onChangeText={(text) => handelOnChange(text, "currpassword")}
          />
          <Input
            placeholder="New Password"
            error={errors.password}
            onFocus={() => {
              handeleError(null, "password");
            }}
            password
            onChangeText={(text) => handelOnChange(text, "password")}
          />
          <Input
            placeholder="Confirm New Password"
            error={errors.confpassword}
            onFocus={() => {
              handeleError(null, "confpassword");
            }}
            password
            onChangeText={(text) => handelOnChange(text, "confpassword")}
          />
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <Button title="Submit" onPress={validate} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};


export default ChangePassword;
