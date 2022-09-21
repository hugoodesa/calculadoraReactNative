import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { items } from '../../mocks/items';

export const Lista = () => {
  return (
    <FlatList
      style={style.list}
      keyExtractor={(item) => item.descricao}
      data={items}
      renderItem={({ item }) => (
        <View style={style.view}>
          <Image source={item.img} />
          <Text style={style.container}>{item.descricao}</Text>
        </View>
      )}
    />
  );
};

const style = StyleSheet.create({
  list: {
    minHeight: "70%",
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
