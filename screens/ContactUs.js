import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Alert,
  TextInput,
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
import SupportToggle from "../components/Toggles/SupportToggle";
import BottomNav from "../components/BottomNav";
import Input from "../components/Input";

const ContactUs = ({ navigation }) => {

  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState();

  const fullnameRef = React.createRef();
  const emailRef = React.createRef();
  const subjectRef = React.createRef();
  const messageRef = React.createRef();

  const handelOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handeleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

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
        title="Contact Us"
        iconRight={null}
        onPressLeft={() => {
          navigation.navigate("QASupport");
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
        <View style={{flex: 1}}>
          <View style={styles.topContainer} >
            <ImageBackground
              style={{ height: 119, width: 113, alignSelf: 'center'}}
              source={require("../assets/images/ContactUs.png")}
            />
          </View>
        <ScrollView 
        contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 80,
            paddingHorizontal: 25,
            justifyContent: 'space-between',
            alignContent: 'space-between',
            flex: 1,
          }}>
          <View>
          <Input
              ref={fullnameRef}
              returnKeyType="next"
              placeholder="Full Name"
              error={errors.fullname}
              onFocus={() => {
                handeleError(null, "fullname");
              }}
              onChangeText={(text) => handelOnChange(text, "fullname")}
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
              onSubmitEditing={() => subjectRef.current.focus()}
              blurOnSubmit={false}
            />
            <Input
              ref={subjectRef}
              placeholder="Subject"
              error={errors.subject}
              onFocus={() => {
                handeleError(null, "subject");
              }}
              onChangeText={(text) => handelOnChange(text, "subject")}
              returnKeyType="next"
              onSubmitEditing={() => messageRef.current.focus()}
              blurOnSubmit={false}
            />
            {/* <Input
              ref={messageRef}
              placeholder="Message"
              error={errors.message}
              onFocus={() => {
                handeleError(null, "message");
              }}
              onChangeText={(text) => handelOnChange(text, "message")}
              returnKeyType="done"
              blurOnSubmit={true}
            /> */}
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              onChangeText={(text) => handelOnChange(text, "message")}
              value="allo"
            />
          </View>
          <View style={styles.bottomContainer}>
          <Button title="Send" onPress={() => navigation.navigate("Welcome")} />  
          <Text style={styles.spamtext} >*We will try to reach you as soon as possible</Text>
        </View>
        </ScrollView>
        </View>
      </SafeAreaView>
      <BottomNav notifications={2} />
    </KeyboardAvoidingView>
  );
};


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  textArea: {
    height: 200,
    width: '100%',
    justifyContent: "flex-start",
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 26,
    padding: 15,
  },
  topContainer: {
    width: screenWidth - 50,
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 75,
    paddingBottom: 30,
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
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  spamtext: {
    fontSize: 10,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: '500',
    color: COLORS.btnLicense,
  }
})

export default ContactUs;
