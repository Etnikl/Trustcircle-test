import React from "react";
import { View, TouchableOpacity, Text, ImageBackground, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "../constants/colors";

const BottomNav = ({ notifications }) => {

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  console.log('Screen Width:', screenWidth);
  console.log('Screen Height:', screenHeight);

  const handleIcon1Press = () => {
    console.log("Icon 1 pressed");
    // Add your logic here
  };

  const handleIcon2Press = () => {
    console.log("Icon 2 pressed");
    // Add your logic here
  };

  const handleIcon3Press = () => {
    console.log("Icon 3 pressed");
    // Add your logic here
  };

  const handleIcon4Press = () => {
    console.log("Icon 4 pressed");
    // Add your logic here
  };

  const handleIcon5Press = () => {
    console.log("Icon 5 pressed");
    // Add your logic here
  };

  return (
    <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    }}>
      <View
        style={{
          backgroundColor: COLORS.buttonGrey,
          alignItems: "flex-start",
          height: 90,
          paddingTop: 5,
          paddingHorizontal: 25,
        }}
      >
        <View style={{
          width: screenWidth - 50,
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={{padding: 10, justifyContent: 'center', alignItems: 'center'}} onPress={handleIcon1Press}>
            <ImageBackground
                style={{ height: 25, width: 25 }}
                source={require("../assets/images/IconHome.png")}
              />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10, justifyContent: 'center', alignItems: 'center'}} onPress={handleIcon2Press}>
            <ImageBackground
              style={{ height: 25, width: 25 }}
              source={require("../assets/images/IconSearch.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10, justifyContent: 'center', alignItems: 'center'}} onPress={handleIcon3Press}>
              <ImageBackground
                  style={{ height: 40, width: 40 }}
                  source={require("../assets/images/IconTCR.png")}
              />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10, justifyContent: 'center', alignItems: 'center'}} onPress={handleIcon4Press}>
            <View>
              {/* <Icon style={{ fontSize: 28, color: COLORS.bottomNavButton }} name="bell" /> */}
              <ImageBackground
                style={{ height: 28, width: 22 }}
                source={require("../assets/images/IconBell.png")}
              />
              {notifications && (
                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    right: -10,
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>
                    {notifications}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10, justifyContent: 'center', alignItems: 'center'}} onPress={handleIcon5Press}>
          <ImageBackground
              style={{ height: 19, width: 24 }}
              source={require("../assets/images/IconMenu.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomNav;
