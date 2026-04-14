import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cadastro from "../src/screens/Cadastro";
import Perfil from "../src/screens/Perfil";

const Tab = createBottomTabNvaigator()

export default function TabRoutes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cadastro" component={Cadastro}/>
            <Tab.Screen name="Perfil" component={Perfil}/>
        </Tab.Navigator>
    )
}