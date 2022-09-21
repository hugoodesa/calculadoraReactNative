import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Detalhes = {
  logo?: any;
  empresa: string;
  subtitulo: string;
  descricao: string;
  price: string;
  icon: any;
  botao: string;
};

export const Detalhes = ({
  descricao,
  empresa,
  price,
  subtitulo,
  icon,
  botao,
}: Detalhes) => {
  return (
    <>
      <View style={style.tripDescription}>
        <View style={style.logoTitulo}>
          <Image source={icon} />
          <Text style={style.text}>{empresa}</Text>
        </View>

        <Text style={style.subtitle}>{subtitulo}</Text>

        <Text>{descricao}</Text>

        <Text style={style.price}>Price : U$ {price}</Text>

        <TouchableOpacity style={style.botao}>
          <Text style={style.textoBotao}>{botao}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 26,
    color: "grey",
    fontWeight: "400",
    lineHeight: 42,
  },
  tripDescription: {
    margin: 10,
  },
  price: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
  },
  subtitle: {
    color: "grey",
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 50,
    marginRight: 10,
  },
  logoTitulo: {
    flexDirection: "row",
  },
  botao: {
    borderRadius: 5,
    padding: 15,
    backgroundColor: "blue",
    marginTop: 10,
  },
  textoBotao: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
