import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Surface, Title } from 'react-native-paper'
import {COLORS} from '../../themes'
import Button from '../Button'

function AppHeader({ style, title, leftText, leftButton, rightText, rightButton , onLeftPress, onRightPress, bgColor, titleAlign, width, height, disabled }) {

	function LeftView() {
  return <View style={styles.view}>
			{leftText && <TouchableOpacity onPress={onLeftPress}>
				<Text style={{ color: bgColor, textAlign: titleAlign }}>{leftText}</Text>
			</TouchableOpacity>}
			{leftButton && <Button title={leftButton} bgColor={bgColor} onPress={onLeftPress} width={width} height={height} disabled={disabled} />}
		</View>
}

	function TitleView() {
  return <View style={styles.titleView}>
			<Title style={{ color: bgColor, textAlign: titleAlign }}>{title}</Title>
		</View>
}

	function RightView() {
  return <View style={[styles.view, styles.rightView]}>
			{rightText && <TouchableOpacity onPress={onRightPress}>
				<Text style={{ color: bgColor, textAlign: titleAlign }}>{rightText}</Text>
			</TouchableOpacity>}
			{rightButton && <Button title={rightButton} bgColor={bgColor} onPress={onRightPress} width={width} height={height} disabled={disabled} />}
		</View>
}

	return (
		<Surface style={[styles.header, style, { backgroundColor: "orange" }]}>
			<LeftView />
			<TitleView />
			<RightView />
		</Surface>
	)
}

export default AppHeader

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