import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, ImageBackground, View, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const ButtonPrimary = ({title, onPress={}=()=>{}}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: 48,
                width: "100%",
                backgroundColor: COLORS.buttonGrey,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 26
            }}>
            <Text 
                style={{
                    color: COLORS.primary,
                    fontWeight: 'bold',
                    fontSize: 18,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const ButtonSecondary = ({title, onPress={}=()=>{}}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: 48,
                width: "100%",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 26,
                borderWidth: 2,
                borderColor: COLORS.buttonGrey,
            }}>
            <Text 
                style={{
                    color: COLORS.buttonGrey,
                    fontWeight: 'bold',
                    fontSize: 18,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
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
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 18,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const ButtonModalS = ({title, onPress={}=()=>{}}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: 48,
                paddingHorizontal: 40,
                width: 'auto',
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 26
            }}>
            <Text 
                style={{
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 18,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const ButtonModalC = ({title, onPress={}=()=>{}}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: 48,
                paddingHorizontal: 40,
                width: 'auto',
                backgroundColor: COLORS.warmew,
                justifyContent: 'center',
                borderColor: COLORS.lightgrey,
                borderWidth: 1.5,
                alignItems: 'center',
                borderRadius: 26
            }}>
            <Text 
                style={{
                    color: COLORS.secondary,
                    fontWeight: '500',
                    fontSize: 18,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const ButtonLicense = ({title, onPress={}=()=>{}}) => {
  return (
      <TouchableOpacity 
          activeOpacity={0.7}
          onPress={onPress}
          style={{
              height: 48,
              width: "100%",
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 26,
              borderWidth: 1.5,
              borderColor: COLORS.lightgrey,
              marginBottom: 6
          }}>
          <Text 
              style={{
                  color: COLORS.btnLicense,
                  fontWeight: 'bold',
                  fontSize: 18,
              }}>
              {title}
          </Text>
      </TouchableOpacity>
  );
}
const IconButton = ({ source, onPress, height = 40, width = 40 }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableOpacity onPress={onPress}>
          <ImageBackground
            style={{ height, width }}
            source={source}
          />
        </TouchableOpacity>
      </View>
    );
  };


const NavButton = ({
    label,
    leftSource,
    onPress,
    style,
    notificationCount,
    height = 25, width = 25,
    textStyle,
    ...props
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonContainer, style]}
        {...props}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ImageBackground
                style={{ height, width, marginRight: 10 }}
                source={leftSource}
            />
            <Text style={[styles.text, textStyle]}>{label}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.notificationCount}>{notificationCount}</Text>
            <ImageBackground
                style={{ height: 14, width: 8, marginLeft: 10 }}
                source={require("../assets/images/IconArrowGo.png")}
            />
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderWidth: 1,
      borderColor: COLORS.lightgrey,
      borderRadius: 26,
      backgroundColor: COLORS.warmew,
      height: 48,
      paddingHorizontal: 20,
      marginBottom: 6,
    },
    text: {
      color: COLORS.secondary,
      fontSize: 16,
      fontWeight: '600',
    },
    notificationCount: {
        marginLeft: 5,
        color: COLORS.primary,
        fontSize: 12,
        fontWeight: '600',
      },
    
  });

const NavButtonPri = ({
    label,
    leftSource,
    onPress,
    style,
    notificationCount,
    height = 25, width = 25,
    textStyle,
    ...props
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[stylespri.buttonContainer, style]}
        {...props}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ImageBackground
                style={{ height, width, marginRight: 10 }}
                source={leftSource}
            />
            <Text style={[stylespri.text, textStyle]}>{label}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={stylespri.notificationCount}>{notificationCount}</Text>
            <ImageBackground
                style={{ height: 14, width: 8, marginLeft: 10 }}
                source={require("../assets/images/IconArrowGo-w.png")}
            />
        </View>
      </TouchableOpacity>
    );
  };
  
  const stylespri = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderWidth: 1,
      borderColor: COLORS.lightgrey,
      borderRadius: 26,
      backgroundColor: COLORS.warmew,
      height: 48,
      paddingHorizontal: 20,
      marginBottom: 6,
    },
    text: {
      color: COLORS.warmew,
      fontSize: 16,
      fontWeight: '600',
    },
    notificationCount: {
        marginLeft: 5,
        color: COLORS.warmew,
        fontSize: 12,
        fontWeight: '600',
      },
    
  });


  const NavButtonRef = ({
    label,
    onPress,
    style,
    notificationCount,
    height = 25, width = 25,
    textStyle,
    ...props
  }) => {

    const getStatusStyle = (label) => {
        switch (label.toLowerCase()) {
          case 'active':
            return stylesref.active;
          case 'pending':
            return stylesref.pending;
          case 'closed':
            return stylesref.canceled;
          default:
            return {};
        }
      };

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[stylesref.buttonContainer, style]}
        {...props}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[stylesref.text, textStyle, getStatusStyle(label)]}>{label}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={stylesref.notificationCount}>{notificationCount}</Text>
            <ImageBackground
                style={{ height: 14, width: 8, marginLeft: 10 }}
                source={require("../assets/images/IconArrowGo.png")}
            />
        </View>
      </TouchableOpacity>
    );
  };
  
  const stylesref = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderWidth: 1,
      borderColor: COLORS.lightgrey,
      borderRadius: 26,
      backgroundColor: COLORS.warmew,
      height: 48,
      paddingHorizontal: 20,
      marginBottom: 6,
    },
    text: {
      color: COLORS.secondary,
      fontSize: 16,
      fontWeight: '600',
    },
    notificationCount: {
        marginLeft: 5,
        color: COLORS.primary,
        fontSize: 12,
        fontWeight: '600',
      },
      Status: {
        color: COLORS.primary,
      },
      active: {
        color: '#62AD0A',
      },
      pending: {
        color: '#FFAA00',
      },
      canceled: {
        color: COLORS.otherblue,
      },
  });
  
  

export { ButtonPrimary, ButtonSecondary, Button, IconButton, NavButton, NavButtonRef, NavButtonPri, ButtonLicense, ButtonModalS, ButtonModalC};