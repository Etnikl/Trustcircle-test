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
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RNPickerSelect from "react-native-picker-select";
import { ButtonLicense, Button } from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loadings/Loader";
import COLORS from "../constants/colors";
import TopNavProgress from "../components/TopNavProgress";
import states from '../assets/JSON/states.json'


const SignUpProcess1 = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    brokerName: "",
    brokerageName: "",
    companyName: "",
    brokerPhone: "",
    password: "",
    confpassword: "",
  });

  // api

  const pickerItems = states.map((state, index) => ({
    label: `${state.abbreviation} - ${state.name}`,
    value: state.name,
    key: index+1,
  }));
  
  console.log(states);
  
  

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const realpassword = inputs.password;

  const validate = () => {
    let valid = true;

    Keyboard.dismiss();
    if (!inputs.brokerName) {
      handeleError("Please enter your brokerName address, please.", "brokerName");
      valid = false;
    } else if (!inputs.brokerName.match(/\S+@\S+\.\S+/)) {
      handeleError("Please enter a valid brokerName", "brokerName");
    }

    if (!inputs.brokerageName) {
      handeleError("Please enter your first name.", "brokerageName");
    }

    if (!inputs.companyName) {
      handeleError("Please enter your last name.", "companyName");
    }

    if (!inputs.brokerPhone) {
      handeleError("Please enter your brokerPhone number.", "brokerPhone");
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

  const [selectedValue, setSelectedValue] = React.useState(null);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNavProgress 
              iconLeft="arrow-left"
              title="Progress"
              onPressLeft={() => {
                navigation.navigate("Login"); }}
              progress={0.333} 
            />
      <SafeAreaView
        style={{ flex: 1, height: "100%", backgroundColor: COLORS.warmew }}
      >
        <Loader visible={loading} />
        <View
          style={{
            flexDirection: "row",
            height: 150,
            marginTop: 20,
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
              Create {"\n"}
              Account
            </Text>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 18,
                fontWeight: "500",
                marginVertical: 5,
              }}
            >
              Company Information
            </Text>
          </View>
          <View style={{ flex: 1, height: 200 }}>
            <Image
              source={require("../assets/images/CreateAccountSetup.png")}
              style={{
                height: 141,
                width: 110,
                alignSelf: "flex-end",
              }}
              resizeMode= 'repeat'
            />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 25,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Input
              returnKeyType="next"
              placeholder="Your Brokerage Name"
              error={errors.brokerageName}
              onFocus={() => {
                handeleError(null, "brokerageName");
              }}
              onChangeText={(text) => handelOnChange(text, "brokerageName")}
            />
            <Input
              placeholder="Your Company Name"
              error={errors.companyName}
              onFocus={() => {
                handeleError(null, "companyName");
              }}
              onChangeText={(text) => handelOnChange(text, "companyName")}
              returnKeyType="next"
            />
            <Input
              placeholder="Your Broker Name"
              error={errors.brokerName}
              onFocus={() => {
                handeleError(null, "brokerName");
              }}
              onChangeText={(text) => handelOnChange(text, "brokerName")}
              returnKeyType="next"
            />
            <Input
              placeholder="Your Broker Email Address"
              error={errors.brokerEmail}
              onFocus={() => {
                handeleError(null, "brokerEmail");
              }}
              onChangeText={(text) => handelOnChange(text, "brokerEmail")}
              returnKeyType="next"
            />
            <Input
              keyboardType="numeric"
              placeholder="Your Broker Phone Number"
              error={errors.brokerPhone}
              onFocus={() => {
                handeleError(null, "brokerPhone");
              }}
              onChangeText={(number) => handelOnChange(number, "brokerPhone")}
            />
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 6,
                }}
            >
              <RNPickerSelect
                require
                onValueChange={(value) => setSelectedValue(value)}
                placeholder={{ label: "State Licenced In", value: null }}
                items={pickerItems} 
                activeOpacity={0.7}
                style={{
                  inputIOS: {
                    height: 48,
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderWidth: 1.5,
                    borderColor: COLORS.lightgrey,
                    borderRadius: 26,
                    color: COLORS.secondary,
                  },
                }}
              />
            </View>
            <Input
              placeholder="Agent ID"
              error={errors.agentId}
              onFocus={()=> {
                handeleError(null, "agentId");
              }}
              onChangeText = {(text)=>handelOnChange(text,"agentId")}
            /> 
            <Input
              placeholder="Borker ID"
              error={errors.brokerId}
              onFocus={() => {
                handeleError(null, "brokerId");
              }}
              onChangeText={(text) => handelOnChange(text, "brokerId")}
            />
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <ButtonLicense title="Add Additional State Licenses" onPress={() => navigation.navigate("SignUp")} />  
            <Button 
              title="Continue" 
              // onPress={validate} 
              onPress={() => navigation.navigate("SignUpProcess2")}
              />
            <Text
              style={{
                fontSize: 11,
                color: COLORS.secondary,
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              We need some more informations.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUpProcess1;
