import { StatusBar } from 'expo-status-bar';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Alert,
} from 'react-native';
const {height} = Dimensions.get("window");


export default function App() {
  return (
    <SafeAreaView 
        style={{
          height: '100%',
          backgroundColor: '#0F2D4E',
        }}>
      <View>
        <ImageBackground 
          style={{
            height: 120,
            marginTop: 75,
          }} 
          resizeMode="contain"
          source={require("./assets/images/LogoTC.png")} />
          <Text 
            style={{
              fontFamily: 'Arial',
              fontSize: 46,
              fontWeight: "bold",
              alignSelf: 'center',
              color: "#DAE1ED",
              textAlign: 'center',
              marginTop: 10,
            }}>
            TrustCircle</Text>
            <Text 
              style={{
                fontFamily: 'Arial',
                fontSize: 14,
                color: "#DAE1ED",
                alignSelf: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              Building Trust. Connecting You.</Text>
              <View 
                style={{
                  marginTop: 55,
                  paddingHorizontal: 25,
                }}>
                <TextInput 
                  placeholder='Email' 
                  placeholderTextColor={"#3F73AF"}
                  style={{
                  backgroundColor: '#DAE1ED',
                  color: '#3F73AF',
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  borderRadius: 26,
                  fontSize: 16,
                  marginBottom: 6,
                  }} />

                  <TextInput 
                  placeholder='Password' 
                  placeholderTextColor={"#3F73AF"}
                  secureTextEntry   
                  style={{
                  backgroundColor: '#DAE1ED',
                  color: '#3F73AF',
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  borderRadius: 26,
                  fontSize: 16,
                  }} />
              </View>
              <View 
              style={{
                marginTop: 25,
                paddingHorizontal: 25,
                flexDirection: 'row',
                flex: '(2,1fr)',
                justifyContent: 'space-between'
              }}>
                <Text 
                  style={{
                    color: "#DAE1ED",
                  }}>
                  Remember Me
                </Text>
                <Text 
                  style={{
                    color: "#DAE1ED",
                  }}>
                  Forgot Password?
                </Text>
              </View>
              <TouchableOpacity 
                onPress={() => 
                  Alert.alert('Login Success')
                  }
                style={{
                  marginTop: 50,
                  marginHorizontal: 25,
                  borderRadius: 25,
                  backgroundColor: '#F5F5F5',
                }}>
                <Text 
                  style={{
                    paddingVertical: 15,
                    textAlign: 'center',
                    fontSize: 17,
                    fontWeight: '600',
                    color: '#3F73AE',
                  }}>
                  Log in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={ () =>
                  Alert.alert('Create Account Will Open')
                }
                style={{
                  marginTop: 8,
                  marginHorizontal: 25,
                  borderWidth: 2,
                  borderColor: '#F5F5F5',
                  borderRadius: 26,
                }}>
                <Text 
                  style={{
                    paddingVertical: 15,
                    textAlign: 'center',
                    fontSize: 17,
                    fontWeight: '600',
                    color: '#F5F5F5',
                  }}>
                  Create Account
                </Text>
              </TouchableOpacity>
              
              <View 
              style={{
                width: '100%',
                paddingHorizontal: 25,
                flex: '(3,1fr)',
                justifyContent: 'center',
                alignContent: 'stretch',
                flexDirection: 'row',
                marginTop: 15,
              }}>
                  <Text style={{
                    alignSelf: 'center',
                    backgroundColor: '#fefefe',
                    height: 1,
                    width: 110,
                  }}
                  > </Text>
                  <Text style={{
                    paddingHorizontal: 7,
                    color: '#DAE1ED',
                  }}
                  > Or continue with </Text>
                  <Text style={{
                    alignSelf: 'center',
                    backgroundColor: '#fefefe',
                    height: 1,
                    width: 110,
                  }}
                  > </Text>
              </View>
              <View  
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  width: 140,
                  alignSelf: 'center',  
                }}>
                    <View 
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity>
                        <ImageBackground 
                          style={{
                            height: 40, width: 40,
                          }} 
                          source={require("./assets/images/AppleIcon.png")} />
                        </TouchableOpacity>
                    </View>

                    <View 
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                      <TouchableOpacity>
                      <ImageBackground 
                        style={{
                          height: 40, width: 40,
                        }} 
                        source={require("./assets/images/GoogleIcon.png")} />
                      </TouchableOpacity>
                    </View>

                    <View 
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                      <TouchableOpacity>
                      <ImageBackground 
                        style={{
                          height: 40, width: 40,
                        }} 
                        source={require("./assets/images/FbIcon.png")} />
                      </TouchableOpacity>
                    </View>
              </View>
              <Text 
              style={{
                marginTop: 10,
                textAlign: 'center',
                fontSize: 10,
                color: '#DAE1ED',
              }}>
              We will need some more information after</Text>
              <View
                style={{
                marginTop: 55,
                }}>
                <Text
                style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#DAE1ED',
                }}>By using Trust Circle, you agreeing to our</Text>
                <Text
                style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#DAE1ED',
                }}>
                <Text 
                style={{
                  fontWeight: 'bold', 
                  textDecorationLine: 'underline',
                  }}>
                Terms of Service</Text> and <Text 
                style={{
                  fontWeight: 'bold', 
                  textDecorationLine: 'underline',
                  }}>
                  Privacy Policy</Text>
                </Text>
              </View>
      </View> 
    </SafeAreaView> 
  );
}


