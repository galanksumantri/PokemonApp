import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppHeader from '../../component/Header';

export default function Detail({navigation}) {
  return (
    <View>
      <AppHeader 
        title="Pokemon Detail" titleAlign="center"
        leftText="Back" onLeftPress={() => navigation.navigate('Dashboard')}
        rightButton="Catch" width="0.2" height="0.05" bgColor="white"
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>TestComponent</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
})