import { FlatList, Alert, View } from 'react-native';
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
        console.log( 'This alert was dismissed by tapping outside of the alert dialog.'),
    },
  )
}

export default function PokeBag() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(val => setdata(val.data.results))
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={{flex: 1}}>
      <AppHeader 
        leftText="Back" bgColor="white" onLeftPress={() => navigation.navigate('Dashboard')}
        rightText="PokeBag" disabled
      />
      <FlatList
        data={data}
        renderItem={({item}) => <Card title={item.name} onLongPress={longPress} />}
        numColumns={2}
        // keyExtractor={item => item.name}
      />
    </View>
  )
}