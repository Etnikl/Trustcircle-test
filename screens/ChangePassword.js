import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Text,
  View,
  Dimensions,
} from "react-native";
import { ButtonPrimary, Button } from "../components/Button";
import Input from "../components/Input";
import COLORS from "../constants/colors";
import TopNav from "../components/TopNav";
import { showToast } from "../components/ToastNotifications";
import ContainerLoad from "../components/Loadings/ContainerLoad";
import usersData from '../assets/JSON/users.json';
import { useSelector } from 'react-redux';

const ChangePassword = ({ navigation }) => {

  const userDetails = useSelector((state) => state.user);

  const storedUser = usersData.users.find(
    (user) => user.id === userDetails.id
  );

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
    } else if (inputs.currpassword != storedUser.password) {
      handeleError("Your typed password doesn't match the actual password.", "currpassword");
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
      setNewPassword();
    }
  };

  const setNewPassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        navigation.goBack();
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

  let screenHeight = Dimensions.get('window').height;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Security"
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
                fontSize: 16,
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
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: screenHeight - 420,
          }}
        >
          <View>
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
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <Button title="Update Password" onPress={validate} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};


export default ChangePassword;
