import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import COLORS from '../constants/colors';
import Loader from './Loadings/Loader';

const ShowDetails = ({ label, value, type }) => {

    if (type === 1) {
        return (
          <View style={styles.itemDisplay}>
            <Text style={styles.label}> {label} </Text>
            <Text style={styles.subTitle}> {value} </Text>
          </View>
        );
      } else if (type === 2) {
        return (
        <View style={styles.itemDisplay2}>
            <Text style={styles.label2}> {label} </Text>
            <Text style={styles.subTitle2}> {value} </Text>
          </View>
        );
      } else if (type === 3) {
        return (
        <View style={styles.itemDisplay2}>
            <Text style={styles.subTitle2}> {value} </Text>
        </View>
        );
      }

      return (
        <View>
          <ActivityIndicator size="small" color={COLORS.primary} />
        </View>
      );
};

const ShowMoreDetails = ({label, onPress={}=()=>{}}) => {

    

    return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
    >
        <View style={styles.itemMoreDisplay}>
            <View>
                <Text style={styles.Morelabel}>{label}</Text>
            </View>
            <View style={{}}>
                <ImageBackground
                    style={{ height: 14, width: 8, marginLeft: 10 }}
                    source={require("../assets/images/IconArrowGo.png")}
                />
            </View>
        </View>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 14, 
        fontWeight: 'bold',
        color: COLORS.otherblue
    },
    label: {
        fontSize: 10, 
        fontWeight: '600', 
        color: COLORS.secondary,
        marginLeft: -3,
    },
    subTitle2: {
        fontSize: 15, 
        fontWeight: '400',
        color: COLORS.secSecondary
    },
    label2: {
        fontSize: 15, 
        fontWeight: '600', 
        color: COLORS.secondary,
    },
    itemDisplay2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 19,
        paddingVertical: 14,
        backgroundColor: COLORS.warmew,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: COLORS.lightgrey,
        marginBottom: 6,
    },
    itemDisplay: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: 19,
        paddingVertical: 10,
        backgroundColor: "#f7f7f7",
        borderRadius: 26,
        borderWidth: 1,
        borderColor: COLORS.lightgrey,
        marginBottom: 6,
    },
    itemMoreDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 19,
        paddingVertical: 14,
        backgroundColor: "#f7f7f7",
        borderRadius: 26,
        borderWidth: 1,
        borderColor: COLORS.lightgrey,
        marginBottom: 6,
    },
    Morelabel: {
        fontSize: 15, 
        fontWeight: '600', 
        color: COLORS.secondary,
    },
});

export { ShowDetails, ShowMoreDetails };
