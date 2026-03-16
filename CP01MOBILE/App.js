import React, { useState, useEffect } from "react";
import {SafeAreaView,View,Text,TextInput,Button,StyleSheet,ScrollView, TouchableOpacity } from "react-native";

export default function App() {

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState("");

  const [dadosEnviados, setDadosEnviados] = useState(null);

  useEffect(() => {
    console.log("Aplicativo iniciado!");
  }, []);

  function enviarFormulario() {
    const dados = {
      nome,
      curso,
      disciplina,
      descricao
    };

    setDadosEnviados(dados);
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

        {dadosEnviados && (
          <View style={styles.cardResultado}>
            <Text style={styles.resultadoTitulo}>Dados enviados</Text>

            <View style={styles.resultadoLinha}>
              <Text style={styles.resultadoLabel}>Nome:</Text>
              <Text style={styles.resultadoTexto}>{dadosEnviados.nome}</Text>
            </View>

            <View style={styles.resultadoLinha}>
              <Text style={styles.resultadoLabel}>Curso:</Text>
              <Text style={styles.resultadoTexto}>{dadosEnviados.curso}</Text>
            </View>

            <View style={styles.resultadoLinha}>
              <Text style={styles.resultadoLabel}>Disciplina:</Text>
              <Text style={styles.resultadoTexto}>
                {dadosEnviados.disciplina}
              </Text>
            </View>

            <View style={styles.resultadoLinha}>
              <Text style={styles.resultadoLabel}>Descrição:</Text>
              <Text style={styles.resultadoTexto}>
                {dadosEnviados.descricao}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f7",
  },

  scroll: {
    padding: 20,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 22,
    lineHeight: 20,
  },

  campo: {
    marginBottom: 16,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#dbe3ee",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#111827",
  },

  inputDescricao: {
    minHeight: 110,
  },

  botao: {
    backgroundColor: "#111827",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  cardResultado: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 22,
    borderLeftWidth: 6,
    borderLeftColor: "#111827",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  resultadoTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 18,
  },

  resultadoLinha: {
    marginBottom: 12,
  },

  resultadoLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 4,
  },

  resultadoTexto: {
    fontSize: 15,
    color: "#4b5563",
    lineHeight: 22,
  },
});