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
import SupportToggle from "../components/Toggles/SupportToggle";
import BottomNav from "../components/BottomNav";


const QASupport = ({ navigation }) => {

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
        title="Support"
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
        <View style={{flex: 1}}>
          <View style={styles.topContainer} >
            <ImageBackground
              style={{ height: 124, width: 181, alignSelf: 'center'}}
              source={require("../assets/images/QASupport.png")}
            />
          </View>
          <View style={{paddingHorizontal: 25}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.btnLicense, marginBottom: 5, marginLeft: 5,}} >FAQ</Text>
          </View>
        <ScrollView 
        contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 206,
            paddingHorizontal: 25,
          }}>
          <View>
            <SupportToggle title="1. What is Trust Circle Referral?" paragraph="Trust Circle Referral is an exclusive community that enables you to create your own referral network made up of trusted businesses and individuals with whom you do business. By adding them to your network, you can refer jobs and earn commissions for successful referrals. Our user-friendly app makes it easy to manage and track all of your referrals and earnings in one place. Join Trust Circle Referral today and start building your trusted referral network!" />
            <SupportToggle title="2. How does the referral process work?" paragraph="Trust Circle Referral is an exclusive community that enables you to create your own referral network made up of trusted businesses and individuals with whom you do business. By adding them to your network, you can refer jobs and earn commissions for successful referrals. Our user-friendly app makes it easy to manage and track all of your referrals and earnings in one place. Join Trust Circle Referral today and start building your trusted referral network!" />
            <SupportToggle title="3. How do I earn commission through the app?" paragraph="Trust Circle Referral is an exclusive community that enables you to create your own referral network made up of trusted businesses and individuals with whom you do business. By adding them to your network, you can refer jobs and earn commissions for successful referrals. Our user-friendly app makes it easy to manage and track all of your referrals and earnings in one place. Join Trust Circle Referral today and start building your trusted referral network!" />
          </View>
        </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.spamtext} >You need help?</Text>
          <View style={{width: 220, paddingBottom: 30}}>
            <Button title="Contact Us" onPress={() => navigation.navigate("ContactUs")} />  
          </View>
        </View>
        <BottomNav notifications={2} />
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
    width: screenWidth,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 90,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  spamtext: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 6,
    fontWeight: '500',
    color: COLORS.btnLicense,
  }
})

export default QASupport;
