import React from 'react'
import { ImageBackground, SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors'
import { LinearGradient } from "expo-linear-gradient"
import InputLogins from '../../components/InputLogins'
import Button from '../../components/Button'


const Login = ({navigation}) => {

  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);


  const handelOnChange = (text, input) => {
    setInputs((prevState)=>({...prevState, [input]: text}))
  };

  const handeleError = (errorMessage, input) => {
      setErrors((prevState)=>({...prevState, [input]:errorMessage}) )
  };

  return (
    <LinearGradient
    style={{
        flex: 1,
    }}
    colors={[COLORS.secondary, COLORS.primary]}
>
  <SafeAreaView 
          style={{
            height: '100%',
          }}>
        <View>
          <ImageBackground 
            style={{
              height: 120,
              marginTop: 75,
            }} 
            resizeMode="contain"
            source={require("../assets/images/LogoTC.png")} />
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
                   <InputLogins
                        returnKeyType="next"
                        iconName={'email'}
                        placeholder="Email"
                        error={errors.email}
                        onFocus={()=> {
                            handeleError(null, "email");
                        }}
                        onChangeText = {(text)=>handelOnChange(text,"email")}
                    />
                    <InputLogins
                        iconName={'lock'}
                        placeholder="Password"
                        error={errors.password}
                        onFocus={()=> {
                            handeleError(null, "password");
                        }}
                        password
                        onChangeText = {(text)=>handelOnChange(text,"password")}
                    />
                  {/* <TextInput 
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
                    }} /> */}

                    {/* <TextInput 
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
                    }} /> */}
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
                    onPress={()=> navigation.navigate('Welcome')}
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
                  onPress={()=> navigation.navigate('SignUp')}
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
                            source={require("../assets/images/AppleIcon.png")} />
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
                          source={require("../assets/images/GoogleIcon.png")} />
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
                          source={require("../assets/images/FbIcon.png")} />
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
        <View>
      <Text style={{
        fontSize: 11,
        color: COLORS.secondary,
        textAlign: 'center',
        paddingTop: 100
      }}
        onPress={()=> navigation.navigate('Welcome')}
      >
        We need some more informations.
      </Text>
    </View>
      </SafeAreaView>
  </LinearGradient>
  )
}

export default Login