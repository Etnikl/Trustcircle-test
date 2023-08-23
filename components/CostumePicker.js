import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import COLORS from '../constants/colors';
import { forwardRef, useImperativeHandle } from 'react';


const CustomPicker = forwardRef(({ options, onValueChange, placeholder, modaltitle }, ref) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(placeholder);
  
    const handleSelect = (value, label) => {
      setSelectedValue(label);
      setIsModalVisible(false);
      if (onValueChange) {
        onValueChange(value);
      }
    };
  
    useImperativeHandle(ref, () => ({
      open: () => setIsModalVisible(true),
      close: () => setIsModalVisible(false),
    }));

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightgrey
    }} onPress={() => handleSelect(item.value, item.label)}>
      <Text style={{ 
        padding: 16, 
        fontSize: 16,
        }}
        >{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginBottom: 6 }}>
      <TouchableOpacity
        style={{
          height: 48,
          paddingHorizontal: 20,
          borderWidth: 1.5,
          borderRadius: 26,
          justifyContent: 'center',
          borderColor: COLORS.lightgrey,
        }}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={{ fontSize: 16, color: COLORS.lightgrey }}>
          {selectedValue}
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        style={{
            paddingHorizontal: 5,
        }}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'white',
            borderRadius: 16,
            overflow: 'hidden',
          }}
        >
          <Text style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            color: COLORS.primary,
            fontWeight: '700',
            fontSize: 16,
            backgroundColor: COLORS.buttonGrey,
          }} >{modaltitle}</Text>
          <FlatList style={{
            color: COLORS.secondary
          }}
            data={options}
            renderItem={renderItem}
            keyExtractor={(item) => item.value.toString()}
          />
        </View>
      </Modal>
    </View>
  );
});

const CustomPicker2 = forwardRef(({ options, onValueChange, placeholder, modaltitle, defaultValue }, ref) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || placeholder);
    const [buttonOpacity, setButtonOpacity] = useState(1);
  
    const handleSelect = (value, label) => {
    //   setSelectedValue(label);
      setIsModalVisible(false);
      if (onValueChange) {
        onValueChange(value);
      }
    };
  
    useImperativeHandle(ref, () => ({
      open: () => setIsModalVisible(true),
      close: () => setIsModalVisible(false),
    }));
  
    const handlePressIn = () => {
      setButtonOpacity(0.7);
    };
  
    const handlePressOut = () => {
      setButtonOpacity(1);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.lightgrey
        }} onPress={() => handleSelect(item.value, item.label)}>
          <Text style={{ 
            padding: 16, 
            fontSize: 16,
            }}
            >{item.label}</Text>
        </TouchableOpacity>
      );
    
      return (
        <View style={{ marginBottom: 6 }}>
        <TouchableOpacity
            style={{
            height: 48,
            paddingHorizontal: 20,
            borderWidth: 1.5,
            borderRadius: 26,
            justifyContent: 'center',
            borderColor: COLORS.lightgrey,
            opacity: buttonOpacity,
            }}
            onPress={() => setIsModalVisible(true)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={{ fontSize: 16, color: COLORS.lightgrey }}>
            {selectedValue}
            </Text>
        </TouchableOpacity>
          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setIsModalVisible(false)}
            style={{
                paddingHorizontal: 5,
            }}
          >
            <View
              style={{
                flex: 0.5,
                backgroundColor: 'white',
                borderRadius: 16,
                overflow: 'hidden',
              }}
            >
              <Text style={{
                paddingHorizontal: 16,
                paddingVertical: 20,
                color: COLORS.primary,
                fontWeight: '700',
                fontSize: 16,
                backgroundColor: COLORS.buttonGrey,
              }} >{modaltitle}</Text>
              <FlatList style={{
                color: COLORS.secondary
              }}
                data={options}
                renderItem={renderItem}
                keyExtractor={(item) => item.value.toString()}
              />
            </View>
          </Modal>
        </View>
      );
    });

export {CustomPicker, CustomPicker2};
