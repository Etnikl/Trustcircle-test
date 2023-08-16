import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import COLORS from "../constants/colors";
import languages from '../JSON/languages.json';

const LanguagePicker = (props) => {
  const [selectedLanguages, setSelectedLanguages] = useState(["English"]);
  const [pickerValue, setPickerValue] = useState(null);

  const languagePickerItems = languages.map((language, index) => ({
    label: language.name,
    value: language.name,
    key: index+1,
  }));

  const addLanguage = (value) => {
    if (value && !selectedLanguages.includes(value)) {
      setSelectedLanguages(prev => [...prev, value]);
    }
    setPickerValue(null);
  };

  const removeLanguage = (value) => {
    setSelectedLanguages(prev => prev.filter(lang => lang !== value));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginBottom: 6 }}>
      <RNPickerSelect
        require
        value={pickerValue}
        onValueChange={addLanguage}
        placeholder={{ label: "Add Additional Language", value: null }}
        items={languagePickerItems}
        activeOpacity={0.7}
        style={{
          inputIOS: {
            height: 48,
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderWidth: 1.5,
            borderColor: COLORS.lightgrey,
            borderRadius: 26,
            color: COLORS.secondary,
          },
        }}
      />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 16 }}>
        {selectedLanguages.map((language, index) => (
          <View key={index} style={{ 
            margin: 4, 
            flexDirection: 'row', 
            borderWidth: 1, 
            borderRadius: 16, paddingHorizontal: 8, paddingVertical: 4, backgroundColor:COLORS.primary}}>
            <Text style={{color: COLORS.white}}>{language}</Text>
            <TouchableOpacity onPress={() => removeLanguage(language)}>
              <Text style={{ marginLeft: 8, color: COLORS.white }}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default LanguagePicker;
