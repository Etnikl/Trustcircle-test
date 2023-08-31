import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import { ButtonPrimary, Button } from "../components/Button";
import Input from "../components/Input";
import COLORS from "../constants/colors";
import TopNav from "../components/TopNav";
import { showToast } from "../components/ToastNotifications";
import ContainerLoad from "../components/Loadings/ContainerLoad";
import usersData from '../assets/JSON/users.json';
import { useSelector } from 'react-redux';

const UpdateCompanyInfo = ({ navigation }) => {

  const userDetails = useSelector((state) => state.user);

  const storedUser = usersData.users.find(
    (user) => user.id === userDetails.id
  );

  const [inputs, setInputs] = useState({
    companyname: storedUser ? storedUser.companyName : '',
    brokername: storedUser ? storedUser.brokerName : '',
    state: storedUser ? storedUser.state : '',
    businessarea: storedUser ? storedUser.businessArea : '',
  });

  useEffect(() => {
    if (storedUser) {
      setInputs({
        companyname: storedUser.companyName,
        brokername: storedUser.brokerName,
        state: storedUser.brokerName,
        businessarea: storedUser.businessArea,
      });
    }
  }, [storedUser]);

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    let valid = true;

    Keyboard.dismiss();

    if (valid) {
      setNewUpdate();
    }
  };

  const setNewUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        navigation.goBack();
        showToast("Success!", "Company Information was updated successfully!", "success");
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

  let screenHeight = Dimensions.get('window').height;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Company Information"
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
              Company{"\n"}
              Information
            </Text>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 16,
                fontWeight: "400",
                marginVertical: 5,
              }}
            >
              Securely update your company information {"\n"}
              for accuracy and better service. Keep your details{"\n"}
              up-to-date to ensure smooth communication{"\n"}
              and support.{" "}
            </Text>
          </View>
        </View>
        <ScrollView>
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
              ref={null}
              returnKeyType="next"
              placeholder="Company Name"
              value={inputs.companyname}
              error={errors.companyname}
              onFocus={() => {
                handeleError(null, "companyname");
              }}
              onChangeText={(text) => handelOnChange(text, "companyname")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>

              <Input 
              ref={null}
              returnKeyType="next"
              placeholder="Broker Name"
              value={inputs.brokername}
              error={errors.brokername}
              onFocus={() => {
                handeleError(null, "brokername");
              }}
              onChangeText={(text) => handelOnChange(text, "brokername")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>

              <Input 
              ref={null}
              returnKeyType="next"
              placeholder="State licensed in"
              value={inputs.state}
              error={errors.state}
              onFocus={() => {
                handeleError(null, "state");
              }}
              onChangeText={(text) => handelOnChange(text, "state")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>

              <Input 
              ref={null}
              returnKeyType="next"
              placeholder="Business Area"
              value={inputs.businessarea}
              error={errors.businessarea}
              onFocus={() => {
                handeleError(null, "businessarea");
              }}
              onChangeText={(text) => handelOnChange(text, "businessarea")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <Button title="Update Bio" onPress={validate} />
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};


export default UpdateCompanyInfo;
