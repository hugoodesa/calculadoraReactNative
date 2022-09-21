import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import topo from "../../../assets/SpaceImages/space1.jpg";

type Props = {
  servico: string;
  fundo: any;
};

export const Topo = ({ servico, fundo }: Props) => {
  return (
    <>
      <Image source={topo} style={style.container} />
      <Text style={style.title}>{servico}</Text>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    color: "white",
    width: "100%",
    height: "25%",
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "bold",
    padding: 16,
    color: "white",
  },
});
