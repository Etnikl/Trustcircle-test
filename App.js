import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, SignUp, SignUpProcess1, SignUpProcess2, SignUpProcess3, Welcome, TermsConditions, ChangePassword, ForgotPassword, Oppurtunities, AppSettings, Home, SearchScreen } from "./screens";


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SignUpProcess1"
          component={SignUpProcess1}
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
            animationEnabled: true
          }}
        />
        <Stack.Screen 
          name="SignUpProcess2"
          component={SignUpProcess2}
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
            animationEnabled: true
          }}
        />
        <Stack.Screen 
          name="SignUpProcess3"
          component={SignUpProcess3}
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
            animationEnabled: true
          }}
        />
        <Stack.Screen 
          name="TermsConditions"
          component={TermsConditions}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="ChangePassword"
          component={ChangePassword}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="Oppurtunities"
          component={Oppurtunities}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="AppSettings"
          component={AppSettings}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


