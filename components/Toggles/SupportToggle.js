import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const SupportToggle = ({ title, paragraph }) => {
    const [isOpen, setIsOpen] = useState(false);
    const rotateValue = new Animated.Value(0); // Initial value for rotation: 0
  
    useEffect(() => {
      Animated.timing(rotateValue, {
        toValue: isOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [isOpen]);
  
    const rotate = rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg'],
    });
  
    const toggleDiv = () => {
      setIsOpen(!isOpen);
    };
  

  return (
    <View>
      <TouchableOpacity onPress={toggleDiv} style={styles.titleContainer}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }} >
        <Text style={styles.title}>{title}</Text>
        <Animated.Image
          style={{
            ...styles.arrow,
            transform: [{ rotate }],
          }}
          source={require('../../assets/images/IconArrowGo.png')}
        />
        </View>
        {isOpen && (
        <View style={styles.content}>
          <Text>{paragraph}</Text>
        </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.supToggle,
    padding: 20,
    marginBottom: 6,
  },
  title: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
    display:'flex',
    flex: 1,
  },
  arrow: {
    width: 20,
    height: 20,
    display: 'flex',
    resizeMode: 'contain',
    marginLeft: 10,
  },
  content: {
    marginTop: 15,
    fontSize: 12,
    color: COLORS.primary,
    textAlign: 'justify',
  },
});

export default SupportToggle;
