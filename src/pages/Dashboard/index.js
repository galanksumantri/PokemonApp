import { FlatList, View } from 'react-native';
import React, {useEffect, useState, useMemo, useCallback} from 'react';
import Axios from 'axios';
import { AppHeader, Slider, Card } from '../../component'
import * as navigation from '../../router/RootNavigation';

export default function Dashboard() {
  const [data, setdata] = useState(null);
  const [offset, setoffset] = useState(0);
  const limit = 18;
  const memo = useMemo(() => offset/limit+1, [offset,limit]);

  const next = () => {
    if (offset <= 228) {
      setoffset(offset + limit);
      console.log('next');
    } else {
      setoffset(offset);
    }
  };
  const previous = () => {
    if (offset >= 18) {
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
       {useCallback(
        <FlatList
          data={data}
          renderItem={({item}) => <Card title={item.name} />}
          numColumns={2}
        />,
        [data],
       )}
      <Slider onLeftPress={previous} number={memo} onRightPress={next} bgRightColor="yellow" bgLeftColor="yellow" />
    </View>
  );
};
