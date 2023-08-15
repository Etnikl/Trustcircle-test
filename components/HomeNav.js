import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.homeNav, 
    borderBottomColor: COLORS.lightgrey,
    borderBottomWidth: 1.5,
    flexDirection: 'row', 
    alignItems: 'center', 
    height: 130, 
    paddingTop: 60, 
    paddingHorizontal: 25,
    position: 'relative'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: '400',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
});

const HomeNav = ({ name }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/IconTCR.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </View>
  );
};

export default HomeNav;
