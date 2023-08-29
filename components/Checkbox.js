import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';
import Svg, { Path } from 'react-native-svg';


const Checkbox = ({ label, initialChecked = false, onCheckedChange }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onCheckedChange) {
      onCheckedChange(!isChecked);
    }
  };

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={handleCheckboxChange}>
      <View
        style={{
          height: 20,
          width: 20,
          borderWidth: 2,
          color: COLORS.buttonGrey,
          borderColor: COLORS.buttonGrey,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 8,
        }}>
        {isChecked ? (
          <Svg
            width="16"
            height="16"
            viewBox="0 0 24 24">
            <Path
              d="M20 6L9 17l-5-5"
              stroke="#F5F5F5"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        ) : null}
      </View>
      <Text style={{color: COLORS.buttonGrey}}>{label}</Text>
    </TouchableOpacity>
  );
};

const CheckboxModal = ({ label, initialChecked = false, onCheckedChange }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onCheckedChange) {
      onCheckedChange(!isChecked);
    }
  };

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={handleCheckboxChange}>
      <View
        style={{
          height: 20,
          width: 20,
          borderWidth: 2,
          color: COLORS.secondary,
          borderColor: COLORS.secondary,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 8,
        }}>
        {isChecked ? (
          <Svg
            width="16"
            height="16"
            viewBox="0 0 24 24">
            <Path
              d="M20 6L9 17l-5-5"
              stroke="#0F2D4E"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        ) : null}
      </View>
      <Text style={{color: COLORS.secondary, fontSize: 16}}>{label}</Text>
    </TouchableOpacity>
  );
};

export {Checkbox, CheckboxModal};
