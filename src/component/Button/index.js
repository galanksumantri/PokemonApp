import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import {COLORS} from '../../themes'

function Button({ onPress, disabled, title, bgColor, width, height, style, styleText }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <TouchableOpacity 
      style={[ styles.container, style, { 
        backgroundColor: bgColor,
        width: windowWidth * width || "100%" ,
        height: windowHeight * height || "15%",
      }]} 
      onPress={onPress} 
      disabled={disabled}>
        <Text style={{ color:styleText || COLORS.primary }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(Button);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#FBC263',
    fontSize: 14,
  },
});
