import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Calculadora = () => {
  const [visor, setVisor] = useState<string>("");
  const [numeros, setNumeros] = useState<string[]>([]);

  const limparVisor = () => {
    setVisor("");
  };

  const limparNumeros = () => {
    limparVisor();
    setNumeros([]);
  };

  const handleOperador = () => {
    setNumeros([...numeros, visor]);
  };

  const calcularResultado = () => {
    try {
      setVisor(eval(numeros.join(" ").trim()));
    } catch (err: any) {
      limparNumeros();
    }
  };

  const handleVisor = (num: string) => {
    setVisor(`${visor}${num}`);
    setNumeros([...numeros, num]);
  };

  type PropsButton = {
    children: string;
    act?: boolean;
  };

  const CalcButton = ({ children, act }: PropsButton) => {
    return (
      <TouchableOpacity
        style={
          !act
            ? buttonStyle.button
            : { ...buttonStyle.button, backgroundColor: "#e67e22" }
        }
        onPress={() => {
          if (children == "C") {
            limparNumeros();
            return;
          }

          if (children == "=") {
            console.log(numeros.join(""));
            calcularResultado();
            return;
          }

          if (act) {
            handleVisor(children);
            limparVisor();
            return;
          }

          handleVisor(children);
          //setNumeros([...numeros, `${visor}${children}`]);
        }}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={style.visor}>
        <Text style={style.numeros}>{visor}</Text>
      </View>

      <View style={buttonStyle.linhas}>
        <CalcButton>7</CalcButton>
        <CalcButton>8</CalcButton>
        <CalcButton>9</CalcButton>
        <CalcButton act={true}>+</CalcButton>
      </View>
      <View style={buttonStyle.linhas}>
        <CalcButton>4</CalcButton>
        <CalcButton>5</CalcButton>
        <CalcButton>6</CalcButton>
        <CalcButton act={true}>-</CalcButton>
      </View>
      <View style={buttonStyle.linhas}>
        <CalcButton>1</CalcButton>
        <CalcButton>2</CalcButton>
        <CalcButton>3</CalcButton>
        <CalcButton act={true}>/</CalcButton>
      </View>
      <View style={buttonStyle.linhas}>
        <CalcButton act={true}>C</CalcButton>
        <CalcButton>0</CalcButton>
        <CalcButton>.</CalcButton>
        <CalcButton act={true}>=</CalcButton>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  visor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "grey",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    height: "20%",
    width: "100%",
  },
  numeros: {
    marginRight: 20,
    fontSize: 30,
  },
});

const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    padding: 20,
    fontWeight: "bold",
    width: "25%",
    alignItems: "center",
  },
  linhas: {
    flexDirection: "row",
  },
});
