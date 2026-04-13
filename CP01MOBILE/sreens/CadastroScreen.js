import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState("");

  function enviarFormulario() {
    const dados = { nome, curso, disciplina, descricao };
    navigation.navigate("Perfil", { dados });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Cadastro CP01</Text>

          <View style={styles.campo}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#8f98a0ff"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Curso</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu curso"
              placeholderTextColor="#9aa0a6"
              value={curso}
              onChangeText={setCurso}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Disciplina</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a disciplina"
              placeholderTextColor="#9aa0a6"
              value={disciplina}
              onChangeText={setDisciplina}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={[styles.input, styles.inputDescricao]}
              placeholder="Fale um pouco sobre você(2 a 3 linhas)"
              placeholderTextColor="#9aa0a6"
              value={descricao}
              onChangeText={setDescricao}
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.botao} onPress={enviarFormulario}>
            <Text style={styles.textoBotao}>Enviar Cadastro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});