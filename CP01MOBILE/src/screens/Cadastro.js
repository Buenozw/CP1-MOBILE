import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
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
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput 
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholderTextColor="#666"
      />

      <TextInput 
        placeholder="RM"
        value={rm}
        onChangeText={setRm}
        style={styles.input}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />

      <MaskedTextInput 
        mask="(99) 99999-9999"
        placeholder="Telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        style={styles.input}
        placeholderTextColor="#666"
      />

      <MaskedTextInput 
        mask="999.999.999-99"
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        style={styles.input}
        placeholderTextColor="#666"
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 24,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#1E3A8A',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 16,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  botao: {
    backgroundColor: '#1E3A8A',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
