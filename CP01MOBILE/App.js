import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native-web";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from './routes'
import AppNavigator from "./src/navigation/AppNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return <AppNavigator />;
}
