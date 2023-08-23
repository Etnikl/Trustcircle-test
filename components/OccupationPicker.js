import React, { useRef, useState } from 'react';
import { View, Platform } from 'react-native';
import Picker from 'react-native-picker-select';
import COLORS from '../constants/colors';

const OccupationPicker = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const occupationController = useRef(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 6,
    }}>
      <Picker
        ref={occupationController}
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        style={{
          height: 48,
          width: '100%',
          borderWidth: 1.5,
          borderColor: COLORS.lightgrey,
          borderRadius: 26,
          color: COLORS.secondary,
        }}
      >
        <Picker.Item label="Occupation" value={null} />
        <Picker.Item label="Real Estate Agent" value="RealEstateAgent" />
        <Picker.Item label="Real Estate Broker" value="RealEstateBroker" />
      </Picker>
    </View>
  );
};

export default OccupationPicker;
