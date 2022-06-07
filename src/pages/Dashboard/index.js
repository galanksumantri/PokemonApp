import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { AppHeader, Slider, Button } from '../../component'

export default function Dashboard({navigation}) {
  return (
    <View>
      <AppHeader 
        title="PokeDex" titleAlign="center"
        leftText="Home" bgColor="white"
        rightText="Go To PokeBag" onRightPress={() => navigation.navigate('Detail')}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>TestComponent</Text>
        <Button
          bgColor="white"
          width="0.3"
          height="0.05" 
          title="Testing"
        />
      </View>
      <Slider 
        bgRightColor="yellow"
        bgLeftColor="yellow"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // width: '100%',
    // height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
})
