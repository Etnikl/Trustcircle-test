import React from "react";
import { Text, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";
const Button = ({title, onPress={}=()=>{}}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: 48,
                width: "100%",
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 26
            }}>
            <Text 
                style={{
                    color: COLORS.textcolor,
                    fontWeight: 'bold',
                    fontSize: 18,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;