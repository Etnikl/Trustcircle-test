import * as FileSystem from 'expo-file-system';

export const writeDataToFile = async (data, path) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await FileSystem.writeAsStringAsync(path, jsonData);
    } catch (error) {
        console.error("Error writing data to file:", error);
    }
};

export const readDataFromFile = async (path) => {
    try {
        const jsonData = await FileSystem.readAsStringAsync(path);
        return JSON.parse(jsonData);
    } catch (error) {
        console.error("Error reading data from file:", error);
        return null;
    }
};