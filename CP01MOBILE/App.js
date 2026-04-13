import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native-web";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from './src/routes'
import CadastroScreen from "./screens/CadastroScreen";
import PerfilScreen from "./screens/PerfilScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{ title: "Perfil do Aluno" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}