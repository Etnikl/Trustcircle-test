import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../constants/colors';


const TopNavProgress = ({ 
    iconLeft, 
    iconRight, 
    title, 
    onPressLeft, 
    onPressRight,
    progress
}) => {

  const percentage = Math.round(progress * 100);

  return (
    
    <View style={{flexDirection: 'row'}} >
        <View style={{
        backgroundColor: COLORS.warmew, 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'flex-start', 
        height: 140, 
        paddingTop: 60, 
        paddingHorizontal: 25,
        position: 'relative'
      }}>
        <View style={{flexDirection: 'row'}} >
          {iconLeft && (
            <View style={{paddingBottom: 15,}}>
              <TouchableOpacity onPress={onPressLeft}>
                <Icon style={{fontSize:22, color: COLORS.secondary}} name={iconLeft} />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <Text style={{justifyContent: 'center', color:COLORS.secondary, fontSize: 12, fontWeight: '400'}}>
            {title}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.bar, { width: `${percentage}%` }]} />
         </View>
      </View>
    </View>
  );
};

  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 5,
    width: screenWidth - 50,
    backgroundColor: COLORS.buttonGrey,
    marginTop: 5,
  },
  bar: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  label: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TopNavProgress;
