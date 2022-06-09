import React from 'react';
import { Image, Text, StyleSheet, Pressable } from 'react-native';
import { pokeBall } from '../../asset';

export default function Card({title, onPress, onLongPress}) {
  return (
    <Pressable 
      onLongPress={onLongPress} 
      onPress={onPress} style={({pressed})=>[
        { opacity: pressed ? 0.5 : 2 },
        styles.listPoke
      ]}>
      <Image
        source={pokeBall}
        style={styles.icon}
      />
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listPoke: {
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
    marginRight: 8,
    borderRadius: 8,
    flex: 1 / 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
})