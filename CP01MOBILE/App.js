import React, { useState, useEffect } from "react";
import {SafeAreaView,View,Text,TextInput,Button,StyleSheet} from "react-native";

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

      <Text style={styles.titulo}>Formulário de Cadastro</Text>

      <View style={styles.form}>

        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text>Curso</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu curso"
          value={curso}
          onChangeText={setCurso}
        />

        <Text>Disciplina</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a disciplina"
          value={disciplina}
          onChangeText={setDisciplina}
        />

        <Text>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Fale um pouco sobre você"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        <Button title="Enviar" onPress={enviarFormulario} />

      </View>

      {dadosEnviados && (
        <View style={styles.resultado}>
          <Text style={styles.subtitulo}>Dados enviados:</Text>

          <Text>Nome: {dadosEnviados.nome}</Text>
          <Text>Curso: {dadosEnviados.curso}</Text>
          <Text>Disciplina: {dadosEnviados.disciplina}</Text>
          <Text>Descrição: {dadosEnviados.descricao}</Text>
        </View>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  form: {
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },

  resultado: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  }

});