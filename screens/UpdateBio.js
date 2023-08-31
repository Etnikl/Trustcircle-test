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

const UpdateBio = ({ navigation }) => {

  const userDetails = useSelector((state) => state.user);

  const storedUser = usersData.users.find(
    (user) => user.id === userDetails.id
  );

  const [inputs, setInputs] = useState({
    bio: storedUser ? storedUser.bio : '',
  });

  useEffect(() => {
    if (storedUser) {
      setInputs({
        bio: storedUser.bio,
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
        showToast("Success!", "Personal biography was updated successfully!", "success");
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
              About Me
            </Text>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 16,
                fontWeight: "400",
                marginVertical: 5,
              }}
            >
              Update your bio to share more about yourself!{"\n"}
              Add a brief description, interests, or anything you'd{"\n"}
              like others to know. Let your profile reflect your{"\n"}
              unique personality.{" "}
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
              placeholder="BIO"
              value={inputs.bio}
              error={errors.bio}
              onFocus={() => {
                handeleError(null, "bio");
              }}
              onChangeText={(text) => handelOnChange(text, "bio")}
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


export default UpdateBio;
