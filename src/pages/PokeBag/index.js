import { FlatList, StyleSheet, View, Alert } from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { AppHeader, Card } from '../../component'
import * as navigation from '../../router/RootNavigation';

function longPress() {
  Alert.alert(
    'Warning',
    'are you sure want to delete ?',
    [
      {text: 'Yes', onPress: () => console.log('data has been deleted')},
      {text: 'No', onPress: () => console.log('cancel delete')},
    ],
    {
      cancelable: true,
      onDismiss: () =>
        console.log(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );
};

export default function PokeBag() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(val => setdata(val.data.results))
      .catch(e => console.log(e));
  }, []);

  const renderItem = ({item}) => <Card title={item.name} onLongPress={longPress} />;

  return (
    <View style={styles.container}>
      <AppHeader 
        leftText="Back" bgColor="white" onLeftPress={() => navigation.navigate('Dashboard')}
        rightText="PokeBag" disabled
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        // keyExtractor={item => item.name}
      />
    </View>
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
  container: {
    flex: 1,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  button1: {
    padding: 18,
    backgroundColor: 'orange',
    borderRadius: 8,
  },
  button2: {
    padding: 18,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});