import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, SignUp, Welcome, TermsConditions, ChangePassword, ForgotPassword } from "./screens";

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


