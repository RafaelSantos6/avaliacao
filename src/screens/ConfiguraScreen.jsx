import { Text, View, Button, } from "react-native"
import { ToggleButton } from "react-native-paper"
import { styles } from "../lib/style"
export const Configuracao = ({navigation}) =>{
    return (
        <View style={styles.container}>

            <Text>Pagina De Configuração</Text>
            <Button title="Windows" />
            ou
            <Button title="Linux" />
        </View>
    )
}