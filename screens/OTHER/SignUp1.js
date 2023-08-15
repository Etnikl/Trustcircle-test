import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Keyboard, Image, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import COLORS from '../../constants/colors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import CustomModal from '../../components/CosutmModal';

const SignUp = ({navigation}) => {

    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const validate = () => {

        let valid = true;

        Keyboard.dismiss();
        if (!inputs.email) {
            handeleError("Please input email", "email");
            valid = false;
        }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handeleError("Please enter a valid email", "email");
        }

        if(!inputs.fullname) {
            handeleError("Please input fullname", "fullname");
        }

        if(!inputs.phone) {
            handeleError("Please input phone number", "phone");
        }

        if(!inputs.password) {
            handeleError("Please input password", "password");
        }else if(inputs.password.length < 6) {
            handeleError("Min password length of 6", "password")
        }

        if(valid) {
            register();
        }
    };

    const register = () => {
        setLoading(true);
        setTimeout(()=> {
            setLoading(false);

            try {
                AsyncStorage.setItem('user', JSON.stringify(inputs));
                navigation.navigate('Login');
            } catch (error) {
                Alert.alert("Error","Something went wrong");
            }

        }, 3000);
    }

    const handelOnChange = (text, input) => {
        setInputs((prevState)=>({...prevState, [input]: text}))
    };

    const handeleError = (errorMessage, input) => {
        setErrors((prevState)=>({...prevState, [input]:errorMessage}) )
    };

    const [selectedValue, setSelectedValue] = React.useState(null);

    console.log(inputs);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.warmew}}>
        <Loader visible={loading} />
        <ScrollView 
            contentContainerStyle={{
                paddingTop: 50,
                paddingHorizontal: 25,
            }}
            >
                <Text
                    style={{
                        color: COLORS.secondary,
                        fontSize: 36,
                        fontWeight: 'bold'
                    }}>
                Create {'\n'}
                Account
                </Text>
                <Text
                    style={{
                        color: COLORS.secondary,
                        fontSize: 18,
                        fontWeight: '500',
                        marginVertical: 5
                    }}>
                Personal Information
                </Text>
                <View 
                    style={{
                        marginVertical: 30
                    }}>
                    <Input
                        placeholder="First Name"
                        error={errors.firstname}
                        onFocus={()=> {
                            handeleError(null, "firstname");
                        }}
                        onChangeText = {(text)=>handelOnChange(text,"firstname")}
                    />
                    <Input
                        placeholder="Last Name"
                        error={errors.lastname}
                        onFocus={()=> {
                            handeleError(null, "lastname");
                        }}
                        onChangeText = {(text)=>handelOnChange(text,"lastname")}
                    />
                    <Input
                        placeholder="Email Address"
                        error={errors.email}
                        onFocus={()=> {
                            handeleError(null, "email");
                        }}
                        onChangeText = {(text)=>handelOnChange(text,"email")}
                    />
                    <Input 
                        keyboardType="numeric"
                        placeholder="Phone Number"
                        error={errors.phone}
                        onFocus={()=> {
                            handeleError(null, "phone");
                        }}
                        onChangeText = {(number)=>handelOnChange(number,"phone")}
                    />
                    <Input 
                        placeholder="Password"
                        error={errors.password}
                        onFocus={()=> {
                            handeleError(null, "password");
                        }}
                        password
                        onChangeText = {(text)=>handelOnChange(text,"password")}
                    />
                    <Input 
                        placeholder="Confirm Password"
                        error={errors.confpassword}
                        onFocus={()=> {
                            handeleError(null, "confpassword");
                        }}
                        password
                        onChangeText = {(text)=>handelOnChange(text,"confpassword")}
                    />
                    {/* <Input
                        placeholder="Occupation"
                        error={errors.occupation}
                        onFocus={()=> {
                            handeleError(null, "occupation");
                        }}
                        onChangeText = {(text)=>handelOnChange(text,"occupation")}
                    /> */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 6 }}>
                        <RNPickerSelect
                        require
                        onValueChange={(value) => setSelectedValue(value)}
                        placeholder={{ label: 'Occupation', value: null }}
                        items={[
                        { label: 'Real Estate Agent', value: 'RealEstateAgent' },
                        { label: 'Real Estate Broker', value: 'RealEstateBroker' },
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
                    <Input
                        placeholder="Add Additional Language"
                        error={errors.anotherlanguage}
                        onFocus={()=> {
                            handeleError(null, "anotherlanguage");
                        }}
                        onChangeText = {(text)=>handelOnChange(text,"anotherlanguage")}
                    />
                </View>
                <Button title="Send Verification Email" onPress={validate} />
                    <Text
                        onPress={()=> navigation.navigate('Login')}
                    >
                        Login
                    </Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp