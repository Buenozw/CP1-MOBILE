import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaskedTextInput } from "react-native-mask-text";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [rm, setRm] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    async function carregarDados() {
      const dados = await AsyncStorage.getItem("usuario");

      if (dados) {
        const usuario = JSON.parse(dados);

        setNome(usuario.nome);
        setRm(usuario.rm);
        setTelefone(usuario.telefone);
        setCpf(usuario.cpf);
      }
    }
    carregarDados();
  }, []);

  const salvar = async () => {
    if (!nome || !rm || !telefone || !cpf) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const usuario = { nome, rm, telefone, cpf };
    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
    navigation.navigate("Perfil", usuario);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput placeholder="RM"
        value={rm}
        onChangeText={setRm}
        style={styles.input}
        keyboardType="numeric"
      />

      <MaskedTextInput mask="(99) 99999-9999"
        placeholder="Telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        style={styles.input}
      />

      <MaskedTextInput mask="999.999.999-99"
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        style={styles.input}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  }
});