import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { Detalhes } from '../components/detalhes';
import { Topo } from '../components/topo';
import { trip } from '../mocks';
import { items } from '../mocks/items';

export const Cesta = () => {
  const { topo, detalhes } = trip;

  return (
    <>
      <FlatList
        style={style.list}
        data={items}
        keyExtractor={(item) => item.descricao}
        renderItem={({ item }) => (
          <View style={style.view}>
            <Image source={item.img} />
            <Text style={style.container}>{item.descricao}</Text>
          </View>
        )}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <Detalhes {...detalhes} />
            </>
          );
        }}
      />
    </>
  );
};

const style = StyleSheet.create({
  list: {
    flex: 1,
    margin: 10,
  },
  container: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    fontSize: 15,
    width: "85%",
    alignSelf: "center",
    padding: 20,
    fontWeight: "bold",
  },
  view: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});
