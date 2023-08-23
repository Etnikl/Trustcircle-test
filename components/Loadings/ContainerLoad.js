import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';
const ContainerLoad = ({visible = false}) => {

    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;

    return (
        visible && <View style={[style.container, {height: screenHeight-110, width: screenWidth}]}>
            <View style={[style.loader]}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
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

export default ContainerLoad;