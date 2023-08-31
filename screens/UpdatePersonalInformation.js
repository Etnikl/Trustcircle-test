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

const UpdatePersonalInformation = ({ navigation }) => {

  const userDetails = useSelector((state) => state.user);

  const storedUser = usersData.users.find(
    (user) => user.id === userDetails.id
  );

  const [inputs, setInputs] = useState({
    firstname: storedUser ? storedUser.firstName : '',
    lastname: storedUser ? storedUser.lastName : '',
    email: storedUser ? storedUser.email : '',
    phonenumber: storedUser ? storedUser.phoneNumber : '',
    occupation: storedUser ? storedUser.occupation : ''
  });

  useEffect(() => {
    if (storedUser) {
      setInputs({
        firstname: storedUser.firstName,
        lastname: storedUser.lastName,
        email: storedUser.email,
        phonenumber: storedUser.phoneNumber,
        occupation: storedUser.occupation
      });
    }
  }, [storedUser]);

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const realpassword = inputs.password;

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
        showToast("Success!", "Personal Information was updated successfully!", "success");
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
  console.log(realpassword);

  const currpasswordRef = React.createRef();
  const passwordRef = React.createRef();
  const confpasswordRef = React.createRef();

  let screenHeight = Dimensions.get('window').height;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNav
        iconLeft="arrow-left"
        title="Personal Information"
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
              Personal {"\n"}
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
              Update your personal information securely{"\n"}
              for accuracy.{" "}
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
              placeholder="First Name"
              value={inputs.firstname}
              error={errors.firstname}
              onFocus={() => {
                handeleError(null, "firstname");
              }}
              onChangeText={(text) => handelOnChange(text, "firstname")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>
              <Input 
              ref={null}
              returnKeyType="next"
              placeholder="Last Name"
              value={inputs.lastname}
              error={errors.lastname}
              onFocus={() => {
                handeleError(null, "lastname");
              }}
              onChangeText={(text) => handelOnChange(text, "lastname")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>
              <Input 
              ref={null}
              returnKeyType="next"
              placeholder="Email Address"
              value={inputs.email}
              error={errors.email}
              onFocus={() => {
                handeleError(null, "email");
              }}
              onChangeText={(text) => handelOnChange(text, "email")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>
              <Input 
              ref={null}
              returnKeyType="next"
              placeholder="Phone Number"
              value={inputs.phonenumber}
              error={errors.phonenumber}
              onFocus={() => {
                handeleError(null, "phonenumber");
              }}
              onChangeText={(text) => handelOnChange(text, "phonenumber")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>
              <Input 
              ref={null}
              returnKeyType="next"
              placeholder="Occupation"
              value={inputs.occupation}
              error={errors.occupation}
              onFocus={() => {
                handeleError(null, "occupation");
              }}
              onChangeText={(text) => handelOnChange(text, "occupation")}
              onSubmitEditing={null}
              blurOnSubmit={false}/>
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 30 }}>
            <Button title="Update Profile" onPress={validate} />
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};


export default UpdatePersonalInformation;
