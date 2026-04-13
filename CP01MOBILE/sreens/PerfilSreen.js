import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

export default function PerfilScreen({ route }) {
  const { dados } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.cardResultado}>
          <Text style={styles.resultadoTitulo}>Perfil do Aluno</Text>

          <View style={styles.resultadoLinha}>
            <Text style={styles.resultadoLabel}>Nome:</Text>
            <Text style={styles.resultadoTexto}>{dados.nome}</Text>
          </View>

          <View style={styles.resultadoLinha}>
            <Text style={styles.resultadoLabel}>Curso:</Text>
            <Text style={styles.resultadoTexto}>{dados.curso}</Text>
          </View>

          <View style={styles.resultadoLinha}>
            <Text style={styles.resultadoLabel}>Disciplina:</Text>
            <Text style={styles.resultadoTexto}>{dados.disciplina}</Text>
          </View>

          <View style={styles.resultadoLinha}>
            <Text style={styles.resultadoLabel}>Descrição:</Text>
            <Text style={styles.resultadoTexto}>{dados.descricao}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});