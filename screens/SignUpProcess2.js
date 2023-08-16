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
import RNPickerSelect from "react-native-picker-select";
import { ButtonPrimary, Button } from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";
import COLORS from "../constants/colors";
import TopNavProgress from "../components/TopNavProgress";

const SignUpProcess2 = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    specifyAddress: "",
    website: "",
    companyPhone: "",
    password: "",
    confpassword: "",
  });

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

    if (!inputs.specifyAddress) {
      handeleError("Please enter your first name.", "specifyAddress");
    }

    if (!inputs.website) {
      handeleError("Please enter your last name.", "website");
    }

    if (!inputs.companyPhone) {
      handeleError("Please enter your companyPhone number.", "companyPhone");
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
      <TopNavProgress 
              iconLeft="arrow-left"
              title="Progress"
              onPressLeft={() => {
                navigation.navigate("Login"); }}
              progress={0.6} 
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
              Company Address
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
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'flex-end',
            justifyItems: 'flex-end',
          }}
        >
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Input
              returnKeyType="next"
              placeholder="Specify Address"
              error={errors.specifyAddress}
              onFocus={() => {
                handeleError(null, "specifyAddress");
              }}
              onChangeText={(text) => handelOnChange(text, "specifyAddress")}
            />
            <Input
              placeholder="Website"
              error={errors.website}
              onFocus={() => {
                handeleError(null, "website");
              }}
              onChangeText={(text) => handelOnChange(text, "website")}
              returnKeyType="next"
            />
            <Input
              keyboardType="numeric"
              placeholder="Company Phone Number"
              error={errors.companyPhone}
              onFocus={() => {
                handeleError(null, "companyPhone");
              }}
              onChangeText={(number) => handelOnChange(number, "companyPhone")}
            />
          </View>
          <View style={{flex: 1, paddingTop: 20, paddingBottom: 30 }}>
            <Button 
              title="Continue" 
              // onPress={validate}
              onPress={() => navigation.navigate("SignUpProcess3")}
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

export default SignUpProcess2;
