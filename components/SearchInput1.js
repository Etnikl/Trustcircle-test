import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';

const SearchDropdown = ({
  data,
  label,
  leftSource,
  rightSource,
  onPressRight,
  notificationCount,
  height = 25,
  width = 25,
  textStyle,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigation = useNavigation();

  const handleInputChange = (value) => {
    setInputValue(value);
    if (value === '') {
      setFilteredResults([]);
    } else {
      const results = data.filter((item) =>
        item.title.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
    }
  };

  const handleSelectResult = (value) => {
    setInputValue(value);
    setFilteredResults([]);
  };


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {leftSource && (
          <ImageBackground source={leftSource} style={{ width: height, height: width, marginLeft: 15 }} />
        )}
        <TextInput
          style={[styles.input]}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder={label}
        />
        {rightSource && (
          <TouchableOpacity onPress={onPressRight} style={{ marginRight: 15 }}>
            <ImageBackground
              source={rightSource}
              style={{ width: height, height: width }}
            />
          </TouchableOpacity>
        )}
      </View>
      {filteredResults.length > 0 && (
        <FlatList
          data={filteredResults}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem} onPress={() => handleSelectResult(item.title.name)}>
              <ImageBackground source={imageMap[item.profilePicture]} style={{ width: 40, height: 40, marginRight: 8 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.listItemText}>{item.title.name}</Text>
                <Text style={styles.listItemText}>{item.title.profession}</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate(item.link)}>
                <ImageBackground source={imageMap[item.rightIcon]} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 26,
    borderColor: COLORS.lightgrey,
  },
  input: {
    flex: 1,
    height: 48,
    marginLeft: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  listItemText: {
    fontSize: 16,
  },
});

export default SearchDropdown;
