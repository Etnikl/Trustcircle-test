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
import Loader from "../components/Loadings/Loader";
import COLORS from "../constants/colors";
import TopNav from "../components/TopNav";
import { showToast } from "../components/ToastNotifications";
import ContainerLoad from "../components/Loadings/ContainerLoad";

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
      valid = false;
    } else if (inputs.currpassword.length < 6) {
      handeleError("Min password length of 6", "currpassword");
      valid = false;
    }

    if (!inputs.password) {
      handeleError("Please provide your password.", "password");
      valid = false;
    } else if (inputs.password.length < 6) {
      handeleError("Min password length of 6", "password");
    }

    if (!inputs.confpassword) {
      handeleError("Please confirm your password.", "confpassword");
      valid = false;
    } else if (inputs.confpassword !== inputs.password) {
      handeleError("Please enter a matching password.", "confpassword");
      valid = false;
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
        navigation.navigate("Welcome");
        showToast("Success!", "Your password has been changed successfully.", "success");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 500);
  };

  const handelOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handeleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  console.log(inputs);
  console.log(realpassword);

  const currpasswordRef = React.createRef();
  const passwordRef = React.createRef();
  const confpasswordRef = React.createRef();

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
        <ContainerLoad visible={loading} />
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
            ref={currpasswordRef}
            placeholder="Current Password"
            error={errors.currpassword}
            onFocus={() => {
              handeleError(null, "currpassword");
            }}
            password
            onChangeText={(text) => handelOnChange(text, "currpassword")}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            blurOnSubmit={false}
          />
          <Input
            ref={passwordRef}
            placeholder="New Password"
            error={errors.password}
            onFocus={() => {
              handeleError(null, "password");
            }}
            password
            onChangeText={(text) => handelOnChange(text, "password")}
            returnKeyType="next"
            onSubmitEditing={() => confpasswordRef.current.focus()}
            blurOnSubmit={false}
          />
          <Input
            ref={confpasswordRef}
            placeholder="Confirm New Password"
            error={errors.confpassword}
            onFocus={() => {
              handeleError(null, "confpassword");
            }}
            password
            onChangeText={(text) => handelOnChange(text, "confpassword")}
            returnKeyType="done"
            blurOnSubmit={true}
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
