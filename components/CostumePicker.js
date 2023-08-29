import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import COLORS from '../constants/colors';
import { forwardRef, useImperativeHandle } from 'react';
import { Button, ButtonModalC, ButtonModalS } from './Button';
import { CheckboxModal } from './Checkbox';

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

const CustomPicker2 = forwardRef(({ options, onValueChange, placeholder, modaltitle }, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(placeholder);
  const [tempSelectedValue, setTempSelectedValue] = useState(null); // temporary selected value
  const [selectedSubOptions, setSelectedSubOptions] = useState([]); // selected sub-options

  const handleSelect = (value, label) => {
    setTempSelectedValue(label);
  };

  const toggleSubOption = (subOption) => {
    setSelectedSubOptions((prev) =>
      prev.includes(subOption) ? prev.filter((x) => x !== subOption) : [...prev, subOption]
    );
  };

  const handleSubmit = () => {
    setSelectedValue(tempSelectedValue); // finalize the selection
    setIsModalVisible(false);
    if (onValueChange) {
      onValueChange(tempSelectedValue, selectedSubOptions); // pass both main and sub-options
    }
  };

  const handleCancel = () => {
    setTempSelectedValue(null); // reset temporary selection
    setSelectedSubOptions([]); // reset sub-options
    setIsModalVisible(false);
  };

  const circlestyle = StyleSheet.create({
    circle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: COLORS.primary,
      marginLeft: 8,
    },
    circle2: {
      width: 20,
      height: 20,
      borderRadius: 10,
      marginLeft: 8,
      borderWidth: 2,
      borderColor: COLORS.primary
    }
  })

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightgrey,
        color: COLORS.secondary,
        backgroundColor: tempSelectedValue === item.label ? COLORS.supToggle : 'white',
      }}
      onPress={() => handleSelect(item.value, item.label)}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
        {tempSelectedValue === item.label ? <View style={circlestyle.circle}></View> : <View style={circlestyle.circle2}></View>}
        <Text style={{ paddingVertical: 16, paddingHorizontal: 8, fontSize: 16, color: COLORS.secondary }}>{item.label}</Text>
      </View>
      {tempSelectedValue === item.label && (
        <View style={{ paddingLeft: 25, paddingBottom: 10 }}>
          {item.sub?.map((subOption) => (
            <View key={subOption} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, }}>
              <CheckboxModal
                value={selectedSubOptions.includes(subOption)}
                onValueChange={() => toggleSubOption(subOption)}
                label={subOption}
              />
            </View>
          ))}
        </View>
      )}
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
        <Text style={{ fontSize: 16, color: COLORS.lightgrey }}>{selectedValue}</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={handleCancel}
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
          }}>{modaltitle}</Text>
          <FlatList
            style={{
              color: COLORS.secondary,
            }}
            data={options}
            renderItem={renderItem}
            keyExtractor={(item) => item.value.toString()}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 16, backgroundColor: COLORS.buttonGrey }}>
            <ButtonModalC title="Cancel" onPress={handleCancel} />
            <ButtonModalS title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
    </View>
  );
});

export {CustomPicker, CustomPicker2};


