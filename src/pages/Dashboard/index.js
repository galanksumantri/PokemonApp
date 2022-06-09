import { FlatList, StyleSheet, View } from 'react-native';
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
  const back = () => {
    if (offset >= 20) {
      setoffset(offset - limit);
      console.log('back');
    }
  };

  useEffect(() => {
    Axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
    )
      .then(val => setdata(val.data.results))
      .then(() => console.log(data))
      .catch(e => console.log(e));
  }, [offset]);

  const renderItem = ({item}) => <Card title={item.name} />;

  return (
    <View style={styles.container}>
       <AppHeader 
         title="PokeDex" titleAlign="center"
         leftText="Home" bgColor="white" onLeftPress={() => navigation.navigate('PokeBag')}
         rightText="Go To PokeBag" onRightPress={() => navigation.navigate('Detail')}
       />
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
      />
      <Slider onLeftPress={back} onRightPress={next} bgRightColor="yellow" bgLeftColor="yellow" />
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

