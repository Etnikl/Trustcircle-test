import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TextInput } from "react-native";
import COLORS from "../constants/colors";

const InputLogins = React.forwardRef(({
    label, 
    iconName, 
    error, 
    password, 
    returnKeyType,
    onSubmitEditing, // Add this prop
    blurOnSubmit, // Add this prop
    onFocus=()=> {}, 
    ...props
    }, ref) => { // Add the ref parameter here

        const [isFocused,setIsFocused] = React.useState(false);
        const [hidePassword, setHidePassword] = React.useState(password);

    return (
        <View style={{marginBottom: 6}}>
            <View 
                style={[
                    style.inputContainer,
                    {borderColor: error ?COLORS.errorcolor:isFocused ? COLORS.primary:COLORS.warmew }
                ]}>
                <Icon name={iconName} style={{fontSize: 22, color: COLORS.primary, marginRight: 10}} />
                <TextInput 
                    ref={ref} // Pass the ref here
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    returnKeyType={returnKeyType}
                    onSubmitEditing={onSubmitEditing} // Add this prop
                    blurOnSubmit={blurOnSubmit} // Add this prop
                    onFocus={()=> {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={()=> {
                        setIsFocused(false);
                    }}
                    style={{color: COLORS.primary, flex: 1, fontSize: 16}} 
                    {...props}
                />
                    {password && (
                        <Icon 
                        onPress={()=>setHidePassword(!hidePassword)}
                        style={{fontSize:22, color: COLORS.primary}} 
                        name={hidePassword ? "eye-outline" : "eye-off-outline"}
                        />
                    )}
            </View>
            {error && (
                <Text 
                style={{
                    color: COLORS.errorcolor,
                    marginVertical: 3,
                    marginLeft: 20,
                    fontSize: 12
                }}>
                {error}
            </Text>
            )}
        </View>
    );
});

const style = StyleSheet.create({
    inputContainer: {
        height: 48,
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderWidth: 1.5,
        borderRadius: 26,
        alignItems: 'center',
        borderColor: COLORS.warmew,
        backgroundColor: COLORS.warmew 
    }
})

export default InputLogins;
