import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { pokeBall } from '../../asset'

export default function Splash({navigation}) {

  useEffect(() => {
    setTimeout( () => {
      navigation.replace('Login')
    }, 2000)
  }, [navigation])

  return (
    <View style={styles.backround}>
      <Image source={pokeBall} style={styles.logo} />
        <View style={styles.container}>
          <Text style={styles.text}>PokemonGo Lite</Text>
          <Text style={styles.text1}>Galang Sumantri</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backround: {
    backgroundColor: '#FFF',
    flex: 1
  },
  logo: {
    flex: 4 / 5,
    width: "100%",
    marginVertical: 90,
  },
  text: {
    textAlign: 'center',
    color: 'orange',
    fontSize: 24, 
  },
  text1: {
    textAlign: 'center',
    color: 'green',
    fontSize: 20, 
  },
  container: {
    paddingBottom: '30%'
  }
})