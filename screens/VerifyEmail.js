import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ButtonPrimary, Button } from "../components/Button";
import Loader from "../components/Loadings/Loader";
import COLORS from "../constants/colors";
import TopNav from "../components/TopNav";
import ContainerLoad from "../components/Loadings/ContainerLoad";
import { showToast } from "../components/ToastNotifications";

const VerifyEmail = ({ navigation }) => {

  const [loading, setLoading] = React.useState();

  const sendAgain = async () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      try {
        showToast("Succsess!", "We send you another verify link, please check the email.", "success")
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    }, 2000);
  };


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Verify your email address"
        iconRight={null}
        onPressLeft={() => {
          navigation.navigate("Welcome");
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
        <View>
          <View style={styles.topContainer} >
            <ImageBackground
              style={{ height: 120, width: 120, alignSelf: 'center'}}
              source={require("../assets/images/SuccessCreate.png")}
            />
            <Text style={styles.info} >Look for the verification email in your inbox and click the link in that email.</Text>
            <View style={{width: 185, alignSelf: 'center'}}>
              <Button title="Send Again" onPress={sendAgain} />
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.spamtext} >Check your spam folder to make sure it didn’t end up there. You can also add the email address noreply@trustcirclereferral.com to your address book and then try sending the email again.</Text>
          <Button title="Finish" onPress={() => navigation.navigate("Login")} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  topContainer: {
    width: screenWidth - 50,
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 200,
  },
  info: {
    width: screenWidth - 50,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    flexWrap: 'wrap',
    color: COLORS.secondary,
    marginVertical: 30,
  },
  bottomContainer: {
    display: 'flex',
    width: screenWidth - 50,
    position: 'absolute',
    bottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  spamtext: {
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 30,
    color: COLORS.secondary,
  }
})

export default VerifyEmail;
