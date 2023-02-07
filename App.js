import { useState } from 'react';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  text1: {
    color: 'black',
    fontSize: 20
  },
  main: {
    backgroundColor: 'white',
    height: '100vh',    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 20,
    margin: 10,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    color: 'gray',
  }
});

const MyApp = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const changeText = (text) => {
    setEmail(text)
  };

  const changeSenha = (text) => {
    setSenha(text)
  };

  const PressButon = () => {
    console.log(email)
    console.log(senha)
  }

  return (
    <View style={styles.main}>
      <Text style={styles.text1}>Welcome to chat App</Text>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={changeText}
        placeholder="E-mail"
      />
      <TextInput 
        style={styles.input}
        value={senha}
        onChangeText={changeSenha}
        placeholder="Senha"
        secureTextEntry
      />
      <Button
        title="login"
        color="#483d8b"
        accessibilityLabel="Botão de login"
        onPress={PressButon}
      />
    </View>
  );
};

export default MyApp;
