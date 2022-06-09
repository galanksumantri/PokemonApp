import { FlatList, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { AppHeader, Slider, Card } from '../../component'
import * as navigation from '../../router/RootNavigation';

export default function Dashboard() {
  const [data, setdata] = useState(null);
  const [offset, setoffset] = useState(0);
  const limit = useState(20);

  const next = () => {
    if (offset <= 228) {
      setoffset(offset + limit);
      console.log('next');
    } else {
      setoffset(offset);
    }
  };
  const previous = () => {
    if (offset >= 20) {
      setoffset(offset - limit);
      console.log('back');
    }
  };

  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then(val => setdata(val.data.results))
      .then(() => console.log(data))
      .catch(e => console.log(e));
  }, [offset]);

  return (
    <View style={{flex:1}}>
       <AppHeader 
         title="PokeDex" titleAlign="center"
         leftText="Home" bgColor="white" onLeftPress={() => navigation.navigate('PokeBag')}
         rightText="Go To PokeBag" onRightPress={() => navigation.navigate('Detail')}
       />
      <FlatList
        data={data}
        renderItem={({item}) => <Card title={item.name} />}
        numColumns={2}
      />
      <Slider onLeftPress={previous} onRightPress={next} bgRightColor="yellow" bgLeftColor="yellow" />
    </View>
  );
};
