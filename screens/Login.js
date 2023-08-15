import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import InputLogins from "../components/InputLogins";
import COLORS from "../constants/colors";
import { ButtonPrimary, ButtonSecondary, IconButton } from "../components/Button";
import Checkbox from "../components/Checkbox";

const Login = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;

    Keyboard.dismiss();
    if (!inputs.email) {
      handeleError("Please enter your email address.", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handeleError("Please enter a valid email", "email");
    }

    if (!inputs.password) {
      handeleError("Please provide your password.", "password");
    } else if (inputs.password.length < 6) {
      handeleError("Min password length of 6", "password");
    }
    if (valid) {
      register();
    }
  };

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handelOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handeleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const handleCheckboxChange = (checked) => {
    console.log('Checkbox checked:', checked);
  };

  // icone handel

  const handleGooglePress = () => {
    console.log('Google icon pressed');
  };

  const handleFacebookPress = () => {
    console.log('Facebook icon pressed');
  };

  const handleApplePress = () => {
    console.log('Apple icon pressed');
  };


  return (
    <LinearGradient
    style={{
      flex: 1,
    }}
    colors={[COLORS.secondary, COLORS.primary]}
  >
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <SafeAreaView
          style={{
            flex: 1,
            height: "100%",
          }}
        >
        <View>
        <ImageBackground
              style={{
                height: 120,
                marginTop: 75,
              }}
              resizeMode="contain"
              source={require("../assets/images/LogoTC.png")}
            />
            <Text
              style={{
                fontFamily: "Arial",
                fontSize: 46,
                fontWeight: "bold",
                alignSelf: "center",
                color: "#DAE1ED",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              TrustCircle
            </Text>
            <Text
              style={{
                fontFamily: "Arial",
                fontSize: 14,
                color: "#DAE1ED",
                alignSelf: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Building Trust. Connecting You.
            </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            overflow: "hidden",
          }}>
          <View>
            <View
              style={{
                marginTop: 55,
                paddingHorizontal: 25,
              }}
            >
              <InputLogins
                returnKeyType="next"
                iconName={"email"}
                placeholder="Email"
                error={errors.email}
                onFocus={() => {
                  handeleError(null, "email");
                }}
                onChangeText={(text) => handelOnChange(text, "email")}
              />
              <InputLogins
                iconName={"lock"}
                placeholder="Password"
                error={errors.password}
                onFocus={() => {
                  handeleError(null, "password");
                }}
                password
                onChangeText={(text) => handelOnChange(text, "password")}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 35,
                flexDirection: "row",
                flex: "(2,1fr)",
                justifyContent: "space-between",
              }}
            >
              <View>
              <Checkbox label="Remember Me" 
                initialChecked={false}
                onCheckedChange={handleCheckboxChange}/>
              </View>
              <Text
                style={{
                  color: "#DAE1ED",
                }}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                Forgot Password?
              </Text>
            </View>
            <View style={{paddingTop:50, marginHorizontal: 25}} >
              <ButtonPrimary title="Log in" onPress={validate} />
            </View>
            <View style={{marginTop: 8, marginHorizontal: 25}}>
              <ButtonSecondary title="Create Account" onPress={() => navigation.navigate("SignUp")} />
            </View>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 25,
                flex: "(3,1fr)",
                justifyContent: "center",
                alignContent: "stretch",
                flexDirection: "row",
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  backgroundColor: "#fefefe",
                  height: 1,
                  width: 110,
                }}
              >
                {" "}
              </Text>
              <Text
                style={{
                  paddingHorizontal: 7,
                  color: "#DAE1ED",
                }}
              >
                {" "}
                Or continue with{" "}
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  backgroundColor: "#fefefe",
                  height: 1,
                  width: 110,
                }}
              >
                {" "}
              </Text>
            </View>
            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                width: 140,
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
              <IconButton
                  source={require('../assets/images/AppleIcon.png')}
                  onPress={handleApplePress}
              />
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
              <IconButton
                  source={require('../assets/images/GoogleIcon.png')}
                  onPress={handleGooglePress}
              />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
              <IconButton
                  source={require('../assets/images/FbIcon.png')}
                  onPress={handleFacebookPress}
              />
              </View>
            </View>
            <Text
              style={{
                marginTop: 10,
                textAlign: "center",
                fontSize: 10,
                color: "#DAE1ED",
              }}
            >
              We will need some more information after
            </Text>
            <View
              style={{
                marginTop: 55,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "#DAE1ED",
                }}
              >
                By using Trust Circle, you agreeing to our
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "#DAE1ED",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                  onPress={() => navigation.navigate("TermsConditions")}
                >
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text
                  style={{
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                >
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>
          </ScrollView>
        </SafeAreaView>
    </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Login;
