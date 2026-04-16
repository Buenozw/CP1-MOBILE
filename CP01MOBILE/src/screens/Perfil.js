import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Perfil({ route }) {
  const { nome, rm, telefone, cpf } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>

      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/202713469?s=400&u=42170edb8f870f09df2b03028113cdcebfdb0148&v=4" }}
        style={styles.foto}
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome Completo</Text>
        <Text style={styles.value}>{nome}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>RM</Text>
        <Text style={styles.value}>{rm}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.value}>{telefone}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>CPF</Text>
        <Text style={styles.value}>{cpf}</Text>
      </View>
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
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: 'center',
    marginBottom: 32,
    borderWidth: 3,
    borderColor: '#1E3A8A',
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  infoContainer: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#1E3A8A',
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E3A8A',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
