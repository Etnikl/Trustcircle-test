import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import COLORS from "../constants/colors";
import languages from '../assets/JSON/languages.json';
import {CustomPicker2} from "./CostumePicker";

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginBottom: 0 }}>
      <View style={{
        flex: 1,
        width: '100%'
      }}>
        <CustomPicker2
                ref={null}
                options={languagePickerItems}
                onValueChange={addLanguage}
                placeholder="Add Additonal Language"
                modaltitle="Add Additonal Language"
        />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', flex:1,}}>
          {selectedLanguages.map((language, index) => (
            <View key={index} style={{ 
              margin: 4, 
              flexDirection: 'row', 
              borderRadius: 16, 
              paddingHorizontal: 10,
              paddingVertical: 5, 
              backgroundColor:COLORS.primary,
              }}>
              <Text style={{color: COLORS.white}}>{language}</Text>
              <TouchableOpacity onPress={() => removeLanguage(language)}>
                <Text style={{ marginLeft: 8, color: COLORS.white }}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default LanguagePicker;
