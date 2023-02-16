import { Text, View, Button, } from "react-native"
import { styles } from "../lib/style"
export const HomeScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>

            <Text>Hello World</Text>
            <Button title="Navegar"
            onPress={()=>navigation.navigate("Sobre")}/>
        </View>
    )
}