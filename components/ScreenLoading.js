import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import COLORS from '../constants/colors';
const ScreenLoading = ({visible = false}) => {

    const {height, width} = useWindowDimensions();

    return (
        visible && <View style={[style.container, {height, width}]}>
            <View style={[style.loader]}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center'
    },
    loader: {
        height: 100,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    }
})

export default ScreenLoading;