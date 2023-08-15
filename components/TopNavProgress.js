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
    
    <View style={{flex: 1, flexDirection: 'column'}} >
        <View style={{
        backgroundColor: COLORS.warmew, 
        borderBottomColor: COLORS.lightgrey,
        borderBottomWidth: 1.5,
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center', 
        height: 110, 
        paddingTop: 60, 
        paddingHorizontal: 25,
        position: 'relative'
      }}>
        {iconLeft && (
          <View style={{position: 'absolute', left: 25, bottom: 15 }}>
            <TouchableOpacity onPress={onPressLeft}>
              <Icon style={{fontSize:22, color: COLORS.secondary}} name={iconLeft} />
            </TouchableOpacity>
          </View>
        )}
        
        <Text style={{justifyContent: 'center', color:COLORS.secondary, fontSize: 16, fontWeight: '500'}}>
          {title}
        </Text>
        
        {iconRight && (
          <View style={{position: 'absolute', right: 25, bottom: 15 }}>
            <TouchableOpacity onPress={onPressRight}>
              <Icon style={{fontSize:22, color: COLORS.secondary}} name={iconRight} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <View style={[styles.bar, { width: `${percentage}%` }]} />
        <Text style={styles.label}>{percentage}%</Text>
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
    height: 20,
    width: screenWidth - 50,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  bar: {
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
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
