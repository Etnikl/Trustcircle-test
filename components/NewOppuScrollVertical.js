import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import COLORS from "../constants/colors";

const NewOppuScrollVertical = ({ items , onPress={}=()=>{} }) => {
  if (!items) {
    return null; // or return a loading spinner, or some other fallback component
  }

  const lastIndex = items.length - 1; // Get the index of the last item

  const itemWidth = screenWidth;

  return (
        <ScrollView
          style={{
              flex: 1,
              flexDirection: "column",
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
            <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.titleRow2}>
                <Text style={styles.label}>User: {item.user}</Text> 
                <Text style={styles.labelStatus}>
                    Status: <Text style={styles.Status} >{item.status}</Text>
                </Text>
                <Text style={styles.label}>State: {item.state}</Text>
            </View>
            <View style={{overflow: 'hidden', paddingBottom: 15}} >
              <Text style={styles.description}>{item.description}</Text>  
            </View>
            </View>
        ))}
        </ScrollView>
  );
};

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollContainer: {
    
  },
  itemContainer: {
    width: screenWidth - 50, 
    padding: 15,
    overflow: 'hidden',
    height: 140,
    flex: 1,
    marginHorizontal: 25,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.lightgrey,
    marginBottom: 15,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: "space-between",
  },
  titleRow2: {
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    paddingBottom: 2,
    borderBottomColor: COLORS.lightgrey,
  },
  title: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 18,
  },
  time: {
    fontSize: 10,
    color: COLORS.primary,
  },
  label: {
    fontSize: 10,
    marginTop: 5,
    marginRight: 5,
    color: COLORS.lightgrey,
  },
  labelStatus: {
    fontSize: 10,
    marginTop: 5,
    marginRight: 5,
    color: COLORS.lightgrey,
  },
  lastItem: {
    marginBottom: 70,
  },
  Status: {
    color: 'green'
  },
  description: {
    overflow: 'hidden',
    fontSize: 12,
    marginTop: 10,
  },
});

export default NewOppuScrollVertical;
