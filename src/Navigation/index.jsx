import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SobreScreen } from "../screens/SobreScreen";
import { Local } from "../screens/LocalScreen";
import { Configuracao } from "../screens/ConfiguraScreen";


const Tab = createBottomTabNavigator();
export const RootNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={HomeScreen}/>
            <Tab.Screen name={"Sobre"} component={SobreScreen} />
            <Tab.Screen name={"Local"} component={Local} />
            <Tab.Screen name={"Configuracao"}  component={Configuracao} co />
        </Tab.Navigator>
        
        
    );
};