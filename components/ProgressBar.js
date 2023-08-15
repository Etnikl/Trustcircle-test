import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ProgressBar = ({ progress }) => {

  // Calculate the percentage
  const percentage = Math.round(progress * 100);

  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${percentage}%` }]} />
      <Text style={styles.label}>{percentage}%</Text>
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

export default ProgressBar;
