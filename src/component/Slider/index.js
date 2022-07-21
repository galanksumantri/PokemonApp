import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Surface, Title } from 'react-native-paper'
import {COLORS} from '../../themes'
import Button from '../Button';

function Slider({bgLeftColor, bgRightColor, onLeftPress, onRightPress, number}) {

	function Previous() {
  return <View style={styles.view}>
		<Button
			bgColor={bgLeftColor}
			onPress={onLeftPress}
			width="0.3"
			height="0.05" 
			title="Sebelumnya"
		/>
	</View>
}
	function PageNumber() {
  return <View style={styles.titleView}>
		<Title style={{ textAlign: "center" }}>{number}</Title>
	  </View>
}
	function Next() {
  return <View style={[styles.view, styles.rightView]}>
		<Button
			bgColor={bgRightColor}
			onPress={onRightPress}
			width="0.3"
			height="0.05" 
			title="Selanjutnya"
		/>
	  </View>
}

	return (
		  <Surface style={[styles.header, { backgroundColor: COLORS.primary }]}>
			<Previous />
			<PageNumber />
			<Next />
		  </Surface>
	)
}

export default Slider

const styles = StyleSheet.create({
    header: {
      height: 50,
      elevation: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: COLORS.black,
    },
    view: {
      marginHorizontal: 16,
      alignItems: 'center',
      flexDirection: 'row',
    },
    titleView: {
      flex: 1,
    },
    rightView: {
      justifyContent: 'flex-end',
    },
  })