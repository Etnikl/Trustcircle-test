import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor
    const textColor = props.filled ? COLORS.darkgrey : COLORS.otherblue
  return (
    <TouchableOpacity
        style={{
            ...styles.button,
            ...{backgroundColor: bgColor},
            ...props.style
        }}
        onPress={props.onPress}
    >
        <Text style={{fontSize: 18, ... {color: textColor}}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
    button: {
        paddingVertical: 15,
        backgroundColor: COLORS.lightgrey,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
export default Button