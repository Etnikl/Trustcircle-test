import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import COLORS from '../constants/colors';

const ScrollComponent = ({ items }) => {

    if (!items) {
      return null; // or return a loading spinner, or some other fallback component
    }

    const lastIndex = items.length - 1;

  return (
    <SafeAreaView style={{paddingVertical: 20}}>
    <ScrollView horizontal={true} style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <View key={index}  style={[
            styles.itemContainer,
            { backgroundColor: item.backgroundColor || 'white' },
            index === lastIndex ? styles.lastItem : {},
          ]}>
          <Image style={styles.image} source={item.imageSource} />
          <View>
            <Text style={styles.text1}>{item.text1}</Text>
            <Text style={styles.text2}>{item.text2}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
  itemContainer: {
    height: 123,
    width: 166,
    padding: 16,
    justifyContent: 'space-between',
    marginRight: 10, // spacing between items
    alignItems: 'flex-start', // align items to the right
    backgroundColor: COLORS.primary,
    borderRadius: 15,
  },
  lastItem: {
    marginRight: 50,  // Increase margin for the last item
  },
  image: {
    width: 40, // You can set your own dimensions
    height: 30,
  },
  text1: {
    fontSize: 18,
    color: COLORS.warmew,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 12,
    color: COLORS.warmew,
  },
});

export default ScrollComponent;
