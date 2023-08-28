import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";
import COLORS from "../constants/colors";

const NotificationShow = ({ items, onPress = () => {} }) => {
    if (!items) {
        return null; // or return a loading spinner, or some other fallback component
      }
    
      const lastIndex = items.length - 1; // Get the index of the last item
    
      const itemWidth = screenWidth;

      const generateMessage = (item) => {
        const firstName = item.user.split(' ')[0];
        const lastNameInitial = item.user.split(' ')[1] ? item.user.split(' ')[1][0] : '';
        const fullName = `${firstName} ${lastNameInitial}.`;
      
        if (item.type.toLowerCase() === 'opportunity') {
          return (
            <>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: COLORS.secondary}} >{fullName} is looking to hire someone with your skill for the role of: </Text>
                <Text style={styles.role}>{item.role}</Text>
              </View>
            </>
          );
        } else if (item.type.toLowerCase() === 'referral') {
          return (
            <>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: COLORS.secondary}} >{fullName} asked you to review a referral proposal for his job: </Text>
                <Text style={styles.role}>{item.role}</Text>
              </View>
            </>
          );
        }
      };
      
  return (
    <ScrollView
      style={{
              flex: 1,
              flexDirection: "column",
              alignSelf: 'center'
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
          <View style={{width: 40, display: 'flex', marginRight: 15}} >
            <ImageBackground 
                style={{
                height: 40,
            }} 
            resizeMode="contain"
            source={require('../assets/images/LogoTC.png')} />
          </View>
          <View style={{flex: 1, display: 'flex', flexDirection: 'column', width:'auto', marginRight: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <Text style={styles.description}>{generateMessage(item)}</Text>
                <View style={{flexDirection:'column', alignItems: 'flex-end'}} >
                    <Text style={styles.time} >{item.time}</Text>
                    {item.state.toLowerCase() === 'new' && (
                        <View style={styles.circle} ></View>
                    )}
                </View>
            </View>
            {item.type.toLowerCase() === 'referral' && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonDecline}>
                        <Text style={styles.buttonTextDecline}>Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAccept}>
                        <Text style={styles.buttonTextAccept}>Accept</Text>
                </TouchableOpacity>
                </View>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;


// Your existing styles...
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    itemContainer: {
      width: screenWidth, 
      paddingVertical: 15,
      paddingHorizontal: 25,
      overflow: 'hidden',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: COLORS.lightgrey,
    },
    role: {
      color: COLORS.primary,
      fontWeight: '600',
      fontSize: 15,
    },
    time: {
      fontSize: 10,
      color: COLORS.primary,
      textAlign: 'left',
    },
    circle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        marginTop: 10,
      },
    label: {
      fontSize: 10,
      marginRight: 3,
      color: COLORS.lightgrey,
    },
    labelStatus: {
      fontSize: 10,
      marginTop: 5,
      marginRight: 3,
      color: COLORS.lightgrey,
    },
    lastItem: {
      marginBottom: 70,
    },
    Status: {
      color: COLORS.primary,
    },
    active: {
      color: 'green',
    },
    pending: {
      color: 'orange',
    },
    canceled: {
      color: 'red',
    },
    description: {
      overflow: 'hidden',
      fontSize: 15,
      width: '80%',
      marginRight: 10,
    },
  // ...existing styles
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonDecline: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    backgroundColor: COLORS.warmew,
    borderWidth: 1,
    borderColor: COLORS.lightgrey,
    borderRadius: 26,
  },
  buttonAccept: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 26,
  },
  buttonTextAccept: {
    color: COLORS.warmew,
    fontWeight: 'bold',
  },
  buttonTextDecline: {
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
});

export default NotificationShow;
