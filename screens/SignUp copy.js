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
import languages from '../assets/JSON/languages.json'

const SignUp = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confpassword: "",
  });

  const languagePickerItems = languages.map((language, index) => ({
    label: language.name,
    value: language.code,
    key: index+1,
  }));

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const realpassword = inputs.password;

  const validate = () => {
    let valid = true;

    Keyboard.dismiss();
    if (!inputs.email) {
      handeleError("Please enter your email address, please.", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handeleError("Please enter a valid email", "email");
    }

    if (!inputs.firstname) {
      handeleError("Please enter your first name.", "firstname");
    }

    if (!inputs.lastname) {
      handeleError("Please enter your last name.", "lastname");
    }

    if (!inputs.phone) {
      handeleError("Please enter your phone number.", "phone");
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
  const [selectedLanguage, setSelectedLanguage] = React.useState(null);


  // Modal window

  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  //   end modal window

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
              returnKeyType="next"
              placeholder="First Name"
              error={errors.firstname}
              onFocus={() => {
                handeleError(null, "firstname");
              }}
              onChangeText={(text) => handelOnChange(text, "firstname")}
            />
            <Input
              placeholder="Last Name"
              error={errors.lastname}
              onFocus={() => {
                handeleError(null, "lastname");
              }}
              onChangeText={(text) => handelOnChange(text, "lastname")}
              returnKeyType="next"
            />
            <Input
              placeholder="Email Address"
              error={errors.email}
              onFocus={() => {
                handeleError(null, "email");
              }}
              onChangeText={(text) => handelOnChange(text, "email")}
              returnKeyType="next"
            />
            <Input
              keyboardType="numeric"
              placeholder="Phone Number"
              error={errors.phone}
              onFocus={() => {
                handeleError(null, "phone");
              }}
              onChangeText={(number) => handelOnChange(number, "phone")}
            />
            <Input
              placeholder="Password"
              error={errors.password}
              onFocus={() => {
                handeleError(null, "password");
              }}
              password
              onChangeText={(text) => handelOnChange(text, "password")}
            />
            <Input
              placeholder="Confirm Password"
              error={errors.confpassword}
              onFocus={() => {
                handeleError(null, "confpassword");
              }}
              password
              onChangeText={(text) => handelOnChange(text, "confpassword")}
            />
            {/* <Input
                        placeholder="Occupation"
                        error={errors.occupation}
                        onFocus={()=> {
                            handeleError(null, "occupation");
                        }}
                        onChangeText = {(text)=>handelOnChange(text,"occupation")}
                    /> */}
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
            </View>
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
                onValueChange={(value) => setSelectedLanguage(value)}
                placeholder={{ label: "Add Additional Language", value: null }}
                items={languagePickerItems} 
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
            {/* <Input
              placeholder="Add Additional Language"
              error={errors.anotherlanguage}
              onFocus={() => {
                handeleError(null, "anotherlanguage");
              }}
              onChangeText={(text) => handelOnChange(text, "anotherlanguage")}
            /> */}
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <Button 
              title="Send Verification Email" 
              // onPress={validate} 
              onPress={() => navigation.navigate("SignUpProcess1")}
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
          <View style={styles.container}>
            <TouchableOpacity onPress={openModal}>
              <Text style={styles.openModalButton}>Open Modal</Text>
            </TouchableOpacity>

            <CustomModal isVisible={modalVisible} onClose={closeModal} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openModalButton: {
    fontSize: 20,
    color: "blue",
  },
});

export default SignUp;
