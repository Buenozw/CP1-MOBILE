import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CadastroScreen from "../src/screens/Cadastro";
import PerfilScreen from "../src/screens/Perfil";

const Tab = createBottomTabNvaigator()

export default function TabRoutes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="CadastroScreen" component={CadastroScreen}/>
            <Tab.Screen name="PerfilScreen" component={PerfilScreen}/>
        </Tab.Navigator>
    )
}