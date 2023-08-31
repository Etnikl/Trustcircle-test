import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, ActivityIndicator } from "react-native";
import COLORS from "../constants/colors";

const TermsShow = ({ items }) => {
    if (!items) {
        return (
        <ActivityIndicator size="large" color={COLORS.primary} />
      )}
    
      const lastIndex = items.length - 1; // Get the index of the last item

  return (
    <ScrollView
      style={{
              flex: 1,
              flexDirection: "column",
              alignSelf: 'center',
              marginTop: 20,
          }}
          showsVerticalScrollIndicator={false}
    >
      {items.map((item, index) => (
        <View
          key={index}
          style={[
                styles.itemContainer,
                { backgroundColor: item.backgroundColor || "white" },
                index === lastIndex ? styles.lastItem : {},
            ]}
        >
          <View style={{flex: 1, display: 'flex', flexDirection: 'column', width:'auto'}}>
            <Text style={styles.role}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

let screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    itemContainer: {
      width: screenWidth, 
      paddingVertical: 15,
      paddingHorizontal: 25,
      overflow: 'hidden',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    role: {
      color: COLORS.primary,
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
    },
    lastItem: {
      marginBottom: 70,
    },
    description: {
      textAlign: 'justify',
    }
});

export default TermsShow;
