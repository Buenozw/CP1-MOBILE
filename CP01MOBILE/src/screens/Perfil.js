import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Perfil({ route }) {
  const { nome, rm, telefone, cpf } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>

      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.foto}
      />
      <Text>Nome: {nome}</Text>
      <Text>RM: {rm}</Text>
      <Text>Telefone: {telefone}</Text>
      <Text>CPF: {cpf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  }
});