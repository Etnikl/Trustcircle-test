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
import { ButtonPrimary, Button, ButtonLicense } from "../components/Button";
import CustomModal from "../components/CosutmModal";
import Input from "../components/Input";
import Loader from "../components/Loader";
import COLORS from "../constants/colors";
import TopNavProgress from "../components/TopNavProgress";

const SignUpProcess3 = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    yourGCI: "",
    lastname: "",
    phone: "",
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

    if (!inputs.yourGCI) {
      handeleError("Please enter your first name.", "yourGCI");
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
              progress={0.9} 
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
              Buissness Details
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
              placeholder="Your GCI"
              error={errors.yourGCI}
              onFocus={() => {
                handeleError(null, "yourGCI");
              }}
              onChangeText={(text) => handelOnChange(text, "yourGCI")}
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
                items={[
                    { label: "AK - Alaska", value: "Alaska" },
                    { label: "MI - Michigan", value: "Michigan" },
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
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: COLORS.secondary,
              marginLeft: 10,
              marginBottom: 5,
            }} >Define Your Territory</Text>
            <Input
              placeholder="City, County or Zip Code (MULITIPLE)"
              error={errors.defineTerritory}
              onFocus={() => {
                handeleError(null, "defineTerritory");
              }}
              onChangeText={(text) => handelOnChange(text, "defineTerritory")}
            />
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <View style={{flexDirection: 'row', gap: 5 , flexWrap: 'nowrap', justifyContent:'center'}} >
              <View style={{width: '50%'}} >
                <ButtonLicense title="Edit" onPress={() => navigation.navigate("SignUpProcess1")} />
              </View>
              <View style={{width: '50%'}} >
                <Button title="Confirm" onPress={() => navigation.navigate("TermsConditions")} />
              </View>
            </View>
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


export default SignUpProcess3;
