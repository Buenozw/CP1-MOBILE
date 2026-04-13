import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CadastroScreen from "../src/screens/CadastroScreen";
import PerfilScreen from "../src/screens/PerfilScreen";

const Tab = createBottomTabNvaigator()

export default function TabRoutes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="CadastroScreen" component={CadastroScreen}/>
            <Tab.Screen name="PerfilScreen" component={PerfilScreen}/>
        </Tab.Navigator>
    )
}