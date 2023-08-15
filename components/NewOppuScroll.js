import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import COLORS from "../constants/colors";

const NewOppuScroll = ({ items }) => {
  if (!items) {
    return null; // or return a loading spinner, or some other fallback component
  }

  const lastIndex = items.length - 1; // Get the index of the last item

  const itemWidth = screenWidth;

  return (
    <SafeAreaView 
        style={{ 
            flexDirection: 'column', 
            height: 180, 
            }}>
        <View style={{paddingHorizontal: 25, paddingBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }} >
            <Text 
                style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.secondary,
                }}>
                New Oppurtunity</Text>
            <TouchableOpacity onPress={null} >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.notificationCount}>See All</Text>
                    <ImageBackground
                        style={{ height: 14, width: 8, marginLeft: 10 }}
                        source={require("../assets/images/IconArrowGo.png")}
                    />
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView
        horizontal={true}
        style={{
            flex: 1,
            flexDirection: "row",

        }}
        snapToInterval={itemWidth} // Snap to each item
        snapToAlignment="center" // Align to the start of the scroll view
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
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
    </SafeAreaView>
  );
};

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scrollContainer: {
    
  },
  itemContainer: {
    width: screenWidth - 50, // Adjust as needed
    padding: 15,
    overflow: 'hidden',
    height: 140,
    flex: 1,
    marginHorizontal: 25,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.lightgrey,
  },
  lastItem: {
    marginRight: 25,
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
  Status: {
    color: 'green'
  },
  description: {
    overflow: 'hidden',
    fontSize: 12,
    marginTop: 10,
  },
});

export default NewOppuScroll;
