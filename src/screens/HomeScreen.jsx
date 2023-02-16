import { Text, View, Button, } from "react-native"
import { styles } from "../lib/style"
import { Image } from "react-native"
import React from "react"

export const HomeScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>

        <Image
        source={{uri: require("../lib/img/logo.png") }}
        style={{width: 200, height: 200,marginTop: 2 }} />

            <Text>Olá Seja Bem-Vindo ao Appmeiras
                #segueOLider
            </Text>
            <Button title="Navegar"
            onPress={()=>navigation.navigate("Sobre")}/>
        </View>
    )
}