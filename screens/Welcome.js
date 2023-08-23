
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button_Old';

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
        style={{
            flex: 1,
        }}
        colors={[COLORS.secondary, COLORS.primary]}
    >
        <View style={{flex: 1, paddingHorizontal: 25}}>
            <View style={{marginTop: 120}}>
                <Image 
                    source={require("../assets/images/LogoTC.png")}
                    style={{
                        height: 125, 
                        width: 125,
                        alignSelf: 'center',
                    }}
                />
                <View style={{marginTop: 10}}>
                    <Text 
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 46,
                            fontWeight: "bold",
                            alignSelf: 'center',
                            color: COLORS.textcolor,
                            textAlign: 'center',
                        }}>
                    TrustCircle</Text>
                    <Text 
                        style={{
                            fontFamily: 'Arial',
                            fontSize: 14,
                            color: COLORS.textcolor,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}>
                    Building Trust. Connecting You.</Text>
                </View>
                <Button
                    title="Login"
                    onPress={()=>navigation.navigate("Login")}
                    style={{
                        marginTop: 20,
                        with: '100%'
                    }}
                />
                <Button
                    title="Create Account"
                    onPress={()=>navigation.navigate("SignUp")}
                    style={{
                        marginTop: 20,
                        with: '100%'
                    }}
                />
                <Button
                    title="VerifyEmail"
                    onPress={()=>navigation.navigate("VerifyEmail")}
                    style={{
                        marginTop: 20,
                        with: '100%'
                    }}
                />
                <Button
                    title="ChangePassword"
                    onPress={()=>navigation.navigate("ChangePassword")}
                    style={{
                        marginTop: 20,
                        with: '100%'
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.white
                    }}>
                        Apply this </Text>
                    <Pressable
                        onPress={()=>navigation.navigate("TermsConditions")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            fontWeight: 'bold',
                            textDecorationLine: 'underline'
                        }}>
                            Terms Conditions
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </LinearGradient>
  )
}

export default Welcome