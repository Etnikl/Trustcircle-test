import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../constants/colors';

const TopNav = ({ 
    iconLeft, 
    iconRight, 
    title, 
    onPressLeft, 
    onPressRight 
}) => {
  return (
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
  );
};

export default TopNav;
