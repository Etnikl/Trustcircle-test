import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
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
import { ButtonPrimary, Button } from "../components/Button";
import CustomModal from "../components/CosutmModal";
import Input from "../components/Input";
import Loader from "../components/Loadings/Loader";
import COLORS from "../constants/colors";
import LanguagePicker from '../components/LanguagePicker'
import usersData from '../assets/JSON/users.json'
import {CustomPicker} from "../components/CostumePicker";
import occupations from '../assets/JSON/occupations.json';
import { showToast } from "../components/ToastNotifications";



const SignUp = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confpassword: "",
  });

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    let valid = true;

    Keyboard.dismiss();
    if (!inputs.email) {
      handeleError("Please enter your email address, please.", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handeleError("Please enter a valid email", "email");
      valid = false;
    }

    if (!inputs.firstname) {
      handeleError("Please enter your first name.", "firstname");
      valid = false;
    }

    if (!inputs.lastname) {
      handeleError("Please enter your last name.", "lastname");
      valid = false;
    }

    if (!inputs.phone) {
      handeleError("Please enter your phone number.", "phone");
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

  console.log("Last Data in USERS DATA::", usersData)

  const register = async () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);

      try {
        AsyncStorage.setItem("user", JSON.stringify(inputs));
        navigation.navigate("VerifyEmail");
        showToast("Incredible!", "Successfully registered! Check your email for verification", "success"); 
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
        showToast("Something went wrong!", "There was a problem while creating account, please try again.", "error");
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

  const [selectedValue, setSelectedValue] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(null);


  const firstnameRef = React.createRef();
  const lastnameRef = React.createRef();
  const phoneRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const confpasswordRef = React.createRef();
  const occupationRef = React.createRef();
  const languageRef = React.createRef();
  const pickerRef = React.useRef();

  const options = occupations.map((language, index) => ({
    label: language.name,
    value: language.name,
    key: index+1,
  }));

  const handlePickerValueChange = (value) => {
    console.log('Selected value:', value);
  }

  const handleValueChange = (value) => {
    console.log('Selected Value:', value);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView
        style={{ flex: 1, height: "100%", backgroundColor: COLORS.warmew }}
      >
        <Loader visible={loading} />
        <View
          style={{
            flexDirection: "row",
            height: 150,
            marginTop: 50,
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
              Personal Information
            </Text>
          </View>
          <View style={{ flex: 1, height: 200 }}>
            <Image
              source={require("../assets/images/CreateAccount.png")}
              style={{
                height: 141,
                width: 110,
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 30,
            paddingHorizontal: 25,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              marginVertical: 30,
            }}
          >
            <Input
              ref={firstnameRef}
              returnKeyType="next"
              placeholder="First Name"
              error={errors.firstname}
              onFocus={() => {
                handeleError(null, "firstname");
              }}
              onChangeText={(text) => handelOnChange(text, "firstname")}
              onSubmitEditing={() => lastnameRef.current.focus()}
              blurOnSubmit={false}
            />
            <Input
              ref={lastnameRef}
              placeholder="Last Name"
              error={errors.lastname}
              onFocus={() => {
                handeleError(null, "lastname");
              }}
              onChangeText={(text) => handelOnChange(text, "lastname")}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              blurOnSubmit={false}
            />
            <Input
              ref={emailRef}
              placeholder="Email Address"
              error={errors.email}
              onFocus={() => {
                handeleError(null, "email");
              }}
              onChangeText={(text) => handelOnChange(text, "email")}
              returnKeyType="next"
              onSubmitEditing={() => phoneRef.current.focus()}
              blurOnSubmit={false}
            />
            <Input
              ref={phoneRef}
              keyboardType="numeric"
              placeholder="Phone Number"
              error={errors.phone}
              onFocus={() => {
                handeleError(null, "phone");
              }}
              onChangeText={(number) => handelOnChange(number, "phone")}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              blurOnSubmit={false}
            />
            <Input
              ref={passwordRef}
              placeholder="Password"
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
              placeholder="Confirm Password"
              error={errors.confpassword}
              onFocus={() => {
                handeleError(null, "confpassword");
              }}
              password
              onChangeText={(text) => handelOnChange(text, "confpassword")}
              returnKeyType="next"
              onSubmitEditing={() =>
                {
                if (pickerRef.current) {
                  pickerRef.current.open();
                }
                }
              }
              blurOnSubmit={true}
            />
            {/* <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 6,
                }}
            >
              <RNPickerSelect
                ref={occupationRef}
                require
                onValueChange={(value) => setSelectedValue(value)}
                placeholder={{ label: "Occupation", value: null }}
                items={[
                    { label: "Real Estate Agent", value: "RealEstateAgent" },
                    { label: "Real Estate Broker", value: "RealEstateBroker" },
                ]}
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
            </View> */}
            <CustomPicker
              ref={pickerRef}
              options={options}
              onValueChange={handleValueChange}
              placeholder="Occupation"
              modaltitle="Select Your Occupation"
            />
            <LanguagePicker />
            </View>
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            {/* <Button 
              title="Send Verification Email" 
              // onPress={validate} 
              onPress={() => navigation.navigate("SignUpProcess1")}  //Real Button that we need to use
              /> */} 
              <Button 
              title="Register" 
              onPress={validate} 
              // onPress={() => navigation.navigate("SignUpProcess1")}
              />
            <Text
              style={{
                fontSize: 11,
                color: COLORS.secondary,
                textAlign: "center",
                paddingTop: 10,
              }}
              // onPress={()=> navigation.navigate('Login')}
            >
              We need some more informations.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};


export default SignUp;
