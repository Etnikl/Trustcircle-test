import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import COLORS from '../constants/colors';
const Loader = ({visible = false}) => {

    const {height, width} = useWindowDimensions();

    return (
        visible && <View style={[style.container, {height, width}]}>
            <View style={[style.loader]}>
                <ActivityIndicator size="large" color={COLORS.primary} />
                <Text style={{marginRight: 10, fontSize: 16, color: COLORS.primary,}}>Loading...</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
    loader: {
        height: 70,
        backgroundColor: COLORS.warmew,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})

export default Loader;