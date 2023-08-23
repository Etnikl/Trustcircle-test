import React from 'react';
import Toast from 'react-native-toast-message';

const CostumeToast = () => {
    return (
      <Toast />
    );
};

export default CostumeToast;

export const showToast = (title, message, type) => {
  Toast.show({
    text1: title,
    text2: message,
    type: type || 'success',
  });
};
