
import { Image, ImageBackground, StyleSheet, View, Text, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { useState } from "react";

import axios from 'axios';

export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  async function consultarCep() {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        setJsonCep(resposta.data);
        // console.log(jsonCep.logradouro);
      } else {
        alert("o cep está incorreto. Digite com 8 números!");
      }
    }
    catch (error) {
      console.log(error)
    }

    // alert("entrouuuu!");
  }

  return (
    <>
      <ImageBackground source={require('../assets/images/image 2.png')} style={styles.image2}>
        {/* 1. Logo + imagem de fundo */}
        <Image source={require('../assets/images/Group 6.png')} style={styles.logo}>
        </Image>
      </ImageBackground>
      {/* 2. Campo de Consulta*/}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          {/* 2.1. Título */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>

          {/* 2.2 Input */}
          <Input
            valorCep={cep}
            onChangeValorCep={e => { setCep(e); console.log(e); }} />
          {/* 2.3. Botão */}
          <Botao tituloBotao='Consultar' onPress={consultarCep} />
          {/* 2.3. Card de informações*/}
          <Card
            cep={jsonCep.cep}
            logradouro={ jsonCep.logradouro}
            bairro={jsonCep.bairro }
            uf={jsonCep.uf }
            estado={ jsonCep.estado}
            região={jsonCep.região }/>
        </View>
      </ScrollView>

    </>


  );
}
//Estilos dos meus componentes:
const styles = StyleSheet.create({
  image2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  logo: {
    width: 100,
    height: 120
  },
  container: {

    alignItems: 'center',
    width: "100%",
    minHeight: "100%",
    gap: 40,

  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    height: '100%',
    paddingBottom: 80,
  },
  titulo: {
    fontSize: 25
  }
})
